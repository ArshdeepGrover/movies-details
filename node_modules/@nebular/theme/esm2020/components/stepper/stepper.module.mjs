/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbStepperComponent } from './stepper.component';
import { NbStepComponent } from './step.component';
import { NbStepperNextDirective, NbStepperPreviousDirective } from './stepper-button.directive';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class NbStepperModule {
}
NbStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperModule, declarations: [NbStepperComponent,
        NbStepComponent,
        NbStepperNextDirective,
        NbStepperPreviousDirective], imports: [NbSharedModule,
        NbIconModule], exports: [NbStepperComponent,
        NbStepComponent,
        NbStepperNextDirective,
        NbStepperPreviousDirective] });
NbStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperModule, imports: [[
            NbSharedModule,
            NbIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbIconModule,
                    ],
                    declarations: [
                        NbStepperComponent,
                        NbStepComponent,
                        NbStepperNextDirective,
                        NbStepperPreviousDirective,
                    ],
                    exports: [
                        NbStepperComponent,
                        NbStepComponent,
                        NbStepperNextDirective,
                        NbStepperPreviousDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFvQm5ELE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBWnhCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLDBCQUEwQixhQVAxQixjQUFjO1FBQ2QsWUFBWSxhQVNaLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLDBCQUEwQjs2R0FHakIsZUFBZSxZQWpCakI7WUFDUCxjQUFjO1lBQ2QsWUFBWTtTQUNiOzJGQWNVLGVBQWU7a0JBbEIzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLDBCQUEwQjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLDBCQUEwQjtxQkFDM0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJTdGVwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5iU3RlcHBlck5leHREaXJlY3RpdmUsIE5iU3RlcHBlclByZXZpb3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwcGVyLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5iU3RlcHBlckNvbXBvbmVudCxcbiAgICBOYlN0ZXBDb21wb25lbnQsXG4gICAgTmJTdGVwcGVyTmV4dERpcmVjdGl2ZSxcbiAgICBOYlN0ZXBwZXJQcmV2aW91c0RpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5iU3RlcHBlckNvbXBvbmVudCxcbiAgICBOYlN0ZXBDb21wb25lbnQsXG4gICAgTmJTdGVwcGVyTmV4dERpcmVjdGl2ZSxcbiAgICBOYlN0ZXBwZXJQcmV2aW91c0RpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTdGVwcGVyTW9kdWxlIHtcbn1cbiJdfQ==