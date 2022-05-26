import { Component, HostListener, Inject, Input } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NbCdkFooterRow, NbCdkHeaderRow, NbCdkRow } from '../cdk/table/type-mappings';
import { NbFooterRowComponent, NbHeaderRowComponent, NbRowComponent } from '../cdk/table/row';
import { NB_TREE_GRID } from './tree-grid-injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/table/row";
export const NB_ROW_DOUBLE_CLICK_DELAY = 200;
/**
 * Cells container. Adds the right class and role.
 */
export class NbTreeGridRowComponent extends NbRowComponent {
    constructor(tree, elementRef) {
        super();
        this.elementRef = elementRef;
        this.doubleClick$ = new Subject();
        /**
         * Time to wait for second click to expand row deeply.
         * 200ms by default.
         */
        this.doubleClickDelay = NB_ROW_DOUBLE_CLICK_DELAY;
        /**
         * Toggle row on click. Enabled by default.
         */
        this.clickToToggle = true;
        this.tree = tree;
    }
    toggleIfEnabledNode() {
        if (!this.clickToToggle) {
            return;
        }
        timer(NB_ROW_DOUBLE_CLICK_DELAY)
            .pipe(take(1), takeUntil(this.doubleClick$))
            .subscribe(() => this.tree.toggleRow(this));
    }
    toggleIfEnabledNodeDeep() {
        if (!this.clickToToggle) {
            return;
        }
        this.doubleClick$.next();
        this.tree.toggleRow(this, { deep: true });
    }
    ngOnDestroy() {
        this.doubleClick$.complete();
    }
}
NbTreeGridRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowComponent, deps: [{ token: NB_TREE_GRID }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NbTreeGridRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridRowComponent, selector: "tr[nbTreeGridRow]", inputs: { doubleClickDelay: "doubleClickDelay", clickToToggle: "clickToToggle" }, host: { attributes: { "role": "row" }, listeners: { "click": "toggleIfEnabledNode()", "dblclick": "toggleIfEnabledNodeDeep()" }, classAttribute: "nb-tree-grid-row" }, providers: [{ provide: NbCdkRow, useExisting: NbTreeGridRowComponent }], usesInheritance: true, ngImport: i0, template: `<ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: i1.NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'tr[nbTreeGridRow]',
                    template: `<ng-container nbCellOutlet></ng-container>`,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'nb-tree-grid-row',
                        role: 'row',
                    },
                    providers: [{ provide: NbCdkRow, useExisting: NbTreeGridRowComponent }],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_TREE_GRID]
                }] }, { type: i0.ElementRef }]; }, propDecorators: { doubleClickDelay: [{
                type: Input
            }], clickToToggle: [{
                type: Input
            }], toggleIfEnabledNode: [{
                type: HostListener,
                args: ['click']
            }], toggleIfEnabledNodeDeep: [{
                type: HostListener,
                args: ['dblclick']
            }] } });
export class NbTreeGridHeaderRowComponent extends NbHeaderRowComponent {
}
NbTreeGridHeaderRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderRowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbTreeGridHeaderRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridHeaderRowComponent, selector: "tr[nbTreeGridHeaderRow]", host: { attributes: { "role": "row" }, classAttribute: "nb-tree-grid-header-row" }, providers: [{ provide: NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent }], usesInheritance: true, ngImport: i0, template: ` <ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: i1.NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderRowComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'tr[nbTreeGridHeaderRow]',
                    template: ` <ng-container nbCellOutlet></ng-container>`,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'nb-tree-grid-header-row',
                        role: 'row',
                    },
                    providers: [{ provide: NbCdkHeaderRow, useExisting: NbTreeGridHeaderRowComponent }],
                }]
        }] });
export class NbTreeGridFooterRowComponent extends NbFooterRowComponent {
}
NbTreeGridFooterRowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterRowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbTreeGridFooterRowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridFooterRowComponent, selector: "tr[nbTreeGridFooterRow]", host: { attributes: { "role": "row" }, classAttribute: "nb-tree-grid-footer-row" }, providers: [{ provide: NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent }], usesInheritance: true, ngImport: i0, template: ` <ng-container nbCellOutlet></ng-container>`, isInline: true, directives: [{ type: i1.NbCellOutletDirective, selector: "[nbCellOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterRowComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'tr[nbTreeGridFooterRow]',
                    template: ` <ng-container nbCellOutlet></ng-container>`,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'nb-tree-grid-footer-row',
                        role: 'row',
                    },
                    providers: [{ provide: NbCdkFooterRow, useExisting: NbTreeGridFooterRowComponent }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFFNUQsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQVcsR0FBRyxDQUFDO0FBRXJEOztHQUVHO0FBWUgsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQWM7SUFvQ3hELFlBQWtDLElBQUksRUFBUyxVQUFtQztRQUNoRixLQUFLLEVBQUUsQ0FBQztRQURxQyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQW5DakUsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBR3BEOzs7V0FHRztRQUNNLHFCQUFnQixHQUFXLHlCQUF5QixDQUFDO1FBRTlEOztXQUVHO1FBQ00sa0JBQWEsR0FBWSxJQUFJLENBQUM7UUF5QnJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBZ0MsQ0FBQztJQUMvQyxDQUFDO0lBdkJELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxD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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmJDZGtGb290ZXJSb3csIE5iQ2RrSGVhZGVyUm93LCBOYkNka1JvdyB9IGZyb20gJy4uL2Nkay90YWJsZS90eXBlLW1hcHBpbmdzJztcbmltcG9ydCB7IE5iRm9vdGVyUm93Q29tcG9uZW50LCBOYkhlYWRlclJvd0NvbXBvbmVudCwgTmJSb3dDb21wb25lbnQgfSBmcm9tICcuLi9jZGsvdGFibGUvcm93JztcbmltcG9ydCB7IE5iVHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkJfVFJFRV9HUklEIH0gZnJvbSAnLi90cmVlLWdyaWQtaW5qZWN0aW9uLXRva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBOQl9ST1dfRE9VQkxFX0NMSUNLX0RFTEFZOiBudW1iZXIgPSAyMDA7XG5cbi8qKlxuICogQ2VsbHMgY29udGFpbmVyLiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndHJbbmJUcmVlR3JpZFJvd10nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgbmJDZWxsT3V0bGV0PjwvbmctY29udGFpbmVyPmAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduYi10cmVlLWdyaWQtcm93JyxcbiAgICByb2xlOiAncm93JyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOYkNka1JvdywgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRSb3dDb21wb25lbnQgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRSb3dDb21wb25lbnQgZXh0ZW5kcyBOYlJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG91YmxlQ2xpY2skID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSB0cmVlOiBOYlRyZWVHcmlkQ29tcG9uZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFRpbWUgdG8gd2FpdCBmb3Igc2Vjb25kIGNsaWNrIHRvIGV4cGFuZCByb3cgZGVlcGx5LlxuICAgKiAyMDBtcyBieSBkZWZhdWx0LlxuICAgKi9cbiAgQElucHV0KCkgZG91YmxlQ2xpY2tEZWxheTogbnVtYmVyID0gTkJfUk9XX0RPVUJMRV9DTElDS19ERUxBWTtcblxuICAvKipcbiAgICogVG9nZ2xlIHJvdyBvbiBjbGljay4gRW5hYmxlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2tUb1RvZ2dsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVJZkVuYWJsZWROb2RlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jbGlja1RvVG9nZ2xlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGltZXIoTkJfUk9XX0RPVUJMRV9DTElDS19ERUxBWSlcbiAgICAgIC5waXBlKHRha2UoMSksIHRha2VVbnRpbCh0aGlzLmRvdWJsZUNsaWNrJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudHJlZS50b2dnbGVSb3codGhpcykpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snKVxuICB0b2dnbGVJZkVuYWJsZWROb2RlRGVlcCgpIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tUb1RvZ2dsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZG91YmxlQ2xpY2skLm5leHQoKTtcbiAgICB0aGlzLnRyZWUudG9nZ2xlUm93KHRoaXMsIHsgZGVlcDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTkJfVFJFRV9HUklEKSB0cmVlLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHJlZSA9IHRyZWUgYXMgTmJUcmVlR3JpZENvbXBvbmVudDxhbnk+O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kb3VibGVDbGljayQuY29tcGxldGUoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0cltuYlRyZWVHcmlkSGVhZGVyUm93XScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250YWluZXIgbmJDZWxsT3V0bGV0PjwvbmctY29udGFpbmVyPmAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduYi10cmVlLWdyaWQtaGVhZGVyLXJvdycsXG4gICAgcm9sZTogJ3JvdycsXG4gIH0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDZGtIZWFkZXJSb3csIHVzZUV4aXN0aW5nOiBOYlRyZWVHcmlkSGVhZGVyUm93Q29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkSGVhZGVyUm93Q29tcG9uZW50IGV4dGVuZHMgTmJIZWFkZXJSb3dDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndHJbbmJUcmVlR3JpZEZvb3RlclJvd10nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGFpbmVyIG5iQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5gLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmItdHJlZS1ncmlkLWZvb3Rlci1yb3cnLFxuICAgIHJvbGU6ICdyb3cnLFxuICB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2RrRm9vdGVyUm93LCB1c2VFeGlzdGluZzogTmJUcmVlR3JpZEZvb3RlclJvd0NvbXBvbmVudCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZEZvb3RlclJvd0NvbXBvbmVudCBleHRlbmRzIE5iRm9vdGVyUm93Q29tcG9uZW50IHt9XG4iXX0=