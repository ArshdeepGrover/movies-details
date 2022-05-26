import { NgModule } from '@angular/core';
import { NbSharedModule } from '../../shared/shared.module';
import { NbA11yModule } from '../a11y/a11y.module';
import { NbCdkMappingModule } from './mapping';
import { NbPositionBuilderService } from './overlay-position';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from './overlay-container';
import { NbOverlayService } from './overlay-service';
import { NbCdkAdapterModule } from '../adapter/adapter.module';
import { NbPositionHelper } from './position-helper';
import { NbTriggerStrategyBuilderService } from './overlay-trigger';
import * as i0 from "@angular/core";
export class NbOverlayModule {
    static forRoot() {
        return {
            ngModule: NbOverlayModule,
            providers: [
                NbPositionBuilderService,
                NbTriggerStrategyBuilderService,
                NbOverlayService,
                NbPositionHelper,
                ...NbCdkMappingModule.forRoot().providers,
                ...NbCdkAdapterModule.forRoot().providers,
                ...NbA11yModule.forRoot().providers,
            ],
        };
    }
}
NbOverlayModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbOverlayModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayModule, declarations: [NbPositionedContainerComponent,
        NbOverlayContainerComponent], imports: [NbCdkMappingModule,
        NbSharedModule], exports: [NbCdkMappingModule,
        NbCdkAdapterModule,
        NbOverlayContainerComponent] });
NbOverlayModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayModule, imports: [[
            NbCdkMappingModule,
            NbSharedModule,
        ], NbCdkMappingModule,
        NbCdkAdapterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbCdkMappingModule,
                        NbSharedModule,
                    ],
                    declarations: [
                        NbPositionedContainerComponent,
                        NbOverlayContainerComponent,
                    ],
                    exports: [
                        NbCdkMappingModule,
                        NbCdkAdapterModule,
                        NbOverlayContainerComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDhCQUE4QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBa0JwRSxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Qsd0JBQXdCO2dCQUN4QiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixHQUFHLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQ3pDLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDekMsR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUzthQUNwQztTQUNGLENBQUM7SUFDSixDQUFDOzs0R0FkVSxlQUFlOzZHQUFmLGVBQWUsaUJBVHhCLDhCQUE4QjtRQUM5QiwyQkFBMkIsYUFMM0Isa0JBQWtCO1FBQ2xCLGNBQWMsYUFPZCxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLDJCQUEyQjs2R0FHbEIsZUFBZSxZQWRqQjtZQUNQLGtCQUFrQjtZQUNsQixjQUFjO1NBQ2YsRUFNQyxrQkFBa0I7UUFDbEIsa0JBQWtCOzJGQUlULGVBQWU7a0JBZjNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osOEJBQThCO3dCQUM5QiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsMkJBQTJCO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJBMTF5TW9kdWxlIH0gZnJvbSAnLi4vYTExeS9hMTF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYkNka01hcHBpbmdNb2R1bGUgfSBmcm9tICcuL21hcHBpbmcnO1xuaW1wb3J0IHsgTmJQb3NpdGlvbkJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudCwgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBOYk92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDZGtBZGFwdGVyTW9kdWxlIH0gZnJvbSAnLi4vYWRhcHRlci9hZGFwdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBOYlBvc2l0aW9uSGVscGVyIH0gZnJvbSAnLi9wb3NpdGlvbi1oZWxwZXInO1xuaW1wb3J0IHsgTmJUcmlnZ2VyU3RyYXRlZ3lCdWlsZGVyU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS10cmlnZ2VyJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmJDZGtNYXBwaW5nTW9kdWxlLFxuICAgIE5iU2hhcmVkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOYlBvc2l0aW9uZWRDb250YWluZXJDb21wb25lbnQsXG4gICAgTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmJDZGtNYXBwaW5nTW9kdWxlLFxuICAgIE5iQ2RrQWRhcHRlck1vZHVsZSxcbiAgICBOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iT3ZlcmxheU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJPdmVybGF5TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYk92ZXJsYXlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmJQb3NpdGlvbkJ1aWxkZXJTZXJ2aWNlLFxuICAgICAgICBOYlRyaWdnZXJTdHJhdGVneUJ1aWxkZXJTZXJ2aWNlLFxuICAgICAgICBOYk92ZXJsYXlTZXJ2aWNlLFxuICAgICAgICBOYlBvc2l0aW9uSGVscGVyLFxuICAgICAgICAuLi5OYkNka01hcHBpbmdNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcbiAgICAgICAgLi4uTmJDZGtBZGFwdGVyTW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICAgIC4uLk5iQTExeU1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=