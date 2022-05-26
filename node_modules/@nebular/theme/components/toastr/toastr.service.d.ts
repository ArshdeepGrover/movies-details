/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NbOverlayRef } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbGlobalLogicalPosition, NbGlobalPosition, NbPositionHelper } from '../cdk/overlay/position-helper';
import { NbToastrContainerComponent } from './toastr-container.component';
import { NbToastrConfig } from './toastr-config';
import { NbToast } from './model';
import { NbToastComponent } from './toast.component';
import * as i0 from "@angular/core";
export declare class NbToastRef {
    private toastContainer;
    private toast;
    toastInstance: NbToastComponent;
    constructor(toastContainer: NbToastContainer, toast: NbToast);
    close(): void;
    onClose(): Observable<void>;
    onClick(): Observable<void>;
}
export declare class NbToastContainer {
    protected position: NbGlobalPosition;
    protected containerRef: ComponentRef<NbToastrContainerComponent>;
    protected positionHelper: NbPositionHelper;
    protected toasts: NbToast[];
    protected prevToast: NbToast;
    get nativeElement(): any;
    constructor(position: NbGlobalPosition, containerRef: ComponentRef<NbToastrContainerComponent>, positionHelper: NbPositionHelper);
    attach(toast: NbToast): NbToastRef;
    destroy(toast: NbToast): void;
    protected isDuplicate(toast: NbToast): boolean;
    protected isDuplicatePrevious(toast: NbToast): boolean;
    protected isDuplicateAmongAll(toast: NbToast): boolean;
    protected toastDuplicateCompareFunc: (t1: NbToast, t2: NbToast) => boolean;
    protected removeToastIfLimitReached(toast: NbToast): void;
    protected attachToast(toast: NbToast): NbToastComponent;
    protected attachToTop(toast: NbToast): NbToastComponent;
    protected attachToBottom(toast: NbToast): NbToastComponent;
    protected setDestroyTimeout(toast: NbToast): void;
    protected subscribeOnClick(toastComponent: NbToastComponent, toast: NbToast): void;
    protected updateContainer(): void;
}
interface NbToastrOverlayWithContainer {
    overlayRef: NbOverlayRef;
    toastrContainer: NbToastContainer;
}
export declare class NbToastrContainerRegistry {
    protected overlay: NbOverlayService;
    protected positionBuilder: NbPositionBuilderService;
    protected positionHelper: NbPositionHelper;
    protected cfr: ComponentFactoryResolver;
    protected document: any;
    protected overlays: Map<NbGlobalPosition, NbToastrOverlayWithContainer>;
    constructor(overlay: NbOverlayService, positionBuilder: NbPositionBuilderService, positionHelper: NbPositionHelper, cfr: ComponentFactoryResolver, document: any);
    get(position: NbGlobalPosition): NbToastContainer;
    protected instantiateContainer(position: NbGlobalLogicalPosition): void;
    protected createContainer(position: NbGlobalLogicalPosition): NbToastrOverlayWithContainer;
    protected addClassToOverlayHost(overlayRef: NbOverlayRef): void;
    protected existsInDom(toastContainer: NbToastContainer): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrContainerRegistry, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbToastrContainerRegistry>;
}
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
export declare class NbToastrService {
    protected globalConfig: NbToastrConfig;
    protected containerRegistry: NbToastrContainerRegistry;
    constructor(globalConfig: NbToastrConfig, containerRegistry: NbToastrContainerRegistry);
    /**
     * Shows toast with message, title and user config.
     * */
    show(message: any, title?: any, userConfig?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows success toast with message, title and user config.
     * */
    success(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows info toast with message, title and user config.
     * */
    info(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows warning toast with message, title and user config.
     * */
    warning(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows primary toast with message, title and user config.
     * */
    primary(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows danger toast with message, title and user config.
     * */
    danger(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows default toast with message, title and user config.
     * */
    default(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    /**
     * Shows control toast with message, title and user config.
     * */
    control(message: any, title?: any, config?: Partial<NbToastrConfig>): NbToastRef;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbToastrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbToastrService>;
}
export {};
