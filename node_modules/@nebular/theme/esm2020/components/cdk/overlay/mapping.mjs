import { Directive, Injectable, NgModule } from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, PortalInjector, PortalModule, TemplatePortal, } from '@angular/cdk/portal';
import { FlexibleConnectedPositionStrategy, Overlay, OverlayContainer, OverlayModule, OverlayPositionBuilder, } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class NbPortalDirective extends CdkPortal {
}
NbPortalDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPortalDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbPortalDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbPortalDirective, selector: "[nbPortal]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPortalDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbPortal]' }]
        }] });
export class NbPortalOutletDirective extends CdkPortalOutlet {
}
NbPortalOutletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPortalOutletDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbPortalOutletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbPortalOutletDirective, selector: "[nbPortalOutlet]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPortalOutletDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbPortalOutlet]' }]
        }] });
export class NbComponentPortal extends ComponentPortal {
}
export class NbOverlay extends Overlay {
}
NbOverlay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlay, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NbOverlay.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlay });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlay, decorators: [{
            type: Injectable
        }] });
export class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}
NbOverlayPositionBuilder.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayPositionBuilder, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NbOverlayPositionBuilder.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayPositionBuilder });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayPositionBuilder, decorators: [{
            type: Injectable
        }] });
export class NbTemplatePortal extends TemplatePortal {
    constructor(template, viewContainerRef, context) {
        super(template, viewContainerRef, context);
    }
}
export class NbOverlayContainer extends OverlayContainer {
}
NbOverlayContainer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NbOverlayContainer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainer });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainer, decorators: [{
            type: Injectable
        }] });
export class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}
export class NbPortalInjector extends PortalInjector {
}
const CDK_MODULES = [OverlayModule, PortalModule];
/**
 * This module helps us to keep all angular/cdk deps inside our cdk module via providing aliases.
 * Approach will help us move cdk in separate npm package and refactor nebular/theme code.
 * */
export class NbCdkMappingModule {
    static forRoot() {
        return {
            ngModule: NbCdkMappingModule,
            providers: [NbOverlay, NbOverlayPositionBuilder],
        };
    }
}
NbCdkMappingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkMappingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbCdkMappingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkMappingModule, declarations: [NbPortalDirective, NbPortalOutletDirective], imports: [OverlayModule, PortalModule], exports: [OverlayModule, PortalModule, NbPortalDirective, NbPortalOutletDirective] });
NbCdkMappingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkMappingModule, imports: [[...CDK_MODULES], OverlayModule, PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkMappingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [...CDK_MODULES],
                    exports: [...CDK_MODULES, NbPortalDirective, NbPortalOutletDirective],
                    declarations: [NbPortalDirective, NbPortalOutletDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvb3ZlcmxheS9tYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUF1QixRQUFRLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLGVBQWUsRUFFZixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsR0FDZixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFLTCxpQ0FBaUMsRUFDakMsT0FBTyxFQUVQLGdCQUFnQixFQUNoQixhQUFhLEVBQ2Isc0JBQXNCLEdBSXZCLE1BQU0sc0JBQXNCLENBQUM7O0FBSTlCLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTOzs4R0FBbkMsaUJBQWlCO2tHQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFEN0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7O0FBSXJDLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxlQUFlOztvSEFBL0MsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFEbkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTs7QUFHM0MsTUFBTSxPQUFPLGlCQUEyQixTQUFRLGVBQWtCO0NBQUc7QUFHckUsTUFBTSxPQUFPLFNBQVUsU0FBUSxPQUFPOztzR0FBekIsU0FBUzswR0FBVCxTQUFTOzJGQUFULFNBQVM7a0JBRHJCLFVBQVU7O0FBTVgsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUFzQjs7cUhBQXZELHdCQUF3Qjt5SEFBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBRHBDLFVBQVU7O0FBR1gsTUFBTSxPQUFPLGdCQUEwQixTQUFRLGNBQWlCO0lBQzlELFlBQVksUUFBd0IsRUFBRSxnQkFBbUMsRUFBRSxPQUFXO1FBQ3BGLEtBQUssQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGdCQUFnQjs7K0dBQTNDLGtCQUFrQjttSEFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7O0FBR1gsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGlDQUFpQztDQUFHO0FBRTdGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0NBQUc7QUFZdkQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFbEQ7OztLQUdLO0FBTUwsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSx3QkFBd0IsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7K0dBTlUsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBakRsQixpQkFBaUIsRUFHakIsdUJBQXVCLGFBbUNmLGFBQWEsRUFBRSxZQUFZLGFBQTNCLGFBQWEsRUFBRSxZQUFZLEVBdENuQyxpQkFBaUIsRUFHakIsdUJBQXVCO2dIQThDdkIsa0JBQWtCLFlBSnBCLENBQUMsR0FBRyxXQUFXLENBQUMsRUFQTixhQUFhLEVBQUUsWUFBWTsyRkFXbkMsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztvQkFDckUsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7aUJBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka1BvcnRhbCxcbiAgQ2RrUG9ydGFsT3V0bGV0LFxuICBDb21wb25lbnRQb3J0YWwsXG4gIFBvcnRhbCxcbiAgUG9ydGFsSW5qZWN0b3IsXG4gIFBvcnRhbE1vZHVsZSxcbiAgVGVtcGxhdGVQb3J0YWwsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50VHlwZSxcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0ZWRQb3NpdGlvbixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5Q29udGFpbmVyLFxuICBPdmVybGF5TW9kdWxlLFxuICBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5LFxuICBTY3JvbGxTdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTmJTY3JvbGxTdHJhdGVneU9wdGlvbnMgfSBmcm9tICcuLi9hZGFwdGVyL2Jsb2NrLXNjcm9sbC1zdHJhdGVneS1hZGFwdGVyJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25iUG9ydGFsXScgfSlcbmV4cG9ydCBjbGFzcyBOYlBvcnRhbERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbCB7fVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmJQb3J0YWxPdXRsZXRdJyB9KVxuZXhwb3J0IGNsYXNzIE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IHt9XG5cbmV4cG9ydCBjbGFzcyBOYkNvbXBvbmVudFBvcnRhbDxUID0gYW55PiBleHRlbmRzIENvbXBvbmVudFBvcnRhbDxUPiB7fVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG4gIHNjcm9sbFN0cmF0ZWdpZXM6IE5iU2Nyb2xsU3RyYXRlZ3lPcHRpb25zO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJPdmVybGF5UG9zaXRpb25CdWlsZGVyIGV4dGVuZHMgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciB7fVxuXG5leHBvcnQgY2xhc3MgTmJUZW1wbGF0ZVBvcnRhbDxUID0gYW55PiBleHRlbmRzIFRlbXBsYXRlUG9ydGFsPFQ+IHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPFQ+LCB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZiwgY29udGV4dD86IFQpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZSwgdmlld0NvbnRhaW5lclJlZiwgY29udGV4dCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iT3ZlcmxheUNvbnRhaW5lciBleHRlbmRzIE92ZXJsYXlDb250YWluZXIge31cblxuZXhwb3J0IGNsYXNzIE5iRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IGV4dGVuZHMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHt9XG5cbmV4cG9ydCBjbGFzcyBOYlBvcnRhbEluamVjdG9yIGV4dGVuZHMgUG9ydGFsSW5qZWN0b3Ige31cblxuZXhwb3J0IHR5cGUgTmJQb3J0YWw8VCA9IGFueT4gPSBQb3J0YWw8VD47XG5leHBvcnQgdHlwZSBOYk92ZXJsYXlSZWYgPSBPdmVybGF5UmVmO1xuZXhwb3J0IHR5cGUgTmJDb21wb25lbnRUeXBlPFQgPSBhbnk+ID0gQ29tcG9uZW50VHlwZTxUPjtcbmV4cG9ydCB0eXBlIE5iUG9zaXRpb25TdHJhdGVneSA9IFBvc2l0aW9uU3RyYXRlZ3k7XG5leHBvcnQgdHlwZSBOYkNvbm5lY3RlZFBvc2l0aW9uID0gQ29ubmVjdGVkUG9zaXRpb247XG5leHBvcnQgdHlwZSBOYkNvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSA9IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZTtcbmV4cG9ydCB0eXBlIE5iQ29ubmVjdGlvblBvc2l0aW9uUGFpciA9IENvbm5lY3Rpb25Qb3NpdGlvblBhaXI7XG5leHBvcnQgdHlwZSBOYk92ZXJsYXlDb25maWcgPSBPdmVybGF5Q29uZmlnO1xuZXhwb3J0IHR5cGUgTmJTY3JvbGxTdHJhdGVneSA9IFNjcm9sbFN0cmF0ZWd5O1xuXG5jb25zdCBDREtfTU9EVUxFUyA9IFtPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGVdO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGhlbHBzIHVzIHRvIGtlZXAgYWxsIGFuZ3VsYXIvY2RrIGRlcHMgaW5zaWRlIG91ciBjZGsgbW9kdWxlIHZpYSBwcm92aWRpbmcgYWxpYXNlcy5cbiAqIEFwcHJvYWNoIHdpbGwgaGVscCB1cyBtb3ZlIGNkayBpbiBzZXBhcmF0ZSBucG0gcGFja2FnZSBhbmQgcmVmYWN0b3IgbmVidWxhci90aGVtZSBjb2RlLlxuICogKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsuLi5DREtfTU9EVUxFU10sXG4gIGV4cG9ydHM6IFsuLi5DREtfTU9EVUxFUywgTmJQb3J0YWxEaXJlY3RpdmUsIE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmJQb3J0YWxEaXJlY3RpdmUsIE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDZGtNYXBwaW5nTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYkNka01hcHBpbmdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iQ2RrTWFwcGluZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW05iT3ZlcmxheSwgTmJPdmVybGF5UG9zaXRpb25CdWlsZGVyXSxcbiAgICB9O1xuICB9XG59XG4iXX0=