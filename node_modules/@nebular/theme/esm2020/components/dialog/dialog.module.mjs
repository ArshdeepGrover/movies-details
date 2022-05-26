/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbDialogService } from './dialog.service';
import { NbDialogContainerComponent } from './dialog-container';
import { NB_DIALOG_CONFIG } from './dialog-config';
import * as i0 from "@angular/core";
export class NbDialogModule {
    static forRoot(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
    static forChild(dialogConfig = {}) {
        return {
            ngModule: NbDialogModule,
            providers: [
                NbDialogService,
                { provide: NB_DIALOG_CONFIG, useValue: dialogConfig },
            ],
        };
    }
}
NbDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogModule, declarations: [NbDialogContainerComponent], imports: [NbSharedModule, NbOverlayModule] });
NbDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogModule, imports: [[NbSharedModule, NbOverlayModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbOverlayModule],
                    declarations: [NbDialogContainerComponent],
                    entryComponents: [NbDialogContainerComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFrQixNQUFNLGlCQUFpQixDQUFDOztBQVFuRSxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQXdDLEVBQUU7UUFDdkQsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7YUFDdEQ7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBd0MsRUFBRTtRQUN4RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2YsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTthQUN0RDtTQUNGLENBQUE7SUFDSCxDQUFDOzsyR0FuQlUsY0FBYzs0R0FBZCxjQUFjLGlCQUhWLDBCQUEwQixhQUQvQixjQUFjLEVBQUUsZUFBZTs0R0FJOUIsY0FBYyxZQUpoQixDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUM7MkZBSS9CLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQztvQkFDMUMsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7b0JBQzFDLGVBQWUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUM5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYk92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyJztcbmltcG9ydCB7IE5CX0RJQUxPR19DT05GSUcsIE5iRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmJTaGFyZWRNb2R1bGUsIE5iT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05iRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTmJEaWFsb2dDb250YWluZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkRpYWxvZ01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGRpYWxvZ0NvbmZpZzogUGFydGlhbDxOYkRpYWxvZ0NvbmZpZz4gPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJEaWFsb2dNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iRGlhbG9nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5iRGlhbG9nU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBOQl9ESUFMT0dfQ09ORklHLCB1c2VWYWx1ZTogZGlhbG9nQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChkaWFsb2dDb25maWc6IFBhcnRpYWw8TmJEaWFsb2dDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5iRGlhbG9nTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYkRpYWxvZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogTkJfRElBTE9HX0NPTkZJRywgdXNlVmFsdWU6IGRpYWxvZ0NvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==