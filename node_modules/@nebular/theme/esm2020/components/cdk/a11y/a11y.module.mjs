import { NgModule, Injectable } from '@angular/core';
import { NbFocusTrapFactoryService } from './focus-trap';
import { NbFocusKeyManagerFactoryService } from './focus-key-manager';
import { NbActiveDescendantKeyManagerFactoryService } from './descendant-key-manager';
import { FocusMonitor } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
export class NbFocusMonitor extends FocusMonitor {
}
NbFocusMonitor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusMonitor, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NbFocusMonitor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusMonitor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusMonitor, decorators: [{
            type: Injectable
        }] });
export class NbA11yModule {
    static forRoot() {
        return {
            ngModule: NbA11yModule,
            providers: [
                NbFocusTrapFactoryService,
                NbFocusKeyManagerFactoryService,
                NbActiveDescendantKeyManagerFactoryService,
                { provide: NbFocusMonitor, useClass: FocusMonitor },
            ],
        };
    }
}
NbA11yModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbA11yModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbA11yModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbA11yModule });
NbA11yModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbA11yModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbA11yModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTExeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL2ExMXkvYTExeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBR2pELE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTs7MkdBQW5DLGNBQWM7K0dBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOztBQUlYLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCx5QkFBeUI7Z0JBQ3pCLCtCQUErQjtnQkFDL0IsMENBQTBDO2dCQUMxQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTthQUNwRDtTQUNGLENBQUM7SUFDSixDQUFDOzt5R0FYVSxZQUFZOzBHQUFaLFlBQVk7MEdBQVosWUFBWTsyRkFBWixZQUFZO2tCQUR4QixRQUFRO21CQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkZvY3VzVHJhcEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9mb2N1cy10cmFwJztcbmltcG9ydCB7IE5iRm9jdXNLZXlNYW5hZ2VyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL2ZvY3VzLWtleS1tYW5hZ2VyJztcbmltcG9ydCB7IE5iQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXJGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vZGVzY2VuZGFudC1rZXktbWFuYWdlcic7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkZvY3VzTW9uaXRvciBleHRlbmRzIEZvY3VzTW9uaXRvciB7fVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTmJBMTF5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYkExMXlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iQTExeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYkZvY3VzVHJhcEZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICBOYkZvY3VzS2V5TWFuYWdlckZhY3RvcnlTZXJ2aWNlLFxuICAgICAgICBOYkFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyRmFjdG9yeVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogTmJGb2N1c01vbml0b3IsIHVzZUNsYXNzOiBGb2N1c01vbml0b3IgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19