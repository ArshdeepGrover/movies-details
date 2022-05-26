import { ComponentFactoryResolver, ComponentRef, NgZone, Type } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { NbAdjustableConnectedPositionStrategy, NbPosition } from '../overlay-position';
import { NbRenderableContainer } from '../overlay-container';
import { NbOverlayContent, NbOverlayService } from '../overlay-service';
import { NbOverlayRef, NbOverlayContainer, NbOverlayConfig } from '../mapping';
import * as i0 from "@angular/core";
export interface NbDynamicOverlayController {
    show(): any;
    hide(): any;
    toggle(): any;
    rebuild(): any;
}
export declare class NbDynamicOverlay {
    protected overlay: NbOverlayService;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected zone: NgZone;
    protected overlayContainer: NbOverlayContainer;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<NbRenderableContainer>;
    protected componentType: Type<NbRenderableContainer>;
    protected context: Object;
    protected content: NbOverlayContent;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayConfig: NbOverlayConfig;
    protected lastAppliedPosition: NbPosition;
    protected disabled: boolean;
    protected positionStrategyChange$: Subject<void>;
    protected isShown$: BehaviorSubject<boolean>;
    protected destroy$: Subject<void>;
    protected overlayDestroy$: Subject<import("@angular/cdk/overlay").OverlayRef>;
    get isAttached(): boolean;
    get isShown(): Observable<boolean>;
    constructor(overlay: NbOverlayService, componentFactoryResolver: ComponentFactoryResolver, zone: NgZone, overlayContainer: NbOverlayContainer);
    create(componentType: Type<NbRenderableContainer>, content: NbOverlayContent, context: Object, positionStrategy: NbAdjustableConnectedPositionStrategy, overlayConfig?: NbOverlayConfig, disabled?: boolean): this;
    setContent(content: NbOverlayContent): void;
    setContext(context: Object): void;
    setContentAndContext(content: NbOverlayContent, context: Object): void;
    setComponent(componentType: Type<NbRenderableContainer>): void;
    setPositionStrategy(positionStrategy: NbAdjustableConnectedPositionStrategy): void;
    setOverlayConfig(overlayConfig: NbOverlayConfig): void;
    setDisabled(disabled: boolean): void;
    show(): any;
    hide(): void;
    toggle(): void;
    dispose(): void;
    getContainer(): ComponentRef<NbRenderableContainer>;
    protected createOverlay(): void;
    protected renderContainer(): void;
    protected updateContext(): void;
    protected createContainerContext(): Object;
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    protected updatePositionWhenStable(overlay: NbOverlayRef): void;
    protected updatePosition(): void;
    protected hasOverlayInContainer(): boolean;
    protected disposeOverlayRef(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDynamicOverlay, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbDynamicOverlay>;
}
