import { NgModule } from '@angular/core';
import { BidiModule, Directionality } from '@angular/cdk/bidi';
import { NbDirectionality } from './bidi-service';
import * as i0 from "@angular/core";
export class NbBidiModule extends BidiModule {
}
NbBidiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBidiModule, deps: null, target: i0.ɵɵFactoryTarget.NgModule });
NbBidiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBidiModule });
NbBidiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBidiModule, providers: [
        { provide: NbDirectionality, useExisting: Directionality },
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBidiModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        { provide: NbDirectionality, useExisting: Directionality },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlkaS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL2JpZGkvYmlkaS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU9sRCxNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQVU7O3lHQUEvQixZQUFZOzBHQUFaLFlBQVk7MEdBQVosWUFBWSxhQUpaO1FBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRTtLQUMzRDsyRkFFVSxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFO3FCQUMzRDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCaWRpTW9kdWxlLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE5iRGlyZWN0aW9uYWxpdHkgfSBmcm9tICcuL2JpZGktc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTmJEaXJlY3Rpb25hbGl0eSwgdXNlRXhpc3Rpbmc6IERpcmVjdGlvbmFsaXR5IH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iQmlkaU1vZHVsZSBleHRlbmRzIEJpZGlNb2R1bGUge31cbiJdfQ==