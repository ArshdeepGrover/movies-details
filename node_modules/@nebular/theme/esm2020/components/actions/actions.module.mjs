/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbActionComponent, NbActionsComponent } from './actions.component';
import { NbBadgeModule } from '../badge/badge.module';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
const NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
export class NbActionsModule {
}
NbActionsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbActionsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsModule, declarations: [NbActionComponent,
        NbActionsComponent], imports: [NbSharedModule,
        NbBadgeModule,
        NbIconModule], exports: [NbActionComponent,
        NbActionsComponent] });
NbActionsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsModule, imports: [[
            NbSharedModule,
            NbBadgeModule,
            NbIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbActionsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                        NbIconModule,
                    ],
                    declarations: [
                        ...NB_ACTIONS_COMPONENTS,
                    ],
                    exports: [
                        ...NB_ACTIONS_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb25zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbkQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ25CLENBQUM7QUFlRixNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQWpCMUIsaUJBQWlCO1FBQ2pCLGtCQUFrQixhQUtoQixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVksYUFSZCxpQkFBaUI7UUFDakIsa0JBQWtCOzZHQWdCUCxlQUFlLFlBWmpCO1lBQ1AsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1NBQ2I7MkZBUVUsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcscUJBQXFCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxxQkFBcUI7cUJBQ3pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgTmJBY3Rpb25Db21wb25lbnQsIE5iQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9ucy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOYkJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5jb25zdCBOQl9BQ1RJT05TX0NPTVBPTkVOVFMgPSBbXG4gIE5iQWN0aW9uQ29tcG9uZW50LFxuICBOYkFjdGlvbnNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJTaGFyZWRNb2R1bGUsXG4gICAgTmJCYWRnZU1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk5CX0FDVElPTlNfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk5CX0FDVElPTlNfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJBY3Rpb25zTW9kdWxlIHsgfVxuIl19