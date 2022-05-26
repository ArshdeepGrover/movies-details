import { ElementRef } from '@angular/core';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { NbConnectedPosition, NbFlexibleConnectedPositionStrategy, NbOverlayPositionBuilder, NbOverlayRef, NbPositionStrategy } from './mapping';
import { NbPlatform } from '../platform/platform-service';
import { NbOverlayContainerAdapter } from '../adapter/overlay-container-adapter';
import { NbViewportRulerAdapter } from '../adapter/viewport-ruler-adapter';
import { NbGlobalLogicalPosition } from './position-helper';
import { NbLayoutDirection } from '../../../services/direction.service';
import * as i0 from "@angular/core";
export declare type NbAdjustmentValues = 'noop' | 'clockwise' | 'counterclockwise' | 'vertical' | 'horizontal';
export declare enum NbAdjustment {
    NOOP = "noop",
    CLOCKWISE = "clockwise",
    COUNTERCLOCKWISE = "counterclockwise",
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
export declare type NbPositionValues = 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end' | 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' | 'end-top' | 'end-bottom' | 'start-top' | 'start-bottom';
export declare enum NbPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    START = "start",
    END = "end",
    TOP_END = "top-end",
    TOP_START = "top-start",
    BOTTOM_END = "bottom-end",
    BOTTOM_START = "bottom-start",
    END_TOP = "end-top",
    END_BOTTOM = "end-bottom",
    START_TOP = "start-top",
    START_BOTTOM = "start-bottom"
}
/**
 * The main idea of the adjustable connected strategy is to provide predefined set of positions for your overlay.
 * You have to provide adjustment and appropriate strategy will be chosen in runtime.
 * */
export declare class NbAdjustableConnectedPositionStrategy extends NbFlexibleConnectedPositionStrategy implements NbPositionStrategy {
    protected _position: NbPosition;
    protected _offset: number;
    protected _adjustment: NbAdjustment;
    protected _direction: NbLayoutDirection | undefined;
    protected appliedPositions: {
        key: NbPosition;
        connectedPosition: NbConnectedPosition;
    }[];
    readonly positionChange: Observable<NbPosition>;
    attach(overlayRef: NbOverlayRef): void;
    direction(direction: NbLayoutDirection): this;
    apply(): void;
    position(position: NbPosition): this;
    adjustment(adjustment: NbAdjustment): this;
    offset(offset: number): this;
    protected applyPositions(): void;
    protected createPositions(): NbPosition[];
    protected mapToLogicalPosition(position: NbPosition): NbPosition;
    protected persistChosenPositions(positions: NbPosition[]): void;
    protected reorderPreferredPositions(positions: NbPosition[]): NbPosition[];
}
export declare class NbGlobalPositionStrategy extends GlobalPositionStrategy {
    position(position: NbGlobalLogicalPosition): this;
}
export declare class NbPositionBuilderService {
    protected document: any;
    protected viewportRuler: NbViewportRulerAdapter;
    protected platform: NbPlatform;
    protected positionBuilder: NbOverlayPositionBuilder;
    protected overlayContainer: NbOverlayContainerAdapter;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, platform: NbPlatform, positionBuilder: NbOverlayPositionBuilder, overlayContainer: NbOverlayContainerAdapter);
    global(): NbGlobalPositionStrategy;
    connectedTo(elementRef: ElementRef): NbAdjustableConnectedPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbPositionBuilderService>;
}
