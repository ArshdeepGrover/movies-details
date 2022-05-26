/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NbCalendarSize, NbCalendarViewMode, } from '../calendar-kit/model';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
import * as i2 from "../calendar-kit/services/calendar-year-model.service";
import * as i3 from "../card/card.component";
import * as i4 from "../calendar-kit/components/calendar-navigation/calendar-view-mode.component";
import * as i5 from "../calendar-kit/components/calendar-navigation/calendar-pageable-navigation.component";
import * as i6 from "../calendar-kit/components/calendar-day-picker/calendar-day-picker.component";
import * as i7 from "../calendar-kit/components/calendar-year-picker/calendar-year-picker.component";
import * as i8 from "../calendar-kit/components/calendar-month-picker/calendar-month-picker.component";
import * as i9 from "@angular/common";
/**
 * The basis for calendar and range calendar components.
 * Encapsulates common behavior - store calendar state and perform navigation
 * between pickers.
 * */
export class NbBaseCalendarComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        /**
         * Defines if we should render previous and next months
         * in the current month view.
         * */
        this.boundingMonth = true;
        /**
         * Defines active view for calendar.
         * */
        this.activeViewMode = NbCalendarViewMode.DATE;
        /**
         * Size of the calendar and entire components.
         * Can be 'medium' which is default or 'large'.
         * */
        this.size = NbCalendarSize.MEDIUM;
        /**
         * Determines whether we should show calendar navigation or not.
         * */
        this.showNavigation = true;
        this._showWeekNumber = false;
        /**
         * Emits date when selected.
         * */
        this.dateChange = new EventEmitter();
        this.ViewMode = NbCalendarViewMode;
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
    ngOnInit() {
        if (!this.visibleDate) {
            this.visibleDate = this.dateService.today();
        }
    }
    get large() {
        return this.size === NbCalendarSize.LARGE;
    }
    setViewMode(viewMode) {
        this.activeViewMode = viewMode;
    }
    setVisibleDate(visibleDate) {
        this.visibleDate = visibleDate;
    }
    prevMonth() {
        this.changeVisibleMonth(-1);
    }
    nextMonth() {
        this.changeVisibleMonth(1);
    }
    prevYear() {
        this.changeVisibleYear(-1);
    }
    nextYear() {
        this.changeVisibleYear(1);
    }
    prevYears() {
        this.changeVisibleYears(-1);
    }
    nextYears() {
        this.changeVisibleYears(1);
    }
    navigatePrev() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.prevMonth();
            case NbCalendarViewMode.MONTH:
                return this.prevYear();
            case NbCalendarViewMode.YEAR:
                return this.prevYears();
        }
    }
    navigateNext() {
        switch (this.activeViewMode) {
            case NbCalendarViewMode.DATE:
                return this.nextMonth();
            case NbCalendarViewMode.MONTH:
                return this.nextYear();
            case NbCalendarViewMode.YEAR:
                return this.nextYears();
        }
    }
    onChangeViewMode() {
        if (this.activeViewMode === NbCalendarViewMode.DATE) {
            return this.setViewMode(NbCalendarViewMode.YEAR);
        }
        this.setViewMode(NbCalendarViewMode.DATE);
    }
    changeVisibleMonth(direction) {
        this.visibleDate = this.dateService.addMonth(this.visibleDate, direction);
    }
    changeVisibleYear(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction);
    }
    changeVisibleYears(direction) {
        this.visibleDate = this.dateService.addYear(this.visibleDate, direction * this.yearModelService.getYearsInView());
    }
}
NbBaseCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarComponent, deps: [{ token: i1.NbDateService }, { token: i2.NbCalendarYearModelService }], target: i0.ɵɵFactoryTarget.Component });
NbBaseCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbBaseCalendarComponent, selector: "nb-base-calendar", inputs: { boundingMonth: "boundingMonth", activeViewMode: ["startView", "activeViewMode"], min: "min", max: "max", filter: "filter", dayCellComponent: "dayCellComponent", monthCellComponent: "monthCellComponent", yearCellComponent: "yearCellComponent", size: "size", visibleDate: "visibleDate", showNavigation: "showNavigation", date: "date", showWeekNumber: "showWeekNumber", weekNumberSymbol: "weekNumberSymbol" }, outputs: { dateChange: "dateChange" }, host: { properties: { "class.has-navigation": "this.showNavigation", "class.has-week-number": "this.showWeekNumber", "class.size-large": "this.large" } }, ngImport: i0, template: "<nb-card>\n  <nb-card-header *ngIf=\"showNavigation\" class=\"calendar-navigation\">\n    <nb-calendar-view-mode [date]=\"visibleDate\"\n                           [viewMode]=\"activeViewMode\"\n                           (changeMode)=\"onChangeViewMode()\">\n    </nb-calendar-view-mode>\n\n    <nb-calendar-pageable-navigation (prev)=\"navigatePrev()\" (next)=\"navigateNext()\">\n    </nb-calendar-pageable-navigation>\n  </nb-card-header>\n\n  <nb-card-body [ngSwitch]=\"activeViewMode\">\n\n    <nb-calendar-day-picker *ngSwitchCase=\"ViewMode.DATE\"\n                            [boundingMonths]=\"boundingMonth\"\n                            [cellComponent]=\"dayCellComponent\"\n                            [min]=\"min\"\n                            [max]=\"max\"\n                            [filter]=\"filter\"\n                            [visibleDate]=\"visibleDate\"\n                            [size]=\"size\"\n                            [date]=\"date\"\n                            [showWeekNumber]=\"showWeekNumber\"\n                            (dateChange)=\"dateChange.emit($any($event))\"\n                            [weekNumberSymbol]=\"weekNumberSymbol\">\n    </nb-calendar-day-picker>\n\n    <nb-calendar-year-picker *ngSwitchCase=\"ViewMode.YEAR\"\n                             [cellComponent]=\"yearCellComponent\"\n                             [date]=\"$any(date)\"\n                             [min]=\"min\"\n                             [max]=\"max\"\n                             [filter]=\"filter\"\n                             [size]=\"size\"\n                             [year]=\"visibleDate\"\n                             (yearChange)=\"setVisibleDate($event); setViewMode(ViewMode.MONTH)\">\n    </nb-calendar-year-picker>\n\n    <nb-calendar-month-picker *ngSwitchCase=\"ViewMode.MONTH\"\n                              [cellComponent]=\"monthCellComponent\"\n                              [min]=\"min\"\n                              [max]=\"max\"\n                              [filter]=\"filter\"\n                              [size]=\"size\"\n                              [month]=\"visibleDate\"\n                              [date]=\"$any(date)\"\n                              (monthChange)=\"setVisibleDate($event); setViewMode(ViewMode.DATE)\">\n    </nb-calendar-month-picker>\n\n  </nb-card-body>\n\n</nb-card>\n", components: [{ type: i3.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i4.NbCalendarViewModeComponent, selector: "nb-calendar-view-mode", inputs: ["date", "viewMode"], outputs: ["changeMode"] }, { type: i5.NbCalendarPageableNavigationComponent, selector: "nb-calendar-pageable-navigation", outputs: ["next", "prev"] }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i6.NbCalendarDayPickerComponent, selector: "nb-calendar-day-picker", inputs: ["visibleDate", "boundingMonths", "min", "max", "filter", "cellComponent", "size", "date", "showWeekNumber", "weekNumberSymbol"], outputs: ["dateChange"] }, { type: i7.NbCalendarYearPickerComponent, selector: "nb-calendar-year-picker", inputs: ["date", "min", "max", "filter", "cellComponent", "size", "year"], outputs: ["yearChange"] }, { type: i8.NbCalendarMonthPickerComponent, selector: "nb-calendar-month-picker", inputs: ["min", "max", "filter", "size", "month", "date", "cellComponent"], outputs: ["monthChange"] }], directives: [{ type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i9.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBaseCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-base-calendar', template: "<nb-card>\n  <nb-card-header *ngIf=\"showNavigation\" class=\"calendar-navigation\">\n    <nb-calendar-view-mode [date]=\"visibleDate\"\n                           [viewMode]=\"activeViewMode\"\n                           (changeMode)=\"onChangeViewMode()\">\n    </nb-calendar-view-mode>\n\n    <nb-calendar-pageable-navigation (prev)=\"navigatePrev()\" (next)=\"navigateNext()\">\n    </nb-calendar-pageable-navigation>\n  </nb-card-header>\n\n  <nb-card-body [ngSwitch]=\"activeViewMode\">\n\n    <nb-calendar-day-picker *ngSwitchCase=\"ViewMode.DATE\"\n                            [boundingMonths]=\"boundingMonth\"\n                            [cellComponent]=\"dayCellComponent\"\n                            [min]=\"min\"\n                            [max]=\"max\"\n                            [filter]=\"filter\"\n                            [visibleDate]=\"visibleDate\"\n                            [size]=\"size\"\n                            [date]=\"date\"\n                            [showWeekNumber]=\"showWeekNumber\"\n                            (dateChange)=\"dateChange.emit($any($event))\"\n                            [weekNumberSymbol]=\"weekNumberSymbol\">\n    </nb-calendar-day-picker>\n\n    <nb-calendar-year-picker *ngSwitchCase=\"ViewMode.YEAR\"\n                             [cellComponent]=\"yearCellComponent\"\n                             [date]=\"$any(date)\"\n                             [min]=\"min\"\n                             [max]=\"max\"\n                             [filter]=\"filter\"\n                             [size]=\"size\"\n                             [year]=\"visibleDate\"\n                             (yearChange)=\"setVisibleDate($event); setViewMode(ViewMode.MONTH)\">\n    </nb-calendar-year-picker>\n\n    <nb-calendar-month-picker *ngSwitchCase=\"ViewMode.MONTH\"\n                              [cellComponent]=\"monthCellComponent\"\n                              [min]=\"min\"\n                              [max]=\"max\"\n                              [filter]=\"filter\"\n                              [size]=\"size\"\n                              [month]=\"visibleDate\"\n                              [date]=\"$any(date)\"\n                              (monthChange)=\"setVisibleDate($event); setViewMode(ViewMode.DATE)\">\n    </nb-calendar-month-picker>\n\n  </nb-card-body>\n\n</nb-card>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }, { type: i2.NbCalendarYearModelService }]; }, propDecorators: { boundingMonth: [{
                type: Input
            }], activeViewMode: [{
                type: Input,
                args: ['startView']
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], dayCellComponent: [{
                type: Input
            }], monthCellComponent: [{
                type: Input
            }], yearCellComponent: [{
                type: Input
            }], size: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], showNavigation: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.has-navigation']
            }], date: [{
                type: Input
            }], showWeekNumber: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.has-week-number']
            }], weekNumberSymbol: [{
                type: Input
            }], dateChange: [{
                type: Output
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIvYmFzZS1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIvYmFzZS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFHbEcsT0FBTyxFQUVMLGNBQWMsRUFDZCxrQkFBa0IsR0FHbkIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7OztBQUVuRTs7OztLQUlLO0FBS0wsTUFBTSxPQUFPLHVCQUF1QjtJQTBGbEMsWUFDWSxXQUE2QixFQUM3QixnQkFBK0M7UUFEL0MsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBK0I7UUExRjNEOzs7YUFHSztRQUNJLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRXZDOzthQUVLO1FBQ2UsbUJBQWMsR0FBdUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBaUNqRjs7O2FBR0s7UUFDSSxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFLdEQ7O2FBRUs7UUFHTCxtQkFBYyxHQUFZLElBQUksQ0FBQztRQW1CckIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFRbEM7O2FBRUs7UUFDSyxlQUFVLEdBQW9CLElBQUksWUFBWSxFQUFFLENBQUM7UUFrQjNELGFBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQWIzQixDQUFDO0lBNUJKOzs7U0FHSztJQUNMLElBRUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBbUJELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUlELFdBQVcsQ0FBQyxRQUE0QjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVk7UUFDVixRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0IsS0FBSyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMxQixLQUFLLGtCQUFrQixDQUFDLEtBQUs7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLFFBQVEsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzQixLQUFLLGtCQUFrQixDQUFDLElBQUk7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFCLEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsS0FBSyxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssa0JBQWtCLENBQUMsSUFBSSxFQUFFO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFNBQWlCO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU8saUJBQWlCLENBQUMsU0FBaUI7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxTQUFpQjtRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BILENBQUM7O29IQXBMVSx1QkFBdUI7d0dBQXZCLHVCQUF1QiwycEJDNUJwQyxpMEVBb0RBOzJGRHhCYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usa0JBQWtCOzZJQVNuQixhQUFhO3NCQUFyQixLQUFLO2dCQUtjLGNBQWM7c0JBQWpDLEtBQUs7dUJBQUMsV0FBVztnQkFNVCxHQUFHO3NCQUFYLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLE1BQU07c0JBQWQsS0FBSztnQkFLRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUtHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csV0FBVztzQkFBbkIsS0FBSztnQkFPTixjQUFjO3NCQUZiLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0xQixJQUFJO3NCQUFaLEtBQUs7Z0JBUUYsY0FBYztzQkFGakIsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyx1QkFBdUI7Z0JBYTNCLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLSSxVQUFVO3NCQUFuQixNQUFNO2dCQWNILEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2FsZW5kYXJZZWFyTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L3NlcnZpY2VzL2NhbGVuZGFyLXllYXItbW9kZWwuc2VydmljZSc7XG5pbXBvcnQge1xuICBOYkNhbGVuZGFyQ2VsbCxcbiAgTmJDYWxlbmRhclNpemUsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZSxcbiAgTmJDYWxlbmRhclNpemVWYWx1ZXMsXG4gIE5iQ2FsZW5kYXJWaWV3TW9kZVZhbHVlcyxcbn0gZnJvbSAnLi4vY2FsZW5kYXIta2l0L21vZGVsJztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci1raXQvc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyoqXG4gKiBUaGUgYmFzaXMgZm9yIGNhbGVuZGFyIGFuZCByYW5nZSBjYWxlbmRhciBjb21wb25lbnRzLlxuICogRW5jYXBzdWxhdGVzIGNvbW1vbiBiZWhhdmlvciAtIHN0b3JlIGNhbGVuZGFyIHN0YXRlIGFuZCBwZXJmb3JtIG5hdmlnYXRpb25cbiAqIGJldHdlZW4gcGlja2Vycy5cbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1iYXNlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOYkJhc2VDYWxlbmRhckNvbXBvbmVudDxELCBUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgaWYgd2Ugc2hvdWxkIHJlbmRlciBwcmV2aW91cyBhbmQgbmV4dCBtb250aHNcbiAgICogaW4gdGhlIGN1cnJlbnQgbW9udGggdmlldy5cbiAgICogKi9cbiAgQElucHV0KCkgYm91bmRpbmdNb250aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYWN0aXZlIHZpZXcgZm9yIGNhbGVuZGFyLlxuICAgKiAqL1xuICBASW5wdXQoJ3N0YXJ0VmlldycpIGFjdGl2ZVZpZXdNb2RlOiBOYkNhbGVuZGFyVmlld01vZGUgPSBOYkNhbGVuZGFyVmlld01vZGUuREFURTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FjdGl2ZVZpZXdNb2RlOiBOYkNhbGVuZGFyVmlld01vZGVWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYXZhaWxhYmxlIGRhdGUgZm9yIHNlbGVjdGlvbi5cbiAgICogKi9cbiAgQElucHV0KCkgbWluOiBEO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGF2YWlsYWJsZSBkYXRlIGZvciBzZWxlY3Rpb24uXG4gICAqICovXG4gIEBJbnB1dCgpIG1heDogRDtcblxuICAvKipcbiAgICogUHJlZGljYXRlIHRoYXQgZGVjaWRlcyB3aGljaCBjZWxscyB3aWxsIGJlIGRpc2FibGVkLlxuICAgKiAqL1xuICBASW5wdXQoKSBmaWx0ZXI6IChEKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZGF5IGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgZGF5Q2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBtb250aCBjZWxsIGNvbXBvbmVudC4gSGF2ZSB0byBpbXBsZW1lbnQgYE5iQ2FsZW5kYXJDZWxsYCBpbnRlcmZhY2UuXG4gICAqICovXG4gIEBJbnB1dCgpIG1vbnRoQ2VsbENvbXBvbmVudDogVHlwZTxOYkNhbGVuZGFyQ2VsbDxELCBUPj47XG5cbiAgLyoqXG4gICAqIEN1c3RvbSB5ZWFyIGNlbGwgY29tcG9uZW50LiBIYXZlIHRvIGltcGxlbWVudCBgTmJDYWxlbmRhckNlbGxgIGludGVyZmFjZS5cbiAgICogKi9cbiAgQElucHV0KCkgeWVhckNlbGxDb21wb25lbnQ6IFR5cGU8TmJDYWxlbmRhckNlbGw8RCwgVD4+O1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjYWxlbmRhciBhbmQgZW50aXJlIGNvbXBvbmVudHMuXG4gICAqIENhbiBiZSAnbWVkaXVtJyB3aGljaCBpcyBkZWZhdWx0IG9yICdsYXJnZScuXG4gICAqICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ2FsZW5kYXJTaXplID0gTmJDYWxlbmRhclNpemUuTUVESVVNO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTmJDYWxlbmRhclNpemVWYWx1ZXM7XG5cbiAgQElucHV0KCkgdmlzaWJsZURhdGU6IEQ7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB3ZSBzaG91bGQgc2hvdyBjYWxlbmRhciBuYXZpZ2F0aW9uIG9yIG5vdC5cbiAgICogKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYXMtbmF2aWdhdGlvbicpXG4gIHNob3dOYXZpZ2F0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVmFsdWUgd2hpY2ggd2lsbCBiZSByZW5kZXJlZCBhcyBzZWxlY3RlZC5cbiAgICogKi9cbiAgQElucHV0KCkgZGF0ZTogVDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBzaG91bGQgd2Ugc2hvdyB3ZWVrIG51bWJlcnMgY29sdW1uLlxuICAgKiBGYWxzZSBieSBkZWZhdWx0LlxuICAgKiAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy13ZWVrLW51bWJlcicpXG4gIGdldCBzaG93V2Vla051bWJlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1dlZWtOdW1iZXI7XG4gIH1cbiAgc2V0IHNob3dXZWVrTnVtYmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1dlZWtOdW1iZXIgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfc2hvd1dlZWtOdW1iZXIgPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Nob3dXZWVrTnVtYmVyOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogU2V0cyBzeW1ib2wgdXNlZCBhcyBhIGhlYWRlciBmb3Igd2VlayBudW1iZXJzIGNvbHVtblxuICAgKiAqL1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyU3ltYm9sOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGRhdGUgd2hlbiBzZWxlY3RlZC5cbiAgICogKi9cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4sXG4gICAgcHJvdGVjdGVkIHllYXJNb2RlbFNlcnZpY2U6IE5iQ2FsZW5kYXJZZWFyTW9kZWxTZXJ2aWNlPEQ+LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGVEYXRlKSB7XG4gICAgICB0aGlzLnZpc2libGVEYXRlID0gdGhpcy5kYXRlU2VydmljZS50b2RheSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBsYXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBOYkNhbGVuZGFyU2l6ZS5MQVJHRTtcbiAgfVxuXG4gIFZpZXdNb2RlID0gTmJDYWxlbmRhclZpZXdNb2RlO1xuXG4gIHNldFZpZXdNb2RlKHZpZXdNb2RlOiBOYkNhbGVuZGFyVmlld01vZGUpIHtcbiAgICB0aGlzLmFjdGl2ZVZpZXdNb2RlID0gdmlld01vZGU7XG4gIH1cblxuICBzZXRWaXNpYmxlRGF0ZSh2aXNpYmxlRGF0ZTogRCkge1xuICAgIHRoaXMudmlzaWJsZURhdGUgPSB2aXNpYmxlRGF0ZTtcbiAgfVxuXG4gIHByZXZNb250aCgpIHtcbiAgICB0aGlzLmNoYW5nZVZpc2libGVNb250aCgtMSk7XG4gIH1cblxuICBuZXh0TW9udGgoKSB7XG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlTW9udGgoMSk7XG4gIH1cblxuICBwcmV2WWVhcigpIHtcbiAgICB0aGlzLmNoYW5nZVZpc2libGVZZWFyKC0xKTtcbiAgfVxuXG4gIG5leHRZZWFyKCkge1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZVllYXIoMSk7XG4gIH1cblxuICBwcmV2WWVhcnMoKSB7XG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlWWVhcnMoLTEpO1xuICB9XG5cbiAgbmV4dFllYXJzKCkge1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZVllYXJzKDEpO1xuICB9XG5cbiAgbmF2aWdhdGVQcmV2KCkge1xuICAgIHN3aXRjaCAodGhpcy5hY3RpdmVWaWV3TW9kZSkge1xuICAgICAgY2FzZSBOYkNhbGVuZGFyVmlld01vZGUuREFURTpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldk1vbnRoKCk7XG4gICAgICBjYXNlIE5iQ2FsZW5kYXJWaWV3TW9kZS5NT05USDpcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldlllYXIoKTtcbiAgICAgIGNhc2UgTmJDYWxlbmRhclZpZXdNb2RlLllFQVI6XG4gICAgICAgIHJldHVybiB0aGlzLnByZXZZZWFycygpO1xuICAgIH1cbiAgfVxuXG4gIG5hdmlnYXRlTmV4dCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlVmlld01vZGUpIHtcbiAgICAgIGNhc2UgTmJDYWxlbmRhclZpZXdNb2RlLkRBVEU6XG4gICAgICAgIHJldHVybiB0aGlzLm5leHRNb250aCgpO1xuICAgICAgY2FzZSBOYkNhbGVuZGFyVmlld01vZGUuTU9OVEg6XG4gICAgICAgIHJldHVybiB0aGlzLm5leHRZZWFyKCk7XG4gICAgICBjYXNlIE5iQ2FsZW5kYXJWaWV3TW9kZS5ZRUFSOlxuICAgICAgICByZXR1cm4gdGhpcy5uZXh0WWVhcnMoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVZpZXdNb2RlKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVZpZXdNb2RlID09PSBOYkNhbGVuZGFyVmlld01vZGUuREFURSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Vmlld01vZGUoTmJDYWxlbmRhclZpZXdNb2RlLllFQVIpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Vmlld01vZGUoTmJDYWxlbmRhclZpZXdNb2RlLkRBVEUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlTW9udGgoZGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICB0aGlzLnZpc2libGVEYXRlID0gdGhpcy5kYXRlU2VydmljZS5hZGRNb250aCh0aGlzLnZpc2libGVEYXRlLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlWWVhcihkaXJlY3Rpb246IG51bWJlcikge1xuICAgIHRoaXMudmlzaWJsZURhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLmFkZFllYXIodGhpcy52aXNpYmxlRGF0ZSwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZVllYXJzKGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy52aXNpYmxlRGF0ZSA9IHRoaXMuZGF0ZVNlcnZpY2UuYWRkWWVhcih0aGlzLnZpc2libGVEYXRlLCBkaXJlY3Rpb24gKiB0aGlzLnllYXJNb2RlbFNlcnZpY2UuZ2V0WWVhcnNJblZpZXcoKSk7XG4gIH1cbn1cbiIsIjxuYi1jYXJkPlxuICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCJzaG93TmF2aWdhdGlvblwiIGNsYXNzPVwiY2FsZW5kYXItbmF2aWdhdGlvblwiPlxuICAgIDxuYi1jYWxlbmRhci12aWV3LW1vZGUgW2RhdGVdPVwidmlzaWJsZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZpZXdNb2RlXT1cImFjdGl2ZVZpZXdNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2VNb2RlKT1cIm9uQ2hhbmdlVmlld01vZGUoKVwiPlxuICAgIDwvbmItY2FsZW5kYXItdmlldy1tb2RlPlxuXG4gICAgPG5iLWNhbGVuZGFyLXBhZ2VhYmxlLW5hdmlnYXRpb24gKHByZXYpPVwibmF2aWdhdGVQcmV2KClcIiAobmV4dCk9XCJuYXZpZ2F0ZU5leHQoKVwiPlxuICAgIDwvbmItY2FsZW5kYXItcGFnZWFibGUtbmF2aWdhdGlvbj5cbiAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICA8bmItY2FyZC1ib2R5IFtuZ1N3aXRjaF09XCJhY3RpdmVWaWV3TW9kZVwiPlxuXG4gICAgPG5iLWNhbGVuZGFyLWRheS1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIlZpZXdNb2RlLkRBVEVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtib3VuZGluZ01vbnRoc109XCJib3VuZGluZ01vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2VsbENvbXBvbmVudF09XCJkYXlDZWxsQ29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmlzaWJsZURhdGVdPVwidmlzaWJsZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93V2Vla051bWJlcl09XCJzaG93V2Vla051bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGVDaGFuZ2UpPVwiZGF0ZUNoYW5nZS5lbWl0KCRhbnkoJGV2ZW50KSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt3ZWVrTnVtYmVyU3ltYm9sXT1cIndlZWtOdW1iZXJTeW1ib2xcIj5cbiAgICA8L25iLWNhbGVuZGFyLWRheS1waWNrZXI+XG5cbiAgICA8bmItY2FsZW5kYXIteWVhci1waWNrZXIgKm5nU3dpdGNoQ2FzZT1cIlZpZXdNb2RlLllFQVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2VsbENvbXBvbmVudF09XCJ5ZWFyQ2VsbENvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRlXT1cIiRhbnkoZGF0ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbHRlcl09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3llYXJdPVwidmlzaWJsZURhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeWVhckNoYW5nZSk9XCJzZXRWaXNpYmxlRGF0ZSgkZXZlbnQpOyBzZXRWaWV3TW9kZShWaWV3TW9kZS5NT05USClcIj5cbiAgICA8L25iLWNhbGVuZGFyLXllYXItcGlja2VyPlxuXG4gICAgPG5iLWNhbGVuZGFyLW1vbnRoLXBpY2tlciAqbmdTd2l0Y2hDYXNlPVwiVmlld01vZGUuTU9OVEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NlbGxDb21wb25lbnRdPVwibW9udGhDZWxsQ29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vbnRoXT1cInZpc2libGVEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRlXT1cIiRhbnkoZGF0ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vbnRoQ2hhbmdlKT1cInNldFZpc2libGVEYXRlKCRldmVudCk7IHNldFZpZXdNb2RlKFZpZXdNb2RlLkRBVEUpXCI+XG4gICAgPC9uYi1jYWxlbmRhci1tb250aC1waWNrZXI+XG5cbiAgPC9uYi1jYXJkLWJvZHk+XG5cbjwvbmItY2FyZD5cbiJdfQ==