import { Attribute, Inject, NgModule, Component, Optional, SkipSelf, } from '@angular/core';
import { _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, CdkTable, CdkTableModule, } from '@angular/cdk/table';
import { _DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import { NbBidiModule } from '../bidi/bidi.module';
import { NB_DOCUMENT } from '../../../theme.options';
import { NB_STICKY_POSITIONING_LISTENER } from '../../cdk/table/type-mappings';
import { NbCellDefDirective, NbCellDirective, NbColumnDefDirective, NbFooterCellDefDirective, NbFooterCellDirective, NbHeaderCellDefDirective, NbHeaderCellDirective, } from './cell';
import { NbCellOutletDirective, NbDataRowOutletDirective, NbFooterRowOutletDirective, NbHeaderRowOutletDirective, NbFooterRowComponent, NbFooterRowDefDirective, NbHeaderRowComponent, NbHeaderRowDefDirective, NbRowComponent, NbRowDefDirective, NbNoDataRowOutletDirective, } from './row';
import * as i0 from "@angular/core";
import * as i1 from "../bidi/bidi-service";
import * as i2 from "../platform/platform-service";
import * as i3 from "../adapter/viewport-ruler-adapter";
import * as i4 from "@angular/cdk/table";
export const NB_TABLE_TEMPLATE = `
  <ng-container nbHeaderRowOutlet></ng-container>
  <ng-container nbRowOutlet></ng-container>
  <ng-container nbNoDataRowOutlet></ng-container>
  <ng-container nbFooterRowOutlet></ng-container>
`;
export const NB_VIEW_REPEATER_STRATEGY = _VIEW_REPEATER_STRATEGY;
export const NB_COALESCED_STYLE_SCHEDULER = _COALESCED_STYLE_SCHEDULER;
export const NB_TABLE_PROVIDERS = [
    { provide: NB_VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
    { provide: NB_COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
];
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NbTable extends CdkTable {
    constructor(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener) {
        super(differs, changeDetectorRef, elementRef, role, dir, document, platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener);
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
    }
}
NbTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTable, deps: [{ token: i0.IterableDiffers }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: 'role', attribute: true }, { token: i1.NbDirectionality }, { token: NB_DOCUMENT }, { token: i2.NbPlatform }, { token: _VIEW_REPEATER_STRATEGY }, { token: _COALESCED_STYLE_SCHEDULER }, { token: i3.NbViewportRulerAdapter }, { token: NB_STICKY_POSITIONING_LISTENER, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component });
NbTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTable, selector: "nb-table-not-implemented", providers: NB_TABLE_PROVIDERS, usesInheritance: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTable, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-table-not-implemented',
                    template: ``,
                    providers: NB_TABLE_PROVIDERS,
                }]
        }], ctorParameters: function () { return [{ type: i0.IterableDiffers }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: ['role']
                }] }, { type: i1.NbDirectionality }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i2.NbPlatform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [_VIEW_REPEATER_STRATEGY]
                }] }, { type: i4._CoalescedStyleScheduler, decorators: [{
                    type: Inject,
                    args: [_COALESCED_STYLE_SCHEDULER]
                }] }, { type: i3.NbViewportRulerAdapter }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Inject,
                    args: [NB_STICKY_POSITIONING_LISTENER]
                }] }]; } });
const COMPONENTS = [
    NbTable,
    // Template defs
    NbHeaderCellDefDirective,
    NbHeaderRowDefDirective,
    NbColumnDefDirective,
    NbCellDefDirective,
    NbRowDefDirective,
    NbFooterCellDefDirective,
    NbFooterRowDefDirective,
    // Outlets
    NbDataRowOutletDirective,
    NbHeaderRowOutletDirective,
    NbFooterRowOutletDirective,
    NbNoDataRowOutletDirective,
    NbCellOutletDirective,
    // Cell directives
    NbHeaderCellDirective,
    NbCellDirective,
    NbFooterCellDirective,
    // Row directives
    NbHeaderRowComponent,
    NbRowComponent,
    NbFooterRowComponent,
];
export class NbTableModule extends CdkTableModule {
}
NbTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTableModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
NbTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTableModule, declarations: [NbTable, 
        // Template defs
        NbHeaderCellDefDirective,
        NbHeaderRowDefDirective,
        NbColumnDefDirective,
        NbCellDefDirective,
        NbRowDefDirective,
        NbFooterCellDefDirective,
        NbFooterRowDefDirective,
        // Outlets
        NbDataRowOutletDirective,
        NbHeaderRowOutletDirective,
        NbFooterRowOutletDirective,
        NbNoDataRowOutletDirective,
        NbCellOutletDirective,
        // Cell directives
        NbHeaderCellDirective,
        NbCellDirective,
        NbFooterCellDirective,
        // Row directives
        NbHeaderRowComponent,
        NbRowComponent,
        NbFooterRowComponent], imports: [NbBidiModule], exports: [NbTable, 
        // Template defs
        NbHeaderCellDefDirective,
        NbHeaderRowDefDirective,
        NbColumnDefDirective,
        NbCellDefDirective,
        NbRowDefDirective,
        NbFooterCellDefDirective,
        NbFooterRowDefDirective,
        // Outlets
        NbDataRowOutletDirective,
        NbHeaderRowOutletDirective,
        NbFooterRowOutletDirective,
        NbNoDataRowOutletDirective,
        NbCellOutletDirective,
        // Cell directives
        NbHeaderCellDirective,
        NbCellDirective,
        NbFooterCellDirective,
        // Row directives
        NbHeaderRowComponent,
        NbRowComponent,
        NbFooterRowComponent] });
NbTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTableModule, imports: [[NbBidiModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbBidiModule],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxNQUFNLEVBRU4sUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsd0JBQXdCLEVBQ3hCLFFBQVEsRUFDUixjQUFjLEdBSWYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsdUJBQXVCLEVBQWlCLE1BQU0sMEJBQTBCLENBQUM7QUFFaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIscUJBQXFCLEdBQ3RCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsMEJBQTBCLEdBQzNCLE1BQU0sT0FBTyxDQUFDOzs7Ozs7QUFFZixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRzs7Ozs7Q0FLaEMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLHVC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QUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFFckIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YscUJBQXFCO1FBRXJCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLG9CQUFvQjsyR0FRVCxhQUFhLFlBSmYsQ0FBRSxZQUFZLENBQUU7MkZBSWQsYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRSxDQUFFLEdBQUcsVUFBVSxDQUFFO29CQUMvQixPQUFPLEVBQUUsQ0FBRSxHQUFHLFVBQVUsQ0FBRTtpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgTmdNb2R1bGUsXG4gIENvbXBvbmVudCxcbiAgT3B0aW9uYWwsXG4gIFByb3ZpZGVyLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUixcbiAgX0NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLFxuICBDZGtUYWJsZSxcbiAgQ2RrVGFibGVNb2R1bGUsXG4gIFJlbmRlclJvdyxcbiAgUm93Q29udGV4dCxcbiAgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IF9EaXNwb3NlVmlld1JlcGVhdGVyU3RyYXRlZ3ksIF9WSUVXX1JFUEVBVEVSX1NUUkFURUdZLCBfVmlld1JlcGVhdGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcblxuaW1wb3J0IHsgTmJCaWRpTW9kdWxlIH0gZnJvbSAnLi4vYmlkaS9iaWRpLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkRpcmVjdGlvbmFsaXR5IH0gZnJvbSAnLi4vYmlkaS9iaWRpLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL3BsYXRmb3JtLXNlcnZpY2UnO1xuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICcuLi8uLi8uLi90aGVtZS5vcHRpb25zJztcbmltcG9ydCB7IE5iVmlld3BvcnRSdWxlckFkYXB0ZXIgfSBmcm9tICcuLi9hZGFwdGVyL3ZpZXdwb3J0LXJ1bGVyLWFkYXB0ZXInO1xuaW1wb3J0IHsgTkJfU1RJQ0tZX1BPU0lUSU9OSU5HX0xJU1RFTkVSIH0gZnJvbSAnLi4vLi4vY2RrL3RhYmxlL3R5cGUtbWFwcGluZ3MnO1xuaW1wb3J0IHtcbiAgTmJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYkNlbGxEaXJlY3RpdmUsXG4gIE5iQ29sdW1uRGVmRGlyZWN0aXZlLFxuICBOYkZvb3RlckNlbGxEZWZEaXJlY3RpdmUsXG4gIE5iRm9vdGVyQ2VsbERpcmVjdGl2ZSxcbiAgTmJIZWFkZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYkhlYWRlckNlbGxEaXJlY3RpdmUsXG59IGZyb20gJy4vY2VsbCc7XG5pbXBvcnQge1xuICBOYkNlbGxPdXRsZXREaXJlY3RpdmUsXG4gIE5iRGF0YVJvd091dGxldERpcmVjdGl2ZSxcbiAgTmJGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUsXG4gIE5iSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlLFxuICBOYkZvb3RlclJvd0NvbXBvbmVudCxcbiAgTmJGb290ZXJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iSGVhZGVyUm93Q29tcG9uZW50LFxuICBOYkhlYWRlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJSb3dDb21wb25lbnQsXG4gIE5iUm93RGVmRGlyZWN0aXZlLFxuICBOYk5vRGF0YVJvd091dGxldERpcmVjdGl2ZSxcbn0gZnJvbSAnLi9yb3cnO1xuXG5leHBvcnQgY29uc3QgTkJfVEFCTEVfVEVNUExBVEUgPSBgXG4gIDxuZy1jb250YWluZXIgbmJIZWFkZXJSb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgbmJSb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgbmJOb0RhdGFSb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgbmJGb290ZXJSb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG5gO1xuXG5leHBvcnQgY29uc3QgTkJfVklFV19SRVBFQVRFUl9TVFJBVEVHWSA9IF9WSUVXX1JFUEVBVEVSX1NUUkFURUdZO1xuZXhwb3J0IGNvbnN0IE5CX0NPQUxFU0NFRF9TVFlMRV9TQ0hFRFVMRVIgPSBfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUjtcblxuZXhwb3J0IGNvbnN0IE5CX1RBQkxFX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAgeyBwcm92aWRlOiBOQl9WSUVXX1JFUEVBVEVSX1NUUkFURUdZLCB1c2VDbGFzczogX0Rpc3Bvc2VWaWV3UmVwZWF0ZXJTdHJhdGVneSB9LFxuICB7IHByb3ZpZGU6IE5CX0NPQUxFU0NFRF9TVFlMRV9TQ0hFRFVMRVIsIHVzZUNsYXNzOiBfQ29hbGVzY2VkU3R5bGVTY2hlZHVsZXIgfSxcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXRhYmxlLW5vdC1pbXBsZW1lbnRlZCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgcHJvdmlkZXJzOiBOQl9UQUJMRV9QUk9WSURFUlMsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTmJUYWJsZTxUPiBleHRlbmRzIENka1RhYmxlPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBBdHRyaWJ1dGUoJ3JvbGUnKSByb2xlOiBzdHJpbmcsXG4gICAgZGlyOiBOYkRpcmVjdGlvbmFsaXR5LFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIGRvY3VtZW50OiBhbnksXG4gICAgcGxhdGZvcm06IE5iUGxhdGZvcm0sXG4gICAgQEluamVjdChfVklFV19SRVBFQVRFUl9TVFJBVEVHWSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ZpZXdSZXBlYXRlcjogX1ZpZXdSZXBlYXRlcjxULCBSZW5kZXJSb3c8VD4sIFJvd0NvbnRleHQ8VD4+LFxuICAgIEBJbmplY3QoX0NPQUxFU0NFRF9TVFlMRV9TQ0hFRFVMRVIpXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb2FsZXNjZWRTdHlsZVNjaGVkdWxlcjogX0NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLFxuICAgIF92aWV3cG9ydFJ1bGVyOiBOYlZpZXdwb3J0UnVsZXJBZGFwdGVyLFxuICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIEBJbmplY3QoTkJfU1RJQ0tZX1BPU0lUSU9OSU5HX0xJU1RFTkVSKVxuICAgIHByb3RlY3RlZCByZWFkb25seSBfc3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcjogU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcixcbiAgKSB7XG4gICAgc3VwZXIoZGlmZmVycywgY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYsIHJvbGUsIGRpciwgZG9jdW1lbnQsIHBsYXRmb3JtLCBfdmlld1JlcGVhdGVyLFxuICAgICAgICAgIF9jb2FsZXNjZWRTdHlsZVNjaGVkdWxlciwgX3ZpZXdwb3J0UnVsZXIsIF9zdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyKTtcbiAgfVxufVxuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBOYlRhYmxlLFxuXG4gIC8vIFRlbXBsYXRlIGRlZnNcbiAgTmJIZWFkZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYkhlYWRlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJDb2x1bW5EZWZEaXJlY3RpdmUsXG4gIE5iQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJGb290ZXJSb3dEZWZEaXJlY3RpdmUsXG5cbiAgLy8gT3V0bGV0c1xuICBOYkRhdGFSb3dPdXRsZXREaXJlY3RpdmUsXG4gIE5iSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlLFxuICBOYkZvb3RlclJvd091dGxldERpcmVjdGl2ZSxcbiAgTmJOb0RhdGFSb3dPdXRsZXREaXJlY3RpdmUsXG4gIE5iQ2VsbE91dGxldERpcmVjdGl2ZSxcblxuICAvLyBDZWxsIGRpcmVjdGl2ZXNcbiAgTmJIZWFkZXJDZWxsRGlyZWN0aXZlLFxuICBOYkNlbGxEaXJlY3RpdmUsXG4gIE5iRm9vdGVyQ2VsbERpcmVjdGl2ZSxcblxuICAvLyBSb3cgZGlyZWN0aXZlc1xuICBOYkhlYWRlclJvd0NvbXBvbmVudCxcbiAgTmJSb3dDb21wb25lbnQsXG4gIE5iRm9vdGVyUm93Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBOYkJpZGlNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIC4uLkNPTVBPTkVOVFMgXSxcbiAgZXhwb3J0czogWyAuLi5DT01QT05FTlRTIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVGFibGVNb2R1bGUgZXh0ZW5kcyBDZGtUYWJsZU1vZHVsZSB7fVxuIl19