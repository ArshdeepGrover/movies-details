/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbIconModule } from '../icon/icon.module';
import { NbButtonModule } from '../button/button.module';
import { NbSearchComponent, NbSearchFieldComponent } from './search.component';
import { NbSearchService } from './search.service';
import * as i0 from "@angular/core";
export class NbSearchModule {
}
NbSearchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbSearchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchModule, declarations: [NbSearchComponent,
        NbSearchFieldComponent], imports: [NbSharedModule,
        NbOverlayModule,
        NbIconModule,
        NbButtonModule], exports: [NbSearchComponent,
        NbSearchFieldComponent] });
NbSearchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchModule, providers: [
        NbSearchService,
    ], imports: [[
            NbSharedModule,
            NbOverlayModule,
            NbIconModule,
            NbButtonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbOverlayModule,
                        NbIconModule,
                        NbButtonModule,
                    ],
                    declarations: [
                        NbSearchComponent,
                        NbSearchFieldComponent,
                    ],
                    exports: [
                        NbSearchComponent,
                        NbSearchFieldComponent,
                    ],
                    providers: [
                        NbSearchService,
                    ],
                    entryComponents: [
                        NbSearchFieldComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQXlCbkQsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFkdkIsaUJBQWlCO1FBQ2pCLHNCQUFzQixhQVB0QixjQUFjO1FBQ2QsZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjLGFBT2QsaUJBQWlCO1FBQ2pCLHNCQUFzQjs0R0FTYixjQUFjLGFBUGQ7UUFDVCxlQUFlO0tBQ2hCLFlBaEJRO1lBQ1AsY0FBYztZQUNkLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztTQUNmOzJGQWdCVSxjQUFjO2tCQXRCMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGVBQWU7cUJBQ2hCO29CQUNELGVBQWUsRUFBRTt3QkFDZixzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYk92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5iQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOYlNlYXJjaENvbXBvbmVudCwgTmJTZWFyY2hGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJTaGFyZWRNb2R1bGUsXG4gICAgTmJPdmVybGF5TW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmJTZWFyY2hDb21wb25lbnQsXG4gICAgTmJTZWFyY2hGaWVsZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5iU2VhcmNoQ29tcG9uZW50LFxuICAgIE5iU2VhcmNoRmllbGRDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5iU2VhcmNoU2VydmljZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTmJTZWFyY2hGaWVsZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTZWFyY2hNb2R1bGUge1xufVxuIl19