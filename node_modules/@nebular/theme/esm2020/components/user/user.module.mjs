/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbUserComponent, } from './user.component';
import { NbBadgeModule } from '../badge/badge.module';
import * as i0 from "@angular/core";
const NB_USER_COMPONENTS = [
    NbUserComponent,
];
export class NbUserModule {
}
NbUserModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbUserModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserModule, declarations: [NbUserComponent], imports: [NbSharedModule,
        NbBadgeModule], exports: [NbUserComponent] });
NbUserModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserModule, imports: [[
            NbSharedModule,
            NbBadgeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                    ],
                    declarations: [
                        ...NB_USER_COMPONENTS,
                    ],
                    exports: [
                        ...NB_USER_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUNMLGVBQWUsR0FDaEIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRXRELE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsZUFBZTtDQUNoQixDQUFDO0FBY0YsTUFBTSxPQUFPLFlBQVk7O3lHQUFaLFlBQVk7MEdBQVosWUFBWSxpQkFmdkIsZUFBZSxhQUtiLGNBQWM7UUFDZCxhQUFhLGFBTmYsZUFBZTswR0FlSixZQUFZLFlBWGQ7WUFDUCxjQUFjO1lBQ2QsYUFBYTtTQUNkOzJGQVFVLFlBQVk7a0JBWnhCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxrQkFBa0I7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGtCQUFrQjtxQkFDdEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQge1xuICBOYlVzZXJDb21wb25lbnQsXG59IGZyb20gJy4vdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJCYWRnZU1vZHVsZSB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLm1vZHVsZSc7XG5cbmNvbnN0IE5CX1VTRVJfQ09NUE9ORU5UUyA9IFtcbiAgTmJVc2VyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5iU2hhcmVkTW9kdWxlLFxuICAgIE5iQmFkZ2VNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk5CX1VTRVJfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk5CX1VTRVJfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJVc2VyTW9kdWxlIHsgfVxuIl19