import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbCalendarSize } from '../calendar-kit/model';
import { NbPortalOutletDirective } from '../cdk/overlay/mapping';
import { NbTimePickerComponent } from '../timepicker/timepicker.component';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
import * as i2 from "../calendar-kit/services/calendar-time-model.service";
import * as i3 from "../card/card.component";
import * as i4 from "../calendar/base-calendar.component";
import * as i5 from "../timepicker/timepicker.component";
import * as i6 from "../calendar-kit/components/calendar-actions/calendar-actions.component";
import * as i7 from "../cdk/overlay/mapping";
export class NbCalendarWithTimeComponent extends NbCalendarComponent {
    constructor(dateService, cd, calendarTimeModelService) {
        super();
        this.dateService = dateService;
        this.cd = cd;
        this.calendarTimeModelService = calendarTimeModelService;
    }
    ngOnInit() {
        if (!this.date) {
            this.date = this.calendarTimeModelService.getResetTime();
        }
    }
    ngAfterViewInit() {
        this.portalOutlet.attachTemplatePortal(this.timepicker.portal);
    }
    onDateValueChange(date) {
        const hours = this.dateService.getHours(this.date);
        const minutes = this.dateService.getMinutes(this.date);
        const seconds = this.dateService.getSeconds(this.date);
        const milliseconds = this.dateService.getMilliseconds(this.date);
        let newDate = this.dateService.setHours(date, hours);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setMinutes(newDate, minutes);
        newDate = this.dateService.setSeconds(newDate, seconds);
        newDate = this.dateService.setMilliseconds(newDate, milliseconds);
        this.date = newDate;
    }
    onTimeChange(selectedTime) {
        let newDate = this.dateService.clone(this.date);
        newDate = this.dateService.setHours(newDate, this.dateService.getHours(selectedTime.time));
        newDate = this.dateService.setMinutes(newDate, this.dateService.getMinutes(selectedTime.time));
        newDate = this.dateService.setSeconds(newDate, this.dateService.getSeconds(selectedTime.time));
        newDate = this.dateService.setMilliseconds(newDate, this.dateService.getMilliseconds(selectedTime.time));
        this.date = newDate;
    }
    saveValue() {
        this.dateChange.emit(this.date);
    }
    saveCurrentTime() {
        this.dateChange.emit(this.dateService.today());
    }
    /**
     * We don't show seconds with twelve hours format
     * */
    showSeconds() {
        return this.withSeconds && !this.twelveHoursFormat;
    }
    isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
}
NbCalendarWithTimeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarWithTimeComponent, deps: [{ token: i1.NbDateService }, { token: i0.ChangeDetectorRef }, { token: i2.NbCalendarTimeModelService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarWithTimeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarWithTimeComponent, selector: "nb-calendar-with-time", inputs: { visibleDate: "visibleDate", twelveHoursFormat: "twelveHoursFormat", withSeconds: "withSeconds", singleColumn: "singleColumn", step: "step", timeFormat: "timeFormat", title: "title", applyButtonText: "applyButtonText", currentTimeButtonText: "currentTimeButtonText", showCurrentTimeButton: "showCurrentTimeButton" }, viewQueries: [{ propertyName: "portalOutlet", first: true, predicate: NbPortalOutletDirective, descendants: true }, { propertyName: "timepicker", first: true, predicate: NbTimePickerComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: `
    <nb-card class="calendar-with-time">
      <nb-card-body class="picker-body">
        <nb-base-calendar
          [boundingMonth]="boundingMonth"
          [startView]="startView"
          [date]="date"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [dayCellComponent]="dayCellComponent"
          [monthCellComponent]="monthCellComponent"
          [yearCellComponent]="yearCellComponent"
          [size]="size"
          [visibleDate]="visibleDate"
          [showNavigation]="showNavigation"
          [showWeekNumber]="showWeekNumber"
          [weekNumberSymbol]="weekNumberSymbol"
          (dateChange)="onDateValueChange($event)">
        </nb-base-calendar>
        <div class="timepicker-section"
             [class.size-large]="isLarge()"
             [class.timepicker-single-column-width]="singleColumn"
             [class.timepicker-multiple-column-width]="!singleColumn">
          <div class="picker-title">{{ title }}</div>
          <nb-timepicker
            (onSelectTime)="onTimeChange($event)"
            [date]="date"
            [twelveHoursFormat]="twelveHoursFormat"
            [withSeconds]="showSeconds()"
            [showFooter]="false"
            [singleColumn]="singleColumn"
            [step]="step">
          </nb-timepicker>
          <ng-container nbPortalOutlet></ng-container>
        </div>
      </nb-card-body>
      <nb-card-footer class="picker-footer">
        <nb-calendar-actions
          [applyButtonText]="applyButtonText"
          [currentTimeButtonText]="currentTimeButtonText"
          [showCurrentTimeButton]="showCurrentTimeButton"
          (setCurrentTime)="saveCurrentTime()"
          (saveValue)="saveValue()"
        ></nb-calendar-actions>
      </nb-card-footer>
    </nb-card>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host ::ng-deep nb-card.nb-timepicker-container{flex:1 0 0;border-radius:0;width:auto;border-right:0;border-bottom:0}[dir=ltr] :host .picker-footer{padding-left:.625rem}[dir=rtl] :host .picker-footer{padding-right:.625rem}.picker-body{align-items:stretch;display:flex;padding:0}.picker-body nb-base-calendar ::ng-deep nb-card{border-radius:0}.calendar-with-time{overflow:hidden}.timepicker-section{display:flex;flex-direction:column}\n"], components: [{ type: i3.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i4.NbBaseCalendarComponent, selector: "nb-base-calendar", inputs: ["boundingMonth", "startView", "min", "max", "filter", "dayCellComponent", "monthCellComponent", "yearCellComponent", "size", "visibleDate", "showNavigation", "date", "showWeekNumber", "weekNumberSymbol"], outputs: ["dateChange"] }, { type: i5.NbTimePickerComponent, selector: "nb-timepicker", inputs: ["timeFormat", "twelveHoursFormat", "withSeconds", "singleColumn", "step", "date", "showFooter", "applyButtonText", "hoursText", "minutesText", "secondsText", "ampmText", "currentTimeButtonText"], outputs: ["onSelectTime"], exportAs: ["nbTimepicker"] }, { type: i3.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i6.NbCalendarActionsComponent, selector: "nb-calendar-actions", inputs: ["applyButtonText", "currentTimeButtonText", "showCurrentTimeButton"], outputs: ["setCurrentTime", "saveValue"] }], directives: [{ type: i7.NbPortalOutletDirective, selector: "[nbPortalOutlet]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarWithTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-with-time', template: `
    <nb-card class="calendar-with-time">
      <nb-card-body class="picker-body">
        <nb-base-calendar
          [boundingMonth]="boundingMonth"
          [startView]="startView"
          [date]="date"
          [min]="min"
          [max]="max"
          [filter]="filter"
          [dayCellComponent]="dayCellComponent"
          [monthCellComponent]="monthCellComponent"
          [yearCellComponent]="yearCellComponent"
          [size]="size"
          [visibleDate]="visibleDate"
          [showNavigation]="showNavigation"
          [showWeekNumber]="showWeekNumber"
          [weekNumberSymbol]="weekNumberSymbol"
          (dateChange)="onDateValueChange($event)">
        </nb-base-calendar>
        <div class="timepicker-section"
             [class.size-large]="isLarge()"
             [class.timepicker-single-column-width]="singleColumn"
             [class.timepicker-multiple-column-width]="!singleColumn">
          <div class="picker-title">{{ title }}</div>
          <nb-timepicker
            (onSelectTime)="onTimeChange($event)"
            [date]="date"
            [twelveHoursFormat]="twelveHoursFormat"
            [withSeconds]="showSeconds()"
            [showFooter]="false"
            [singleColumn]="singleColumn"
            [step]="step">
          </nb-timepicker>
          <ng-container nbPortalOutlet></ng-container>
        </div>
      </nb-card-body>
      <nb-card-footer class="picker-footer">
        <nb-calendar-actions
          [applyButtonText]="applyButtonText"
          [currentTimeButtonText]="currentTimeButtonText"
          [showCurrentTimeButton]="showCurrentTimeButton"
          (setCurrentTime)="saveCurrentTime()"
          (saveValue)="saveValue()"
        ></nb-calendar-actions>
      </nb-card-footer>
    </nb-card>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host ::ng-deep nb-card.nb-timepicker-container{flex:1 0 0;border-radius:0;width:auto;border-right:0;border-bottom:0}[dir=ltr] :host .picker-footer{padding-left:.625rem}[dir=rtl] :host .picker-footer{padding-right:.625rem}.picker-body{align-items:stretch;display:flex;padding:0}.picker-body nb-base-calendar ::ng-deep nb-card{border-radius:0}.calendar-with-time{overflow:hidden}.timepicker-section{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }, { type: i0.ChangeDetectorRef }, { type: i2.NbCalendarTimeModelService }]; }, propDecorators: { visibleDate: [{
                type: Input
            }], twelveHoursFormat: [{
                type: Input
            }], withSeconds: [{
                type: Input
            }], singleColumn: [{
                type: Input
            }], step: [{
                type: Input
            }], timeFormat: [{
                type: Input
            }], title: [{
                type: Input
            }], applyButtonText: [{
                type: Input
            }], currentTimeButtonText: [{
                type: Input
            }], showCurrentTimeButton: [{
                type: Input
            }], portalOutlet: [{
                type: ViewChild,
                args: [NbPortalOutletDirective]
            }], timepicker: [{
                type: ViewChild,
                args: [NbTimePickerComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2l0aC10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9kYXRlcGlja2VyL2NhbGVuZGFyLXdpdGgtdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUlyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7OztBQXVEM0UsTUFBTSxPQUFPLDJCQUErQixTQUFRLG1CQUFzQjtJQStDeEUsWUFBc0IsV0FBNkIsRUFDaEMsRUFBcUIsRUFDbEIsd0JBQXVEO1FBRTNFLEtBQUssRUFBRSxDQUFDO1FBSlksZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ2xCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBK0I7SUFHN0UsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQU87UUFDdkIsTUFB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QXVCLFlBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDVCxtQkFFZ0IsdUJBQXVCLENBQUMsTUFBTTs2S0FNdEMsV0FBVztzQkFBbkIsS0FBSztnQkFLRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxlQUFlO3NCQUF2QixLQUFLO2dCQUVHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFFRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBRThCLFlBQVk7c0JBQS9DLFNBQVM7dUJBQUMsdUJBQXVCO2dCQUNBLFVBQVU7c0JBQTNDLFNBQVM7dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iU2VsZWN0ZWRUaW1lUGF5bG9hZCB9IGZyb20gJy4uL3RpbWVwaWNrZXIvbW9kZWwnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclRpbWVNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvY2FsZW5kYXItdGltZS1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJTaXplIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L21vZGVsJztcbmltcG9ydCB7IE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvbWFwcGluZyc7XG5pbXBvcnQgeyBOYlRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItd2l0aC10aW1lJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItY2FyZCBjbGFzcz1cImNhbGVuZGFyLXdpdGgtdGltZVwiPlxuICAgICAgPG5iLWNhcmQtYm9keSBjbGFzcz1cInBpY2tlci1ib2R5XCI+XG4gICAgICAgIDxuYi1iYXNlLWNhbGVuZGFyXG4gICAgICAgICAgW2JvdW5kaW5nTW9udGhdPVwiYm91bmRpbmdNb250aFwiXG4gICAgICAgICAgW3N0YXJ0Vmlld109XCJzdGFydFZpZXdcIlxuICAgICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgICAgW2ZpbHRlcl09XCJmaWx0ZXJcIlxuICAgICAgICAgIFtkYXlDZWxsQ29tcG9uZW50XT1cImRheUNlbGxDb21wb25lbnRcIlxuICAgICAgICAgIFttb250aENlbGxDb21wb25lbnRdPVwibW9udGhDZWxsQ29tcG9uZW50XCJcbiAgICAgICAgICBbeWVhckNlbGxDb21wb25lbnRdPVwieWVhckNlbGxDb21wb25lbnRcIlxuICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgIFt2aXNpYmxlRGF0ZV09XCJ2aXNpYmxlRGF0ZVwiXG4gICAgICAgICAgW3Nob3dOYXZpZ2F0aW9uXT1cInNob3dOYXZpZ2F0aW9uXCJcbiAgICAgICAgICBbc2hvd1dlZWtOdW1iZXJdPVwic2hvd1dlZWtOdW1iZXJcIlxuICAgICAgICAgIFt3ZWVrTnVtYmVyU3ltYm9sXT1cIndlZWtOdW1iZXJTeW1ib2xcIlxuICAgICAgICAgIChkYXRlQ2hhbmdlKT1cIm9uRGF0ZVZhbHVlQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPC9uYi1iYXNlLWNhbGVuZGFyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1zZWN0aW9uXCJcbiAgICAgICAgICAgICBbY2xhc3Muc2l6ZS1sYXJnZV09XCJpc0xhcmdlKClcIlxuICAgICAgICAgICAgIFtjbGFzcy50aW1lcGlja2VyLXNpbmdsZS1jb2x1bW4td2lkdGhdPVwic2luZ2xlQ29sdW1uXCJcbiAgICAgICAgICAgICBbY2xhc3MudGltZXBpY2tlci1tdWx0aXBsZS1jb2x1bW4td2lkdGhdPVwiIXNpbmdsZUNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrZXItdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICAgICAgICAgIDxuYi10aW1lcGlja2VyXG4gICAgICAgICAgICAob25TZWxlY3RUaW1lKT1cIm9uVGltZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICAgICAgW3R3ZWx2ZUhvdXJzRm9ybWF0XT1cInR3ZWx2ZUhvdXJzRm9ybWF0XCJcbiAgICAgICAgICAgIFt3aXRoU2Vjb25kc109XCJzaG93U2Vjb25kcygpXCJcbiAgICAgICAgICAgIFtzaG93Rm9vdGVyXT1cImZhbHNlXCJcbiAgICAgICAgICAgIFtzaW5nbGVDb2x1bW5dPVwic2luZ2xlQ29sdW1uXCJcbiAgICAgICAgICAgIFtzdGVwXT1cInN0ZXBcIj5cbiAgICAgICAgICA8L25iLXRpbWVwaWNrZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBuYlBvcnRhbE91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25iLWNhcmQtYm9keT5cbiAgICAgIDxuYi1jYXJkLWZvb3RlciBjbGFzcz1cInBpY2tlci1mb290ZXJcIj5cbiAgICAgICAgPG5iLWNhbGVuZGFyLWFjdGlvbnNcbiAgICAgICAgICBbYXBwbHlCdXR0b25UZXh0XT1cImFwcGx5QnV0dG9uVGV4dFwiXG4gICAgICAgICAgW2N1cnJlbnRUaW1lQnV0dG9uVGV4dF09XCJjdXJyZW50VGltZUJ1dHRvblRleHRcIlxuICAgICAgICAgIFtzaG93Q3VycmVudFRpbWVCdXR0b25dPVwic2hvd0N1cnJlbnRUaW1lQnV0dG9uXCJcbiAgICAgICAgICAoc2V0Q3VycmVudFRpbWUpPVwic2F2ZUN1cnJlbnRUaW1lKClcIlxuICAgICAgICAgIChzYXZlVmFsdWUpPVwic2F2ZVZhbHVlKClcIlxuICAgICAgICA+PC9uYi1jYWxlbmRhci1hY3Rpb25zPlxuICAgICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgICA8L25iLWNhcmQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdpdGgtdGltZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJXaXRoVGltZUNvbXBvbmVudDxEPiBleHRlbmRzIE5iQ2FsZW5kYXJDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogRGVmaW5lcyBzZWxlY3RlZCBkYXRlLlxuICAgKiAqL1xuICBASW5wdXQoKSB2aXNpYmxlRGF0ZTogRDtcblxuICAvKipcbiAgICogRGVmaW5lcyAxMiBob3VycyBmb3JtYXQgbGlrZSAnMDc6MDAgUE0nLlxuICAgKiAqL1xuICBASW5wdXQoKSB0d2VsdmVIb3Vyc0Zvcm1hdDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBzZWNvbmRzIGluIHRpbWVwaWNrZXIuXG4gICAqIElnbm9yZWQgd2hlbiBzaW5nbGVDb2x1bW4gaXMgdHJ1ZS5cbiAgICogKi9cbiAgQElucHV0KCkgd2l0aFNlY29uZHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdGltZXBpY2tlciB2YWx1ZXMgaW4gb25lIGNvbHVtbiB3aXRoIDYwIG1pbnV0ZXMgc3RlcCBieSBkZWZhdWx0LlxuICAgKiAqL1xuICBASW5wdXQoKSBzaW5nbGVDb2x1bW46IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERlZmluZXMgbWludXRlcyBzdGVwIHdoZW4gd2UgdXNlIGZpbGwgdGltZSBmb3JtYXQuXG4gICAqIElmIHNldCB0byAyMCwgaXQgd2lsbCBiZTogJzEyOjAwLCAxMjoyMDogMTI6NDAsIDEzOjAwLi4uJ1xuICAgKiAqL1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGltZSBmb3JtYXQuXG4gICAqICovXG4gIEBJbnB1dCgpIHRpbWVGb3JtYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogRGVmaW5lcyB0ZXh0IG92ZXIgdGhlIHRpbWVwaWNrZXIuXG4gICAqICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYXBwbHlCdXR0b25UZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3VycmVudFRpbWVCdXR0b25UZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2hvd0N1cnJlbnRUaW1lQnV0dG9uOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoTmJQb3J0YWxPdXRsZXREaXJlY3RpdmUpIHBvcnRhbE91dGxldDogTmJQb3J0YWxPdXRsZXREaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoTmJUaW1lUGlja2VyQ29tcG9uZW50KSB0aW1lcGlja2VyOiBOYlRpbWVQaWNrZXJDb21wb25lbnQ8RD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+LFxuICAgICAgICAgICAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlOiBOYkNhbGVuZGFyVGltZU1vZGVsU2VydmljZTxEPixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kYXRlKSB7XG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLmNhbGVuZGFyVGltZU1vZGVsU2VydmljZS5nZXRSZXNldFRpbWUoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoVGVtcGxhdGVQb3J0YWwodGhpcy50aW1lcGlja2VyLnBvcnRhbCk7XG4gIH1cblxuICBvbkRhdGVWYWx1ZUNoYW5nZShkYXRlOiBEKTogdm9pZCB7XG4gICAgY29uc3QgaG91cnMgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldEhvdXJzKHRoaXMuZGF0ZSk7XG4gICAgY29uc3QgbWludXRlcyA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TWludXRlcyh0aGlzLmRhdGUpO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldFNlY29uZHModGhpcy5kYXRlKTtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE1pbGxpc2Vjb25kcyh0aGlzLmRhdGUpO1xuXG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldEhvdXJzKGRhdGUsIGhvdXJzKTtcbiAgICBuZXdEYXRlID0gdGhpcy5kYXRlU2VydmljZS5zZXRNaW51dGVzKG5ld0RhdGUsIG1pbnV0ZXMpO1xuICAgIG5ld0RhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldE1pbnV0ZXMobmV3RGF0ZSwgbWludXRlcyk7XG4gICAgbmV3RGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2Uuc2V0U2Vjb25kcyhuZXdEYXRlLCBzZWNvbmRzKTtcbiAgICBuZXdEYXRlID0gdGhpcy5kYXRlU2VydmljZS5zZXRNaWxsaXNlY29uZHMobmV3RGF0ZSwgbWlsbGlzZWNvbmRzKTtcblxuICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gIH1cblxuICBvblRpbWVDaGFuZ2Uoc2VsZWN0ZWRUaW1lOiBOYlNlbGVjdGVkVGltZVBheWxvYWQ8RD4pOiB2b2lkIHtcbiAgICBsZXQgbmV3RGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2UuY2xvbmUodGhpcy5kYXRlKTtcblxuICAgIG5ld0RhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldEhvdXJzKG5ld0RhdGUsIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0SG91cnMoc2VsZWN0ZWRUaW1lLnRpbWUpKTtcbiAgICBuZXdEYXRlID0gdGhpcy5kYXRlU2VydmljZS5zZXRNaW51dGVzKG5ld0RhdGUsIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TWludXRlcyhzZWxlY3RlZFRpbWUudGltZSkpO1xuICAgIG5ld0RhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldFNlY29uZHMobmV3RGF0ZSwgdGhpcy5kYXRlU2VydmljZS5nZXRTZWNvbmRzKHNlbGVjdGVkVGltZS50aW1lKSk7XG4gICAgbmV3RGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2Uuc2V0TWlsbGlzZWNvbmRzKG5ld0RhdGUsIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0TWlsbGlzZWNvbmRzKHNlbGVjdGVkVGltZS50aW1lKSk7XG5cbiAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICB9XG5cbiAgc2F2ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBzYXZlQ3VycmVudFRpbWUoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlU2VydmljZS50b2RheSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBkb24ndCBzaG93IHNlY29uZHMgd2l0aCB0d2VsdmUgaG91cnMgZm9ybWF0XG4gICAqICovXG4gIHNob3dTZWNvbmRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpdGhTZWNvbmRzICYmICF0aGlzLnR3ZWx2ZUhvdXJzRm9ybWF0O1xuICB9XG5cbiAgaXNMYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBOYkNhbGVuZGFyU2l6ZS5MQVJHRTtcbiAgfVxufVxuIl19