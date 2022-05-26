/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTableModule } from '../cdk/table/table.module';
import { NbIconModule } from '../icon/icon.module';
import { NbTreeGridComponent } from './tree-grid.component';
import { NbTreeGridCellDefDirective, NbTreeGridFooterCellDefDirective, NbTreeGridFooterRowDefDirective, NbTreeGridHeaderCellDefDirective, NbTreeGridHeaderRowDefDirective, NbTreeGridRowDefDirective, } from './tree-grid-def.component';
import { NbTreeGridFooterRowComponent, NbTreeGridHeaderRowComponent, NbTreeGridRowComponent, } from './tree-grid-row.component';
import { NbTreeGridCellDirective, NbTreeGridFooterCellDirective, NbTreeGridHeaderCellDirective, } from './tree-grid-cell.component';
import { NbSortDirective, NbSortHeaderComponent, NbSortHeaderIconDirective, NbSortIconComponent, } from './tree-grid-sort.component';
import { NbTreeGridDataSourceBuilder } from './data-source/tree-grid-data-source';
import { NbTreeGridSortService } from './data-source/tree-grid-sort.service';
import { NbTreeGridFilterService } from './data-source/tree-grid-filter.service';
import { NbTreeGridService } from './data-source/tree-grid.service';
import { NbTreeGridDataService } from './data-source/tree-grid-data.service';
import { NbFilterDirective, NbFilterInputDirective } from './tree-grid-filter';
import { NbTreeGridRowToggleDirective } from './tree-grid-row-toggle.directive';
import { NbTreeGridColumnDefDirective } from './tree-grid-column-def.directive';
import { NbTreeGridRowToggleComponent } from './tree-grid-row-toggle.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    // Tree Grid
    NbTreeGridComponent,
    NbTreeGridRowDefDirective,
    NbTreeGridRowComponent,
    NbTreeGridCellDefDirective,
    NbTreeGridCellDirective,
    NbTreeGridHeaderRowDefDirective,
    NbTreeGridHeaderRowComponent,
    NbTreeGridHeaderCellDefDirective,
    NbTreeGridHeaderCellDirective,
    NbTreeGridFooterRowDefDirective,
    NbTreeGridFooterRowComponent,
    NbTreeGridFooterCellDefDirective,
    NbTreeGridFooterCellDirective,
    NbTreeGridColumnDefDirective,
    // Sort directives
    NbSortDirective,
    NbSortHeaderComponent,
    NbSortIconComponent,
    // Filter directives
    NbFilterDirective,
    NbFilterInputDirective,
    NbTreeGridRowToggleDirective,
    NbTreeGridRowToggleComponent,
    NbSortHeaderIconDirective,
];
export class NbTreeGridModule {
}
NbTreeGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbTreeGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridModule, declarations: [
        // Tree Grid
        NbTreeGridComponent,
        NbTreeGridRowDefDirective,
        NbTreeGridRowComponent,
        NbTreeGridCellDefDirective,
        NbTreeGridCellDirective,
        NbTreeGridHeaderRowDefDirective,
        NbTreeGridHeaderRowComponent,
        NbTreeGridHeaderCellDefDirective,
        NbTreeGridHeaderCellDirective,
        NbTreeGridFooterRowDefDirective,
        NbTreeGridFooterRowComponent,
        NbTreeGridFooterCellDefDirective,
        NbTreeGridFooterCellDirective,
        NbTreeGridColumnDefDirective,
        // Sort directives
        NbSortDirective,
        NbSortHeaderComponent,
        NbSortIconComponent,
        // Filter directives
        NbFilterDirective,
        NbFilterInputDirective,
        NbTreeGridRowToggleDirective,
        NbTreeGridRowToggleComponent,
        NbSortHeaderIconDirective], imports: [CommonModule, NbTableModule, NbIconModule], exports: [NbTableModule, 
        // Tree Grid
        NbTreeGridComponent,
        NbTreeGridRowDefDirective,
        NbTreeGridRowComponent,
        NbTreeGridCellDefDirective,
        NbTreeGridCellDirective,
        NbTreeGridHeaderRowDefDirective,
        NbTreeGridHeaderRowComponent,
        NbTreeGridHeaderCellDefDirective,
        NbTreeGridHeaderCellDirective,
        NbTreeGridFooterRowDefDirective,
        NbTreeGridFooterRowComponent,
        NbTreeGridFooterCellDefDirective,
        NbTreeGridFooterCellDirective,
        NbTreeGridColumnDefDirective,
        // Sort directives
        NbSortDirective,
        NbSortHeaderComponent,
        NbSortIconComponent,
        // Filter directives
        NbFilterDirective,
        NbFilterInputDirective,
        NbTreeGridRowToggleDirective,
        NbTreeGridRowToggleComponent,
        NbSortHeaderIconDirective] });
NbTreeGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridModule, providers: [
        NbTreeGridSortService,
        NbTreeGridFilterService,
        NbTreeGridService,
        NbTreeGridDataService,
        NbTreeGridDataSourceBuilder,
    ], imports: [[CommonModule, NbTableModule, NbIconModule], NbTableModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NbTableModule, NbIconModule],
                    declarations: [...COMPONENTS],
                    exports: [NbTableModule, ...COMPONENTS],
                    providers: [
                        NbTreeGridSortService,
                        NbTreeGridFilterService,
                        NbTreeGridService,
                        NbTreeGridDataService,
                        NbTreeGridDataSourceBuilder,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQ2hDLCtCQUErQixFQUMvQix5QkFBeUIsR0FDMUIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1QixzQkFBc0IsR0FDdkIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDZCQUE2QixFQUM3Qiw2QkFBNkIsR0FDOUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix5QkFBeUIsRUFDekIsbUJBQW1CLEdBQ3BCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1B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bCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOYlRhYmxlTW9kdWxlIH0gZnJvbSAnLi4vY2RrL3RhYmxlL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5iVHJlZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTmJUcmVlR3JpZENlbGxEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRGb290ZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkRm9vdGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZEhlYWRlclJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZFJvd0RlZkRpcmVjdGl2ZSxcbn0gZnJvbSAnLi90cmVlLWdyaWQtZGVmLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBOYlRyZWVHcmlkRm9vdGVyUm93Q29tcG9uZW50LFxuICBOYlRyZWVHcmlkSGVhZGVyUm93Q29tcG9uZW50LFxuICBOYlRyZWVHcmlkUm93Q29tcG9uZW50LFxufSBmcm9tICcuL3RyZWUtZ3JpZC1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5iVHJlZUdyaWRDZWxsRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkRm9vdGVyQ2VsbERpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZEhlYWRlckNlbGxEaXJlY3RpdmUsXG59IGZyb20gJy4vdHJlZS1ncmlkLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIE5iU29ydERpcmVjdGl2ZSxcbiAgTmJTb3J0SGVhZGVyQ29tcG9uZW50LFxuICBOYlNvcnRIZWFkZXJJY29uRGlyZWN0aXZlLFxuICBOYlNvcnRJY29uQ29tcG9uZW50LFxufSBmcm9tICcuL3RyZWUtZ3JpZC1zb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIgfSBmcm9tICcuL2RhdGEtc291cmNlL3RyZWUtZ3JpZC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkU29ydFNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc291cmNlL3RyZWUtZ3JpZC1zb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZEZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc291cmNlL3RyZWUtZ3JpZC1maWx0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkU2VydmljZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXNvdXJjZS90cmVlLWdyaWQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iRmlsdGVyRGlyZWN0aXZlLCBOYkZpbHRlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi90cmVlLWdyaWQtZmlsdGVyJztcbmltcG9ydCB7IE5iVHJlZUdyaWRSb3dUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL3RyZWUtZ3JpZC1yb3ctdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi90cmVlLWdyaWQtY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZFJvd1RvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ncmlkLXJvdy10b2dnbGUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgLy8gVHJlZSBHcmlkXG4gIE5iVHJlZUdyaWRDb21wb25lbnQsXG5cbiAgTmJUcmVlR3JpZFJvd0RlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZFJvd0NvbXBvbmVudCxcbiAgTmJUcmVlR3JpZENlbGxEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRDZWxsRGlyZWN0aXZlLFxuXG4gIE5iVHJlZUdyaWRIZWFkZXJSb3dEZWZEaXJlY3RpdmUsXG4gIE5iVHJlZUdyaWRIZWFkZXJSb3dDb21wb25lbnQsXG4gIE5iVHJlZUdyaWRIZWFkZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkSGVhZGVyQ2VsbERpcmVjdGl2ZSxcblxuICBOYlRyZWVHcmlkRm9vdGVyUm93RGVmRGlyZWN0aXZlLFxuICBOYlRyZWVHcmlkRm9vdGVyUm93Q29tcG9uZW50LFxuICBOYlRyZWVHcmlkRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZEZvb3RlckNlbGxEaXJlY3RpdmUsXG5cbiAgTmJUcmVlR3JpZENvbHVtbkRlZkRpcmVjdGl2ZSxcblxuICAvLyBTb3J0IGRpcmVjdGl2ZXNcbiAgTmJTb3J0RGlyZWN0aXZlLFxuICBOYlNvcnRIZWFkZXJDb21wb25lbnQsXG4gIE5iU29ydEljb25Db21wb25lbnQsXG5cbiAgLy8gRmlsdGVyIGRpcmVjdGl2ZXNcbiAgTmJGaWx0ZXJEaXJlY3RpdmUsXG4gIE5iRmlsdGVySW5wdXREaXJlY3RpdmUsXG5cbiAgTmJUcmVlR3JpZFJvd1RvZ2dsZURpcmVjdGl2ZSxcbiAgTmJUcmVlR3JpZFJvd1RvZ2dsZUNvbXBvbmVudCxcbiAgTmJTb3J0SGVhZGVySWNvbkRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBOYlRhYmxlTW9kdWxlLCBOYkljb25Nb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIC4uLkNPTVBPTkVOVFMgXSxcbiAgZXhwb3J0czogWyBOYlRhYmxlTW9kdWxlLCAuLi5DT01QT05FTlRTIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5iVHJlZUdyaWRTb3J0U2VydmljZSxcbiAgICBOYlRyZWVHcmlkRmlsdGVyU2VydmljZSxcbiAgICBOYlRyZWVHcmlkU2VydmljZSxcbiAgICBOYlRyZWVHcmlkRGF0YVNlcnZpY2UsXG4gICAgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRyZWVHcmlkTW9kdWxlIHt9XG4iXX0=