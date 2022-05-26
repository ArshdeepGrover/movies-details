/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable, TemplateRef } from '@angular/core';
import { fromEvent as observableFromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NbComponentPortal, NbPortalInjector, NbTemplatePortal, } from '../cdk/overlay/mapping';
import { NB_DOCUMENT } from '../../theme.options';
import { NB_DIALOG_CONFIG, NbDialogConfig } from './dialog-config';
import { NbDialogRef } from './dialog-ref';
import { NbDialogContainerComponent } from './dialog-container';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-position";
import * as i2 from "../cdk/overlay/overlay-service";
/**
 * The `NbDialogService` helps to open dialogs.
 *
 * @stacked-example(Showcase, dialog/dialog-showcase.component)
 *
 * A new dialog is opened by calling the `open` method with a component to be loaded and an optional configuration.
 * `open` method will return `NbDialogRef` that can be used for the further manipulations.
 *
 * ### Installation
 *
 * Import `NbDialogModule.forRoot()` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forRoot(config),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * If you are using it in a lazy loaded module than you have to install it with `NbDialogModule.forChild()`:
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbDialogModule.forChild(config),
 *   ],
 * })
 * export class LazyLoadedModule { }
 * ```
 *
 * ### Usage
 *
 * ```ts
 * const dialogRef = this.dialogService.open(MyDialogComponent, { ... });
 * ```
 *
 * `NbDialogRef` gives capability access reference to the rendered dialog component,
 * destroy dialog and some other options described below.
 *
 * Also, you can inject `NbDialogRef` in dialog component.
 *
 * ```ts
 * this.dialogService.open(MyDialogComponent, { ... });
 *
 * // my-dialog.component.ts
 * constructor(protected dialogRef: NbDialogRef) {
 * }
 *
 * close() {
 *   this.dialogRef.close();
 * }
 * ```
 *
 * Instead of component you can create dialog from TemplateRef:
 *
 * @stacked-example(Template ref, dialog/dialog-template.component)
 *
 * The dialog may return result through `NbDialogRef`. Calling component can receive this result with `onClose`
 * stream of `NbDialogRef`.
 *
 * @stacked-example(Result, dialog/dialog-result.component)
 *
 * ### Configuration
 *
 * As we mentioned above, `open` method of the `NbDialogService` may receive optional configuration options.
 * Also, you can provide global dialogs configuration through `NbDialogModule.forRoot({ ... })`.
 *
 * This config may contain the following:
 *
 * `context` - both, template and component may receive data through `config.context` property.
 * For components, this data will be assigned through inputs.
 * For templates, you can access it inside template as $implicit.
 *
 * ```ts
 * this.dialogService.open(template, { context: 'pass data in template' });
 * ```
 *
 * ```html
 * <ng-template let-some-additional-data>
 *   {{ some-additional-data }}
 * <ng-template/>
 * ```
 *
 * `hasBackdrop` - determines is service have to render backdrop under the dialog.
 * Default is true.
 * @stacked-example(Backdrop, dialog/dialog-has-backdrop.component)
 *
 * `closeOnBackdropClick` - close dialog on backdrop click if true.
 * Default is true.
 * @stacked-example(Backdrop click, dialog/dialog-backdrop-click.component)
 *
 * `closeOnEsc` - close dialog on escape button on the keyboard.
 * Default is true.
 * @stacked-example(Escape hit, dialog/dialog-esc.component)
 *
 * `hasScroll` - Disables scroll on content under dialog if true and does nothing otherwise.
 * Default is false.
 * Please, open dialogs in the separate window and try to scroll.
 * @stacked-example(Scroll, dialog/dialog-scroll.component)
 *
 * `autoFocus` - Focuses dialog automatically after open if true. It's useful to prevent misclicks on
 * trigger elements and opening multiple dialogs.
 * Default is true.
 *
 * As you can see, if you open dialog with auto focus dialog will focus first focusable element
 * or just blur previously focused automatically.
 * Otherwise, without auto focus, the focus will stay on the previously focused element.
 * Please, open dialogs in the separate window and try to click on the button without focus
 * and then hit space any times. Multiple same dialogs will be opened.
 * @stacked-example(Auto focus, dialog/dialog-auto-focus.component)
 * */
export class NbDialogService {
    constructor(document, globalConfig, positionBuilder, overlay, injector, cfr) {
        this.document = document;
        this.globalConfig = globalConfig;
        this.positionBuilder = positionBuilder;
        this.overlay = overlay;
        this.injector = injector;
        this.cfr = cfr;
    }
    /**
     * Opens new instance of the dialog, may receive optional config.
     * */
    open(content, userConfig = {}) {
        const config = new NbDialogConfig({ ...this.globalConfig, ...userConfig });
        const overlayRef = this.createOverlay(config);
        const dialogRef = new NbDialogRef(overlayRef);
        const container = this.createContainer(config, overlayRef);
        this.createContent(config, content, container, dialogRef);
        this.registerCloseListeners(config, overlayRef, dialogRef);
        return dialogRef;
    }
    createOverlay(config) {
        const positionStrategy = this.createPositionStrategy();
        const scrollStrategy = this.createScrollStrategy(config.hasScroll);
        return this.overlay.create({
            positionStrategy,
            scrollStrategy,
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.dialogClass,
        });
    }
    createPositionStrategy() {
        return this.positionBuilder
            .global()
            .centerVertically()
            .centerHorizontally();
    }
    createScrollStrategy(hasScroll) {
        if (hasScroll) {
            return this.overlay.scrollStrategies.noop();
        }
        else {
            return this.overlay.scrollStrategies.block();
        }
    }
    createContainer(config, overlayRef) {
        const injector = new NbPortalInjector(this.createInjector(config), new WeakMap([[NbDialogConfig, config]]));
        const containerPortal = new NbComponentPortal(NbDialogContainerComponent, null, injector, this.cfr);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    createContent(config, content, container, dialogRef) {
        if (content instanceof TemplateRef) {
            const portal = this.createTemplatePortal(config, content, dialogRef);
            container.attachTemplatePortal(portal);
        }
        else {
            const portal = this.createComponentPortal(config, content, dialogRef);
            dialogRef.componentRef = container.attachComponentPortal(portal);
            if (config.context) {
                Object.assign(dialogRef.componentRef.instance, { ...config.context });
            }
        }
    }
    createTemplatePortal(config, content, dialogRef) {
        return new NbTemplatePortal(content, null, { $implicit: config.context, dialogRef });
    }
    /**
     * We're creating portal with custom injector provided through config or using global injector.
     * This approach provides us capability inject `NbDialogRef` in dialog component.
     * */
    createComponentPortal(config, content, dialogRef) {
        const injector = this.createInjector(config);
        const portalInjector = new NbPortalInjector(injector, new WeakMap([[NbDialogRef, dialogRef]]));
        return new NbComponentPortal(content, config.viewContainerRef, portalInjector);
    }
    createInjector(config) {
        return config.viewContainerRef && config.viewContainerRef.injector || this.injector;
    }
    registerCloseListeners(config, overlayRef, dialogRef) {
        if (config.closeOnBackdropClick) {
            overlayRef.backdropClick().subscribe(() => dialogRef.close());
        }
        if (config.closeOnEsc) {
            observableFromEvent(this.document, 'keyup')
                .pipe(filter((event) => event.keyCode === 27), takeUntil(dialogRef.onClose))
                .subscribe(() => dialogRef.close());
        }
    }
}
NbDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogService, deps: [{ token: NB_DOCUMENT }, { token: NB_DIALOG_CONFIG }, { token: i1.NbPositionBuilderService }, { token: i2.NbOverlayService }, { token: i0.Injector }, { token: i0.ComponentFactoryResolver }], target: i0.ɵɵFactoryTarget.Injectable });
NbDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DIALOG_CONFIG]
                }] }, { type: i1.NbPositionBuilderService }, { type: i2.NbOverlayService }, { type: i0.Injector }, { type: i0.ComponentFactoryResolver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQTRCLE1BQU0sRUFBRSxVQUFVLEVBQVksV0FBVyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxTQUFTLElBQUksbUJBQW1CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLGdCQUFnQixFQUVoQixnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUdoQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHaEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnSEs7QUFFTCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUEyQyxRQUFRLEVBQ0gsWUFBWSxFQUN0QyxlQUF5QyxFQUN6QyxPQUF5QixFQUN6QixRQUFrQixFQUNsQixHQUE2QjtRQUxSLGFBQVEsR0FBUixRQUFRLENBQUE7UUFDSCxpQkFBWSxHQUFaLFlBQVksQ0FBQTtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7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SSxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDL0IsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyQixtQkFBbUIsQ0FBZ0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7aUJBQ3ZELElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxFQUN0RCxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUM3QjtpQkFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs0R0FoSFUsZUFBZSxrQkFDTixXQUFXLGFBQ1gsZ0JBQWdCO2dIQUZ6QixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQUVJLE1BQU07MkJBQUMsV0FBVzs7MEJBQ2xCLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgYXMgb2JzZXJ2YWJsZUZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIE5iQ29tcG9uZW50UG9ydGFsLFxuICBOYk92ZXJsYXlSZWYsXG4gIE5iUG9ydGFsSW5qZWN0b3IsXG4gIE5iU2Nyb2xsU3RyYXRlZ3ksXG4gIE5iVGVtcGxhdGVQb3J0YWwsXG59IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJHbG9iYWxQb3NpdGlvblN0cmF0ZWd5LCBOYlBvc2l0aW9uQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICcuLi8uLi90aGVtZS5vcHRpb25zJztcbmltcG9ydCB7IE5CX0RJQUxPR19DT05GSUcsIE5iRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcbmltcG9ydCB7IE5iRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyJztcblxuXG4vKipcbiAqIFRoZSBgTmJEaWFsb2dTZXJ2aWNlYCBoZWxwcyB0byBvcGVuIGRpYWxvZ3MuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgZGlhbG9nL2RpYWxvZy1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogQSBuZXcgZGlhbG9nIGlzIG9wZW5lZCBieSBjYWxsaW5nIHRoZSBgb3BlbmAgbWV0aG9kIHdpdGggYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGFuZCBhbiBvcHRpb25hbCBjb25maWd1cmF0aW9uLlxuICogYG9wZW5gIG1ldGhvZCB3aWxsIHJldHVybiBgTmJEaWFsb2dSZWZgIHRoYXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBmdXJ0aGVyIG1hbmlwdWxhdGlvbnMuXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJEaWFsb2dNb2R1bGUuZm9yUm9vdCgpYCB0byB5b3VyIGFwcCBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iRGlhbG9nTW9kdWxlLmZvclJvb3QoY29uZmlnKSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogSWYgeW91IGFyZSB1c2luZyBpdCBpbiBhIGxhenkgbG9hZGVkIG1vZHVsZSB0aGFuIHlvdSBoYXZlIHRvIGluc3RhbGwgaXQgd2l0aCBgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKWA6XG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKGNvbmZpZyksXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIExhenlMb2FkZWRNb2R1bGUgeyB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oTXlEaWFsb2dDb21wb25lbnQsIHsgLi4uIH0pO1xuICogYGBgXG4gKlxuICogYE5iRGlhbG9nUmVmYCBnaXZlcyBjYXBhYmlsaXR5IGFjY2VzcyByZWZlcmVuY2UgdG8gdGhlIHJlbmRlcmVkIGRpYWxvZyBjb21wb25lbnQsXG4gKiBkZXN0cm95IGRpYWxvZyBhbmQgc29tZSBvdGhlciBvcHRpb25zIGRlc2NyaWJlZCBiZWxvdy5cbiAqXG4gKiBBbHNvLCB5b3UgY2FuIGluamVjdCBgTmJEaWFsb2dSZWZgIGluIGRpYWxvZyBjb21wb25lbnQuXG4gKlxuICogYGBgdHNcbiAqIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKE15RGlhbG9nQ29tcG9uZW50LCB7IC4uLiB9KTtcbiAqXG4gKiAvLyBteS1kaWFsb2cuY29tcG9uZW50LnRzXG4gKiBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGlhbG9nUmVmOiBOYkRpYWxvZ1JlZikge1xuICogfVxuICpcbiAqIGNsb3NlKCkge1xuICogICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICogfVxuICogYGBgXG4gKlxuICogSW5zdGVhZCBvZiBjb21wb25lbnQgeW91IGNhbiBjcmVhdGUgZGlhbG9nIGZyb20gVGVtcGxhdGVSZWY6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShUZW1wbGF0ZSByZWYsIGRpYWxvZy9kaWFsb2ctdGVtcGxhdGUuY29tcG9uZW50KVxuICpcbiAqIFRoZSBkaWFsb2cgbWF5IHJldHVybiByZXN1bHQgdGhyb3VnaCBgTmJEaWFsb2dSZWZgLiBDYWxsaW5nIGNvbXBvbmVudCBjYW4gcmVjZWl2ZSB0aGlzIHJlc3VsdCB3aXRoIGBvbkNsb3NlYFxuICogc3RyZWFtIG9mIGBOYkRpYWxvZ1JlZmAuXG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShSZXN1bHQsIGRpYWxvZy9kaWFsb2ctcmVzdWx0LmNvbXBvbmVudClcbiAqXG4gKiAjIyMgQ29uZmlndXJhdGlvblxuICpcbiAqIEFzIHdlIG1lbnRpb25lZCBhYm92ZSwgYG9wZW5gIG1ldGhvZCBvZiB0aGUgYE5iRGlhbG9nU2VydmljZWAgbWF5IHJlY2VpdmUgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQWxzbywgeW91IGNhbiBwcm92aWRlIGdsb2JhbCBkaWFsb2dzIGNvbmZpZ3VyYXRpb24gdGhyb3VnaCBgTmJEaWFsb2dNb2R1bGUuZm9yUm9vdCh7IC4uLiB9KWAuXG4gKlxuICogVGhpcyBjb25maWcgbWF5IGNvbnRhaW4gdGhlIGZvbGxvd2luZzpcbiAqXG4gKiBgY29udGV4dGAgLSBib3RoLCB0ZW1wbGF0ZSBhbmQgY29tcG9uZW50IG1heSByZWNlaXZlIGRhdGEgdGhyb3VnaCBgY29uZmlnLmNvbnRleHRgIHByb3BlcnR5LlxuICogRm9yIGNvbXBvbmVudHMsIHRoaXMgZGF0YSB3aWxsIGJlIGFzc2lnbmVkIHRocm91Z2ggaW5wdXRzLlxuICogRm9yIHRlbXBsYXRlcywgeW91IGNhbiBhY2Nlc3MgaXQgaW5zaWRlIHRlbXBsYXRlIGFzICRpbXBsaWNpdC5cbiAqXG4gKiBgYGB0c1xuICogdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4odGVtcGxhdGUsIHsgY29udGV4dDogJ3Bhc3MgZGF0YSBpbiB0ZW1wbGF0ZScgfSk7XG4gKiBgYGBcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgbGV0LXNvbWUtYWRkaXRpb25hbC1kYXRhPlxuICogICB7eyBzb21lLWFkZGl0aW9uYWwtZGF0YSB9fVxuICogPG5nLXRlbXBsYXRlLz5cbiAqIGBgYFxuICpcbiAqIGBoYXNCYWNrZHJvcGAgLSBkZXRlcm1pbmVzIGlzIHNlcnZpY2UgaGF2ZSB0byByZW5kZXIgYmFja2Ryb3AgdW5kZXIgdGhlIGRpYWxvZy5cbiAqIERlZmF1bHQgaXMgdHJ1ZS5cbiAqIEBzdGFja2VkLWV4YW1wbGUoQmFja2Ryb3AsIGRpYWxvZy9kaWFsb2ctaGFzLWJhY2tkcm9wLmNvbXBvbmVudClcbiAqXG4gKiBgY2xvc2VPbkJhY2tkcm9wQ2xpY2tgIC0gY2xvc2UgZGlhbG9nIG9uIGJhY2tkcm9wIGNsaWNrIGlmIHRydWUuXG4gKiBEZWZhdWx0IGlzIHRydWUuXG4gKiBAc3RhY2tlZC1leGFtcGxlKEJhY2tkcm9wIGNsaWNrLCBkaWFsb2cvZGlhbG9nLWJhY2tkcm9wLWNsaWNrLmNvbXBvbmVudClcbiAqXG4gKiBgY2xvc2VPbkVzY2AgLSBjbG9zZSBkaWFsb2cgb24gZXNjYXBlIGJ1dHRvbiBvbiB0aGUga2V5Ym9hcmQuXG4gKiBEZWZhdWx0IGlzIHRydWUuXG4gKiBAc3RhY2tlZC1leGFtcGxlKEVzY2FwZSBoaXQsIGRpYWxvZy9kaWFsb2ctZXNjLmNvbXBvbmVudClcbiAqXG4gKiBgaGFzU2Nyb2xsYCAtIERpc2FibGVzIHNjcm9sbCBvbiBjb250ZW50IHVuZGVyIGRpYWxvZyBpZiB0cnVlIGFuZCBkb2VzIG5vdGhpbmcgb3RoZXJ3aXNlLlxuICogRGVmYXVsdCBpcyBmYWxzZS5cbiAqIFBsZWFzZSwgb3BlbiBkaWFsb2dzIGluIHRoZSBzZXBhcmF0ZSB3aW5kb3cgYW5kIHRyeSB0byBzY3JvbGwuXG4gKiBAc3RhY2tlZC1leGFtcGxlKFNjcm9sbCwgZGlhbG9nL2RpYWxvZy1zY3JvbGwuY29tcG9uZW50KVxuICpcbiAqIGBhdXRvRm9jdXNgIC0gRm9jdXNlcyBkaWFsb2cgYXV0b21hdGljYWxseSBhZnRlciBvcGVuIGlmIHRydWUuIEl0J3MgdXNlZnVsIHRvIHByZXZlbnQgbWlzY2xpY2tzIG9uXG4gKiB0cmlnZ2VyIGVsZW1lbnRzIGFuZCBvcGVuaW5nIG11bHRpcGxlIGRpYWxvZ3MuXG4gKiBEZWZhdWx0IGlzIHRydWUuXG4gKlxuICogQXMgeW91IGNhbiBzZWUsIGlmIHlvdSBvcGVuIGRpYWxvZyB3aXRoIGF1dG8gZm9jdXMgZGlhbG9nIHdpbGwgZm9jdXMgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIG9yIGp1c3QgYmx1ciBwcmV2aW91c2x5IGZvY3VzZWQgYXV0b21hdGljYWxseS5cbiAqIE90aGVyd2lzZSwgd2l0aG91dCBhdXRvIGZvY3VzLCB0aGUgZm9jdXMgd2lsbCBzdGF5IG9uIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudC5cbiAqIFBsZWFzZSwgb3BlbiBkaWFsb2dzIGluIHRoZSBzZXBhcmF0ZSB3aW5kb3cgYW5kIHRyeSB0byBjbGljayBvbiB0aGUgYnV0dG9uIHdpdGhvdXQgZm9jdXNcbiAqIGFuZCB0aGVuIGhpdCBzcGFjZSBhbnkgdGltZXMuIE11bHRpcGxlIHNhbWUgZGlhbG9ncyB3aWxsIGJlIG9wZW5lZC5cbiAqIEBzdGFja2VkLWV4YW1wbGUoQXV0byBmb2N1cywgZGlhbG9nL2RpYWxvZy1hdXRvLWZvY3VzLmNvbXBvbmVudClcbiAqICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChOQl9ET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50LFxuICAgICAgICAgICAgICBASW5qZWN0KE5CX0RJQUxPR19DT05GSUcpIHByb3RlY3RlZCBnbG9iYWxDb25maWcsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIG92ZXJsYXk6IE5iT3ZlcmxheVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIG5ldyBpbnN0YW5jZSBvZiB0aGUgZGlhbG9nLCBtYXkgcmVjZWl2ZSBvcHRpb25hbCBjb25maWcuXG4gICAqICovXG4gIG9wZW48VD4oY29udGVudDogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxuICAgICAgICAgIHVzZXJDb25maWc6IFBhcnRpYWw8TmJEaWFsb2dDb25maWc8UGFydGlhbDxUPiB8IHN0cmluZz4+ID0ge30pOiBOYkRpYWxvZ1JlZjxUPiB7XG4gICAgY29uc3QgY29uZmlnID0gbmV3IE5iRGlhbG9nQ29uZmlnKHsgLi4udGhpcy5nbG9iYWxDb25maWcsIC4uLnVzZXJDb25maWcgfSk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheShjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IG5ldyBOYkRpYWxvZ1JlZjxUPihvdmVybGF5UmVmKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcihjb25maWcsIG92ZXJsYXlSZWYpO1xuICAgIHRoaXMuY3JlYXRlQ29udGVudChjb25maWcsIGNvbnRlbnQsIGNvbnRhaW5lciwgZGlhbG9nUmVmKTtcblxuICAgIHRoaXMucmVnaXN0ZXJDbG9zZUxpc3RlbmVycyhjb25maWcsIG92ZXJsYXlSZWYsIGRpYWxvZ1JlZik7XG5cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU92ZXJsYXkoY29uZmlnOiBOYkRpYWxvZ0NvbmZpZyk6IE5iT3ZlcmxheVJlZiB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpO1xuICAgIGNvbnN0IHNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5jcmVhdGVTY3JvbGxTdHJhdGVneShjb25maWcuaGFzU2Nyb2xsKTtcblxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBzY3JvbGxTdHJhdGVneSxcbiAgICAgIGhhc0JhY2tkcm9wOiBjb25maWcuaGFzQmFja2Ryb3AsXG4gICAgICBiYWNrZHJvcENsYXNzOiBjb25maWcuYmFja2Ryb3BDbGFzcyxcbiAgICAgIHBhbmVsQ2xhc3M6IGNvbmZpZy5kaWFsb2dDbGFzcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCk6IE5iR2xvYmFsUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25CdWlsZGVyXG4gICAgICAuZ2xvYmFsKClcbiAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KClcbiAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVTY3JvbGxTdHJhdGVneShoYXNTY3JvbGw6IGJvb2xlYW4pOiBOYlNjcm9sbFN0cmF0ZWd5IHtcbiAgICBpZiAoaGFzU2Nyb2xsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMubm9vcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQ29udGFpbmVyKGNvbmZpZzogTmJEaWFsb2dDb25maWcsIG92ZXJsYXlSZWY6IE5iT3ZlcmxheVJlZik6IE5iRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgICBjb25zdCBpbmplY3RvciA9IG5ldyBOYlBvcnRhbEluamVjdG9yKHRoaXMuY3JlYXRlSW5qZWN0b3IoY29uZmlnKSwgbmV3IFdlYWtNYXAoW1tOYkRpYWxvZ0NvbmZpZywgY29uZmlnXV0pKTtcbiAgICBjb25zdCBjb250YWluZXJQb3J0YWwgPSBuZXcgTmJDb21wb25lbnRQb3J0YWwoTmJEaWFsb2dDb250YWluZXJDb21wb25lbnQsIG51bGwsIGluamVjdG9yLCB0aGlzLmNmcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gb3ZlcmxheVJlZi5hdHRhY2goY29udGFpbmVyUG9ydGFsKTtcbiAgICByZXR1cm4gY29udGFpbmVyUmVmLmluc3RhbmNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbnRlbnQ8VD4oY29uZmlnOiBOYkRpYWxvZ0NvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IE5iRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dSZWY6IE5iRGlhbG9nUmVmPFQ+KSB7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgcG9ydGFsID0gdGhpcy5jcmVhdGVUZW1wbGF0ZVBvcnRhbChjb25maWcsIGNvbnRlbnQsIGRpYWxvZ1JlZik7XG4gICAgICBjb250YWluZXIuYXR0YWNoVGVtcGxhdGVQb3J0YWwocG9ydGFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9ydGFsID0gdGhpcy5jcmVhdGVDb21wb25lbnRQb3J0YWwoY29uZmlnLCBjb250ZW50LCBkaWFsb2dSZWYpO1xuICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudFJlZiA9IGNvbnRhaW5lci5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcblxuICAgICAgaWYgKGNvbmZpZy5jb250ZXh0KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGlhbG9nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSwgeyAuLi5jb25maWcuY29udGV4dCB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVUZW1wbGF0ZVBvcnRhbDxUPihjb25maWc6IE5iRGlhbG9nQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogVGVtcGxhdGVSZWY8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dSZWY6IE5iRGlhbG9nUmVmPFQ+KTogTmJUZW1wbGF0ZVBvcnRhbCB7XG4gICAgcmV0dXJuIG5ldyBOYlRlbXBsYXRlUG9ydGFsKGNvbnRlbnQsIG51bGwsIDxhbnk+eyAkaW1wbGljaXQ6IGNvbmZpZy5jb250ZXh0LCBkaWFsb2dSZWYgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2UncmUgY3JlYXRpbmcgcG9ydGFsIHdpdGggY3VzdG9tIGluamVjdG9yIHByb3ZpZGVkIHRocm91Z2ggY29uZmlnIG9yIHVzaW5nIGdsb2JhbCBpbmplY3Rvci5cbiAgICogVGhpcyBhcHByb2FjaCBwcm92aWRlcyB1cyBjYXBhYmlsaXR5IGluamVjdCBgTmJEaWFsb2dSZWZgIGluIGRpYWxvZyBjb21wb25lbnQuXG4gICAqICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnRQb3J0YWw8VD4oY29uZmlnOiBOYkRpYWxvZ0NvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBUeXBlPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1JlZjogTmJEaWFsb2dSZWY8VD4pOiBOYkNvbXBvbmVudFBvcnRhbCB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUluamVjdG9yKGNvbmZpZyk7XG4gICAgY29uc3QgcG9ydGFsSW5qZWN0b3IgPSBuZXcgTmJQb3J0YWxJbmplY3RvcihpbmplY3RvciwgbmV3IFdlYWtNYXAoW1tOYkRpYWxvZ1JlZiwgZGlhbG9nUmVmXV0pKTtcbiAgICByZXR1cm4gbmV3IE5iQ29tcG9uZW50UG9ydGFsKGNvbnRlbnQsIGNvbmZpZy52aWV3Q29udGFpbmVyUmVmLCBwb3J0YWxJbmplY3Rvcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSW5qZWN0b3IoY29uZmlnOiBOYkRpYWxvZ0NvbmZpZyk6IEluamVjdG9yIHtcbiAgICByZXR1cm4gY29uZmlnLnZpZXdDb250YWluZXJSZWYgJiYgY29uZmlnLnZpZXdDb250YWluZXJSZWYuaW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvcjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlckNsb3NlTGlzdGVuZXJzPFQ+KGNvbmZpZzogTmJEaWFsb2dDb25maWcsIG92ZXJsYXlSZWY6IE5iT3ZlcmxheVJlZiwgZGlhbG9nUmVmOiBOYkRpYWxvZ1JlZjxUPikge1xuICAgIGlmIChjb25maWcuY2xvc2VPbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiBkaWFsb2dSZWYuY2xvc2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jbG9zZU9uRXNjKSB7XG4gICAgICBvYnNlcnZhYmxlRnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KHRoaXMuZG9jdW1lbnQsICdrZXl1cCcpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGV2ZW50LmtleUNvZGUgPT09IDI3KSxcbiAgICAgICAgICB0YWtlVW50aWwoZGlhbG9nUmVmLm9uQ2xvc2UpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gZGlhbG9nUmVmLmNsb3NlKCkpO1xuICAgIH1cbiAgfVxufVxuIl19