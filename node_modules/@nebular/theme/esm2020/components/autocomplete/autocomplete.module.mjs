/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbCardModule } from '../card/card.module';
import { NbAutocompleteComponent } from './autocomplete.component';
import { NbAutocompleteDirective } from './autocomplete.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbOptionModule } from '../option/option-list.module';
import * as i0 from "@angular/core";
const NB_AUTOCOMPLETE_COMPONENTS = [
    NbAutocompleteComponent,
    NbAutocompleteDirective,
];
export class NbAutocompleteModule {
}
NbAutocompleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbAutocompleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteModule, declarations: [NbAutocompleteComponent,
        NbAutocompleteDirective], imports: [CommonModule,
        FormsModule,
        NbOverlayModule,
        NbCardModule,
        NbOptionModule], exports: [NbAutocompleteComponent,
        NbAutocompleteDirective, NbOptionModule] });
NbAutocompleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteModule, imports: [[
            CommonModule,
            FormsModule,
            NbOverlayModule,
            NbCardModule,
            NbOptionModule,
        ], NbOptionModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAutocompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NbOverlayModule,
                        NbCardModule,
                        NbOptionModule,
                    ],
                    exports: [
                        ...NB_AUTOCOMPLETE_COMPONENTS,
                        NbOptionModule,
                    ],
                    declarations: [...NB_AUTOCOMPLETE_COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUU5RCxNQUFNLDBCQUEwQixHQUFHO0lBQ2pDLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQWdCRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBbEIvQix1QkFBdUI7UUFDdkIsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjLGFBVmhCLHVCQUF1QjtRQUN2Qix1QkFBdUIsRUFhcEIsY0FBYztrSEFJTixvQkFBb0IsWUFidEI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztTQUNmLEVBR0UsY0FBYzsyRkFJTixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osY0FBYztxQkFDZjtvQkFDQSxPQUFPLEVBQUU7d0JBQ1AsR0FBRywwQkFBMEI7d0JBQzdCLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRywwQkFBMEIsQ0FBQztpQkFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJBdXRvY29tcGxldGVEaXJlY3RpdmUgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJPcHRpb25Nb2R1bGUgfSBmcm9tICcuLi9vcHRpb24vb3B0aW9uLWxpc3QubW9kdWxlJztcblxuY29uc3QgTkJfQVVUT0NPTVBMRVRFX0NPTVBPTkVOVFMgPSBbXG4gIE5iQXV0b2NvbXBsZXRlQ29tcG9uZW50LFxuICBOYkF1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTmJPdmVybGF5TW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYk9wdGlvbk1vZHVsZSxcbiAgXSxcbiAgIGV4cG9ydHM6IFtcbiAgICAgLi4uTkJfQVVUT0NPTVBMRVRFX0NPTVBPTkVOVFMsXG4gICAgIE5iT3B0aW9uTW9kdWxlLFxuICAgXSxcbiAgIGRlY2xhcmF0aW9uczogWy4uLk5CX0FVVE9DT01QTEVURV9DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJBdXRvY29tcGxldGVNb2R1bGUge1xufVxuIl19