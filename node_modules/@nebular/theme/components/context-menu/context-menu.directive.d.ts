/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ComponentRef, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NbDynamicOverlayController } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbOverlayConfig, NbOverlayRef } from '../cdk/overlay/mapping';
import { NbAdjustableConnectedPositionStrategy, NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger, NbTriggerValues } from '../cdk/overlay/overlay-trigger';
import { NbMenuItem, NbMenuService } from '../menu/menu.service';
import * as i0 from "@angular/core";
export interface NbContextMenuContext {
    items: NbMenuItem[];
    tag: string;
    position: NbPosition;
}
/**
 * Full featured context menu directive.
 *
 * @stacked-example(Showcase, context-menu/context-menu-showcase.component)
 *
 * Just pass menu items array:
 *
 * ```html
 * <button [nbContextMenu]="items"></button>
 * ...
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * ### Installation
 *
 * Import `NbContextMenuModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbContextMenuModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * Also make sure `NbMenuModule` is imported to your `app.module`.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbMenuModule.forRoot(),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * If you want to handle context menu clicks you have to pass `nbContextMenuTag`
 * param and register to events using NbMenuService.
 * `NbContextMenu` renders plain `NbMenu` inside, so
 * you have to work with it just like with `NbMenu` component:
 *
 * @stacked-example(Menu item click, context-menu/context-menu-click.component)
 *
 * Context menu has different placements, such as: top, bottom, left and right
 * which can be used as following:
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuPlacement="right"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 *
 * By default context menu will try to adjust itself to maximally fit viewport
 * and provide the best user experience. It will try to change position of the context menu.
 * If you wanna disable this behaviour just set it falsy value.
 *
 * ```html
 * <button [nbContextMenu]="items" nbContextMenuAdjustment="counterclockwise"></button>
 * ```
 *
 * ```ts
 * items = [{ title: 'Profile' }, { title: 'Log out' }];
 * ```
 * Context menu has a number of triggers which provides an ability to show and hide the component in different ways:
 *
 * - Click mode shows the component when a user clicks on the host element and hides when the user clicks
 * somewhere on the document outside the component.
 * - Hint provides capability to show the component when the user hovers over the host element
 * and hide when the user hovers out of the host.
 * - Hover works like hint mode with one exception - when the user moves mouse from host element to
 * the container element the component remains open, so that it is possible to interact with it content.
 * - Focus mode is applied when user focuses the element.
 * - Noop mode - the component won't react to the user interaction.
 *
 * @stacked-example(Available Triggers, context-menu/context-menu-modes.component.html)
 *
 * Noop mode is especially useful when you need to control Popover programmatically, for example show/hide
 * as a result of some third-party action, like HTTP request or validation check:
 *
 * @stacked-example(Manual Control, context-menu/context-menu-noop.component)
 *
 * @stacked-example(Manual Control, context-menu/context-menu-right-click.component)
 * */
export declare class NbContextMenuDirective implements NbDynamicOverlayController, OnChanges, AfterViewInit, OnDestroy, OnInit {
    private hostRef;
    private menuService;
    private dynamicOverlayHandler;
    contextMenuHost: boolean;
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    get position(): NbPosition;
    set position(value: NbPosition);
    _position: NbPosition;
    /**
     * Container position will be changes automatically based on this strategy if container can't fit view port.
     * Set this property to any falsy value if you want to disable automatically adjustment.
     * Available values: clockwise, counterclockwise.
     * */
    adjustment: NbAdjustment;
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    get tag(): string;
    set tag(value: string);
    _tag: string;
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    get items(): NbMenuItem[];
    set items(items: NbMenuItem[]);
    /**
     * Describes when the container will be shown.
     * Available options: `click`, `hover`, `hint`, `focus` and `noop`
     * */
    trigger: NbTrigger;
    static ngAcceptInputType_trigger: NbTriggerValues;
    get contextMenuClass(): string;
    set contextMenuClass(value: string);
    _contextMenuClass: string;
    protected ref: NbOverlayRef;
    protected container: ComponentRef<any>;
    protected positionStrategy: NbAdjustableConnectedPositionStrategy;
    protected overlayConfig: NbOverlayConfig;
    protected overlayContext: NbContextMenuContext;
    protected destroy$: Subject<void>;
    private _items;
    private dynamicOverlay;
    constructor(hostRef: ElementRef, menuService: NbMenuService, dynamicOverlayHandler: NbDynamicOverlayHandler);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    rebuild(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    ngOnDestroy(): void;
    protected configureDynamicOverlay(): NbDynamicOverlayHandler;
    private validateItems;
    private subscribeOnItemClick;
    protected updateOverlayContext(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbContextMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbContextMenuDirective, "[nbContextMenu]", never, { "position": "nbContextMenuPlacement"; "adjustment": "nbContextMenuAdjustment"; "tag": "nbContextMenuTag"; "items": "nbContextMenu"; "trigger": "nbContextMenuTrigger"; "contextMenuClass": "nbContextMenuClass"; }, {}, never>;
}
