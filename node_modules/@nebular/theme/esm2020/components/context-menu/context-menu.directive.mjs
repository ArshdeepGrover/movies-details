/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostBinding, Input, } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbDynamicOverlay } from '../cdk/overlay/dynamic/dynamic-overlay';
import { NbDynamicOverlayHandler } from '../cdk/overlay/dynamic/dynamic-overlay-handler';
import { NbAdjustment, NbPosition } from '../cdk/overlay/overlay-position';
import { NbTrigger } from '../cdk/overlay/overlay-trigger';
import { NbContextMenuComponent } from './context-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "../menu/menu.service";
import * as i2 from "../cdk/overlay/dynamic/dynamic-overlay-handler";
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
export class NbContextMenuDirective {
    constructor(hostRef, menuService, dynamicOverlayHandler) {
        this.hostRef = hostRef;
        this.menuService = menuService;
        this.dynamicOverlayHandler = dynamicOverlayHandler;
        this.contextMenuHost = true;
        this._position = NbPosition.BOTTOM;
        /**
         * Container position will be changes automatically based on this strategy if container can't fit view port.
         * Set this property to any falsy value if you want to disable automatically adjustment.
         * Available values: clockwise, counterclockwise.
         * */
        this.adjustment = NbAdjustment.CLOCKWISE;
        /**
         * Describes when the container will be shown.
         * Available options: `click`, `hover`, `hint`, `focus` and `noop`
         * */
        this.trigger = NbTrigger.CLICK;
        this._contextMenuClass = '';
        this.overlayConfig = { panelClass: this.contextMenuClass };
        this.overlayContext = { items: this.items, tag: this.tag, position: this.position };
        this.destroy$ = new Subject();
        this._items = [];
    }
    /**
     * Position will be calculated relatively host element based on the position.
     * Can be top, right, bottom and left.
     * */
    get position() {
        return this._position;
    }
    set position(value) {
        if (value !== this.position) {
            this._position = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Set NbMenu tag, which helps identify menu when working with NbMenuService.
     * */
    get tag() {
        return this._tag;
    }
    set tag(value) {
        if (value !== this.tag) {
            this._tag = value;
            this.updateOverlayContext();
        }
    }
    /**
     * Basic menu items, will be passed to the internal NbMenuComponent.
     * */
    get items() {
        return this._items;
    }
    set items(items) {
        this.validateItems(items);
        this._items = items;
        this.updateOverlayContext();
    }
    ;
    get contextMenuClass() {
        return this._contextMenuClass;
    }
    set contextMenuClass(value) {
        if (value !== this.contextMenuClass) {
            this._contextMenuClass = value;
            this.overlayConfig = { panelClass: this.contextMenuClass };
        }
    }
    ngOnInit() {
        this.dynamicOverlayHandler
            .host(this.hostRef)
            .componentType(NbContextMenuComponent);
    }
    ngOnChanges() {
        this.rebuild();
    }
    ngAfterViewInit() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .build();
        this.subscribeOnItemClick();
    }
    rebuild() {
        this.dynamicOverlay = this.configureDynamicOverlay()
            .rebuild();
    }
    show() {
        this.dynamicOverlay.show();
    }
    hide() {
        this.dynamicOverlay.hide();
    }
    toggle() {
        this.dynamicOverlay.toggle();
    }
    ngOnDestroy() {
        this.dynamicOverlayHandler.destroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    configureDynamicOverlay() {
        return this.dynamicOverlayHandler
            .position(this.position)
            .trigger(this.trigger)
            .adjustment(this.adjustment)
            .context(this.overlayContext)
            .overlayConfig(this.overlayConfig);
    }
    /*
     * NbMenuComponent will crash if don't pass menu items to it.
     * So, we just validating them and throw custom obvious error.
     * */
    validateItems(items) {
        if (!items || !items.length) {
            throw Error(`List of menu items expected, but given: ${items}`);
        }
    }
    subscribeOnItemClick() {
        this.menuService.onItemClick()
            .pipe(filter(({ tag }) => tag === this.tag && this.trigger !== NbTrigger.NOOP), takeUntil(this.destroy$))
            .subscribe(() => this.hide());
    }
    updateOverlayContext() {
        this.overlayContext = { items: this.items, position: this.position, tag: this.tag };
    }
}
NbContextMenuDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbMenuService }, { token: i2.NbDynamicOverlayHandler }], target: i0.ɵɵFactoryTarget.Directive });
NbContextMenuDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbContextMenuDirective, selector: "[nbContextMenu]", inputs: { position: ["nbContextMenuPlacement", "position"], adjustment: ["nbContextMenuAdjustment", "adjustment"], tag: ["nbContextMenuTag", "tag"], items: ["nbContextMenu", "items"], trigger: ["nbContextMenuTrigger", "trigger"], contextMenuClass: ["nbContextMenuClass", "contextMenuClass"] }, host: { properties: { "class.context-menu-host": "this.contextMenuHost" } }, providers: [NbDynamicOverlayHandler, NbDynamicOverlay], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbContextMenu]',
                    providers: [NbDynamicOverlayHandler, NbDynamicOverlay],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbMenuService }, { type: i2.NbDynamicOverlayHandler }]; }, propDecorators: { contextMenuHost: [{
                type: HostBinding,
                args: ['class.context-menu-host']
            }], position: [{
                type: Input,
                args: ['nbContextMenuPlacement']
            }], adjustment: [{
                type: Input,
                args: ['nbContextMenuAdjustment']
            }], tag: [{
                type: Input,
                args: ['nbContextMenuTag']
            }], items: [{
                type: Input,
                args: ['nbContextMenu']
            }], trigger: [{
                type: Input,
                args: ['nbContextMenuTrigger']
            }], contextMenuClass: [{
                type: Input,
                args: ['nbContextMenuClass']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQThCLE1BQU0sd0NBQXdDLENBQUM7QUFDdEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFekYsT0FBTyxFQUF5QyxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEgsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQVNsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFGSztBQUtMLE1BQU0sT0FBTyxzQkFBc0I7SUF1RmpDLFlBQW9CLE9BQW1CLEVBQ25CLFdBQTBCLEVBQzFCLHFCQUE4QztRQUY5QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBeUI7UUF0RmxFLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBZ0J2QixjQUFTLEdBQWUsVUFBVSxDQUFDLE1BQU0sQ0FB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QyxjQUFjLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RGLENBQUM7O21IQWpLVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiw2WkFGdEIsQ0FBQyx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQzsyRkFFM0Msc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDO2lCQUN2RDttS0FJQyxlQUFlO3NCQURkLFdBQVc7dUJBQUMseUJBQXlCO2dCQVFsQyxRQUFRO3NCQURYLEtBQUs7dUJBQUMsd0JBQXdCO2dCQWtCL0IsVUFBVTtzQkFEVCxLQUFLO3VCQUFDLHlCQUF5QjtnQkFPNUIsR0FBRztzQkFETixLQUFLO3VCQUFDLGtCQUFrQjtnQkFnQnJCLEtBQUs7c0JBRFIsS0FBSzt1QkFBQyxlQUFlO2dCQWV0QixPQUFPO3NCQUROLEtBQUs7dUJBQUMsc0JBQXNCO2dCQUt6QixnQkFBZ0I7c0JBRG5CLEtBQUs7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYkR5bmFtaWNPdmVybGF5LCBOYkR5bmFtaWNPdmVybGF5Q29udHJvbGxlciB9IGZyb20gJy4uL2Nkay9vdmVybGF5L2R5bmFtaWMvZHluYW1pYy1vdmVybGF5JztcbmltcG9ydCB7IE5iRHluYW1pY092ZXJsYXlIYW5kbGVyIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvZHluYW1pYy9keW5hbWljLW92ZXJsYXktaGFuZGxlcic7XG5pbXBvcnQgeyBOYk92ZXJsYXlDb25maWcsIE5iT3ZlcmxheVJlZiB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJBZGp1c3RhYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSwgTmJBZGp1c3RtZW50LCBOYlBvc2l0aW9uIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBOYlRyaWdnZXIsIE5iVHJpZ2dlclZhbHVlcyB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXktdHJpZ2dlcic7XG5pbXBvcnQgeyBOYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE5iTWVudUl0ZW0sIE5iTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJDb250ZXh0TWVudUNvbnRleHQge1xuICBpdGVtczogTmJNZW51SXRlbVtdO1xuICB0YWc6IHN0cmluZztcbiAgcG9zaXRpb246IE5iUG9zaXRpb247XG59XG5cbi8qKlxuICogRnVsbCBmZWF0dXJlZCBjb250ZXh0IG1lbnUgZGlyZWN0aXZlLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIGNvbnRleHQtbWVudS9jb250ZXh0LW1lbnUtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIEp1c3QgcGFzcyBtZW51IGl0ZW1zIGFycmF5OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIj48L2J1dHRvbj5cbiAqIC4uLlxuICogaXRlbXMgPSBbeyB0aXRsZTogJ1Byb2ZpbGUnIH0sIHsgdGl0bGU6ICdMb2cgb3V0JyB9XTtcbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJDb250ZXh0TWVudU1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogQWxzbyBtYWtlIHN1cmUgYE5iTWVudU1vZHVsZWAgaXMgaW1wb3J0ZWQgdG8geW91ciBgYXBwLm1vZHVsZWAuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iTWVudU1vZHVsZS5mb3JSb290KCksXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiAqIGBgYFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIElmIHlvdSB3YW50IHRvIGhhbmRsZSBjb250ZXh0IG1lbnUgY2xpY2tzIHlvdSBoYXZlIHRvIHBhc3MgYG5iQ29udGV4dE1lbnVUYWdgXG4gKiBwYXJhbSBhbmQgcmVnaXN0ZXIgdG8gZXZlbnRzIHVzaW5nIE5iTWVudVNlcnZpY2UuXG4gKiBgTmJDb250ZXh0TWVudWAgcmVuZGVycyBwbGFpbiBgTmJNZW51YCBpbnNpZGUsIHNvXG4gKiB5b3UgaGF2ZSB0byB3b3JrIHdpdGggaXQganVzdCBsaWtlIHdpdGggYE5iTWVudWAgY29tcG9uZW50OlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoTWVudSBpdGVtIGNsaWNrLCBjb250ZXh0LW1lbnUvY29udGV4dC1tZW51LWNsaWNrLmNvbXBvbmVudClcbiAqXG4gKiBDb250ZXh0IG1lbnUgaGFzIGRpZmZlcmVudCBwbGFjZW1lbnRzLCBzdWNoIGFzOiB0b3AsIGJvdHRvbSwgbGVmdCBhbmQgcmlnaHRcbiAqIHdoaWNoIGNhbiBiZSB1c2VkIGFzIGZvbGxvd2luZzpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCIgbmJDb250ZXh0TWVudVBsYWNlbWVudD1cInJpZ2h0XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBgYGB0c1xuICogaXRlbXMgPSBbeyB0aXRsZTogJ1Byb2ZpbGUnIH0sIHsgdGl0bGU6ICdMb2cgb3V0JyB9XTtcbiAqIGBgYFxuICpcbiAqIEJ5IGRlZmF1bHQgY29udGV4dCBtZW51IHdpbGwgdHJ5IHRvIGFkanVzdCBpdHNlbGYgdG8gbWF4aW1hbGx5IGZpdCB2aWV3cG9ydFxuICogYW5kIHByb3ZpZGUgdGhlIGJlc3QgdXNlciBleHBlcmllbmNlLiBJdCB3aWxsIHRyeSB0byBjaGFuZ2UgcG9zaXRpb24gb2YgdGhlIGNvbnRleHQgbWVudS5cbiAqIElmIHlvdSB3YW5uYSBkaXNhYmxlIHRoaXMgYmVoYXZpb3VyIGp1c3Qgc2V0IGl0IGZhbHN5IHZhbHVlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIiBuYkNvbnRleHRNZW51QWRqdXN0bWVudD1cImNvdW50ZXJjbG9ja3dpc2VcIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIGBgYHRzXG4gKiBpdGVtcyA9IFt7IHRpdGxlOiAnUHJvZmlsZScgfSwgeyB0aXRsZTogJ0xvZyBvdXQnIH1dO1xuICogYGBgXG4gKiBDb250ZXh0IG1lbnUgaGFzIGEgbnVtYmVyIG9mIHRyaWdnZXJzIHdoaWNoIHByb3ZpZGVzIGFuIGFiaWxpdHkgdG8gc2hvdyBhbmQgaGlkZSB0aGUgY29tcG9uZW50IGluIGRpZmZlcmVudCB3YXlzOlxuICpcbiAqIC0gQ2xpY2sgbW9kZSBzaG93cyB0aGUgY29tcG9uZW50IHdoZW4gYSB1c2VyIGNsaWNrcyBvbiB0aGUgaG9zdCBlbGVtZW50IGFuZCBoaWRlcyB3aGVuIHRoZSB1c2VyIGNsaWNrc1xuICogc29tZXdoZXJlIG9uIHRoZSBkb2N1bWVudCBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gKiAtIEhpbnQgcHJvdmlkZXMgY2FwYWJpbGl0eSB0byBzaG93IHRoZSBjb21wb25lbnQgd2hlbiB0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgaG9zdCBlbGVtZW50XG4gKiBhbmQgaGlkZSB3aGVuIHRoZSB1c2VyIGhvdmVycyBvdXQgb2YgdGhlIGhvc3QuXG4gKiAtIEhvdmVyIHdvcmtzIGxpa2UgaGludCBtb2RlIHdpdGggb25lIGV4Y2VwdGlvbiAtIHdoZW4gdGhlIHVzZXIgbW92ZXMgbW91c2UgZnJvbSBob3N0IGVsZW1lbnQgdG9cbiAqIHRoZSBjb250YWluZXIgZWxlbWVudCB0aGUgY29tcG9uZW50IHJlbWFpbnMgb3Blbiwgc28gdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBpbnRlcmFjdCB3aXRoIGl0IGNvbnRlbnQuXG4gKiAtIEZvY3VzIG1vZGUgaXMgYXBwbGllZCB3aGVuIHVzZXIgZm9jdXNlcyB0aGUgZWxlbWVudC5cbiAqIC0gTm9vcCBtb2RlIC0gdGhlIGNvbXBvbmVudCB3b24ndCByZWFjdCB0byB0aGUgdXNlciBpbnRlcmFjdGlvbi5cbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKEF2YWlsYWJsZSBUcmlnZ2VycywgY29udGV4dC1tZW51L2NvbnRleHQtbWVudS1tb2Rlcy5jb21wb25lbnQuaHRtbClcbiAqXG4gKiBOb29wIG1vZGUgaXMgZXNwZWNpYWxseSB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBjb250cm9sIFBvcG92ZXIgcHJvZ3JhbW1hdGljYWxseSwgZm9yIGV4YW1wbGUgc2hvdy9oaWRlXG4gKiBhcyBhIHJlc3VsdCBvZiBzb21lIHRoaXJkLXBhcnR5IGFjdGlvbiwgbGlrZSBIVFRQIHJlcXVlc3Qgb3IgdmFsaWRhdGlvbiBjaGVjazpcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKE1hbnVhbCBDb250cm9sLCBjb250ZXh0LW1lbnUvY29udGV4dC1tZW51LW5vb3AuY29tcG9uZW50KVxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoTWFudWFsIENvbnRyb2wsIGNvbnRleHQtbWVudS9jb250ZXh0LW1lbnUtcmlnaHQtY2xpY2suY29tcG9uZW50KVxuICogKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYkNvbnRleHRNZW51XScsXG4gIHByb3ZpZGVyczogW05iRHluYW1pY092ZXJsYXlIYW5kbGVyLCBOYkR5bmFtaWNPdmVybGF5XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDb250ZXh0TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIE5iRHluYW1pY092ZXJsYXlDb250cm9sbGVyLCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRleHQtbWVudS1ob3N0JylcbiAgY29udGV4dE1lbnVIb3N0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogUG9zaXRpb24gd2lsbCBiZSBjYWxjdWxhdGVkIHJlbGF0aXZlbHkgaG9zdCBlbGVtZW50IGJhc2VkIG9uIHRoZSBwb3NpdGlvbi5cbiAgICogQ2FuIGJlIHRvcCwgcmlnaHQsIGJvdHRvbSBhbmQgbGVmdC5cbiAgICogKi9cbiAgQElucHV0KCduYkNvbnRleHRNZW51UGxhY2VtZW50JylcbiAgZ2V0IHBvc2l0aW9uKCk6IE5iUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuICBzZXQgcG9zaXRpb24odmFsdWU6IE5iUG9zaXRpb24pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlDb250ZXh0KCk7XG4gICAgfVxuICB9XG4gIF9wb3NpdGlvbjogTmJQb3NpdGlvbiA9IE5iUG9zaXRpb24uQk9UVE9NO1xuXG4gIC8qKlxuICAgKiBDb250YWluZXIgcG9zaXRpb24gd2lsbCBiZSBjaGFuZ2VzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhpcyBzdHJhdGVneSBpZiBjb250YWluZXIgY2FuJ3QgZml0IHZpZXcgcG9ydC5cbiAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gYW55IGZhbHN5IHZhbHVlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYXV0b21hdGljYWxseSBhZGp1c3RtZW50LlxuICAgKiBBdmFpbGFibGUgdmFsdWVzOiBjbG9ja3dpc2UsIGNvdW50ZXJjbG9ja3dpc2UuXG4gICAqICovXG4gIEBJbnB1dCgnbmJDb250ZXh0TWVudUFkanVzdG1lbnQnKVxuICBhZGp1c3RtZW50OiBOYkFkanVzdG1lbnQgPSBOYkFkanVzdG1lbnQuQ0xPQ0tXSVNFO1xuXG4gIC8qKlxuICAgKiBTZXQgTmJNZW51IHRhZywgd2hpY2ggaGVscHMgaWRlbnRpZnkgbWVudSB3aGVuIHdvcmtpbmcgd2l0aCBOYk1lbnVTZXJ2aWNlLlxuICAgKiAqL1xuICBASW5wdXQoJ25iQ29udGV4dE1lbnVUYWcnKVxuICBnZXQgdGFnKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZztcbiAgfVxuICBzZXQgdGFnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudGFnKSB7XG4gICAgICB0aGlzLl90YWcgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheUNvbnRleHQoKTtcbiAgICB9XG4gIH1cbiAgX3RhZzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCYXNpYyBtZW51IGl0ZW1zLCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgaW50ZXJuYWwgTmJNZW51Q29tcG9uZW50LlxuICAgKiAqL1xuICBASW5wdXQoJ25iQ29udGV4dE1lbnUnKVxuICBnZXQgaXRlbXMoKTogTmJNZW51SXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBOYk1lbnVJdGVtW10pIHtcbiAgICB0aGlzLnZhbGlkYXRlSXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5Q29udGV4dCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgd2hlbiB0aGUgY29udGFpbmVyIHdpbGwgYmUgc2hvd24uXG4gICAqIEF2YWlsYWJsZSBvcHRpb25zOiBgY2xpY2tgLCBgaG92ZXJgLCBgaGludGAsIGBmb2N1c2AgYW5kIGBub29wYFxuICAgKiAqL1xuICBASW5wdXQoJ25iQ29udGV4dE1lbnVUcmlnZ2VyJylcbiAgdHJpZ2dlcjogTmJUcmlnZ2VyID0gTmJUcmlnZ2VyLkNMSUNLO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdHJpZ2dlcjogTmJUcmlnZ2VyVmFsdWVzO1xuXG4gIEBJbnB1dCgnbmJDb250ZXh0TWVudUNsYXNzJylcbiAgZ2V0IGNvbnRleHRNZW51Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dE1lbnVDbGFzcztcbiAgfVxuICBzZXQgY29udGV4dE1lbnVDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmNvbnRleHRNZW51Q2xhc3MpIHtcbiAgICAgIHRoaXMuX2NvbnRleHRNZW51Q2xhc3MgPSB2YWx1ZTtcbiAgICAgIHRoaXMub3ZlcmxheUNvbmZpZyA9IHsgcGFuZWxDbGFzczogdGhpcy5jb250ZXh0TWVudUNsYXNzIH07XG4gICAgfVxuICB9XG4gIF9jb250ZXh0TWVudUNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBwcm90ZWN0ZWQgcmVmOiBOYk92ZXJsYXlSZWY7XG4gIHByb3RlY3RlZCBjb250YWluZXI6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcm90ZWN0ZWQgcG9zaXRpb25TdHJhdGVneTogTmJBZGp1c3RhYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJvdGVjdGVkIG92ZXJsYXlDb25maWc6IE5iT3ZlcmxheUNvbmZpZyA9IHsgcGFuZWxDbGFzczogdGhpcy5jb250ZXh0TWVudUNsYXNzIH0gO1xuICBwcm90ZWN0ZWQgb3ZlcmxheUNvbnRleHQ6IE5iQ29udGV4dE1lbnVDb250ZXh0ID0geyBpdGVtczogdGhpcy5pdGVtcywgdGFnOiB0aGlzLnRhZywgcG9zaXRpb246IHRoaXMucG9zaXRpb24gfTtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaXRlbXM6IE5iTWVudUl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgZHluYW1pY092ZXJsYXk6IE5iRHluYW1pY092ZXJsYXk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGR5bmFtaWNPdmVybGF5SGFuZGxlcjogTmJEeW5hbWljT3ZlcmxheUhhbmRsZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXlIYW5kbGVyXG4gICAgICAuaG9zdCh0aGlzLmhvc3RSZWYpXG4gICAgICAuY29tcG9uZW50VHlwZShOYkNvbnRleHRNZW51Q29tcG9uZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmVidWlsZCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXkgPSB0aGlzLmNvbmZpZ3VyZUR5bmFtaWNPdmVybGF5KClcbiAgICAgIC5idWlsZCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlT25JdGVtQ2xpY2soKTtcbiAgfVxuXG4gIHJlYnVpbGQoKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheSA9IHRoaXMuY29uZmlndXJlRHluYW1pY092ZXJsYXkoKVxuICAgICAgLnJlYnVpbGQoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheS5zaG93KCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXkuaGlkZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZHluYW1pY092ZXJsYXkudG9nZ2xlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmR5bmFtaWNPdmVybGF5SGFuZGxlci5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZUR5bmFtaWNPdmVybGF5KCkge1xuICAgIHJldHVybiB0aGlzLmR5bmFtaWNPdmVybGF5SGFuZGxlclxuICAgICAgLnBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAudHJpZ2dlcih0aGlzLnRyaWdnZXIpXG4gICAgICAuYWRqdXN0bWVudCh0aGlzLmFkanVzdG1lbnQpXG4gICAgICAuY29udGV4dCh0aGlzLm92ZXJsYXlDb250ZXh0KVxuICAgICAgLm92ZXJsYXlDb25maWcodGhpcy5vdmVybGF5Q29uZmlnKTtcbiAgfVxuXG4gIC8qXG4gICAqIE5iTWVudUNvbXBvbmVudCB3aWxsIGNyYXNoIGlmIGRvbid0IHBhc3MgbWVudSBpdGVtcyB0byBpdC5cbiAgICogU28sIHdlIGp1c3QgdmFsaWRhdGluZyB0aGVtIGFuZCB0aHJvdyBjdXN0b20gb2J2aW91cyBlcnJvci5cbiAgICogKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUl0ZW1zKGl0ZW1zOiBOYk1lbnVJdGVtW10pIHtcbiAgICBpZiAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBMaXN0IG9mIG1lbnUgaXRlbXMgZXhwZWN0ZWQsIGJ1dCBnaXZlbjogJHtpdGVtc31gKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT25JdGVtQ2xpY2soKSB7XG4gICAgdGhpcy5tZW51U2VydmljZS5vbkl0ZW1DbGljaygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiB0YWcgPT09IHRoaXMudGFnICYmIHRoaXMudHJpZ2dlciAhPT0gTmJUcmlnZ2VyLk5PT1ApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVPdmVybGF5Q29udGV4dCgpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250ZXh0ID0geyBpdGVtczogdGhpcy5pdGVtcywgcG9zaXRpb246IHRoaXMucG9zaXRpb24sIHRhZzogdGhpcy50YWcgfTtcbiAgfVxufVxuIl19