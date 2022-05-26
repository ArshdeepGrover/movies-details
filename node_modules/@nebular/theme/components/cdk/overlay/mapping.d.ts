import { ModuleWithProviders, TemplateRef, ViewContainerRef } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ComponentType, ConnectedOverlayPositionChange, ConnectedPosition, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayPositionBuilder, OverlayRef, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay';
import { NbScrollStrategyOptions } from '../adapter/block-scroll-strategy-adapter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/portal";
export declare class NbPortalDirective extends CdkPortal {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPortalDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPortalDirective, "[nbPortal]", never, {}, {}, never>;
}
export declare class NbPortalOutletDirective extends CdkPortalOutlet {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPortalOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbPortalOutletDirective, "[nbPortalOutlet]", never, {}, {}, never>;
}
export declare class NbComponentPortal<T = any> extends ComponentPortal<T> {
}
export declare class NbOverlay extends Overlay {
    scrollStrategies: NbScrollStrategyOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlay, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlay>;
}
export declare class NbOverlayPositionBuilder extends OverlayPositionBuilder {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayPositionBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayPositionBuilder>;
}
export declare class NbTemplatePortal<T = any> extends TemplatePortal<T> {
    constructor(template: TemplateRef<T>, viewContainerRef?: ViewContainerRef, context?: T);
}
export declare class NbOverlayContainer extends OverlayContainer {
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayContainer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbOverlayContainer>;
}
export declare class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
export declare class NbPortalInjector extends PortalInjector {
}
export declare type NbPortal<T = any> = Portal<T>;
export declare type NbOverlayRef = OverlayRef;
export declare type NbComponentType<T = any> = ComponentType<T>;
export declare type NbPositionStrategy = PositionStrategy;
export declare type NbConnectedPosition = ConnectedPosition;
export declare type NbConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
export declare type NbConnectionPositionPair = ConnectionPositionPair;
export declare type NbOverlayConfig = OverlayConfig;
export declare type NbScrollStrategy = ScrollStrategy;
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
export declare class NbCdkMappingModule {
    static forRoot(): ModuleWithProviders<NbCdkMappingModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCdkMappingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbCdkMappingModule, [typeof NbPortalDirective, typeof NbPortalOutletDirective], [typeof i1.OverlayModule, typeof i2.PortalModule], [typeof i1.OverlayModule, typeof i2.PortalModule, typeof NbPortalDirective, typeof NbPortalOutletDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbCdkMappingModule>;
}
