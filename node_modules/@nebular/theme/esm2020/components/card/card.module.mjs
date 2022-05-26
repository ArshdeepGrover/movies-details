/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbIconModule } from '../icon/icon.module';
import { NbCardComponent, NbCardBodyComponent, NbCardFooterComponent, NbCardHeaderComponent, } from './card.component';
import { NbRevealCardComponent } from './reveal-card/reveal-card.component';
import { NbFlipCardComponent } from './flip-card/flip-card.component';
import { NbCardFrontComponent, NbCardBackComponent } from './shared/shared.component';
import * as i0 from "@angular/core";
const NB_CARD_COMPONENTS = [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardFooterComponent,
    NbCardHeaderComponent,
    NbRevealCardComponent,
    NbFlipCardComponent,
    NbCardFrontComponent,
    NbCardBackComponent,
];
export class NbCardModule {
}
NbCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardModule, declarations: [NbCardComponent,
        NbCardBodyComponent,
        NbCardFooterComponent,
        NbCardHeaderComponent,
        NbRevealCardComponent,
        NbFlipCardComponent,
        NbCardFrontComponent,
        NbCardBackComponent], imports: [NbSharedModule,
        NbIconModule], exports: [NbCardComponent,
        NbCardBodyComponent,
        NbCardFooterComponent,
        NbCardHeaderComponent,
        NbRevealCardComponent,
        NbFlipCardComponent,
        NbCardFrontComponent,
        NbCardBackComponent] });
NbCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardModule, imports: [[
            NbSharedModule,
            NbIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbSharedModule,
                        NbIconModule,
                    ],
                    declarations: [
                        ...NB_CARD_COMPONENTS,
                    ],
                    exports: [
                        ...NB_CARD_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixxQkFBcUIsR0FDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFdEYsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFjRixNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQXRCdkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQUtqQixjQUFjO1FBQ2QsWUFBWSxhQWJkLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixtQkFBbUI7MEdBZVIsWUFBWSxZQVhkO1lBQ1AsY0FBYztZQUNkLFlBQVk7U0FDYjsyRkFRVSxZQUFZO2tCQVp4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLEdBQUcsa0JBQWtCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxrQkFBa0I7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE5iSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgTmJDYXJkQ29tcG9uZW50LFxuICBOYkNhcmRCb2R5Q29tcG9uZW50LFxuICBOYkNhcmRGb290ZXJDb21wb25lbnQsXG4gIE5iQ2FyZEhlYWRlckNvbXBvbmVudCxcbn0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5iUmV2ZWFsQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iRmxpcENhcmRDb21wb25lbnQgfSBmcm9tICcuL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2FyZEZyb250Q29tcG9uZW50LCBOYkNhcmRCYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLmNvbXBvbmVudCc7XG5cbmNvbnN0IE5CX0NBUkRfQ09NUE9ORU5UUyA9IFtcbiAgTmJDYXJkQ29tcG9uZW50LFxuICBOYkNhcmRCb2R5Q29tcG9uZW50LFxuICBOYkNhcmRGb290ZXJDb21wb25lbnQsXG4gIE5iQ2FyZEhlYWRlckNvbXBvbmVudCxcbiAgTmJSZXZlYWxDYXJkQ29tcG9uZW50LFxuICBOYkZsaXBDYXJkQ29tcG9uZW50LFxuICBOYkNhcmRGcm9udENvbXBvbmVudCxcbiAgTmJDYXJkQmFja0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYlNoYXJlZE1vZHVsZSxcbiAgICBOYkljb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk5CX0NBUkRfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLk5CX0NBUkRfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYXJkTW9kdWxlIHsgfVxuIl19