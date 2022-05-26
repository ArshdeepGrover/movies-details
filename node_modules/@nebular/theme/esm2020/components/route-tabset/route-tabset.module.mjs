/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbRouteTabsetComponent } from './route-tabset.component';
import { NbMergeConfigsPipe } from './merge-configs.pipe';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
export class NbRouteTabsetModule {
}
NbRouteTabsetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbRouteTabsetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetModule, declarations: [NbRouteTabsetComponent, NbMergeConfigsPipe], imports: [NbSharedModule, NbIconModule], exports: [NbRouteTabsetComponent] });
NbRouteTabsetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetModule, imports: [[NbSharedModule, NbIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRouteTabsetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbIconModule],
                    declarations: [NbRouteTabsetComponent, NbMergeConfigsPipe],
                    exports: [NbRouteTabsetComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtdGFic2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9yb3V0ZS10YWJzZXQvcm91dGUtdGFic2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU9uRCxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBSGYsc0JBQXNCLEVBQUUsa0JBQWtCLGFBRC9DLGNBQWMsRUFBRSxZQUFZLGFBRTVCLHNCQUFzQjtpSEFFckIsbUJBQW1CLFlBSnJCLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQzsyRkFJNUIsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOYlJvdXRlVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi9yb3V0ZS10YWJzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iTWVyZ2VDb25maWdzUGlwZSB9IGZyb20gJy4vbWVyZ2UtY29uZmlncy5waXBlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmJTaGFyZWRNb2R1bGUsIE5iSWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05iUm91dGVUYWJzZXRDb21wb25lbnQsIE5iTWVyZ2VDb25maWdzUGlwZV0sXG4gIGV4cG9ydHM6IFtOYlJvdXRlVGFic2V0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJSb3V0ZVRhYnNldE1vZHVsZSB7fVxuIl19