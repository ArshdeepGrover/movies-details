/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbIconModule } from '../icon/icon.module';
import { NbTooltipComponent } from './tooltip.component';
import { NbTooltipDirective } from './tooltip.directive';
import * as i0 from "@angular/core";
export class NbTooltipModule {
}
NbTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipModule, declarations: [NbTooltipComponent, NbTooltipDirective], imports: [NbSharedModule, NbOverlayModule, NbIconModule], exports: [NbTooltipDirective] });
NbTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipModule, imports: [[NbSharedModule, NbOverlayModule, NbIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbOverlayModule, NbIconModule],
                    declarations: [NbTooltipComponent, NbTooltipDirective],
                    exports: [NbTooltipDirective],
                    entryComponents: [NbTooltipComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFTekQsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxpQkFKWCxrQkFBa0IsRUFBRSxrQkFBa0IsYUFEM0MsY0FBYyxFQUFFLGVBQWUsRUFBRSxZQUFZLGFBRTdDLGtCQUFrQjs2R0FHakIsZUFBZSxZQUxqQixDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDOzJGQUs3QyxlQUFlO2tCQU4zQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUN4RCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOYlRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYlNoYXJlZE1vZHVsZSwgTmJPdmVybGF5TW9kdWxlLCBOYkljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOYlRvb2x0aXBDb21wb25lbnQsIE5iVG9vbHRpcERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOYlRvb2x0aXBEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOYlRvb2x0aXBDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRvb2x0aXBNb2R1bGUge1xufVxuIl19