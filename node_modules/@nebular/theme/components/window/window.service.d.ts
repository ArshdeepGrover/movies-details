import { ComponentFactoryResolver, ComponentRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { NbComponentType, NbOverlayPositionBuilder, NbOverlayRef } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbBlockScrollStrategyAdapter } from '../cdk/adapter/block-scroll-strategy-adapter';
import { NbWindowConfig } from './window.options';
import { NbWindowRef } from './window-ref';
import { NbWindowComponent } from './window.component';
import * as i0 from "@angular/core";
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
export declare class NbWindowService {
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected overlayService: NbOverlayService;
    protected overlayPositionBuilder: NbOverlayPositionBuilder;
    protected blockScrollStrategy: NbBlockScrollStrategyAdapter;
    protected readonly defaultWindowsConfig: NbWindowConfig;
    protected cfr: ComponentFactoryResolver;
    protected document: Document;
    protected overlayRef: NbOverlayRef;
    protected windowsContainerViewRef: ViewContainerRef;
    protected openWindows: NbWindowRef[];
    constructor(componentFactoryResolver: ComponentFactoryResolver, overlayService: NbOverlayService, overlayPositionBuilder: NbOverlayPositionBuilder, blockScrollStrategy: NbBlockScrollStrategyAdapter, defaultWindowsConfig: NbWindowConfig, cfr: ComponentFactoryResolver, document: any);
    /**
     * Opens new window.
     * @param windowContent
     * @param windowConfig
     * */
    open(windowContent: TemplateRef<any> | NbComponentType, windowConfig?: Partial<NbWindowConfig>): NbWindowRef;
    protected shouldCreateWindowsContainer(): boolean;
    protected createWindowsContainer(): void;
    protected appendWindow(content: TemplateRef<any> | NbComponentType, config: NbWindowConfig, windowRef: NbWindowRef): ComponentRef<NbWindowComponent>;
    protected subscribeToEvents(windowRef: NbWindowRef): void;
    protected checkAndUpdateOverlay(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbWindowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbWindowService>;
}
