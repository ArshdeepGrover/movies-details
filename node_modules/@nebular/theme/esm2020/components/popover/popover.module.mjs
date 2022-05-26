/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbPopoverDirective } from './popover.directive';
import { NbPopoverComponent } from './popover.component';
import * as i0 from "@angular/core";
export class NbPopoverModule {
}
NbPopoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbPopoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverModule, declarations: [NbPopoverDirective, NbPopoverComponent], imports: [NbOverlayModule], exports: [NbPopoverDirective] });
NbPopoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverModule, imports: [[NbOverlayModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbOverlayModule],
                    declarations: [NbPopoverDirective, NbPopoverComponent],
                    exports: [NbPopoverDirective],
                    entryComponents: [NbPopoverComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBU3pELE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBSlgsa0JBQWtCLEVBQUUsa0JBQWtCLGFBRDNDLGVBQWUsYUFFZixrQkFBa0I7NkdBR2pCLGVBQWUsWUFMakIsQ0FBQyxlQUFlLENBQUM7MkZBS2YsZUFBZTtrQkFOM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYk92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYlBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYk92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOYlBvcG92ZXJEaXJlY3RpdmUsIE5iUG9wb3ZlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOYlBvcG92ZXJEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOYlBvcG92ZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlBvcG92ZXJNb2R1bGUge1xufVxuIl19