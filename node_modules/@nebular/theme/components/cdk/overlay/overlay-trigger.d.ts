import { ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare type NbTriggerValues = 'noop' | 'click' | 'hover' | 'hint' | 'focus';
export declare enum NbTrigger {
    NOOP = "noop",
    CLICK = "click",
    HOVER = "hover",
    HINT = "hint",
    FOCUS = "focus"
}
/**
 * Provides entity with two event stream: show and hide.
 * Each stream provides different events depends on implementation.
 * We have three main trigger strategies: click, hint and hover.
 * */
export interface NbTriggerStrategy {
    show$: Observable<never | Event>;
    hide$: Observable<never | Event>;
    destroy(): any;
}
/**
 * TODO maybe we have to use renderer.listen instead of observableFromEvent?
 * Renderer provides capability use it in service worker, ssr and so on.
 * */
export declare abstract class NbTriggerStrategyBase implements NbTriggerStrategy {
    protected document: Document;
    protected host: HTMLElement;
    protected container: () => ComponentRef<any>;
    destroy(): void;
    protected destroyed$: Subject<void>;
    protected isNotOnHostOrContainer(element: Element): boolean;
    protected isOnHostOrContainer(element: Element): boolean;
    protected isOnHost(element: Element): boolean;
    protected isOnContainer(element: Element): boolean;
    abstract show$: Observable<Event>;
    abstract hide$: Observable<Event>;
    constructor(document: Document, host: HTMLElement, container: () => ComponentRef<any>);
}
/**
 * Creates show and hide event streams.
 * Fires toggle event when the click was performed on the host element.
 * Fires close event when the click was performed on the document but
 * not on the host or container.
 * */
export declare class NbClickTriggerStrategy extends NbTriggerStrategyBase {
    protected click$: Observable<[boolean, Event]>;
    readonly show$: Observable<Event>;
    readonly hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element and stops out of the host and popover container.
 * */
export declare class NbHoverTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a mouse hovers over the host element and stay over at least 100 milliseconds.
 * Fires close event when the mouse leaves the host element.
 * */
export declare class NbHintTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates show and hide event streams.
 * Fires open event when a focus is on the host element and stay over at least 100 milliseconds.
 * Fires close event when the focus leaves the host element.
 * */
export declare class NbFocusTriggerStrategy extends NbTriggerStrategyBase {
    protected focusOut$: Observable<Event>;
    protected clickIn$: Observable<Event>;
    protected clickOut$: Observable<Event>;
    protected tabKeyPress$: Observable<Event>;
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
/**
 * Creates empty show and hide event streams.
 * */
export declare class NbNoopTriggerStrategy extends NbTriggerStrategyBase {
    show$: Observable<Event>;
    hide$: Observable<Event>;
}
export declare class NbTriggerStrategyBuilderService {
    protected _document: any;
    protected _host: HTMLElement;
    protected _container: () => ComponentRef<any>;
    protected _trigger: NbTrigger;
    constructor(_document: any);
    trigger(trigger: NbTrigger): this;
    host(host: HTMLElement): this;
    container(container: () => ComponentRef<any>): this;
    build(): NbTriggerStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTriggerStrategyBuilderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbTriggerStrategyBuilderService>;
}
