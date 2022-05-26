import { Inject, Injectable, Injector, TemplateRef, } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { NB_WINDOW_CONFIG, NB_WINDOW_CONTENT, NB_WINDOW_CONTEXT, NbWindowConfig, NbWindowState, } from './window.options';
import { NbWindowRef } from './window-ref';
import { NbWindowsContainerComponent } from './windows-container.component';
import { NbWindowComponent } from './window.component';
import { NB_DOCUMENT } from '../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-service";
import * as i2 from "../cdk/overlay/mapping";
import * as i3 from "../cdk/adapter/block-scroll-strategy-adapter";
import * as i4 from "./window.options";
/**
 * The `NbWindowService` can be used to open windows.
 *
 * @stacked-example(Showcase, window/window-showcase.component)
 *
 * ### Installation
 *
 * Import `NbWindowModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install `NbWindowModule.forChild`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbWindowModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * A new window can be opened by calling the `open` method with a component or template to be loaded
 * and an optional configuration.
 * `open` method will return `NbWindowRef` that can be used for the further manipulations.
 *
 * ```ts
 * const windowRef = this.windowService.open(MyComponent, { ... });
 * ```
 *
 * `NbWindowRef` gives you ability manipulate opened window.
 * Also, you can inject `NbWindowRef` inside provided component which rendered in window.
 *
 * ```ts
 * this.windowService.open(MyWindowComponent, { ... });
 *
 * // my.component.ts
 * constructor(protected windowRef: NbWindowRef) {
 * }
 *
 * minimize() {
 *   this.windowRef.minimize();
 * }
 *
 * close() {
 *   this.windowRef.close();
 * }
 * ```
 *
 * Instead of component you can create window from TemplateRef. As usual you can access context provided via config
 * via `let-` variables. Also you can get reference to the `NbWindowRef` in context's `windowRef` property.
 *
 * @stacked-example(Window content from TemplateRef, window/template-window.component)
 *
 * You could pass the optional window return value to the `NbWindowRef.close` method.
 * The passed value would be emitted to the `NbWindowRef.onClose` listeners.
 *
 * @stacked-example(Result, window/window-result.component)
 *
 * ### Configuration
 *
 * As mentioned above, `open` method of the `NbWindowService` may receive optional configuration options.
 * Also, you can modify default windows configuration through `NbWindowModule.forRoot({ ... })`.
 * You can read about all available options on [API tab](docs/components/window/api#nbwindowconfig).
 *
 * @stacked-example(Configuration, window/windows-backdrop.component)
 *
 * You can configure which buttons are available in a window via the `buttons` property of the window config.
 * @stacked-example(Control buttons, window/window-controls.component)
 *
 */
export class NbWindowService {
    constructor(componentFactoryResolver, overlayService, overlayPositionBuilder, blockScrollStrategy, defaultWindowsConfig, cfr, document) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayService = overlayService;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.blockScrollStrategy = blockScrollStrategy;
        this.defaultWindowsConfig = defaultWindowsConfig;
        this.cfr = cfr;
        this.openWindows = [];
        this.document = document;
    }
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    open(windowContent, windowConfig = {}) {
        if (this.shouldCreateWindowsContainer()) {
            this.createWindowsContainer();
        }
        const config = new NbWindowConfig(this.defaultWindowsConfig, windowConfig);
        const windowRef = new NbWindowRef(config);
        windowRef.componentRef = this.appendWindow(windowContent, config, windowRef);
        this.openWindows.push(windowRef);
        this.subscribeToEvents(windowRef);
        return windowRef;
    }
    shouldCreateWindowsContainer() {
        if (this.windowsContainerViewRef) {
            const containerEl = this.windowsContainerViewRef.element.nativeElement;
            return !this.document.body.contains(containerEl);
        }
        return true;
    }
    createWindowsContainer() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = this.overlayService.create({
            scrollStrategy: this.overlayService.scrollStrategies.noop(),
            positionStrategy: this.overlayPositionBuilder.global().bottom().right(),
            hasBackdrop: true,
        });
        const windowsContainerPortal = new NbComponentPortal(NbWindowsContainerComponent, null, null, this.cfr);
        const overlayRef = this.overlayRef.attach(windowsContainerPortal);
        this.windowsContainerViewRef = overlayRef.instance.viewContainerRef;
    }
    appendWindow(content, config, windowRef) {
        const context = content instanceof TemplateRef ? { $implicit: config.context, windowRef } : config.context;
        const providers = [
            { provide: NB_WINDOW_CONTENT, useValue: content },
            { provide: NB_WINDOW_CONTEXT, useValue: context },
            { provide: NbWindowConfig, useValue: config },
            { provide: NbWindowRef, useValue: windowRef },
        ];
        const parentInjector = config.viewContainerRef
            ? config.viewContainerRef.injector
            : this.windowsContainerViewRef.injector;
        const injector = Injector.create({ parent: parentInjector, providers });
        const windowFactory = this.componentFactoryResolver.resolveComponentFactory(NbWindowComponent);
        const ref = this.windowsContainerViewRef.createComponent(windowFactory, this.windowsContainerViewRef.length, injector);
        ref.instance.cfr = this.cfr;
        ref.changeDetectorRef.detectChanges();
        return ref;
    }
    subscribeToEvents(windowRef) {
        if (windowRef.config.closeOnBackdropClick) {
            this.overlayRef.backdropClick().subscribe(() => windowRef.close());
        }
        if (windowRef.config.closeOnEsc) {
            this.overlayRef
                .keydownEvents()
                .pipe(filter((event) => event.keyCode === 27))
                .subscribe(() => windowRef.close());
        }
        windowRef.stateChange.subscribe(() => this.checkAndUpdateOverlay());
        windowRef.onClose.subscribe(() => {
            this.openWindows.splice(this.openWindows.indexOf(windowRef), 1);
            this.checkAndUpdateOverlay();
        });
    }
    checkAndUpdateOverlay() {
        const fullScreenWindows = this.openWindows.filter((w) => w.state === NbWindowState.FULL_SCREEN);
        if (fullScreenWindows.length > 0) {
            this.blockScrollStrategy.enable();
        }
        else {
            this.blockScrollStrategy.disable();
        }
        if (fullScreenWindows.some((w) => w.config.hasBackdrop)) {
            this.overlayRef.backdropElement.removeAttribute('hidden');
        }
        else {
            this.overlayRef.backdropElement.setAttribute('hidden', '');
        }
    }
}
NbWindowService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbWindowService, deps: [{ token: i0.ComponentFactoryResolver }, { token: i1.NbOverlayService }, { token: i2.NbOverlayPositionBuilder }, { token: i3.NbBlockScrollStrategyAdapter }, { token: NB_WINDOW_CONFIG }, { token: i0.ComponentFactoryResolver }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbWindowService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbWindowService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbWindowService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.NbOverlayService }, { type: i2.NbOverlayPositionBuilder }, { type: i3.NbBlockScrollStrategyAdapter }, { type: i4.NbWindowConfig, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW_CONFIG]
                }] }, { type: i0.ComponentFactoryResolver }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEdBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBMkQsTUFBTSx3QkFBd0IsQ0FBQztBQUdwSCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGFBQWEsR0FDZCxNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFFbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUNZLHdCQUFrRCxFQUNsRCxjQUFnQyxFQUNoQyxzQkFBZ0QsRUFDaEQsbUJBQWlELEVBQ2Qsb0JBQW9DLEVBQ3ZFLEdBQTZCLEVBQ2xCLFFBQVE7UUFObkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCx3QkFBbUIs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ZTtrQkFEM0IsVUFBVTs7MEJBWU4sTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iQ29tcG9uZW50VHlwZSwgTmJPdmVybGF5UG9zaXRpb25CdWlsZGVyLCBOYk92ZXJsYXlSZWYgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcbmltcG9ydCB7IE5iT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJCbG9ja1Njcm9sbFN0cmF0ZWd5QWRhcHRlciB9IGZyb20gJy4uL2Nkay9hZGFwdGVyL2Jsb2NrLXNjcm9sbC1zdHJhdGVneS1hZGFwdGVyJztcbmltcG9ydCB7XG4gIE5CX1dJTkRPV19DT05GSUcsXG4gIE5CX1dJTkRPV19DT05URU5ULFxuICBOQl9XSU5ET1dfQ09OVEVYVCxcbiAgTmJXaW5kb3dDb25maWcsXG4gIE5iV2luZG93U3RhdGUsXG59IGZyb20gJy4vd2luZG93Lm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJXaW5kb3dSZWYgfSBmcm9tICcuL3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgTmJXaW5kb3dzQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi93aW5kb3dzLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuL3dpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICcuLi8uLi90aGVtZS5vcHRpb25zJztcblxuLyoqXG4gKiBUaGUgYE5iV2luZG93U2VydmljZWAgY2FuIGJlIHVzZWQgdG8gb3BlbiB3aW5kb3dzLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIHdpbmRvdy93aW5kb3ctc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iV2luZG93TW9kdWxlYCB0byB5b3VyIGFwcCBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iV2luZG93TW9kdWxlLmZvclJvb3QoY29uZmlnKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogSWYgeW91IGFyZSB1c2luZyBpdCBpbiBhIGxhenkgbG9hZGVkIG1vZHVsZSB0aGFuIHlvdSBoYXZlIHRvIGluc3RhbGwgYE5iV2luZG93TW9kdWxlLmZvckNoaWxkYDpcbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJXaW5kb3dNb2R1bGUuZm9yQ2hpbGQoY29uZmlnKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTGF6eUxvYWRlZE1vZHVsZSB7IH1cbiAqIGBgYFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIEEgbmV3IHdpbmRvdyBjYW4gYmUgb3BlbmVkIGJ5IGNhbGxpbmcgdGhlIGBvcGVuYCBtZXRob2Qgd2l0aCBhIGNvbXBvbmVudCBvciB0ZW1wbGF0ZSB0byBiZSBsb2FkZWRcbiAqIGFuZCBhbiBvcHRpb25hbCBjb25maWd1cmF0aW9uLlxuICogYG9wZW5gIG1ldGhvZCB3aWxsIHJldHVybiBgTmJXaW5kb3dSZWZgIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBmdXJ0aGVyIG1hbmlwdWxhdGlvbnMuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHdpbmRvd1JlZiA9IHRoaXMud2luZG93U2VydmljZS5vcGVuKE15Q29tcG9uZW50LCB7IC4uLiB9KTtcbiAqIGBgYFxuICpcbiAqIGBOYldpbmRvd1JlZmAgZ2l2ZXMgeW91IGFiaWxpdHkgbWFuaXB1bGF0ZSBvcGVuZWQgd2luZG93LlxuICogQWxzbywgeW91IGNhbiBpbmplY3QgYE5iV2luZG93UmVmYCBpbnNpZGUgcHJvdmlkZWQgY29tcG9uZW50IHdoaWNoIHJlbmRlcmVkIGluIHdpbmRvdy5cbiAqXG4gKiBgYGB0c1xuICogdGhpcy53aW5kb3dTZXJ2aWNlLm9wZW4oTXlXaW5kb3dDb21wb25lbnQsIHsgLi4uIH0pO1xuICpcbiAqIC8vIG15LmNvbXBvbmVudC50c1xuICogY29uc3RydWN0b3IocHJvdGVjdGVkIHdpbmRvd1JlZjogTmJXaW5kb3dSZWYpIHtcbiAqIH1cbiAqXG4gKiBtaW5pbWl6ZSgpIHtcbiAqICAgdGhpcy53aW5kb3dSZWYubWluaW1pemUoKTtcbiAqIH1cbiAqXG4gKiBjbG9zZSgpIHtcbiAqICAgdGhpcy53aW5kb3dSZWYuY2xvc2UoKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEluc3RlYWQgb2YgY29tcG9uZW50IHlvdSBjYW4gY3JlYXRlIHdpbmRvdyBmcm9tIFRlbXBsYXRlUmVmLiBBcyB1c3VhbCB5b3UgY2FuIGFjY2VzcyBjb250ZXh0IHByb3ZpZGVkIHZpYSBjb25maWdcbiAqIHZpYSBgbGV0LWAgdmFyaWFibGVzLiBBbHNvIHlvdSBjYW4gZ2V0IHJlZmVyZW5jZSB0byB0aGUgYE5iV2luZG93UmVmYCBpbiBjb250ZXh0J3MgYHdpbmRvd1JlZmAgcHJvcGVydHkuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShXaW5kb3cgY29udGVudCBmcm9tIFRlbXBsYXRlUmVmLCB3aW5kb3cvdGVtcGxhdGUtd2luZG93LmNvbXBvbmVudClcbiAqXG4gKiBZb3UgY291bGQgcGFzcyB0aGUgb3B0aW9uYWwgd2luZG93IHJldHVybiB2YWx1ZSB0byB0aGUgYE5iV2luZG93UmVmLmNsb3NlYCBtZXRob2QuXG4gKiBUaGUgcGFzc2VkIHZhbHVlIHdvdWxkIGJlIGVtaXR0ZWQgdG8gdGhlIGBOYldpbmRvd1JlZi5vbkNsb3NlYCBsaXN0ZW5lcnMuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShSZXN1bHQsIHdpbmRvdy93aW5kb3ctcmVzdWx0LmNvbXBvbmVudClcbiAqXG4gKiAjIyMgQ29uZmlndXJhdGlvblxuICpcbiAqIEFzIG1lbnRpb25lZCBhYm92ZSwgYG9wZW5gIG1ldGhvZCBvZiB0aGUgYE5iV2luZG93U2VydmljZWAgbWF5IHJlY2VpdmUgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQWxzbywgeW91IGNhbiBtb2RpZnkgZGVmYXVsdCB3aW5kb3dzIGNvbmZpZ3VyYXRpb24gdGhyb3VnaCBgTmJXaW5kb3dNb2R1bGUuZm9yUm9vdCh7IC4uLiB9KWAuXG4gKiBZb3UgY2FuIHJlYWQgYWJvdXQgYWxsIGF2YWlsYWJsZSBvcHRpb25zIG9uIFtBUEkgdGFiXShkb2NzL2NvbXBvbmVudHMvd2luZG93L2FwaSNuYndpbmRvd2NvbmZpZykuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShDb25maWd1cmF0aW9uLCB3aW5kb3cvd2luZG93cy1iYWNrZHJvcC5jb21wb25lbnQpXG4gKlxuICogWW91IGNhbiBjb25maWd1cmUgd2hpY2ggYnV0dG9ucyBhcmUgYXZhaWxhYmxlIGluIGEgd2luZG93IHZpYSB0aGUgYGJ1dHRvbnNgIHByb3BlcnR5IG9mIHRoZSB3aW5kb3cgY29uZmlnLlxuICogQHN0YWNrZWQtZXhhbXBsZShDb250cm9sIGJ1dHRvbnMsIHdpbmRvdy93aW5kb3ctY29udHJvbHMuY29tcG9uZW50KVxuICpcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iV2luZG93U2VydmljZSB7XG4gIHByb3RlY3RlZCBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHByb3RlY3RlZCBvdmVybGF5UmVmOiBOYk92ZXJsYXlSZWY7XG4gIHByb3RlY3RlZCB3aW5kb3dzQ29udGFpbmVyVmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJvdGVjdGVkIG9wZW5XaW5kb3dzOiBOYldpbmRvd1JlZltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByb3RlY3RlZCBvdmVybGF5U2VydmljZTogTmJPdmVybGF5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3ZlcmxheVBvc2l0aW9uQnVpbGRlcjogTmJPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICAgIHByb3RlY3RlZCBibG9ja1Njcm9sbFN0cmF0ZWd5OiBOYkJsb2NrU2Nyb2xsU3RyYXRlZ3lBZGFwdGVyLFxuICAgIEBJbmplY3QoTkJfV0lORE9XX0NPTkZJRykgcHJvdGVjdGVkIHJlYWRvbmx5IGRlZmF1bHRXaW5kb3dzQ29uZmlnOiBOYldpbmRvd0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgQEluamVjdChOQl9ET0NVTUVOVCkgZG9jdW1lbnQsXG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBuZXcgd2luZG93LlxuICAgKiBAcGFyYW0gd2luZG93Q29udGVudFxuICAgKiBAcGFyYW0gd2luZG93Q29uZmlnXG4gICAqICovXG4gIG9wZW4od2luZG93Q29udGVudDogVGVtcGxhdGVSZWY8YW55PiB8IE5iQ29tcG9uZW50VHlwZSwgd2luZG93Q29uZmlnOiBQYXJ0aWFsPE5iV2luZG93Q29uZmlnPiA9IHt9KTogTmJXaW5kb3dSZWYge1xuICAgIGlmICh0aGlzLnNob3VsZENyZWF0ZVdpbmRvd3NDb250YWluZXIoKSkge1xuICAgICAgdGhpcy5jcmVhdGVXaW5kb3dzQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gbmV3IE5iV2luZG93Q29uZmlnKHRoaXMuZGVmYXVsdFdpbmRvd3NDb25maWcsIHdpbmRvd0NvbmZpZyk7XG4gICAgY29uc3Qgd2luZG93UmVmID0gbmV3IE5iV2luZG93UmVmKGNvbmZpZyk7XG4gICAgd2luZG93UmVmLmNvbXBvbmVudFJlZiA9IHRoaXMuYXBwZW5kV2luZG93KHdpbmRvd0NvbnRlbnQsIGNvbmZpZywgd2luZG93UmVmKTtcblxuICAgIHRoaXMub3BlbldpbmRvd3MucHVzaCh3aW5kb3dSZWYpO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMod2luZG93UmVmKTtcblxuICAgIHJldHVybiB3aW5kb3dSZWY7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkQ3JlYXRlV2luZG93c0NvbnRhaW5lcigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy53aW5kb3dzQ29udGFpbmVyVmlld1JlZikge1xuICAgICAgY29uc3QgY29udGFpbmVyRWwgPSB0aGlzLndpbmRvd3NDb250YWluZXJWaWV3UmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiAhdGhpcy5kb2N1bWVudC5ib2R5LmNvbnRhaW5zKGNvbnRhaW5lckVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVXaW5kb3dzQ29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5U2VydmljZS5jcmVhdGUoe1xuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVNlcnZpY2Uuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIuZ2xvYmFsKCkuYm90dG9tKCkucmlnaHQoKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbmRvd3NDb250YWluZXJQb3J0YWwgPSBuZXcgTmJDb21wb25lbnRQb3J0YWwoTmJXaW5kb3dzQ29udGFpbmVyQ29tcG9uZW50LCBudWxsLCBudWxsLCB0aGlzLmNmcik7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2god2luZG93c0NvbnRhaW5lclBvcnRhbCk7XG4gICAgdGhpcy53aW5kb3dzQ29udGFpbmVyVmlld1JlZiA9IG92ZXJsYXlSZWYuaW5zdGFuY2Uudmlld0NvbnRhaW5lclJlZjtcbiAgfVxuXG4gIHByb3RlY3RlZCBhcHBlbmRXaW5kb3coXG4gICAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PiB8IE5iQ29tcG9uZW50VHlwZSxcbiAgICBjb25maWc6IE5iV2luZG93Q29uZmlnLFxuICAgIHdpbmRvd1JlZjogTmJXaW5kb3dSZWYsXG4gICk6IENvbXBvbmVudFJlZjxOYldpbmRvd0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyB7ICRpbXBsaWNpdDogY29uZmlnLmNvbnRleHQsIHdpbmRvd1JlZiB9IDogY29uZmlnLmNvbnRleHQ7XG5cbiAgICBjb25zdCBwcm92aWRlcnMgPSBbXG4gICAgICB7IHByb3ZpZGU6IE5CX1dJTkRPV19DT05URU5ULCB1c2VWYWx1ZTogY29udGVudCB9LFxuICAgICAgeyBwcm92aWRlOiBOQl9XSU5ET1dfQ09OVEVYVCwgdXNlVmFsdWU6IGNvbnRleHQgfSxcbiAgICAgIHsgcHJvdmlkZTogTmJXaW5kb3dDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgIHsgcHJvdmlkZTogTmJXaW5kb3dSZWYsIHVzZVZhbHVlOiB3aW5kb3dSZWYgfSxcbiAgICBdO1xuICAgIGNvbnN0IHBhcmVudEluamVjdG9yID0gY29uZmlnLnZpZXdDb250YWluZXJSZWZcbiAgICAgID8gY29uZmlnLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3JcbiAgICAgIDogdGhpcy53aW5kb3dzQ29udGFpbmVyVmlld1JlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHBhcmVudDogcGFyZW50SW5qZWN0b3IsIHByb3ZpZGVycyB9KTtcbiAgICBjb25zdCB3aW5kb3dGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTmJXaW5kb3dDb21wb25lbnQpO1xuXG4gICAgY29uc3QgcmVmID0gdGhpcy53aW5kb3dzQ29udGFpbmVyVmlld1JlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICB3aW5kb3dGYWN0b3J5LFxuICAgICAgdGhpcy53aW5kb3dzQ29udGFpbmVyVmlld1JlZi5sZW5ndGgsXG4gICAgICBpbmplY3RvcixcbiAgICApO1xuICAgIHJlZi5pbnN0YW5jZS5jZnIgPSB0aGlzLmNmcjtcbiAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiByZWY7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9FdmVudHMod2luZG93UmVmOiBOYldpbmRvd1JlZikge1xuICAgIGlmICh3aW5kb3dSZWYuY29uZmlnLmNsb3NlT25CYWNrZHJvcENsaWNrKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB3aW5kb3dSZWYuY2xvc2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvd1JlZi5jb25maWcuY2xvc2VPbkVzYykge1xuICAgICAgdGhpcy5vdmVybGF5UmVmXG4gICAgICAgIC5rZXlkb3duRXZlbnRzKClcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gZXZlbnQua2V5Q29kZSA9PT0gMjcpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHdpbmRvd1JlZi5jbG9zZSgpKTtcbiAgICB9XG5cbiAgICB3aW5kb3dSZWYuc3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hlY2tBbmRVcGRhdGVPdmVybGF5KCkpO1xuXG4gICAgd2luZG93UmVmLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub3BlbldpbmRvd3Muc3BsaWNlKHRoaXMub3BlbldpbmRvd3MuaW5kZXhPZih3aW5kb3dSZWYpLCAxKTtcbiAgICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVPdmVybGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tBbmRVcGRhdGVPdmVybGF5KCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW5XaW5kb3dzID0gdGhpcy5vcGVuV2luZG93cy5maWx0ZXIoKHcpID0+IHcuc3RhdGUgPT09IE5iV2luZG93U3RhdGUuRlVMTF9TQ1JFRU4pO1xuICAgIGlmIChmdWxsU2NyZWVuV2luZG93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJsb2NrU2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tTY3JvbGxTdHJhdGVneS5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bGxTY3JlZW5XaW5kb3dzLnNvbWUoKHcpID0+IHcuY29uZmlnLmhhc0JhY2tkcm9wKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgIH1cbiAgfVxufVxuIl19