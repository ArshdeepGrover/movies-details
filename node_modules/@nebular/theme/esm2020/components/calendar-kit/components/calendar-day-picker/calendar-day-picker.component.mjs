/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { NbCalendarDayCellComponent } from './calendar-day-cell.component';
import { NbCalendarSize } from '../../model';
import { convertToBoolProperty } from '../../../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/calendar-month-model.service";
import * as i2 from "../calendar-week-number/calendar-week-number.component";
import * as i3 from "../calendar-days-names/calendar-days-names.component";
import * as i4 from "../calendar-picker/calendar-picker.component";
import * as i5 from "@angular/common";
/**
 * Provides capability pick days.
 * */
export class NbCalendarDayPickerComponent {
    constructor(monthModel) {
        this.monthModel = monthModel;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonths = true;
        this.cellComponent = NbCalendarDayCellComponent;
        /**
         * Size of the component.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        this._showWeekNumber = false;
        /**
         * Fires newly selected date.
         * */
        this.dateChange = new EventEmitter();
    }
    /**
     * Custom day cell component. Have to implement `NbCalendarCell` interface.
     * */
    set setCellComponent(cellComponent) {
        if (cellComponent) {
            this.cellComponent = cellComponent;
        }
    }
    /**
     * Determines should we show week numbers column.
     * False by default.
     * */
    get showWeekNumber() {
        return this._showWeekNumber;
    }
    set showWeekNumber(value) {
        this._showWeekNumber = convertToBoolProperty(value);
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges({ visibleDate, boundingMonths }) {
        if (visibleDate || boundingMonths) {
            this.weeks = this.monthModel.createDaysGrid(this.visibleDate, this.boundingMonths);
        }
    }
    onSelect(day) {
        this.dateChange.emit(day);
    }
}
NbCalendarDayPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDayPickerComponent, deps: [{ token: i1.NbCalendarMonthModelService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarDayPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarDayPickerComponent, selector: "nb-calendar-day-picker", inputs: { visibleDate: "visibleDate", boundingMonths: "boundingMonths", min: "min", max: "max", filter: "filter", setCellComponent: ["cellComponent", "setCellComponent"], size: "size", date: "date", showWeekNumber: "showWeekNumber", weekNumberSymbol: "weekNumberSymbol" }, outputs: { dateChange: "dateChange" }, host: { properties: { "class.size-large": "this.large" } }, usesOnChanges: true, ngImport: i0, template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `, isInline: true, styles: [":host{display:flex}.days-container{width:100%}\n"], components: [{ type: i2.NbCalendarWeekNumberComponent, selector: "nb-calendar-week-numbers", inputs: ["weeks", "size", "weekNumberSymbol"] }, { type: i3.NbCalendarDaysNamesComponent, selector: "nb-calendar-days-names", inputs: ["size"] }, { type: i4.NbCalendarPickerComponent, selector: "nb-calendar-picker", inputs: ["data", "visibleDate", "selectedValue", "cellComponent", "min", "max", "filter", "size"], outputs: ["select"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDayPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-day-picker', template: `
    <nb-calendar-week-numbers *ngIf="showWeekNumber"
                              [weeks]="weeks"
                              [size]="size"
                              [weekNumberSymbol]="weekNumberSymbol">
    </nb-calendar-week-numbers>
    <div class="days-container">
      <nb-calendar-days-names [size]="size"></nb-calendar-days-names>
      <nb-calendar-picker
          [data]="weeks"
          [visibleDate]="visibleDate"
          [selectedValue]="date"
          [cellComponent]="cellComponent"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [size]="size"
          (select)="onSelect($event)">
      </nb-calendar-picker>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex}.days-container{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbCalendarMonthModelService }]; }, propDecorators: { visibleDate: [{
                type: Input
            }], boundingMonths: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], setCellComponent: [{
                type: Input,
                args: ['cellComponent']
            }], size: [{
                type: Input
            }], date: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], dateChange: [{
                type: Output
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItZGF5LXBpY2tlci9jYWxlbmRhci1kYXktcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7QUFHekU7O0tBRUs7QUEyQkwsTUFBTSxPQUFPLDRCQUE0QjtJQXVGdkMsWUFBb0IsVUFBMEM7UUFBMUMsZUFBVSxHQUFWLFVBQVUsQ0FBZ0M7UUFoRjlEOzs7YUFHSztRQUNJLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBMEJ4QyxrQkFBYSxHQUFtQywwQkFBMEIsQ0FBQztRQUUzRTs7O2FBR0s7UUFDSSxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFtQjVDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBUTNDOzthQUVLO1FBQ0ssZUFBVSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7SUFlN0MsQ0FBQztJQTVERDs7U0FFSztJQUNMLElBQ0ksZ0JBQWdCLENBQUMsYUFBeUM7UUFDNUQsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBZUQ7OztTQUdLO0lBQ0wsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsSUFBSSxjQUFjLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFjRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBWUQsV0FBVyxDQUFDLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBaUI7UUFDeEQsSUFBSSxXQUFXLElBQUksY0FBYyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDcEY7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQU07UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDOzt5SEFsR1UsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsdWNBeEI3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7MkZBSVUsNEJBQTRCO2tCQTFCeEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JULG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNO2tIQU90QyxXQUFXO3NCQUFuQixLQUFLO2dCQU1HLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLEdBQUc7c0JBQVgsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUYsZ0JBQWdCO3NCQURuQixLQUFLO3VCQUFDLGVBQWU7Z0JBWWIsSUFBSTtzQkFBWixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFPRixjQUFjO3NCQURqQixLQUFLO2dCQWFHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLSSxVQUFVO3NCQUFuQixNQUFNO2dCQUdILEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJNb250aE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGVuZGFyLW1vbnRoLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDYWxlbmRhckRheUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWRheS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyQ2VsbCwgTmJDYWxlbmRhclNpemUsIE5iQ2FsZW5kYXJTaXplVmFsdWVzIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMnO1xuXG5cbi8qKlxuICogUHJvdmlkZXMgY2FwYWJpbGl0eSBwaWNrIGRheXMuXG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItZGF5LXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWNhbGVuZGFyLXdlZWstbnVtYmVycyAqbmdJZj1cInNob3dXZWVrTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt3ZWVrc109XCJ3ZWVrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt3ZWVrTnVtYmVyU3ltYm9sXT1cIndlZWtOdW1iZXJTeW1ib2xcIj5cbiAgICA8L25iLWNhbGVuZGFyLXdlZWstbnVtYmVycz5cbiAgICA8ZGl2IGNsYXNzPVwiZGF5cy1jb250YWluZXJcIj5cbiAgICAgIDxuYi1jYWxlbmRhci1kYXlzLW5hbWVzIFtzaXplXT1cInNpemVcIj48L25iLWNhbGVuZGFyLWRheXMtbmFtZXM+XG4gICAgICA8bmItY2FsZW5kYXItcGlja2VyXG4gICAgICAgICAgW2RhdGFdPVwid2Vla3NcIlxuICAgICAgICAgIFt2aXNpYmxlRGF0ZV09XCJ2aXNpYmxlRGF0ZVwiXG4gICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiZGF0ZVwiXG4gICAgICAgICAgW2NlbGxDb21wb25lbnRdPVwiY2VsbENvbXBvbmVudFwiXG4gICAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgICBbZmlsdGVyXT1cImZpbHRlclwiXG4gICAgICAgICAgW3NpemVdPVwic2l6ZVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICA8L25iLWNhbGVuZGFyLXBpY2tlcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhckRheVBpY2tlckNvbXBvbmVudDxELCBUPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB3aGljaCBtb250aCBwaWNrZXIgaGF2ZSB0byByZW5kZXIuXG4gICAqICovXG4gIEBJbnB1dCgpIHZpc2libGVEYXRlOiBEO1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGlmIHdlIHNob3VsZCByZW5kZXIgcHJldmlvdXMgYW5kIG5leHQgbW9udGhzXG4gICAqIGluIHRoZSBjdXJyZW50IG1vbnRoIHZpZXcuXG4gICAqICovXG4gIEBJbnB1dCgpIGJvdW5kaW5nTW9udGhzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogTWluaW11bSBhdmFpbGFibGUgZGF0ZSBmb3Igc2VsZWN0aW9uLlxuICAgKiAqL1xuICBASW5wdXQoKSBtaW46IEQ7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gYXZhaWxhYmxlIGRhdGUgZm9yIHNlbGVjdGlvbi5cbiAgICogKi9cbiAgQElucHV0KCkgbWF4OiBEO1xuXG4gIC8qKlxuICAgKiBQcmVkaWNhdGUgdGhhdCBkZWNpZGVzIHdoaWNoIGNlbGxzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqICovXG4gIEBJbnB1dCgpIGZpbHRlcjogKEQpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBkYXkgY2VsbCBjb21wb25lbnQuIEhhdmUgdG8gaW1wbGVtZW50IGBOYkNhbGVuZGFyQ2VsbGAgaW50ZXJmYWNlLlxuICAgKiAqL1xuICBASW5wdXQoJ2NlbGxDb21wb25lbnQnKVxuICBzZXQgc2V0Q2VsbENvbXBvbmVudChjZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPEQsIFQ+Pikge1xuICAgIGlmIChjZWxsQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNlbGxDb21wb25lbnQgPSBjZWxsQ29tcG9uZW50O1xuICAgIH1cbiAgfVxuICBjZWxsQ29tcG9uZW50OiBUeXBlPE5iQ2FsZW5kYXJDZWxsPGFueSwgYW55Pj4gPSBOYkNhbGVuZGFyRGF5Q2VsbENvbXBvbmVudDtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBDYW4gYmUgJ21lZGl1bScgd2hpY2ggaXMgZGVmYXVsdCBvciAnbGFyZ2UnLlxuICAgKiAqL1xuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIC8qKlxuICAgKiBBbHJlYWR5IHNlbGVjdGVkIGRhdGUuXG4gICAqICovXG4gIEBJbnB1dCgpIGRhdGU6IFQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgc2hvdWxkIHdlIHNob3cgd2VlayBudW1iZXJzIGNvbHVtbi5cbiAgICogRmFsc2UgYnkgZGVmYXVsdC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgZ2V0IHNob3dXZWVrTnVtYmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93V2Vla051bWJlcjtcbiAgfVxuICBzZXQgc2hvd1dlZWtOdW1iZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93V2Vla051bWJlciA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9zaG93V2Vla051bWJlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd1dlZWtOdW1iZXI6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIHN5bWJvbCB1c2VkIGFzIGEgaGVhZGVyIGZvciB3ZWVrIG51bWJlcnMgY29sdW1uXG4gICAqICovXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJTeW1ib2w6IHN0cmluZztcblxuICAvKipcbiAgICogRmlyZXMgbmV3bHkgc2VsZWN0ZWQgZGF0ZS5cbiAgICogKi9cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgLyoqXG4gICAqIERheSBwaWNrZXIgbW9kZWwuXG4gICAqIFByb3ZpZGVzIGFsbCBkYXlzIGluIGN1cnJlbnQgbW9udGggYW5kIGlmIGJvdW5kaW5nTW9udGggaXMgdHJ1ZSBzb21lIGRheXNcbiAgICogZnJvbSBwcmV2aW91cyBhbmQgbmV4dCBvbmUuXG4gICAqICovXG4gIHdlZWtzOiBEW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vbnRoTW9kZWw6IE5iQ2FsZW5kYXJNb250aE1vZGVsU2VydmljZTxEPikge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoeyB2aXNpYmxlRGF0ZSwgYm91bmRpbmdNb250aHMgfTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh2aXNpYmxlRGF0ZSB8fCBib3VuZGluZ01vbnRocykge1xuICAgICAgdGhpcy53ZWVrcyA9IHRoaXMubW9udGhNb2RlbC5jcmVhdGVEYXlzR3JpZCh0aGlzLnZpc2libGVEYXRlLCB0aGlzLmJvdW5kaW5nTW9udGhzKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChkYXk6IEQpIHtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChkYXkpO1xuICB9XG59XG4iXX0=