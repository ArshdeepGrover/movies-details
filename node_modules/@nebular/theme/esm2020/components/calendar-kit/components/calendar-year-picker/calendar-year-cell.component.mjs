/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
export class NbCalendarYearCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.yearCellClass = true;
    }
    get selected() {
        return this.dateService.isSameYearSafe(this.date, this.selectedValue);
    }
    get today() {
        return this.dateService.isSameYearSafe(this.date, this.dateService.today());
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get year() {
        return this.dateService.getYear(this.date);
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.yearEnd(), this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.yearStart(), this.max) > 0;
    }
    yearStart() {
        return this.dateService.getYearStart(this.date);
    }
    yearEnd() {
        return this.dateService.getYearEnd(this.date);
    }
}
NbCalendarYearCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearCellComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarYearCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarYearCellComponent, selector: "nb-calendar-year-cell", inputs: { date: "date", min: "min", max: "max", selectedValue: "selectedValue", size: "size" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" }, properties: { "class.selected": "this.selected", "class.today": "this.today", "class.disabled": "this.disabled", "class.size-large": "this.isLarge", "class.year-cell": "this.yearCellClass" } }, ngImport: i0, template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-year-cell',
                    template: `
    <div class="cell-content">
      {{ year }}
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { date: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], selected: [{
                type: HostBinding,
                args: ['class.selected']
            }], today: [{
                type: HostBinding,
                args: ['class.today']
            }], disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }], yearCellClass: [{
                type: HostBinding,
                args: ['class.year-cell']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhci1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvY29tcG9uZW50cy9jYWxlbmRhci15ZWFyLXBpY2tlci9jYWxlbmRhci15ZWFyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQzs7O0FBWW5GLE1BQU0sT0FBTywyQkFBMkI7SUFjdEMsWUFBc0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBTDFDLFNBQUksR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUc1QyxXQUFNLEdBQW9CLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBdUIzRCxrQkFBYSxHQUFHLElBQUksQ0FBQztJQXBCckIsQ0FBQztJQUVELElBQW1DLFFBQVE7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsSUFBZ0MsS0FBSztRQUNuQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxJQUFtQyxRQUFRO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUtELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRU8sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7d0hBaEVVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLDJhQVA1Qjs7OztHQUlUOzJGQUdVLDJCQUEyQjtrQkFUdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7b0dBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxHQUFHO3NCQUFYLEtBQUs7Z0JBRUcsYUFBYTtzQkFBckIsS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0ksTUFBTTtzQkFBZixNQUFNO2dCQUs0QixRQUFRO3NCQUExQyxXQUFXO3VCQUFDLGdCQUFnQjtnQkFJRyxLQUFLO3NCQUFwQyxXQUFXO3VCQUFDLGFBQWE7Z0JBSVMsUUFBUTtzQkFBMUMsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBS3pCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTS9CLGFBQWE7c0JBRFosV0FBVzt1QkFBQyxpQkFBaUI7Z0JBUTlCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyQ2VsbCwgTmJDYWxlbmRhclNpemUsIE5iQ2FsZW5kYXJTaXplVmFsdWVzIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXllYXItY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNlbGwtY29udGVudFwiPlxuICAgICAge3sgeWVhciB9fVxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclllYXJDZWxsQ29tcG9uZW50PEQ+IGltcGxlbWVudHMgTmJDYWxlbmRhckNlbGw8RCwgRD4ge1xuICBASW5wdXQoKSBkYXRlOiBEO1xuXG4gIEBJbnB1dCgpIG1pbjogRDtcblxuICBASW5wdXQoKSBtYXg6IEQ7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogRDtcblxuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJykgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZVllYXJTYWZlKHRoaXMuZGF0ZSwgdGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG9kYXknKSBnZXQgdG9kYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lWWVhclNhZmUodGhpcy5kYXRlLCB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCkpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zbWFsbGVyVGhhbk1pbigpIHx8IHRoaXMuZ3JlYXRlclRoYW5NYXgoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy55ZWFyLWNlbGwnKVxuICB5ZWFyQ2VsbENsYXNzID0gdHJ1ZTtcblxuICBnZXQgeWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXIodGhpcy5kYXRlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgc21hbGxlclRoYW5NaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1pbiAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLnllYXJFbmQoKSwgdGhpcy5taW4pIDwgMDtcbiAgfVxuXG4gIHByaXZhdGUgZ3JlYXRlclRoYW5NYXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1heCAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLnllYXJTdGFydCgpLCB0aGlzLm1heCkgPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSB5ZWFyU3RhcnQoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhclN0YXJ0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHllYXJFbmQoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhckVuZCh0aGlzLmRhdGUpO1xuICB9XG59XG4iXX0=