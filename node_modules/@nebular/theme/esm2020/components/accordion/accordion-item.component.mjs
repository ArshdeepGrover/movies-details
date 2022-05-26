/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, Host, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "./accordion.component";
/**
 * Component intended to be used within `<nb-accordion>` component
 */
export class NbAccordionItemComponent {
    constructor(accordion, cd) {
        this.accordion = accordion;
        this.cd = cd;
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         */
        this.collapsedChange = new EventEmitter();
        this.accordionItemInvalidate = new Subject();
        this.collapsedValue = true;
        this.disabledValue = false;
        this.destroy$ = new Subject();
    }
    /**
     * Item is collapse (`true` by default)
     * @type {boolean}
     */
    get collapsed() {
        return this.collapsedValue;
    }
    set collapsed(val) {
        this.collapsedValue = convertToBoolProperty(val);
        this.collapsedChange.emit(this.collapsedValue);
        this.invalidate();
    }
    /**
     * Item is expanded (`false` by default)
     * @type {boolean}
     */
    get expanded() {
        return !this.collapsed;
    }
    set expanded(val) {
        this.collapsedValue = !convertToBoolProperty(val);
    }
    /**
     * Item is disabled and cannot be opened.
     * @type {boolean}
     */
    get disabled() {
        return this.disabledValue;
    }
    set disabled(val) {
        this.disabledValue = convertToBoolProperty(val);
        this.invalidate();
    }
    /**
     * Open/close the item
     */
    toggle() {
        if (!this.disabled) {
            // we need this temporary variable as `openCloseItems.next` will change current value we need to save
            const willSet = !this.collapsed;
            if (!this.accordion.multi) {
                this.accordion.openCloseItems.next(true);
            }
            this.collapsed = willSet;
        }
    }
    /**
     * Open the item.
     */
    open() {
        !this.disabled && (this.collapsed = false);
    }
    /**
     * Collapse the item.
     */
    close() {
        !this.disabled && (this.collapsed = true);
    }
    ngOnInit() {
        this.accordion.openCloseItems
            .pipe(takeUntil(this.destroy$))
            .subscribe(collapsed => {
            !this.disabled && (this.collapsed = collapsed);
        });
    }
    ngOnChanges(changes) {
        this.accordionItemInvalidate.next(true);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.accordionItemInvalidate.complete();
    }
    invalidate() {
        this.accordionItemInvalidate.next(true);
        this.cd.markForCheck();
    }
}
NbAccordionItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemComponent, deps: [{ token: i1.NbAccordionComponent, host: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbAccordionItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAccordionItemComponent, selector: "nb-accordion-item", inputs: { collapsed: "collapsed", expanded: "expanded", disabled: "disabled" }, outputs: { collapsedChange: "collapsedChange" }, host: { properties: { "class.collapsed": "this.collapsed", "class.expanded": "this.expanded", "class.disabled": "this.disabled" } }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content select="nb-accordion-item-header"></ng-content>
    <ng-content select="nb-accordion-item-body"></ng-content>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-accordion-item', template: `
    <ng-content select="nb-accordion-item-header"></ng-content>
    <ng-content select="nb-accordion-item-body"></ng-content>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbAccordionComponent, decorators: [{
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { collapsed: [{
                type: Input,
                args: ['collapsed']
            }, {
                type: HostBinding,
                args: ['class.collapsed']
            }], expanded: [{
                type: Input,
                args: ['expanded']
            }, {
                type: HostBinding,
                args: ['class.expanded']
            }], disabled: [{
                type: Input,
                args: ['disabled']
            }, {
                type: HostBinding,
                args: ['class.disabled']
            }], collapsedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFdBQVcsRUFDWCxJQUFJLEdBSUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7O0FBRW5FOztHQUVHO0FBVUgsTUFBTSxPQUFPLHdCQUF3QjtJQTJEbkMsWUFBNEIsU0FBK0IsRUFBVSxFQUFxQjtRQUE5RCxjQUFTLEdBQVQsU0FBUyxDQUFzQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBWjFGOzs7V0FHRztRQUNPLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV4RCw0QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBRXpDLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBR3ZDLENBQUM7SUExREQ7OztPQUdHO0lBQ0gsSUFFSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxHQUFZO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFD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QUMsZ0JBQWdCO2dCQWNuQixlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBDb21wb25lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoaW4gYDxuYi1hY2NvcmRpb24+YCBjb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItYWNjb3JkaW9uLWl0ZW0nLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWFjY29yZGlvbi1pdGVtLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1hY2NvcmRpb24taXRlbS1ib2R5XCI+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJBY2NvcmRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIEl0ZW0gaXMgY29sbGFwc2UgKGB0cnVlYCBieSBkZWZhdWx0KVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgnY29sbGFwc2VkJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZWQnKVxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZFZhbHVlO1xuICB9XG4gIHNldCBjb2xsYXBzZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb2xsYXBzZWRWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuY29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5jb2xsYXBzZWRWYWx1ZSk7XG4gICAgdGhpcy5pbnZhbGlkYXRlKCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbGxhcHNlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEl0ZW0gaXMgZXhwYW5kZWQgKGBmYWxzZWAgYnkgZGVmYXVsdClcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoJ2V4cGFuZGVkJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpXG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29sbGFwc2VkO1xuICB9XG4gIHNldCBleHBhbmRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbGxhcHNlZFZhbHVlID0gIWNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWwpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEl0ZW0gaXMgZGlzYWJsZWQgYW5kIGNhbm5vdCBiZSBvcGVuZWQuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCdkaXNhYmxlZCcpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRWYWx1ZTtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZFZhbHVlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5pbnZhbGlkYXRlKCk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBhY2NvcmRpb24gY2hhbmdlcy5cbiAgICogUHJpbWFyaWx5IHVzZWQgdG8gZmFjaWxpdGF0ZSB0d28td2F5IGJpbmRpbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGFjY29yZGlvbkl0ZW1JbnZhbGlkYXRlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIGNvbGxhcHNlZFZhbHVlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBkaXNhYmxlZFZhbHVlID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBhY2NvcmRpb246IE5iQWNjb3JkaW9uQ29tcG9uZW50LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4vY2xvc2UgdGhlIGl0ZW1cbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIC8vIHdlIG5lZWQgdGhpcyB0ZW1wb3JhcnkgdmFyaWFibGUgYXMgYG9wZW5DbG9zZUl0ZW1zLm5leHRgIHdpbGwgY2hhbmdlIGN1cnJlbnQgdmFsdWUgd2UgbmVlZCB0byBzYXZlXG4gICAgICBjb25zdCB3aWxsU2V0ID0gIXRoaXMuY29sbGFwc2VkO1xuXG4gICAgICBpZiAoIXRoaXMuYWNjb3JkaW9uLm11bHRpKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLm9wZW5DbG9zZUl0ZW1zLm5leHQodHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IHdpbGxTZXQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGl0ZW0uXG4gICAqL1xuICBvcGVuKCkge1xuICAgICF0aGlzLmRpc2FibGVkICYmICh0aGlzLmNvbGxhcHNlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZSB0aGUgaXRlbS5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgICF0aGlzLmRpc2FibGVkICYmICh0aGlzLmNvbGxhcHNlZCA9IHRydWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb24ub3BlbkNsb3NlSXRlbXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoY29sbGFwc2VkID0+IHtcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgKHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmFjY29yZGlvbkl0ZW1JbnZhbGlkYXRlLm5leHQodHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5hY2NvcmRpb25JdGVtSW52YWxpZGF0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuYWNjb3JkaW9uSXRlbUludmFsaWRhdGUubmV4dCh0cnVlKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=