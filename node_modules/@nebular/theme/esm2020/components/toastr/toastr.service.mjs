/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { patch } from '../cdk/overlay/overlay-service';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NB_TOASTR_CONFIG, NbToastrConfig } from './toastr-config';
import { NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-service";
import * as i2 from "../cdk/overlay/overlay-position";
import * as i3 from "../cdk/overlay/position-helper";
import * as i4 from "./toastr-config";
export class NbToastRef {
    constructor(toastContainer, toast) {
        this.toastContainer = toastContainer;
        this.toast = toast;
    }
    close() {
        this.toastContainer.destroy(this.toast);
    }
    onClose() {
        return this.toastInstance.destroy.asObservable();
    }
    onClick() {
        return this.toastInstance.toastClick.asObservable();
    }
}
export class NbToastContainer {
    constructor(position, containerRef, positionHelper) {
        this.position = position;
        this.containerRef = containerRef;
        this.positionHelper = positionHelper;
        this.toasts = [];
        this.toastDuplicateCompareFunc = (t1, t2) => {
            return t1.message === t2.message && t1.title === t2.title && t1.config.status === t2.config.status;
        };
    }
    get nativeElement() {
        return this.containerRef.location.nativeElement;
    }
    attach(toast) {
        if (toast.config.preventDuplicates && this.isDuplicate(toast)) {
            return undefined;
        }
        this.removeToastIfLimitReached(toast);
        const toastComponent = this.attachToast(toast);
        if (toast.config.destroyByClick) {
            this.subscribeOnClick(toastComponent, toast);
        }
        if (toast.config.duration) {
            this.setDestroyTimeout(toast);
        }
        this.prevToast = toast;
        const toastRef = new NbToastRef(this, toast);
        toastRef.toastInstance = toastComponent;
        return toastRef;
    }
    destroy(toast) {
        if (this.prevToast === toast) {
            this.prevToast = null;
        }
        this.toasts = this.toasts.filter((t) => t !== toast);
        this.updateContainer();
    }
    isDuplicate(toast) {
        return toast.config.duplicatesBehaviour === 'previous'
            ? this.isDuplicatePrevious(toast)
            : this.isDuplicateAmongAll(toast);
    }
    isDuplicatePrevious(toast) {
        return this.prevToast && this.toastDuplicateCompareFunc(this.prevToast, toast);
    }
    isDuplicateAmongAll(toast) {
        return this.toasts.some((t) => this.toastDuplicateCompareFunc(t, toast));
    }
    removeToastIfLimitReached(toast) {
        if (!toast.config.limit || this.toasts.length < toast.config.limit) {
            return;
        }
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            this.toasts.pop();
        }
        else {
            this.toasts.shift();
        }
    }
    attachToast(toast) {
        if (this.positionHelper.isTopPosition(toast.config.position)) {
            return this.attachToTop(toast);
        }
        else {
            return this.attachToBottom(toast);
        }
    }
    attachToTop(toast) {
        this.toasts.unshift(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.first;
    }
    attachToBottom(toast) {
        this.toasts.push(toast);
        this.updateContainer();
        return this.containerRef.instance.toasts.last;
    }
    setDestroyTimeout(toast) {
        setTimeout(() => this.destroy(toast), toast.config.duration);
    }
    subscribeOnClick(toastComponent, toast) {
        toastComponent.toastClick
            .pipe(filter(() => toast.config.destroyByClick), takeUntil(toastComponent.destroy))
            .subscribe(() => this.destroy(toast));
    }
    updateContainer() {
        patch(this.containerRef, { content: this.toasts, position: this.position });
    }
}
export class NbToastrContainerRegistry {
    constructor(overlay, positionBuilder, positionHelper, cfr, document) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.positionHelper = positionHelper;
        this.cfr = cfr;
        this.document = document;
        this.overlays = new Map();
    }
    get(position) {
        const logicalPosition = this.positionHelper.toLogicalPosition(position);
        const overlayWithContainer = this.overlays.get(logicalPosition);
        if (!overlayWithContainer || !this.existsInDom(overlayWithContainer.toastrContainer)) {
            if (overlayWithContainer) {
                overlayWithContainer.overlayRef.dispose();
            }
            this.instantiateContainer(logicalPosition);
        }
        return this.overlays.get(logicalPosition).toastrContainer;
    }
    instantiateContainer(position) {
        const toastrOverlayWithContainer = this.createContainer(position);
        this.overlays.set(position, toastrOverlayWithContainer);
    }
    createContainer(position) {
        const positionStrategy = this.positionBuilder.global().position(position);
        const ref = this.overlay.create({ positionStrategy });
        this.addClassToOverlayHost(ref);
        const containerRef = ref.attach(new NbComponentPortal(NbToastrContainerComponent, null, null, this.cfr));
        return {
            overlayRef: ref,
            toastrContainer: new NbToastContainer(position, containerRef, this.positionHelper),
        };
    }
    addClassToOverlayHost(overlayRef) {
        overlayRef.hostElement.classList.add('toastr-overlay-container');
    }
    existsInDom(toastContainer) {
        return this.document.body.contains(toastContainer.nativeElement);
    }
}
NbToastrContainerRegistry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrContainerRegistry, deps: [{ token: i1.NbOverlayService }, { token: i2.NbPositionBuilderService }, { token: i3.NbPositionHelper }, { token: i0.ComponentFactoryResolver }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbToastrContainerRegistry.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrContainerRegistry });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrContainerRegistry, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbOverlayService }, { type: i2.NbPositionBuilderService }, { type: i3.NbPositionHelper }, { type: i0.ComponentFactoryResolver }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
/**
 * The `NbToastrService` provides a capability to build toast notifications.
 *
 * @stacked-example(Showcase, toastr/toastr-showcase.component)
 *
 * `NbToastrService.show(message, title, config)` accepts three params, title and config are optional.
 *
 * ### Installation
 *
 * Import `NbToastrModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToastrModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `NbToastrService.show(...)` will render new toast and return `NbToastrRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: NbToastRef = this.toastrService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`.
 *
 * @stacked-example(Position, toastr/toastr-positions.component)
 *
 * `status` - coloring and icon of the toast.
 * Default is `basic`.
 *
 * @stacked-example(Status, toastr/toastr-statuses.component)
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * @stacked-example(Duration, toastr/toastr-duration.component)
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 *
 * @stacked-example(Destroy by click, toastr/toastr-destroy-by-click.component)
 *
 * `preventDuplicates` - don't create new toast if it has the same title, message and status.
 * Default is false.
 *
 * @stacked-example(Prevent duplicates, toastr/toastr-prevent-duplicates.component)
 *
 * `duplicatesBehaviour` - determines how to treat the toasts duplication.
 * Compare with the previous message `previous`
 * or with all visible messages `all`.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-prevent-duplicates-behaviour.component)
 *
 * `limit` - the number of visible toasts in the toast container. The number of toasts is unlimited by default.
 *
 * @stacked-example(Prevent duplicates behaviour , toastr/toastr-limit.component)
 *
 * `hasIcon` - if true then render toast icon.
 * `icon` - you can pass icon class that will be applied into the toast.
 *
 * @stacked-example(Has icon, toastr/toastr-icon.component)
 * */
export class NbToastrService {
    constructor(globalConfig, containerRegistry) {
        this.globalConfig = globalConfig;
        this.containerRegistry = containerRegistry;
    }
    /**
     * Shows toast with message, title and user config.
     * */
    show(message, title, userConfig) {
        const config = new NbToastrConfig({ ...this.globalConfig, ...userConfig });
        const container = this.containerRegistry.get(config.position);
        const toast = { message, title, config };
        return container.attach(toast);
    }
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message, title, config) {
        return this.show(message, title, { ...config, status: 'success' });
    }
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message, title, config) {
        return this.show(message, title, { ...config, status: 'info' });
    }
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message, title, config) {
        return this.show(message, title, { ...config, status: 'warning' });
    }
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message, title, config) {
        return this.show(message, title, { ...config, status: 'primary' });
    }
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message, title, config) {
        return this.show(message, title, { ...config, status: 'danger' });
    }
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message, title, config) {
        return this.show(message, title, { ...config, status: 'basic' });
    }
    /**
     * Shows control toast with message, title and user config.
     * */
    control(message, title, config) {
        return this.default(message, title, { ...config, status: 'control' });
    }
}
NbToastrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrService, deps: [{ token: NB_TOASTR_CONFIG }, { token: NbToastrContainerRegistry }], target: i0.ɵɵFactoryTarget.Injectable });
NbToastrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbToastrService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i4.NbToastrConfig, decorators: [{
                    type: Inject,
                    args: [NB_TOASTR_CONFIG]
                }] }, { type: NbToastrContainerRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9hc3RyL3RvYXN0ci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQTBDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0YsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sd0JBQXdCLENBQUM7QUFDekUsT0FBTyxFQUFvQixLQUFLLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFFbEQsTUFBTSxPQUFPLFVBQVU7SUFHckIsWUFBb0IsY0FBZ0MsRUFBVSxLQUFjO1FBQXhELG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVM7SUFBRyxDQUFDO0lBRWhGLEtBQUs7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLFlB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QUFPLENBQUMsT0FBTyxFQUFFLEtBQU0sRUFBRSxNQUFnQztRQUN2RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OzRHQS9EVSxlQUFlLGtCQUVoQixnQkFBZ0IsYUFDSyx5QkFBeUI7Z0hBSDdDLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7MEJBR04sTUFBTTsyQkFBQyxnQkFBZ0I7OEJBQ0sseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iT3ZlcmxheVJlZiB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJPdmVybGF5U2VydmljZSwgcGF0Y2ggfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJQb3NpdGlvbkJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbiwgTmJHbG9iYWxQb3NpdGlvbiwgTmJQb3NpdGlvbkhlbHBlciB9IGZyb20gJy4uL2Nkay9vdmVybGF5L3Bvc2l0aW9uLWhlbHBlcic7XG5pbXBvcnQgeyBOYlRvYXN0ckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3RyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkJfVE9BU1RSX0NPTkZJRywgTmJUb2FzdHJDb25maWcgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xuaW1wb3J0IHsgTmJUb2FzdCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgTmJUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBOYlRvYXN0UmVmIHtcbiAgdG9hc3RJbnN0YW5jZTogTmJUb2FzdENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvYXN0Q29udGFpbmVyOiBOYlRvYXN0Q29udGFpbmVyLCBwcml2YXRlIHRvYXN0OiBOYlRvYXN0KSB7fVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMudG9hc3RDb250YWluZXIuZGVzdHJveSh0aGlzLnRvYXN0KTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMudG9hc3RJbnN0YW5jZS5kZXN0cm95LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgb25DbGljaygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy50b2FzdEluc3RhbmNlLnRvYXN0Q2xpY2suYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5iVG9hc3RDb250YWluZXIge1xuICBwcm90ZWN0ZWQgdG9hc3RzOiBOYlRvYXN0W10gPSBbXTtcbiAgcHJvdGVjdGVkIHByZXZUb2FzdDogTmJUb2FzdDtcblxuICBnZXQgbmF0aXZlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyUmVmOiBDb21wb25lbnRSZWY8TmJUb2FzdHJDb250YWluZXJDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBwb3NpdGlvbkhlbHBlcjogTmJQb3NpdGlvbkhlbHBlcixcbiAgKSB7fVxuXG4gIGF0dGFjaCh0b2FzdDogTmJUb2FzdCk6IE5iVG9hc3RSZWYge1xuICAgIGlmICh0b2FzdC5jb25maWcucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5pc0R1cGxpY2F0ZSh0b2FzdCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVUb2FzdElmTGltaXRSZWFjaGVkKHRvYXN0KTtcbiAgICBjb25zdCB0b2FzdENvbXBvbmVudDogTmJUb2FzdENvbXBvbmVudCA9IHRoaXMuYXR0YWNoVG9hc3QodG9hc3QpO1xuXG4gICAgaWYgKHRvYXN0LmNvbmZpZy5kZXN0cm95QnlDbGljaykge1xuICAgICAgdGhpcy5zdWJzY3JpYmVPbkNsaWNrKHRvYXN0Q29tcG9uZW50LCB0b2FzdCk7XG4gICAgfVxuXG4gICAgaWYgKHRvYXN0LmNvbmZpZy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5zZXREZXN0cm95VGltZW91dCh0b2FzdCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2VG9hc3QgPSB0b2FzdDtcblxuICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IE5iVG9hc3RSZWYodGhpcywgdG9hc3QpO1xuICAgIHRvYXN0UmVmLnRvYXN0SW5zdGFuY2UgPSB0b2FzdENvbXBvbmVudDtcblxuICAgIHJldHVybiB0b2FzdFJlZjtcbiAgfVxuXG4gIGRlc3Ryb3kodG9hc3Q6IE5iVG9hc3QpIHtcbiAgICBpZiAodGhpcy5wcmV2VG9hc3QgPT09IHRvYXN0KSB7XG4gICAgICB0aGlzLnByZXZUb2FzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy50b2FzdHMgPSB0aGlzLnRvYXN0cy5maWx0ZXIoKHQpID0+IHQgIT09IHRvYXN0KTtcbiAgICB0aGlzLnVwZGF0ZUNvbnRhaW5lcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRHVwbGljYXRlKHRvYXN0OiBOYlRvYXN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvYXN0LmNvbmZpZy5kdXBsaWNhdGVzQmVoYXZpb3VyID09PSAncHJldmlvdXMnXG4gICAgICA/IHRoaXMuaXNEdXBsaWNhdGVQcmV2aW91cyh0b2FzdClcbiAgICAgIDogdGhpcy5pc0R1cGxpY2F0ZUFtb25nQWxsKHRvYXN0KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0R1cGxpY2F0ZVByZXZpb3VzKHRvYXN0OiBOYlRvYXN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJldlRvYXN0ICYmIHRoaXMudG9hc3REdXBsaWNhdGVDb21wYXJlRnVuYyh0aGlzLnByZXZUb2FzdCwgdG9hc3QpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRHVwbGljYXRlQW1vbmdBbGwodG9hc3Q6IE5iVG9hc3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50b2FzdHMuc29tZSgodCkgPT4gdGhpcy50b2FzdER1cGxpY2F0ZUNvbXBhcmVGdW5jKHQsIHRvYXN0KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9hc3REdXBsaWNhdGVDb21wYXJlRnVuYyA9ICh0MTogTmJUb2FzdCwgdDI6IE5iVG9hc3QpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdDEubWVzc2FnZSA9PT0gdDIubWVzc2FnZSAmJiB0MS50aXRsZSA9PT0gdDIudGl0bGUgJiYgdDEuY29uZmlnLnN0YXR1cyA9PT0gdDIuY29uZmlnLnN0YXR1cztcbiAgfTtcblxuICBwcm90ZWN0ZWQgcmVtb3ZlVG9hc3RJZkxpbWl0UmVhY2hlZCh0b2FzdDogTmJUb2FzdCkge1xuICAgIGlmICghdG9hc3QuY29uZmlnLmxpbWl0IHx8IHRoaXMudG9hc3RzLmxlbmd0aCA8IHRvYXN0LmNvbmZpZy5saW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbkhlbHBlci5pc1RvcFBvc2l0aW9uKHRvYXN0LmNvbmZpZy5wb3NpdGlvbikpIHtcbiAgICAgIHRoaXMudG9hc3RzLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvYXN0cy5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRhY2hUb2FzdCh0b2FzdDogTmJUb2FzdCk6IE5iVG9hc3RDb21wb25lbnQge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uSGVscGVyLmlzVG9wUG9zaXRpb24odG9hc3QuY29uZmlnLnBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoVG9Ub3AodG9hc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hUb0JvdHRvbSh0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGF0dGFjaFRvVG9wKHRvYXN0OiBOYlRvYXN0KTogTmJUb2FzdENvbXBvbmVudCB7XG4gICAgdGhpcy50b2FzdHMudW5zaGlmdCh0b2FzdCk7XG4gICAgdGhpcy51cGRhdGVDb250YWluZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2UudG9hc3RzLmZpcnN0O1xuICB9XG5cbiAgcHJvdGVjdGVkIGF0dGFjaFRvQm90dG9tKHRvYXN0OiBOYlRvYXN0KTogTmJUb2FzdENvbXBvbmVudCB7XG4gICAgdGhpcy50b2FzdHMucHVzaCh0b2FzdCk7XG4gICAgdGhpcy51cGRhdGVDb250YWluZXIoKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuaW5zdGFuY2UudG9hc3RzLmxhc3Q7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGVzdHJveVRpbWVvdXQodG9hc3Q6IE5iVG9hc3QpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVzdHJveSh0b2FzdCksIHRvYXN0LmNvbmZpZy5kdXJhdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlT25DbGljayh0b2FzdENvbXBvbmVudDogTmJUb2FzdENvbXBvbmVudCwgdG9hc3Q6IE5iVG9hc3QpIHtcbiAgICB0b2FzdENvbXBvbmVudC50b2FzdENsaWNrXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRvYXN0LmNvbmZpZy5kZXN0cm95QnlDbGljayksXG4gICAgICAgIHRha2VVbnRpbCh0b2FzdENvbXBvbmVudC5kZXN0cm95KSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXN0cm95KHRvYXN0KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29udGFpbmVyKCkge1xuICAgIHBhdGNoKHRoaXMuY29udGFpbmVyUmVmLCB7IGNvbnRlbnQ6IHRoaXMudG9hc3RzLCBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgTmJUb2FzdHJPdmVybGF5V2l0aENvbnRhaW5lciB7XG4gIG92ZXJsYXlSZWY6IE5iT3ZlcmxheVJlZjtcbiAgdG9hc3RyQ29udGFpbmVyOiBOYlRvYXN0Q29udGFpbmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJUb2FzdHJDb250YWluZXJSZWdpc3RyeSB7XG4gIHByb3RlY3RlZCBvdmVybGF5czogTWFwPE5iR2xvYmFsUG9zaXRpb24sIE5iVG9hc3RyT3ZlcmxheVdpdGhDb250YWluZXI+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvdmVybGF5OiBOYk92ZXJsYXlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb25IZWxwZXI6IE5iUG9zaXRpb25IZWxwZXIsXG4gICAgcHJvdGVjdGVkIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICApIHt9XG5cbiAgZ2V0KHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uKTogTmJUb2FzdENvbnRhaW5lciB7XG4gICAgY29uc3QgbG9naWNhbFBvc2l0aW9uOiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbiA9IHRoaXMucG9zaXRpb25IZWxwZXIudG9Mb2dpY2FsUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgY29uc3Qgb3ZlcmxheVdpdGhDb250YWluZXIgPSB0aGlzLm92ZXJsYXlzLmdldChsb2dpY2FsUG9zaXRpb24pO1xuICAgIGlmICghb3ZlcmxheVdpdGhDb250YWluZXIgfHwgIXRoaXMuZXhpc3RzSW5Eb20ob3ZlcmxheVdpdGhDb250YWluZXIudG9hc3RyQ29udGFpbmVyKSkge1xuICAgICAgaWYgKG92ZXJsYXlXaXRoQ29udGFpbmVyKSB7XG4gICAgICAgIG92ZXJsYXlXaXRoQ29udGFpbmVyLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnN0YW50aWF0ZUNvbnRhaW5lcihsb2dpY2FsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlzLmdldChsb2dpY2FsUG9zaXRpb24pLnRvYXN0ckNvbnRhaW5lcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbnN0YW50aWF0ZUNvbnRhaW5lcihwb3NpdGlvbjogTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pIHtcbiAgICBjb25zdCB0b2FzdHJPdmVybGF5V2l0aENvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKHBvc2l0aW9uKTtcbiAgICB0aGlzLm92ZXJsYXlzLnNldChwb3NpdGlvbiwgdG9hc3RyT3ZlcmxheVdpdGhDb250YWluZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbnRhaW5lcihwb3NpdGlvbjogTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pOiBOYlRvYXN0ck92ZXJsYXlXaXRoQ29udGFpbmVyIHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5wb3NpdGlvbkJ1aWxkZXIuZ2xvYmFsKCkucG9zaXRpb24ocG9zaXRpb24pO1xuICAgIGNvbnN0IHJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoeyBwb3NpdGlvblN0cmF0ZWd5IH0pO1xuICAgIHRoaXMuYWRkQ2xhc3NUb092ZXJsYXlIb3N0KHJlZik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gcmVmLmF0dGFjaChuZXcgTmJDb21wb25lbnRQb3J0YWwoTmJUb2FzdHJDb250YWluZXJDb21wb25lbnQsIG51bGwsIG51bGwsIHRoaXMuY2ZyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG92ZXJsYXlSZWY6IHJlZixcbiAgICAgIHRvYXN0ckNvbnRhaW5lcjogbmV3IE5iVG9hc3RDb250YWluZXIocG9zaXRpb24sIGNvbnRhaW5lclJlZiwgdGhpcy5wb3NpdGlvbkhlbHBlciksXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRDbGFzc1RvT3ZlcmxheUhvc3Qob3ZlcmxheVJlZjogTmJPdmVybGF5UmVmKSB7XG4gICAgb3ZlcmxheVJlZi5ob3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0b2FzdHItb3ZlcmxheS1jb250YWluZXInKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBleGlzdHNJbkRvbSh0b2FzdENvbnRhaW5lcjogTmJUb2FzdENvbnRhaW5lcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHkuY29udGFpbnModG9hc3RDb250YWluZXIubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYE5iVG9hc3RyU2VydmljZWAgcHJvdmlkZXMgYSBjYXBhYmlsaXR5IHRvIGJ1aWxkIHRvYXN0IG5vdGlmaWNhdGlvbnMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgdG9hc3RyL3RvYXN0ci1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogYE5iVG9hc3RyU2VydmljZS5zaG93KG1lc3NhZ2UsIHRpdGxlLCBjb25maWcpYCBhY2NlcHRzIHRocmVlIHBhcmFtcywgdGl0bGUgYW5kIGNvbmZpZyBhcmUgb3B0aW9uYWwuXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJUb2FzdHJNb2R1bGUuZm9yUm9vdCgpYCB0byB5b3VyIGFwcCBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iVG9hc3RyTW9kdWxlLmZvclJvb3QoY29uZmlnKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ2FsbGluZyBgTmJUb2FzdHJTZXJ2aWNlLnNob3coLi4uKWAgd2lsbCByZW5kZXIgbmV3IHRvYXN0IGFuZCByZXR1cm4gYE5iVG9hc3RyUmVmYCB3aXRoXG4gKiBoZWxwIG9mIHdoaWNoIHlvdSBtYXkgY2xvc2UgbmV3bHkgY3JlYXRlZCB0b2FzdCBieSBjYWxsaW5nIGBjbG9zZWAgbWV0aG9kLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCB0b2FzdFJlZjogTmJUb2FzdFJlZiA9IHRoaXMudG9hc3RyU2VydmljZS5zaG93KC4uLik7XG4gKiB0b2FzdFJlZi5jbG9zZSgpO1xuICogYGBgXG4gKlxuICogQ29uZmlnIGFjY2VwdHMgZm9sbG93aW5nIG9wdGlvbnM6XG4gKlxuICogYHBvc2l0aW9uYCAtIGRldGVybWluZXMgd2hlcmUgb24gdGhlIHNjcmVlbiB0b2FzdCB3aWxsIGJlIHJlbmRlcmVkLlxuICogRGVmYXVsdCBpcyBgdG9wLWVuZGAuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShQb3NpdGlvbiwgdG9hc3RyL3RvYXN0ci1wb3NpdGlvbnMuY29tcG9uZW50KVxuICpcbiAqIGBzdGF0dXNgIC0gY29sb3JpbmcgYW5kIGljb24gb2YgdGhlIHRvYXN0LlxuICogRGVmYXVsdCBpcyBgYmFzaWNgLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU3RhdHVzLCB0b2FzdHIvdG9hc3RyLXN0YXR1c2VzLmNvbXBvbmVudClcbiAqXG4gKiBgZHVyYXRpb25gIC0gdGhlIHRpbWUgYWZ0ZXIgd2hpY2ggdGhlIHRvYXN0IHdpbGwgYmUgZGVzdHJveWVkLlxuICogYDBgIG1lYW5zIGVuZGxlc3MgdG9hc3QsIHRoYXQgbWF5IGJlIGRlc3Ryb3llZCBieSBjbGljayBvbmx5LlxuICogRGVmYXVsdCBpcyAzMDAwIG1zLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoRHVyYXRpb24sIHRvYXN0ci90b2FzdHItZHVyYXRpb24uY29tcG9uZW50KVxuICpcbiAqIGBkZXN0cm95QnlDbGlja2AgLSBwcm92aWRlcyBhIGNhcGFiaWxpdHkgdG8gZGVzdHJveSB0b2FzdCBieSBjbGljay5cbiAqIERlZmF1bHQgaXMgdHJ1ZS5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKERlc3Ryb3kgYnkgY2xpY2ssIHRvYXN0ci90b2FzdHItZGVzdHJveS1ieS1jbGljay5jb21wb25lbnQpXG4gKlxuICogYHByZXZlbnREdXBsaWNhdGVzYCAtIGRvbid0IGNyZWF0ZSBuZXcgdG9hc3QgaWYgaXQgaGFzIHRoZSBzYW1lIHRpdGxlLCBtZXNzYWdlIGFuZCBzdGF0dXMuXG4gKiBEZWZhdWx0IGlzIGZhbHNlLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUHJldmVudCBkdXBsaWNhdGVzLCB0b2FzdHIvdG9hc3RyLXByZXZlbnQtZHVwbGljYXRlcy5jb21wb25lbnQpXG4gKlxuICogYGR1cGxpY2F0ZXNCZWhhdmlvdXJgIC0gZGV0ZXJtaW5lcyBob3cgdG8gdHJlYXQgdGhlIHRvYXN0cyBkdXBsaWNhdGlvbi5cbiAqIENvbXBhcmUgd2l0aCB0aGUgcHJldmlvdXMgbWVzc2FnZSBgcHJldmlvdXNgXG4gKiBvciB3aXRoIGFsbCB2aXNpYmxlIG1lc3NhZ2VzIGBhbGxgLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoUHJldmVudCBkdXBsaWNhdGVzIGJlaGF2aW91ciAsIHRvYXN0ci90b2FzdHItcHJldmVudC1kdXBsaWNhdGVzLWJlaGF2aW91ci5jb21wb25lbnQpXG4gKlxuICogYGxpbWl0YCAtIHRoZSBudW1iZXIgb2YgdmlzaWJsZSB0b2FzdHMgaW4gdGhlIHRvYXN0IGNvbnRhaW5lci4gVGhlIG51bWJlciBvZiB0b2FzdHMgaXMgdW5saW1pdGVkIGJ5IGRlZmF1bHQuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShQcmV2ZW50IGR1cGxpY2F0ZXMgYmVoYXZpb3VyICwgdG9hc3RyL3RvYXN0ci1saW1pdC5jb21wb25lbnQpXG4gKlxuICogYGhhc0ljb25gIC0gaWYgdHJ1ZSB0aGVuIHJlbmRlciB0b2FzdCBpY29uLlxuICogYGljb25gIC0geW91IGNhbiBwYXNzIGljb24gY2xhc3MgdGhhdCB3aWxsIGJlIGFwcGxpZWQgaW50byB0aGUgdG9hc3QuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShIYXMgaWNvbiwgdG9hc3RyL3RvYXN0ci1pY29uLmNvbXBvbmVudClcbiAqICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJUb2FzdHJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOQl9UT0FTVFJfQ09ORklHKSBwcm90ZWN0ZWQgZ2xvYmFsQ29uZmlnOiBOYlRvYXN0ckNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyUmVnaXN0cnk6IE5iVG9hc3RyQ29udGFpbmVyUmVnaXN0cnksXG4gICkge31cblxuICAvKipcbiAgICogU2hvd3MgdG9hc3Qgd2l0aCBtZXNzYWdlLCB0aXRsZSBhbmQgdXNlciBjb25maWcuXG4gICAqICovXG4gIHNob3cobWVzc2FnZSwgdGl0bGU/LCB1c2VyQ29uZmlnPzogUGFydGlhbDxOYlRvYXN0ckNvbmZpZz4pOiBOYlRvYXN0UmVmIHtcbiAgICBjb25zdCBjb25maWcgPSBuZXcgTmJUb2FzdHJDb25maWcoeyAuLi50aGlzLmdsb2JhbENvbmZpZywgLi4udXNlckNvbmZpZyB9KTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lclJlZ2lzdHJ5LmdldChjb25maWcucG9zaXRpb24pO1xuICAgIGNvbnN0IHRvYXN0ID0geyBtZXNzYWdlLCB0aXRsZSwgY29uZmlnIH07XG4gICAgcmV0dXJuIGNvbnRhaW5lci5hdHRhY2godG9hc3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHN1Y2Nlc3MgdG9hc3Qgd2l0aCBtZXNzYWdlLCB0aXRsZSBhbmQgdXNlciBjb25maWcuXG4gICAqICovXG4gIHN1Y2Nlc3MobWVzc2FnZSwgdGl0bGU/LCBjb25maWc/OiBQYXJ0aWFsPE5iVG9hc3RyQ29uZmlnPik6IE5iVG9hc3RSZWYge1xuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsIHsgLi4uY29uZmlnLCBzdGF0dXM6ICdzdWNjZXNzJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBpbmZvIHRvYXN0IHdpdGggbWVzc2FnZSwgdGl0bGUgYW5kIHVzZXIgY29uZmlnLlxuICAgKiAqL1xuICBpbmZvKG1lc3NhZ2UsIHRpdGxlPywgY29uZmlnPzogUGFydGlhbDxOYlRvYXN0ckNvbmZpZz4pOiBOYlRvYXN0UmVmIHtcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCB7IC4uLmNvbmZpZywgc3RhdHVzOiAnaW5mbycgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3Mgd2FybmluZyB0b2FzdCB3aXRoIG1lc3NhZ2UsIHRpdGxlIGFuZCB1c2VyIGNvbmZpZy5cbiAgICogKi9cbiAgd2FybmluZyhtZXNzYWdlLCB0aXRsZT8sIGNvbmZpZz86IFBhcnRpYWw8TmJUb2FzdHJDb25maWc+KTogTmJUb2FzdFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgeyAuLi5jb25maWcsIHN0YXR1czogJ3dhcm5pbmcnIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIHByaW1hcnkgdG9hc3Qgd2l0aCBtZXNzYWdlLCB0aXRsZSBhbmQgdXNlciBjb25maWcuXG4gICAqICovXG4gIHByaW1hcnkobWVzc2FnZSwgdGl0bGU/LCBjb25maWc/OiBQYXJ0aWFsPE5iVG9hc3RyQ29uZmlnPik6IE5iVG9hc3RSZWYge1xuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsIHsgLi4uY29uZmlnLCBzdGF0dXM6ICdwcmltYXJ5JyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBkYW5nZXIgdG9hc3Qgd2l0aCBtZXNzYWdlLCB0aXRsZSBhbmQgdXNlciBjb25maWcuXG4gICAqICovXG4gIGRhbmdlcihtZXNzYWdlLCB0aXRsZT8sIGNvbmZpZz86IFBhcnRpYWw8TmJUb2FzdHJDb25maWc+KTogTmJUb2FzdFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgeyAuLi5jb25maWcsIHN0YXR1czogJ2RhbmdlcicgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgZGVmYXVsdCB0b2FzdCB3aXRoIG1lc3NhZ2UsIHRpdGxlIGFuZCB1c2VyIGNvbmZpZy5cbiAgICogKi9cbiAgZGVmYXVsdChtZXNzYWdlLCB0aXRsZT8sIGNvbmZpZz86IFBhcnRpYWw8TmJUb2FzdHJDb25maWc+KTogTmJUb2FzdFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgeyAuLi5jb25maWcsIHN0YXR1czogJ2Jhc2ljJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBjb250cm9sIHRvYXN0IHdpdGggbWVzc2FnZSwgdGl0bGUgYW5kIHVzZXIgY29uZmlnLlxuICAgKiAqL1xuICBjb250cm9sKG1lc3NhZ2UsIHRpdGxlPywgY29uZmlnPzogUGFydGlhbDxOYlRvYXN0ckNvbmZpZz4pOiBOYlRvYXN0UmVmIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0KG1lc3NhZ2UsIHRpdGxlLCB7IC4uLmNvbmZpZywgc3RhdHVzOiAnY29udHJvbCcgfSk7XG4gIH1cbn1cbiJdfQ==