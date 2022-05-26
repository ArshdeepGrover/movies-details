import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbSharedModule } from '../shared/shared.module';
import { NbInputModule } from '../input/input.module';
import { NbCardModule } from '../card/card.module';
import { NbButtonModule } from '../button/button.module';
import { NbSelectComponent, NbSelectLabelComponent } from './select.component';
import { NbOptionModule } from '../option/option-list.module';
import { NbIconModule } from '../icon/icon.module';
import * as i0 from "@angular/core";
const NB_SELECT_COMPONENTS = [
    NbSelectComponent,
    NbSelectLabelComponent,
];
export class NbSelectModule {
}
NbSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSelectModule, declarations: [NbSelectComponent,
        NbSelectLabelComponent], imports: [NbSharedModule,
        NbOverlayModule,
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbIconModule,
        NbOptionModule], exports: [NbSelectComponent,
        NbSelectLabelComponent, NbOptionModule] });
NbSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSelectModule, imports: [[
            NbSharedModule,
            NbOverlayModule,
            NbButtonModule,
            NbInputModule,
            NbCardModule,
            NbIconModule,
            NbOptionModule,
        ], NbOptionModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbOverlayModule,
                        NbButtonModule,
                        NbInputModule,
                        NbCardModule,
                        NbIconModule,
                        NbOptionModule,
                    ],
                    exports: [
                        ...NB_SELECT_COMPONENTS,
                        NbOptionModule,
                    ],
                    declarations: [...NB_SELECT_COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFbkQsTUFBTSxvQkFBb0IsR0FBRztJQUMzQixpQkFBaUI7SUFDakIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFrQkYsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFwQnpCLGlCQUFpQjtRQUNqQixzQkFBc0IsYUFLcEIsY0FBYztRQUNkLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYyxhQVpoQixpQkFBaUI7UUFDakIsc0JBQXNCLEVBZXBCLGNBQWM7NEdBSUwsY0FBYyxZQWZoQjtZQUNQLGNBQWM7WUFDZCxlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7U0FDZixFQUdDLGNBQWM7MkZBSUwsY0FBYztrQkFoQjFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEdBQUcsb0JBQW9CO3dCQUN2QixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYklucHV0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOYlNlbGVjdENvbXBvbmVudCwgTmJTZWxlY3RMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYk9wdGlvbk1vZHVsZSB9IGZyb20gJy4uL29wdGlvbi9vcHRpb24tbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbmNvbnN0IE5CX1NFTEVDVF9DT01QT05FTlRTID0gW1xuICBOYlNlbGVjdENvbXBvbmVudCxcbiAgTmJTZWxlY3RMYWJlbENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgICBOYk92ZXJsYXlNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iT3B0aW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTkJfU0VMRUNUX0NPTVBPTkVOVFMsXG4gICAgTmJPcHRpb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLk5CX1NFTEVDVF9DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJTZWxlY3RNb2R1bGUge1xufVxuIl19