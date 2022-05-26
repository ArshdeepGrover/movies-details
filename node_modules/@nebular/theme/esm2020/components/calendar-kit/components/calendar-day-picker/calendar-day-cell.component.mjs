/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
export class NbCalendarDayCellComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.size = NbCalendarSize.MEDIUM;
        this.select = new EventEmitter(true);
        this.dayCellClass = true;
    }
    get today() {
        return this.dateService.isSameDaySafe(this.date, this.dateService.today());
    }
    get boundingMonth() {
        return !this.dateService.isSameMonthSafe(this.date, this.visibleDate);
    }
    get selected() {
        return this.dateService.isSameDaySafe(this.date, this.selectedValue);
    }
    get empty() {
        return !this.date;
    }
    get disabled() {
        return this.smallerThanMin() || this.greaterThanMax() || this.dontFitFilter();
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    get day() {
        return this.date && this.dateService.getDate(this.date);
    }
    onClick() {
        if (this.disabled || this.empty) {
            return;
        }
        this.select.emit(this.date);
    }
    smallerThanMin() {
        return this.date && this.min && this.dateService.compareDates(this.date, this.min) < 0;
    }
    greaterThanMax() {
        return this.date && this.max && this.dateService.compareDates(this.date, this.max) > 0;
    }
    dontFitFilter() {
        return this.date && this.filter && !this.filter(this.date);
    }
}
NbCalendarDayCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDayCellComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarDayCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarDayCellComponent, selector: "nb-calendar-day-cell", inputs: { date: "date", selectedValue: "selectedValue", visibleDate: "visibleDate", min: "min", max: "max", filter: "filter", size: "size" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" }, properties: { "class.today": "this.today", "class.bounding-month": "this.boundingMonth", "class.selected": "this.selected", "class.empty": "this.empty", "class.disabled": "this.disabled", "class.size-large": "this.isLarge", "class.day-cell": "this.dayCellClass" } }, ngImport: i0, template: `
    <div class="cell-content">
      {{ day }}
    </div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDayCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-day-cell',
                    template: `
    <div class="cell-content">
      {{ day }}
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { date: [{
                type: Input
            }], selectedValue: [{
                type: Input
            }], visibleDate: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], filter: [{
                type: Input
            }], size: [{
                type: Input
            }], select: [{
                type: Output
            }], today: [{
                type: HostBinding,
                args: ['class.today']
            }], boundingMonth: [{
                type: HostBinding,
                args: ['class.bounding-month']
            }], selected: [{
                type: HostBinding,
                args: ['class.selected']
            }], empty: [{
                type: HostBinding,
                args: ['class.empty']
            }], disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }], dayCellClass: [{
                type: HostBinding,
                args: ['class.day-cell']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5LWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyLWtpdC9jb21wb25lbnRzL2NhbGVuZGFyLWRheS1waWNrZXIvY2FsZW5kYXItZGF5LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBa0IsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQzs7O0FBYW5GLE1BQU0sT0FBTywwQkFBMEI7SUFtQnJDLFlBQXNCLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUwxQyxTQUFJLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFHNUMsV0FBTSxHQUFvQixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQStCM0QsaUJBQVksR0FBRyxJQUFJLENBQUM7SUE1QnBCLENBQUM7SUFFRCxJQUFnQyxLQUFLO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQXlDLGFBQWE7UUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxJQUFtQyxRQUFRO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELElBQWdDLEtBQUs7UUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQW1DLFFBQVE7UUFDekMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNoRixDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUtELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLGNBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7O3VIQXpFVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixpaUJBUDNCOzs7O0dBSVQ7MkZBR1UsMEJBQTBCO2tCQVR0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDtvR0FHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsYUFBYTtzQkFBckIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxHQUFHO3NCQUFYLEtBQUs7Z0JBRUcsTUFBTTtzQkFBZCxLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFHSSxNQUFNO3NCQUFmLE1BQU07Z0JBS3lCLEtBQUs7c0JBQXBDLFdBQVc7dUJBQUMsYUFBYTtnQkFJZSxhQUFhO3NCQUFyRCxXQUFXO3VCQUFDLHNCQUFzQjtnQkFJQSxRQUFRO3NCQUExQyxXQUFXO3VCQUFDLGdCQUFnQjtnQkFJRyxLQUFLO3NCQUFwQyxXQUFXO3VCQUFDLGFBQWE7Z0JBSVMsUUFBUTtzQkFBMUMsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBS3pCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTS9CLFlBQVk7c0JBRFgsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBUTdCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkNhbGVuZGFyQ2VsbCwgTmJDYWxlbmRhclNpemUsIE5iQ2FsZW5kYXJTaXplVmFsdWVzIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGUuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2FsZW5kYXItZGF5LWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjZWxsLWNvbnRlbnRcIj5cbiAgICAgIHt7IGRheSB9fVxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhckRheUNlbGxDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBOYkNhbGVuZGFyQ2VsbDxELCBEPiB7XG5cbiAgQElucHV0KCkgZGF0ZTogRDtcblxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBEO1xuXG4gIEBJbnB1dCgpIHZpc2libGVEYXRlOiBEO1xuXG4gIEBJbnB1dCgpIG1pbjogRDtcblxuICBASW5wdXQoKSBtYXg6IEQ7XG5cbiAgQElucHV0KCkgZmlsdGVyOiAoRCkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZSA9IE5iQ2FsZW5kYXJTaXplLk1FRElVTTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxEPiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvZGF5JykgZ2V0IHRvZGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzU2FtZURheVNhZmUodGhpcy5kYXRlLCB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCkpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ib3VuZGluZy1tb250aCcpIGdldCBib3VuZGluZ01vbnRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRlU2VydmljZS5pc1NhbWVNb250aFNhZmUodGhpcy5kYXRlLCB0aGlzLnZpc2libGVEYXRlKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKSBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuaXNTYW1lRGF5U2FmZSh0aGlzLmRhdGUsIHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVtcHR5JykgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kYXRlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zbWFsbGVyVGhhbk1pbigpIHx8IHRoaXMuZ3JlYXRlclRoYW5NYXgoKSB8fCB0aGlzLmRvbnRGaXRGaWx0ZXIoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXktY2VsbCcpXG4gIGRheUNlbGxDbGFzcyA9IHRydWU7XG5cbiAgZ2V0IGRheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5kYXRlU2VydmljZS5nZXREYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5lbXB0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgc21hbGxlclRoYW5NaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZSAmJiB0aGlzLm1pbiAmJiB0aGlzLmRhdGVTZXJ2aWNlLmNvbXBhcmVEYXRlcyh0aGlzLmRhdGUsIHRoaXMubWluKSA8IDA7XG4gIH1cblxuICBwcml2YXRlIGdyZWF0ZXJUaGFuTWF4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5tYXggJiYgdGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXModGhpcy5kYXRlLCB0aGlzLm1heCkgPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBkb250Rml0RmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGUgJiYgdGhpcy5maWx0ZXIgJiYgIXRoaXMuZmlsdGVyKHRoaXMuZGF0ZSk7XG4gIH1cbn1cbiJdfQ==