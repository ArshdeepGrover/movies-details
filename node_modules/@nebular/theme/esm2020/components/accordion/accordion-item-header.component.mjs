/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Host, HostBinding, HostListener, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./accordion-item.component";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/common";
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export class NbAccordionItemHeaderComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get isCollapsed() {
        return this.accordionItem.collapsed;
    }
    get expanded() {
        return !this.accordionItem.collapsed;
    }
    // issue #794
    get tabbable() {
        return this.accordionItem.disabled ? '-1' : '0';
    }
    get disabled() {
        return this.accordionItem.disabled;
    }
    toggle() {
        this.accordionItem.toggle();
    }
    get state() {
        if (this.isCollapsed) {
            return 'collapsed';
        }
        return 'expanded';
    }
    ngOnInit() {
        this.accordionItem.accordionItemInvalidate
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAccordionItemHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemHeaderComponent, deps: [{ token: i1.NbAccordionItemComponent, host: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbAccordionItemHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header", host: { listeners: { "click": "toggle()", "keydown.space": "toggle()", "keydown.enter": "toggle()" }, properties: { "class.accordion-item-header-collapsed": "this.isCollapsed", "class.accordion-item-header-expanded": "this.expanded", "attr.aria-expanded": "this.expanded", "attr.tabindex": "this.tabbable", "attr.aria-disabled": "this.disabled" } }, ngImport: i0, template: `
    <ng-content select="nb-accordion-item-title"></ng-content>
    <ng-content select="nb-accordion-item-description"></ng-content>
    <ng-content></ng-content>
    <nb-icon icon="chevron-down-outline"
             pack="nebular-essentials"
             [@expansionIndicator]="state"
             *ngIf="!disabled"
             class="expansion-indicator">
    </nb-icon>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0}\n"], components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], animations: [
        trigger('expansionIndicator', [
            state('expanded', style({
                transform: 'rotate(180deg)',
            })),
            transition('collapsed => expanded', animate('100ms ease-in')),
            transition('expanded => collapsed', animate('100ms ease-out')),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-accordion-item-header', template: `
    <ng-content select="nb-accordion-item-title"></ng-content>
    <ng-content select="nb-accordion-item-description"></ng-content>
    <ng-content></ng-content>
    <nb-icon icon="chevron-down-outline"
             pack="nebular-essentials"
             [@expansionIndicator]="state"
             *ngIf="!disabled"
             class="expansion-indicator">
    </nb-icon>
  `, animations: [
                        trigger('expansionIndicator', [
                            state('expanded', style({
                                transform: 'rotate(180deg)',
                            })),
                            transition('collapsed => expanded', animate('100ms ease-in')),
                            transition('expanded => collapsed', animate('100ms ease-out')),
                        ]),
                    ], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;cursor:pointer}:host:focus{outline:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbAccordionItemComponent, decorators: [{
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { isCollapsed: [{
                type: HostBinding,
                args: ['class.accordion-item-header-collapsed']
            }], expanded: [{
                type: HostBinding,
                args: ['class.accordion-item-header-expanded']
            }, {
                type: HostBinding,
                args: ['attr.aria-expanded']
            }], tabbable: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], disabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], toggle: [{
                type: HostListener,
                args: ['click']
            }, {
                type: HostListener,
                args: ['keydown.space']
            }, {
                type: HostListener,
                args: ['keydown.enter']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLFdBQVcsRUFDWCxZQUFZLEdBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFJL0I7O0dBRUc7QUE2QkgsTUFBTSxPQUFPLDhCQUE4QjtJQXVDekMsWUFBNEIsYUFBdUMsRUFBVSxFQUFxQjtRQUF0RSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUQxRixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUV2QyxDQUFDO0lBdENELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVELElBRUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYTtJQUNiLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFLRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QjthQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzJIQW5EVSw4QkFBOEI7K0dBQTlCLDhCQUE4Qiw4WkF6Qi9COzs7Ozs7Ozs7O0dBVVQsa2ZBQ1c7UUFDVixPQUFPLENBQUMsb0JBQW9CLEVBQUU7WUFDNUIsS0FBSyxDQUNILFVBQVUsRUFDVixLQUFLLENBQUM7Z0JBQ0osU0FBUyxFQUFFLGdCQUFnQjthQUM1QixDQUFDLENBQ0g7WUFDRCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvRCxDQUFDO0tBQ0g7MkZBR1UsOEJBQThCO2tCQTVCMUMsU0FBUzsrQkFDRSwwQkFBMEIsWUFFMUI7Ozs7Ozs7Ozs7R0FVVCxjQUNXO3dCQUNWLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTs0QkFDNUIsS0FBSyxDQUNILFVBQVUsRUFDVixLQUFLLENBQUM7Z0NBQ0osU0FBUyxFQUFFLGdCQUFnQjs2QkFDNUIsQ0FBQyxDQUNIOzRCQUNELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQzdELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDL0QsQ0FBQztxQkFDSCxtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTTs7MEJBeUNsQyxJQUFJOzRFQXBDYixXQUFXO3NCQURkLFdBQVc7dUJBQUMsdUNBQXVDO2dCQU9oRCxRQUFRO3NCQUZYLFdBQVc7dUJBQUMsc0NBQXNDOztzQkFDbEQsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTzdCLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixRQUFRO3NCQURYLFdBQVc7dUJBQUMsb0JBQW9CO2dCQVFqQyxNQUFNO3NCQUhMLFlBQVk7dUJBQUMsT0FBTzs7c0JBQ3BCLFlBQVk7dUJBQUMsZUFBZTs7c0JBQzVCLFlBQVk7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYkFjY29yZGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGludGVuZGVkIHRvIGJlIHVzZWQgd2l0aGluIGA8bmItYWNjb3JkaW9uLWl0ZW0+YCBjb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWl0ZW0taGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItYWNjb3JkaW9uLWl0ZW0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItYWNjb3JkaW9uLWl0ZW0tZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuYi1pY29uIGljb249XCJjaGV2cm9uLWRvd24tb3V0bGluZVwiXG4gICAgICAgICAgICAgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiXG4gICAgICAgICAgICAgW0BleHBhbnNpb25JbmRpY2F0b3JdPVwic3RhdGVcIlxuICAgICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcbiAgICAgICAgICAgICBjbGFzcz1cImV4cGFuc2lvbi1pbmRpY2F0b3JcIj5cbiAgICA8L25iLWljb24+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbnNpb25JbmRpY2F0b3InLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2V4cGFuZGVkJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignY29sbGFwc2VkID0+IGV4cGFuZGVkJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkID0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJBY2NvcmRpb25JdGVtSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjb3JkaW9uLWl0ZW0taGVhZGVyLWNvbGxhcHNlZCcpXG4gIGdldCBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY2NvcmRpb25JdGVtLmNvbGxhcHNlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWNjb3JkaW9uLWl0ZW0taGVhZGVyLWV4cGFuZGVkJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmFjY29yZGlvbkl0ZW0uY29sbGFwc2VkO1xuICB9XG5cbiAgLy8gaXNzdWUgIzc5NFxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiYmFibGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hY2NvcmRpb25JdGVtLmRpc2FibGVkID8gJy0xJyA6ICcwJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjY29yZGlvbkl0ZW0uZGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVudGVyJylcbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuYWNjb3JkaW9uSXRlbS50b2dnbGUoKTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gJ2NvbGxhcHNlZCc7XG4gICAgfVxuICAgIHJldHVybiAnZXhwYW5kZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBhY2NvcmRpb25JdGVtOiBOYkFjY29yZGlvbkl0ZW1Db21wb25lbnQsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjY29yZGlvbkl0ZW0uYWNjb3JkaW9uSXRlbUludmFsaWRhdGVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==