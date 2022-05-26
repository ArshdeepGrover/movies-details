import { Directive, Input } from '@angular/core';
import { NbCdkCellDef, NbCdkFooterCellDef, NbCdkFooterRowDef, NbCdkHeaderCellDef, NbCdkHeaderRowDef, NbCdkRowDef, } from '../cdk/table/type-mappings';
import { NbCellDefDirective, NbFooterCellDefDirective, NbHeaderCellDefDirective } from '../cdk/table/cell';
import { NbFooterRowDefDirective, NbHeaderRowDefDirective, NbRowDefDirective } from '../cdk/table/row';
import * as i0 from "@angular/core";
import * as i1 from "./tree-grid-columns.service";
/**
 * Data row definition for the tree-grid.
 * Captures the header row's template and columns to display.
 */
export class NbTreeGridRowDefDirective extends NbRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowDefDirective, deps: [{ token: i0.TemplateRef }, { token: i0.IterableDiffers }, { token: i1.NbColumnsService }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridRowDefDirective, selector: "[nbTreeGridRowDef]", inputs: { columns: ["nbTreeGridRowDefColumns", "columns"] }, providers: [{ provide: NbCdkRowDef, useExisting: NbTreeGridRowDefDirective }], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridRowDef]',
                    providers: [{ provide: NbCdkRowDef, useExisting: NbTreeGridRowDefDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.IterableDiffers }, { type: i1.NbColumnsService }]; }, propDecorators: { columns: [{
                type: Input,
                args: ['nbTreeGridRowDefColumns']
            }] } });
export class NbTreeGridHeaderRowDefDirective extends NbHeaderRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridHeaderRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderRowDefDirective, deps: [{ token: i0.TemplateRef }, { token: i0.IterableDiffers }, { token: i1.NbColumnsService }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridHeaderRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridHeaderRowDefDirective, selector: "[nbTreeGridHeaderRowDef]", inputs: { columns: ["nbTreeGridHeaderRowDef", "columns"] }, providers: [{ provide: NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective }], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridHeaderRowDef]',
                    providers: [{ provide: NbCdkHeaderRowDef, useExisting: NbTreeGridHeaderRowDefDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.IterableDiffers }, { type: i1.NbColumnsService }]; }, propDecorators: { columns: [{
                type: Input,
                args: ['nbTreeGridHeaderRowDef']
            }] } });
export class NbTreeGridFooterRowDefDirective extends NbFooterRowDefDirective {
    constructor(template, differs, columnsService) {
        super(template, differs);
        this.columnsService = columnsService;
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes['columns']) {
            this.updateColumns(this.columns);
        }
    }
    updateColumns(columns) {
        this.columnsService.setColumns(columns);
    }
    getVisibleColumns() {
        return this.columnsService.getVisibleColumns();
    }
    /** @docs-private */
    hideColumn(column) {
        this.columnsService.hideColumn(column);
    }
    /** @docs-private */
    showColumn(column) {
        this.columnsService.showColumn(column);
    }
}
NbTreeGridFooterRowDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterRowDefDirective, deps: [{ token: i0.TemplateRef }, { token: i0.IterableDiffers }, { token: i1.NbColumnsService }], target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridFooterRowDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridFooterRowDefDirective, selector: "[nbTreeGridFooterRowDef]", inputs: { columns: ["nbTreeGridFooterRowDef", "columns"] }, providers: [{ provide: NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective }], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterRowDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridFooterRowDef]',
                    providers: [{ provide: NbCdkFooterRowDef, useExisting: NbTreeGridFooterRowDefDirective }],
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.IterableDiffers }, { type: i1.NbColumnsService }]; }, propDecorators: { columns: [{
                type: Input,
                args: ['nbTreeGridFooterRowDef']
            }] } });
/**
 * Cell definition for a nb-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class NbTreeGridCellDefDirective extends NbCellDefDirective {
}
NbTreeGridCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridCellDefDirective, selector: "[nbTreeGridCellDef]", providers: [{ provide: NbCdkCellDef, useExisting: NbTreeGridCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridCellDef]',
                    providers: [{ provide: NbCdkCellDef, useExisting: NbTreeGridCellDefDirective }],
                }]
        }] });
/**
 * Header cell definition for the nb-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class NbTreeGridHeaderCellDefDirective extends NbHeaderCellDefDirective {
}
NbTreeGridHeaderCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridHeaderCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridHeaderCellDefDirective, selector: "[nbTreeGridHeaderCellDef]", providers: [{ provide: NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridHeaderCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridHeaderCellDef]',
                    providers: [{ provide: NbCdkHeaderCellDef, useExisting: NbTreeGridHeaderCellDefDirective }],
                }]
        }] });
/**
 * Footer cell definition for the nb-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class NbTreeGridFooterCellDefDirective extends NbFooterCellDefDirective {
}
NbTreeGridFooterCellDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterCellDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridFooterCellDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridFooterCellDefDirective, selector: "[nbTreeGridFooterCellDef]", providers: [{ provide: NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFooterCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridFooterCellDef]',
                    providers: [{ provide: NbCdkFooterCellDef, useExisting: NbTreeGridFooterCellDefDirective }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWRlZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdHJlZS1ncmlkL3RyZWUtZ3JpZC1kZWYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixXQUFXLEdBQ1osTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBUXZHOzs7R0FHRztBQUtILE1BQU0sT0FBTyx5QkFBNkIsU0FBUSxpQkFBb0I7SUFRcEUsWUFDRSxRQUEwQixFQUMxQixPQUF3QixFQUNoQixjQUFnQztRQUV4QyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRmpCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtJQUcxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQXlCO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFF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OzZIQUFqRSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQyxvREFGaEMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQzsyRkFFaEYsZ0NBQWdDO2tCQUo1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsa0NBQWtDLEVBQUUsQ0FBQztpQkFDNUY7O0FBR0Q7OztHQUdHO0FBS0gsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHdCQUF3Qjs7NkhBQWpFLGdDQUFnQztpSEFBaEMsZ0NBQWdDLG9EQUZoQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDOzJGQUVoRixnQ0FBZ0M7a0JBSjVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxrQ0FBa0MsRUFBRSxDQUFDO2lCQUM1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEl0ZXJhYmxlRGlmZmVycywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTmJDZGtDZWxsRGVmLFxuICBOYkNka0Zvb3RlckNlbGxEZWYsXG4gIE5iQ2RrRm9vdGVyUm93RGVmLFxuICBOYkNka0hlYWRlckNlbGxEZWYsXG4gIE5iQ2RrSGVhZGVyUm93RGVmLFxuICBOYkNka1Jvd0RlZixcbn0gZnJvbSAnLi4vY2RrL3RhYmxlL3R5cGUtbWFwcGluZ3MnO1xuaW1wb3J0IHsgTmJDZWxsRGVmRGlyZWN0aXZlLCBOYkZvb3RlckNlbGxEZWZEaXJlY3RpdmUsIE5iSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4uL2Nkay90YWJsZS9jZWxsJztcbmltcG9ydCB7IE5iRm9vdGVyUm93RGVmRGlyZWN0aXZlLCBOYkhlYWRlclJvd0RlZkRpcmVjdGl2ZSwgTmJSb3dEZWZEaXJlY3RpdmUgfSBmcm9tICcuLi9jZGsvdGFibGUvcm93JztcbmltcG9ydCB7IE5iQ29sdW1uc1NlcnZpY2UgfSBmcm9tICcuL3RyZWUtZ3JpZC1jb2x1bW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iVHJlZUdyaWRSZXNwb25zaXZlUm93RGVmIHtcbiAgaGlkZUNvbHVtbihjb2x1bW46IHN0cmluZyk7XG4gIHNob3dDb2x1bW4oY29sdW1uOiBzdHJpbmcpO1xufVxuXG4vKipcbiAqIERhdGEgcm93IGRlZmluaXRpb24gZm9yIHRoZSB0cmVlLWdyaWQuXG4gKiBDYXB0dXJlcyB0aGUgaGVhZGVyIHJvdydzIHRlbXBsYXRlIGFuZCBjb2x1bW5zIHRvIGRpc3BsYXkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYlRyZWVHcmlkUm93RGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDZGtSb3dEZWYsIHVzZUV4aXN0aW5nOiBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkUm93RGVmRGlyZWN0aXZlPFQ+IGV4dGVuZHMgTmJSb3dEZWZEaXJlY3RpdmU8VD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGxlbWVudHMgT25DaGFuZ2VzLCBOYlRyZWVHcmlkUmVzcG9uc2l2ZVJvd0RlZiB7XG5cbiAgLyoqXG4gICAqIENvbHVtbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoaXMgcm93XG4gICAqL1xuICBASW5wdXQoJ25iVHJlZUdyaWRSb3dEZWZDb2x1bW5zJykgY29sdW1uczogSXRlcmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgcHJpdmF0ZSBjb2x1bW5zU2VydmljZTogTmJDb2x1bW5zU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIGRpZmZlcnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZXNbJ2NvbHVtbnMnXSkge1xuICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKHRoaXMuY29sdW1ucyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ29sdW1ucyhjb2x1bW5zOiBJdGVyYWJsZTxzdHJpbmc+KSB7XG4gICAgdGhpcy5jb2x1bW5zU2VydmljZS5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuICB9XG5cbiAgZ2V0VmlzaWJsZUNvbHVtbnMoKTogSXRlcmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1NlcnZpY2UuZ2V0VmlzaWJsZUNvbHVtbnMoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGhpZGVDb2x1bW4oY29sdW1uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbnNTZXJ2aWNlLmhpZGVDb2x1bW4oY29sdW1uKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHNob3dDb2x1bW4oY29sdW1uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtbnNTZXJ2aWNlLnNob3dDb2x1bW4oY29sdW1uKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJUcmVlR3JpZEhlYWRlclJvd0RlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2RrSGVhZGVyUm93RGVmLCB1c2VFeGlzdGluZzogTmJUcmVlR3JpZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSBleHRlbmRzIE5iSGVhZGVyUm93RGVmRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgTmJUcmVlR3JpZFJlc3BvbnNpdmVSb3dEZWYge1xuICAvKipcbiAgICogQ29sdW1ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhpcyByb3dcbiAgICovXG4gIEBJbnB1dCgnbmJUcmVlR3JpZEhlYWRlclJvd0RlZicpIGNvbHVtbnM6IEl0ZXJhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIHByaXZhdGUgY29sdW1uc1NlcnZpY2U6IE5iQ29sdW1uc1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKHRlbXBsYXRlLCBkaWZmZXJzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGlmIChjaGFuZ2VzWydjb2x1bW5zJ10pIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucyh0aGlzLmNvbHVtbnMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNvbHVtbnMoY29sdW1uczogSXRlcmFibGU8c3RyaW5nPikge1xuICAgIHRoaXMuY29sdW1uc1NlcnZpY2Uuc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgfVxuXG4gIGdldFZpc2libGVDb2x1bW5zKCk6IEl0ZXJhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNTZXJ2aWNlLmdldFZpc2libGVDb2x1bW5zKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBoaWRlQ29sdW1uKGNvbHVtbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zU2VydmljZS5oaWRlQ29sdW1uKGNvbHVtbik7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzaG93Q29sdW1uKGNvbHVtbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5zU2VydmljZS5zaG93Q29sdW1uKGNvbHVtbik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iVHJlZUdyaWRGb290ZXJSb3dEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOYkNka0Zvb3RlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRGb290ZXJSb3dEZWZEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRGb290ZXJSb3dEZWZEaXJlY3RpdmUgZXh0ZW5kcyBOYkZvb3RlclJvd0RlZkRpcmVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE5iVHJlZUdyaWRSZXNwb25zaXZlUm93RGVmIHtcbiAgLyoqXG4gICAqIENvbHVtbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoaXMgcm93XG4gICAqL1xuICBASW5wdXQoJ25iVHJlZUdyaWRGb290ZXJSb3dEZWYnKSBjb2x1bW5zOiBJdGVyYWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBwcml2YXRlIGNvbHVtbnNTZXJ2aWNlOiBOYkNvbHVtbnNTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcih0ZW1wbGF0ZSwgZGlmZmVycyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlc1snY29sdW1ucyddKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnModGhpcy5jb2x1bW5zKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDb2x1bW5zKGNvbHVtbnM6IEl0ZXJhYmxlPHN0cmluZz4pIHtcbiAgICB0aGlzLmNvbHVtbnNTZXJ2aWNlLnNldENvbHVtbnMoY29sdW1ucyk7XG4gIH1cblxuICBnZXRWaXNpYmxlQ29sdW1ucygpOiBJdGVyYWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zU2VydmljZS5nZXRWaXNpYmxlQ29sdW1ucygpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgaGlkZUNvbHVtbihjb2x1bW46IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uc1NlcnZpY2UuaGlkZUNvbHVtbihjb2x1bW4pO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc2hvd0NvbHVtbihjb2x1bW46IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uc1NlcnZpY2Uuc2hvd0NvbHVtbihjb2x1bW4pO1xuICB9XG59XG5cbi8qKlxuICogQ2VsbCBkZWZpbml0aW9uIGZvciBhIG5iLXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZGF0YSByb3cgY2VsbCBhcyB3ZWxsIGFzIGNlbGwtc3BlY2lmaWMgcHJvcGVydGllcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iVHJlZUdyaWRDZWxsRGVmXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJDZGtDZWxsRGVmLCB1c2VFeGlzdGluZzogTmJUcmVlR3JpZENlbGxEZWZEaXJlY3RpdmUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRDZWxsRGVmRGlyZWN0aXZlIGV4dGVuZHMgTmJDZWxsRGVmRGlyZWN0aXZlIHt9XG5cbi8qKlxuICogSGVhZGVyIGNlbGwgZGVmaW5pdGlvbiBmb3IgdGhlIG5iLXRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgaGVhZGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJUcmVlR3JpZEhlYWRlckNlbGxEZWZdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOYkNka0hlYWRlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBOYlRyZWVHcmlkSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZEhlYWRlckNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBOYkhlYWRlckNlbGxEZWZEaXJlY3RpdmUge31cblxuLyoqXG4gKiBGb290ZXIgY2VsbCBkZWZpbml0aW9uIGZvciB0aGUgbmItdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBmb290ZXIgY2VsbCBhbmQgYXMgd2VsbCBhcyBjZWxsLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuYlRyZWVHcmlkRm9vdGVyQ2VsbERlZl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2RrRm9vdGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRGb290ZXJDZWxsRGVmRGlyZWN0aXZlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIE5iRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSB7fVxuIl19