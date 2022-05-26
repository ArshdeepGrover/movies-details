/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ContentChild, Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Output, TemplateRef, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NB_SORT_HEADER_COLUMN_DEF } from '../cdk/table/cell';
import * as i0 from "@angular/core";
import * as i1 from "../icon/icon.component";
import * as i2 from "@angular/common";
export var NbSortDirection;
(function (NbSortDirection) {
    NbSortDirection["ASCENDING"] = "asc";
    NbSortDirection["DESCENDING"] = "desc";
    NbSortDirection["NONE"] = "";
})(NbSortDirection || (NbSortDirection = {}));
const sortDirections = [
    NbSortDirection.ASCENDING,
    NbSortDirection.DESCENDING,
    NbSortDirection.NONE,
];
/**
 * Directive triggers sort method of passed object when sort header changes direction
 */
export class NbSortDirective {
    constructor() {
        this.sort = new EventEmitter();
    }
    emitSort(sortRequest) {
        if (this.sortable && this.sortable.sort) {
            this.sortable.sort(sortRequest);
        }
        this.sort.emit(sortRequest);
    }
}
NbSortDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NbSortDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbSortDirective, selector: "[nbSort]", inputs: { sortable: ["nbSort", "sortable"] }, outputs: { sort: "sort" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbSort]' }]
        }], propDecorators: { sortable: [{
                type: Input,
                args: ['nbSort']
            }], sort: [{
                type: Output
            }] } });
/**
 * Directive for headers sort icons. Mark you icon implementation with this structural directive and
 * it'll set template's implicit context with current direction. Context also has `isAscending`,
 * `isDescending` and `isNone` properties.
 */
export class NbSortHeaderIconDirective {
}
NbSortHeaderIconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortHeaderIconDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NbSortHeaderIconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbSortHeaderIconDirective, selector: "[nbSortHeaderIcon]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortHeaderIconDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbSortHeaderIcon]' }]
        }] });
export class NbSortIconComponent {
    constructor() {
        this.direction = NbSortDirection.NONE;
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    isDirectionSet() {
        return this.isAscending() || this.isDescending();
    }
}
NbSortIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbSortIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSortIconComponent, selector: "nb-sort-icon", inputs: { direction: "direction" }, ngImport: i0, template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `, isInline: true, components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-sort-icon',
                    template: `
    <ng-container *ngIf="isDirectionSet()">
      <nb-icon *ngIf="isAscending()" icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
      <nb-icon *ngIf="isDescending()" icon="chevron-up-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </ng-container>
  `,
                }]
        }], propDecorators: { direction: [{
                type: Input
            }] } });
/**
 * Marks header as sort header so it emitting sort event when clicked.
 */
export class NbSortHeaderComponent {
    constructor(sort, columnDef) {
        this.sort = sort;
        this.columnDef = columnDef;
        this.disabledValue = false;
    }
    /**
     * Disable sort header
     */
    set disabled(value) {
        this.disabledValue = convertToBoolProperty(value);
    }
    get disabled() {
        return this.disabledValue;
    }
    sortIfEnabled() {
        if (!this.disabled) {
            this.sortData();
        }
    }
    isAscending() {
        return this.direction === NbSortDirection.ASCENDING;
    }
    isDescending() {
        return this.direction === NbSortDirection.DESCENDING;
    }
    sortData() {
        const sortRequest = this.createSortRequest();
        this.sort.emitSort(sortRequest);
    }
    getIconContext() {
        return {
            $implicit: this.direction,
            isAscending: this.isAscending(),
            isDescending: this.isDescending(),
            isNone: !this.isAscending() && !this.isDescending(),
        };
    }
    getDisabledAttributeValue() {
        return this.disabled ? '' : null;
    }
    createSortRequest() {
        this.direction = this.getNextDirection();
        return { direction: this.direction, column: this.columnDef.name };
    }
    getNextDirection() {
        const sortDirectionCycle = sortDirections;
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
}
NbSortHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortHeaderComponent, deps: [{ token: NbSortDirective }, { token: NB_SORT_HEADER_COLUMN_DEF }], target: i0.ɵɵFactoryTarget.Component });
NbSortHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSortHeaderComponent, selector: "[nbSortHeader]", inputs: { direction: ["nbSortHeader", "direction"], disabled: "disabled" }, host: { listeners: { "click": "sortIfEnabled()" }, properties: { "class.disabled": "this.disabled" } }, queries: [{ propertyName: "sortIcon", first: true, predicate: NbSortHeaderIconDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `, isInline: true, components: [{ type: NbSortIconComponent, selector: "nb-sort-icon", inputs: ["direction"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSortHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[nbSortHeader]',
                    template: `
    <button
      class="nb-tree-grid-header-change-sort-button"
      type="button"
      [attr.disabled]="getDisabledAttributeValue()"
      (click)="sortData()">
      <ng-content></ng-content>
    </button>
    <nb-sort-icon *ngIf="!sortIcon; else customIcon" [direction]="direction"></nb-sort-icon>
    <ng-template #customIcon [ngTemplateOutlet]="sortIcon" [ngTemplateOutletContext]="getIconContext()"></ng-template>
  `,
                }]
        }], ctorParameters: function () { return [{ type: NbSortDirective }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_SORT_HEADER_COLUMN_DEF]
                }] }]; }, propDecorators: { sortIcon: [{
                type: ContentChild,
                args: [NbSortHeaderIconDirective, { read: TemplateRef }]
            }], direction: [{
                type: Input,
                args: ['nbSortHeader']
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.disabled']
            }], sortIfEnabled: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXNvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtc29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFtQyxNQUFNLFlBQVksQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQWlCOUQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QixvQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBbUIsQ0FBQTtJQUNuQiw0QkFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLGVBQWUsS0FBZixlQUFlLFFBSTFCO0FBQ0QsTUFBTSxjQUFjLEdBQXNCO0lBQ3hDLGVBQWUsQ0FBQyxTQUFTO0lBQ3pCLGVBQWUsQ0FBQyxVQUFVO0lBQzFCLGVBQWUsQ0FBQyxJQUFJO0NBQ3JCLENBQUM7QUFFRjs7R0FFRztBQUVILE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBS1ksU0FBSSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztLQVFqRjtJQU5DLFFBQVEsQ0FBQyxXQUEwQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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QUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztRQUMxQyxJQUFJLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ25ELGtCQUFrQixHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoRCxDQUFDOztrSEE3RVUscUJBQXFCLGtCQW1DaEIsZUFBZSxhQUNyQix5QkFBeUI7c0dBcEN4QixxQkFBcUIsZ1JBRWxCLHlCQUF5QiwyQkFBVSxXQUFXLDZCQWRsRDs7Ozs7Ozs7OztHQVVULHVDQS9CVSxtQkFBbUI7MkZBaUNuQixxQkFBcUI7a0JBZGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7aUJBQ0Y7MERBb0NpQixlQUFlOzBCQUM1QixNQUFNOzJCQUFDLHlCQUF5Qjs0Q0FqQ25DLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBT3ZDLFNBQVM7c0JBQS9CLEtBQUs7dUJBQUMsY0FBYztnQkFVakIsUUFBUTtzQkFGWCxLQUFLOztzQkFDTCxXQUFXO3VCQUFDLGdCQUFnQjtnQkFVN0IsYUFBYTtzQkFEWixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCwgTmJOdWxsYWJsZUlucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOQl9TT1JUX0hFQURFUl9DT0xVTU5fREVGIH0gZnJvbSAnLi4vY2RrL3RhYmxlL2NlbGwnO1xuXG4vKiogQ29sdW1uIGRlZmluaXRpb24gYXNzb2NpYXRlZCB3aXRoIGEgYE5iU29ydEhlYWRlckRpcmVjdGl2ZWAuICovXG5pbnRlcmZhY2UgTmJTb3J0SGVhZGVyQ29sdW1uRGVmIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5iU29ydFJlcXVlc3Qge1xuICBjb2x1bW46IHN0cmluZztcbiAgZGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJTb3J0YWJsZSB7XG4gIHNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpO1xufVxuXG5leHBvcnQgdHlwZSBOYlNvcnREaXJlY3Rpb25WYWx1ZXMgPSAnYXNjJyB8ICdkZXNjJyB8ICcnO1xuZXhwb3J0IGVudW0gTmJTb3J0RGlyZWN0aW9uIHtcbiAgQVNDRU5ESU5HID0gJ2FzYycsXG4gIERFU0NFTkRJTkcgPSAnZGVzYycsXG4gIE5PTkUgPSAnJyxcbn1cbmNvbnN0IHNvcnREaXJlY3Rpb25zOiBOYlNvcnREaXJlY3Rpb25bXSA9IFtcbiAgTmJTb3J0RGlyZWN0aW9uLkFTQ0VORElORyxcbiAgTmJTb3J0RGlyZWN0aW9uLkRFU0NFTkRJTkcsXG4gIE5iU29ydERpcmVjdGlvbi5OT05FLFxuXTtcblxuLyoqXG4gKiBEaXJlY3RpdmUgdHJpZ2dlcnMgc29ydCBtZXRob2Qgb2YgcGFzc2VkIG9iamVjdCB3aGVuIHNvcnQgaGVhZGVyIGNoYW5nZXMgZGlyZWN0aW9uXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuYlNvcnRdJyB9KVxuZXhwb3J0IGNsYXNzIE5iU29ydERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnbmJTb3J0Jykgc29ydGFibGU6IE5iU29ydGFibGU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zb3J0YWJsZTogTmJTb3J0YWJsZSB8IE5iTnVsbGFibGVJbnB1dDtcblxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPE5iU29ydFJlcXVlc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxOYlNvcnRSZXF1ZXN0PigpO1xuXG4gIGVtaXRTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KSB7XG4gICAgaWYgKHRoaXMuc29ydGFibGUgJiYgdGhpcy5zb3J0YWJsZS5zb3J0KSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLnNvcnQoc29ydFJlcXVlc3QpO1xuICAgIH1cbiAgICB0aGlzLnNvcnQuZW1pdChzb3J0UmVxdWVzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlQ29udGV4dCB7XG4gICRpbXBsaWNpdDogTmJTb3J0RGlyZWN0aW9uO1xuICBpc0FzY2VuZGluZzogYm9vbGVhbjtcbiAgaXNEZXNjZW5kaW5nOiBib29sZWFuO1xuICBpc05vbmU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIGZvciBoZWFkZXJzIHNvcnQgaWNvbnMuIE1hcmsgeW91IGljb24gaW1wbGVtZW50YXRpb24gd2l0aCB0aGlzIHN0cnVjdHVyYWwgZGlyZWN0aXZlIGFuZFxuICogaXQnbGwgc2V0IHRlbXBsYXRlJ3MgaW1wbGljaXQgY29udGV4dCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uLiBDb250ZXh0IGFsc28gaGFzIGBpc0FzY2VuZGluZ2AsXG4gKiBgaXNEZXNjZW5kaW5nYCBhbmQgYGlzTm9uZWAgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25iU29ydEhlYWRlckljb25dJyB9KVxuZXhwb3J0IGNsYXNzIE5iU29ydEhlYWRlckljb25EaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItc29ydC1pY29uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNEaXJlY3Rpb25TZXQoKVwiPlxuICAgICAgPG5iLWljb24gKm5nSWY9XCJpc0FzY2VuZGluZygpXCIgaWNvbj1cImNoZXZyb24tZG93bi1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvbmItaWNvbj5cbiAgICAgIDxuYi1pY29uICpuZ0lmPVwiaXNEZXNjZW5kaW5nKClcIiBpY29uPVwiY2hldnJvbi11cC1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvbmItaWNvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJTb3J0SWNvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XG5cbiAgaXNBc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBOYlNvcnREaXJlY3Rpb24uQVNDRU5ESU5HO1xuICB9XG5cbiAgaXNEZXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gTmJTb3J0RGlyZWN0aW9uLkRFU0NFTkRJTkc7XG4gIH1cblxuICBpc0RpcmVjdGlvblNldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FzY2VuZGluZygpIHx8IHRoaXMuaXNEZXNjZW5kaW5nKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNYXJrcyBoZWFkZXIgYXMgc29ydCBoZWFkZXIgc28gaXQgZW1pdHRpbmcgc29ydCBldmVudCB3aGVuIGNsaWNrZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuYlNvcnRIZWFkZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cIm5iLXRyZWUtZ3JpZC1oZWFkZXItY2hhbmdlLXNvcnQtYnV0dG9uXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZ2V0RGlzYWJsZWRBdHRyaWJ1dGVWYWx1ZSgpXCJcbiAgICAgIChjbGljayk9XCJzb3J0RGF0YSgpXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9idXR0b24+XG4gICAgPG5iLXNvcnQtaWNvbiAqbmdJZj1cIiFzb3J0SWNvbjsgZWxzZSBjdXN0b21JY29uXCIgW2RpcmVjdGlvbl09XCJkaXJlY3Rpb25cIj48L25iLXNvcnQtaWNvbj5cbiAgICA8bmctdGVtcGxhdGUgI2N1c3RvbUljb24gW25nVGVtcGxhdGVPdXRsZXRdPVwic29ydEljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZ2V0SWNvbkNvbnRleHQoKVwiPjwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iU29ydEhlYWRlckNvbXBvbmVudCB7XG5cbiAgQENvbnRlbnRDaGlsZChOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHNvcnRJY29uOiBUZW1wbGF0ZVJlZjxOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlQ29udGV4dD47XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgc29ydCBkaXJlY3Rpb24uIFBvc3NpYmxlIHZhbHVlczogYGFzY2AsIGBkZXNjYCwgYGAobm9uZSlcbiAgICogQHR5cGUge05iU29ydERpcmVjdGlvbn1cbiAgICovXG4gIEBJbnB1dCgnbmJTb3J0SGVhZGVyJykgZGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb247XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXJlY3Rpb246IE5iU29ydERpcmVjdGlvblZhbHVlcztcblxuICBwcml2YXRlIGRpc2FibGVkVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRGlzYWJsZSBzb3J0IGhlYWRlclxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuZGlzYWJsZWRWYWx1ZSA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVmFsdWU7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHNvcnRJZkVuYWJsZWQoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNvcnREYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzb3J0OiBOYlNvcnREaXJlY3RpdmUsXG4gICAgQEluamVjdChOQl9TT1JUX0hFQURFUl9DT0xVTU5fREVGKSBwcml2YXRlIGNvbHVtbkRlZjogTmJTb3J0SGVhZGVyQ29sdW1uRGVmLFxuICApIHt9XG5cbiAgaXNBc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBOYlNvcnREaXJlY3Rpb24uQVNDRU5ESU5HO1xuICB9XG5cbiAgaXNEZXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gTmJTb3J0RGlyZWN0aW9uLkRFU0NFTkRJTkc7XG4gIH1cblxuICBzb3J0RGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCBzb3J0UmVxdWVzdCA9IHRoaXMuY3JlYXRlU29ydFJlcXVlc3QoKTtcbiAgICB0aGlzLnNvcnQuZW1pdFNvcnQoc29ydFJlcXVlc3QpO1xuICB9XG5cbiAgZ2V0SWNvbkNvbnRleHQoKTogTmJTb3J0SGVhZGVySWNvbkRpcmVjdGl2ZUNvbnRleHQge1xuICAgIHJldHVybiB7XG4gICAgICAkaW1wbGljaXQ6IHRoaXMuZGlyZWN0aW9uLFxuICAgICAgaXNBc2NlbmRpbmc6IHRoaXMuaXNBc2NlbmRpbmcoKSxcbiAgICAgIGlzRGVzY2VuZGluZzogdGhpcy5pc0Rlc2NlbmRpbmcoKSxcbiAgICAgIGlzTm9uZTogIXRoaXMuaXNBc2NlbmRpbmcoKSAmJiAhdGhpcy5pc0Rlc2NlbmRpbmcoKSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGlzYWJsZWRBdHRyaWJ1dGVWYWx1ZSgpOiAnJyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVTb3J0UmVxdWVzdCgpOiBOYlNvcnRSZXF1ZXN0IHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZ2V0TmV4dERpcmVjdGlvbigpO1xuICAgIHJldHVybiB7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIGNvbHVtbjogdGhpcy5jb2x1bW5EZWYubmFtZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXh0RGlyZWN0aW9uKCk6IE5iU29ydERpcmVjdGlvbiB7XG4gICAgY29uc3Qgc29ydERpcmVjdGlvbkN5Y2xlID0gc29ydERpcmVjdGlvbnM7XG4gICAgbGV0IG5leHREaXJlY3Rpb25JbmRleCA9IHNvcnREaXJlY3Rpb25DeWNsZS5pbmRleE9mKHRoaXMuZGlyZWN0aW9uKSArIDE7XG4gICAgaWYgKG5leHREaXJlY3Rpb25JbmRleCA+PSBzb3J0RGlyZWN0aW9uQ3ljbGUubGVuZ3RoKSB7XG4gICAgICBuZXh0RGlyZWN0aW9uSW5kZXggPSAwO1xuICAgIH1cbiAgICByZXR1cm4gc29ydERpcmVjdGlvbkN5Y2xlW25leHREaXJlY3Rpb25JbmRleF07XG4gIH1cbn1cbiJdfQ==