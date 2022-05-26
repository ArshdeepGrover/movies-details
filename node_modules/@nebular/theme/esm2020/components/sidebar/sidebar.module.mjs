/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, } from './sidebar.component';
import { NbSidebarService } from './sidebar.service';
import * as i0 from "@angular/core";
const NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
const NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
export class NbSidebarModule {
    static forRoot() {
        return {
            ngModule: NbSidebarModule,
            providers: [
                ...NB_SIDEBAR_PROVIDERS,
            ],
        };
    }
}
NbSidebarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbSidebarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarModule, declarations: [NbSidebarComponent,
        NbSidebarFooterComponent,
        NbSidebarHeaderComponent], imports: [NbSharedModule], exports: [NbSidebarComponent,
        NbSidebarFooterComponent,
        NbSidebarHeaderComponent] });
NbSidebarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarModule, imports: [[
            NbSharedModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [
                        ...NB_SIDEBAR_COMPONENTS,
                    ],
                    exports: [
                        ...NB_SIDEBAR_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixHQUN6QixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0JBQXdCO0NBQ3pCLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHO0lBQzNCLGdCQUFnQjtDQUNqQixDQUFDO0FBYUYsTUFBTSxPQUFPLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEdBQUcsb0JBQW9CO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQVJVLGVBQWU7NkdBQWYsZUFBZSxpQkFwQjFCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsd0JBQXdCLGFBU3RCLGNBQWMsYUFYaEIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4Qix3QkFBd0I7NkdBa0JiLGVBQWUsWUFWakI7WUFDUCxjQUFjO1NBQ2Y7MkZBUVUsZUFBZTtrQkFYM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxxQkFBcUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLHFCQUFxQjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQge1xuICBOYlNpZGViYXJDb21wb25lbnQsXG4gIE5iU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgTmJTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxufSBmcm9tICcuL3NpZGViYXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTmJTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcblxuY29uc3QgTkJfU0lERUJBUl9DT01QT05FTlRTID0gW1xuICBOYlNpZGViYXJDb21wb25lbnQsXG4gIE5iU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgTmJTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgTkJfU0lERUJBUl9QUk9WSURFUlMgPSBbXG4gIE5iU2lkZWJhclNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk5CX1NJREVCQVJfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk5CX1NJREVCQVJfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTaWRlYmFyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYlNpZGViYXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iU2lkZWJhck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5OQl9TSURFQkFSX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19