/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import { NbCalendarYearCellComponent } from './calendar-year-cell.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
import * as i2 from "../../services/calendar-year-model.service";
import * as i3 from "../calendar-picker/calendar-picker.component";
export class NbCalendarYearPickerComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.cellComponent = NbCalendarYearCellComponent;
        this.size = NbCalendarSize.MEDIUM;
        this.yearChange = new EventEmitter();
    }
    set _cellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges() {
        this.years = this.yearModelService.getViewYears(this.year);
    }
    onSelect(year) {
        this.yearChange.emit(year);
    }
}
NbCalendarYearPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearPickerComponent, deps: [{ token: i1.NbDateService }, { token: i2.NbCalendarYearModelService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarYearPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarYearPickerComponent, selector: "nb-calendar-year-picker", inputs: { date: "date", min: "min", max: "max", filter: "filter", _cellComponent: ["cellComponent", "_cellComponent"], size: "size", year: "year" }, outputs: { yearChange: "yearChange" }, host: { properties: { "class.size-large": "this.large" } }, usesOnChanges: true, ngImport: i0, template: `
    <nb-calendar-picker
      [data]="years"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="year"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `, isInline: true, components: [{ type: i3.NbCalendarPickerComponent, selector: "nb-calendar-picker", inputs: ["data", "visibleDate", "selectedValue", "cellComponent", "min", "max", "filter", "size"], outputs: ["select"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearPickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-year-picker',
                    template: `
    <nb-calendar-picker
      [data]="years"
      [min]="min"
      [max]="max"
      [filter]="filter"
      [selectedValue]="date"
      [visibleDate]="year"
      [cellComponent]="cellComponent"
      [size]="size"
      (select)="onSelect($event)">
    </nb-calendar-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }, { type: i2.NbCalendarYearModelService }]; }, propDecorators: { date: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], _cellComponent: [{
                type: Input,
                args: ['cellComponent']
            }], size: [{
                type: Input
            }], year: [{
                type: Input
            }], yearChange: [{
                type: Output
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyLWtpdC9jb21wb25lbnRzL2NhbGVuZGFyLXllYXItcGlja2VyL2NhbGVuZGFyLXllYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFxQjdFLE1BQU0sT0FBTyw2QkFBNkI7SUFnQ3hDLFlBQ1ksV0FBNkIsRUFDN0IsZ0JBQStDO1FBRC9DLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQStCO1FBbEIzRCxrQkFBYSxHQUErQiwyQkFBMkIsQ0FBQztRQUUvRCxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFLNUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7SUFZMUMsQ0FBQztJQXpCSixJQUNJLGNBQWMsQ0FBQyxhQUF5QztRQUMxRCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNwQztJQUNILENBQUM7SUFVRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBU0QsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7MEhBM0NVLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLDRVQWY5Qjs7Ozs7Ozs7Ozs7O0dBWVQ7MkZBR1UsNkJBQTZCO2tCQWpCekMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs2SUFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsR0FBRztzQkFBWCxLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBR0YsY0FBYztzQkFEakIsS0FBSzt1QkFBQyxlQUFlO2dCQVFiLElBQUk7c0JBQVosS0FBSztnQkFHRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTtnQkFHSCxLQUFLO3NCQURSLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJDYWxlbmRhckNlbGwsIE5iQ2FsZW5kYXJTaXplLCBOYkNhbGVuZGFyU2l6ZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJZZWFyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIteWVhci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJZZWFyTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIteWVhci1tb2RlbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXIteWVhci1waWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1jYWxlbmRhci1waWNrZXJcbiAgICAgIFtkYXRhXT1cInllYXJzXCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgIFtzZWxlY3RlZFZhbHVlXT1cImRhdGVcIlxuICAgICAgW3Zpc2libGVEYXRlXT1cInllYXJcIlxuICAgICAgW2NlbGxDb21wb25lbnRdPVwiY2VsbENvbXBvbmVudFwiXG4gICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgIDwvbmItY2FsZW5kYXItcGlja2VyPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclllYXJQaWNrZXJDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGRhdGU6IEQ7XG5cbiAgQElucHV0KCkgbWluOiBEO1xuXG4gIEBJbnB1dCgpIG1heDogRDtcblxuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2VsbENvbXBvbmVudCcpXG4gIHNldCBfY2VsbENvbXBvbmVudChjZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPEQsIEQ+Pikge1xuICAgIGlmIChjZWxsQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNlbGxDb21wb25lbnQgPSBjZWxsQ29tcG9uZW50O1xuICAgIH1cbiAgfVxuICBjZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPEQsIEQ+PiA9IE5iQ2FsZW5kYXJZZWFyQ2VsbENvbXBvbmVudDtcblxuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIEBJbnB1dCgpIHllYXI6IEQ7XG5cbiAgQE91dHB1dCgpIHllYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgeWVhcnM6IERbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPixcbiAgICBwcm90ZWN0ZWQgeWVhck1vZGVsU2VydmljZTogTmJDYWxlbmRhclllYXJNb2RlbFNlcnZpY2U8RD4sXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnllYXJzID0gdGhpcy55ZWFyTW9kZWxTZXJ2aWNlLmdldFZpZXdZZWFycyh0aGlzLnllYXIpO1xuICB9XG5cbiAgb25TZWxlY3QoeWVhcikge1xuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KHllYXIpO1xuICB9XG59XG4iXX0=