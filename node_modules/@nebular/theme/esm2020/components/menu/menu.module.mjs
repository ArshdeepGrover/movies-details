/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbMenuComponent, NbMenuItemComponent } from './menu.component';
import { NbMenuService, NbMenuInternalService } from './menu.service';
import { NbIconModule } from '../icon/icon.module';
import { NbBadgeModule } from '../badge/badge.module';
import * as i0 from "@angular/core";
const nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
const NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
export class NbMenuModule {
    static forRoot() {
        return {
            ngModule: NbMenuModule,
            providers: [
                ...NB_MENU_PROVIDERS,
            ],
        };
    }
}
NbMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuModule, declarations: [NbMenuComponent, NbMenuItemComponent], imports: [NbSharedModule,
        NbIconModule,
        NbBadgeModule], exports: [NbMenuComponent, NbMenuItemComponent] });
NbMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuModule, imports: [[
            NbSharedModule,
            NbIconModule,
            NbBadgeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbIconModule,
                        NbBadgeModule,
                    ],
                    declarations: [...nbMenuComponents],
                    exports: [...nbMenuComponents],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFdEQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRWhFLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQVdqRSxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxpQkFBaUI7YUFDckI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7eUdBUlUsWUFBWTswR0FBWixZQUFZLGlCQWJDLGVBQWUsRUFBRSxtQkFBbUIsYUFNMUQsY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhLGFBUlMsZUFBZSxFQUFFLG1CQUFtQjswR0FhakQsWUFBWSxZQVJkO1lBQ1AsY0FBYztZQUNkLFlBQVk7WUFDWixhQUFhO1NBQ2Q7MkZBSVUsWUFBWTtrQkFUeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJNZW51Q29tcG9uZW50LCBOYk1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYk1lbnVTZXJ2aWNlLCBOYk1lbnVJbnRlcm5hbFNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5iQmFkZ2VNb2R1bGUgfSBmcm9tICcuLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuXG5jb25zdCBuYk1lbnVDb21wb25lbnRzID0gW05iTWVudUNvbXBvbmVudCwgTmJNZW51SXRlbUNvbXBvbmVudF07XG5cbmNvbnN0IE5CX01FTlVfUFJPVklERVJTID0gW05iTWVudVNlcnZpY2UsIE5iTWVudUludGVybmFsU2VydmljZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgTmJCYWRnZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4ubmJNZW51Q29tcG9uZW50c10sXG4gIGV4cG9ydHM6IFsuLi5uYk1lbnVDb21wb25lbnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJNZW51TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYk1lbnVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iTWVudU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5OQl9NRU5VX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19