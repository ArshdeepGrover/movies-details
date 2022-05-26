import { NgModule } from '@angular/core';
import { OverlayContainer, ScrollDispatcher, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NbOverlayContainer } from '../overlay/mapping';
import { NbOverlayContainerAdapter } from './overlay-container-adapter';
import { NbScrollDispatcherAdapter } from './scroll-dispatcher-adapter';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
import { NbBlockScrollStrategyAdapter, NbScrollStrategyOptions } from './block-scroll-strategy-adapter';
import * as i0 from "@angular/core";
export class NbCdkAdapterModule {
    static forRoot() {
        return {
            ngModule: NbCdkAdapterModule,
            providers: [
                NbViewportRulerAdapter,
                NbOverlayContainerAdapter,
                NbBlockScrollStrategyAdapter,
                NbScrollDispatcherAdapter,
                NbScrollStrategyOptions,
                { provide: OverlayContainer, useExisting: NbOverlayContainerAdapter },
                { provide: NbOverlayContainer, useExisting: NbOverlayContainerAdapter },
                { provide: ScrollDispatcher, useExisting: NbScrollDispatcherAdapter },
                { provide: ScrollStrategyOptions, useExisting: NbScrollStrategyOptions },
            ],
        };
    }
}
NbCdkAdapterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkAdapterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbCdkAdapterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkAdapterModule });
NbCdkAdapterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkAdapterModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCdkAdapterModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL2FkYXB0ZXIvYWRhcHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBSXhHLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLDRCQUE0QjtnQkFDNUIseUJBQXlCO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSx5QkFBeUIsRUFBRTtnQkFDckUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO2dCQUN2RSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUU7Z0JBQ3JFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRTthQUN6RTtTQUNGLENBQUM7SUFDSixDQUFDOzsrR0FoQlUsa0JBQWtCO2dIQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixRQUFRO21CQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciwgU2Nyb2xsRGlzcGF0Y2hlciwgU2Nyb2xsU3RyYXRlZ3lPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBOYk92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuLi9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJPdmVybGF5Q29udGFpbmVyQWRhcHRlciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXItYWRhcHRlcic7XG5pbXBvcnQgeyBOYlNjcm9sbERpc3BhdGNoZXJBZGFwdGVyIH0gZnJvbSAnLi9zY3JvbGwtZGlzcGF0Y2hlci1hZGFwdGVyJztcbmltcG9ydCB7IE5iVmlld3BvcnRSdWxlckFkYXB0ZXIgfSBmcm9tICcuL3ZpZXdwb3J0LXJ1bGVyLWFkYXB0ZXInO1xuaW1wb3J0IHsgTmJCbG9ja1Njcm9sbFN0cmF0ZWd5QWRhcHRlciwgTmJTY3JvbGxTdHJhdGVneU9wdGlvbnMgfSBmcm9tICcuL2Jsb2NrLXNjcm9sbC1zdHJhdGVneS1hZGFwdGVyJztcblxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTmJDZGtBZGFwdGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYkNka0FkYXB0ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iQ2RrQWRhcHRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYlZpZXdwb3J0UnVsZXJBZGFwdGVyLFxuICAgICAgICBOYk92ZXJsYXlDb250YWluZXJBZGFwdGVyLFxuICAgICAgICBOYkJsb2NrU2Nyb2xsU3RyYXRlZ3lBZGFwdGVyLFxuICAgICAgICBOYlNjcm9sbERpc3BhdGNoZXJBZGFwdGVyLFxuICAgICAgICBOYlNjcm9sbFN0cmF0ZWd5T3B0aW9ucyxcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5Q29udGFpbmVyLCB1c2VFeGlzdGluZzogTmJPdmVybGF5Q29udGFpbmVyQWRhcHRlciB9LFxuICAgICAgICB7IHByb3ZpZGU6IE5iT3ZlcmxheUNvbnRhaW5lciwgdXNlRXhpc3Rpbmc6IE5iT3ZlcmxheUNvbnRhaW5lckFkYXB0ZXIgfSxcbiAgICAgICAgeyBwcm92aWRlOiBTY3JvbGxEaXNwYXRjaGVyLCB1c2VFeGlzdGluZzogTmJTY3JvbGxEaXNwYXRjaGVyQWRhcHRlciB9LFxuICAgICAgICB7IHByb3ZpZGU6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucywgdXNlRXhpc3Rpbmc6IE5iU2Nyb2xsU3RyYXRlZ3lPcHRpb25zIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==