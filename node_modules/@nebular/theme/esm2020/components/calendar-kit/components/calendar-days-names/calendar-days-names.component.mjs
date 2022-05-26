/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
import * as i2 from "@angular/common";
export class NbCalendarDaysNamesComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnInit() {
        const days = this.createDaysNames();
        this.days = this.shiftStartOfWeek(days);
    }
    createDaysNames() {
        return this.dateService.getDayOfWeekNames()
            .map(this.markIfHoliday);
    }
    shiftStartOfWeek(days) {
        for (let i = 0; i < this.dateService.getFirstDayOfWeek(); i++) {
            days.push(days.shift());
        }
        return days;
    }
    markIfHoliday(name, i) {
        return { name, isHoliday: i % 6 === 0 };
    }
}
NbCalendarDaysNamesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDaysNamesComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarDaysNamesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarDaysNamesComponent, selector: "nb-calendar-days-names", inputs: { size: "size" }, host: { properties: { "class.size-large": "this.isLarge" } }, ngImport: i0, template: `
    <div class="day" *ngFor="let day of days" [class.holiday]="day.isHoliday">{{ day.name }}</div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarDaysNamesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-days-names', template: `
    <div class="day" *ngFor="let day of days" [class.holiday]="day.isHoliday">{{ day.name }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;justify-content:space-between}:host .day{display:flex;align-items:center;justify-content:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { size: [{
                type: Input
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF5cy1uYW1lcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItZGF5cy1uYW1lcy9jYWxlbmRhci1kYXlzLW5hbWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBaUIsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQzs7OztBQVlsRixNQUFNLE9BQU8sNEJBQTRCO0lBWXZDLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUNqRCxDQUFDO0lBTkQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUtELFFBQVE7UUFDTixNQUFNLElBQUksR0FBb0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTthQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFxQjtRQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzt5SEFuQ1UsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsc0pBTDdCOztHQUVUOzJGQUdVLDRCQUE0QjtrQkFSeEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFFeEI7O0dBRVQsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU07b0dBTXRDLElBQUk7c0JBQVosS0FBSztnQkFJRixPQUFPO3NCQURWLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkNhbGVuZGFyRGF5LCBOYkNhbGVuZGFyU2l6ZSwgTmJDYWxlbmRhclNpemVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0ZS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhci1kYXlzLW5hbWVzJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItZGF5cy1uYW1lcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkYXlcIiAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXNcIiBbY2xhc3MuaG9saWRheV09XCJkYXkuaXNIb2xpZGF5XCI+e3sgZGF5Lm5hbWUgfX08L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJEYXlzTmFtZXNDb21wb25lbnQ8RD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRheXM6IE5iQ2FsZW5kYXJEYXlbXTtcblxuICBASW5wdXQoKSBzaXplOiBOYkNhbGVuZGFyU2l6ZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IE5iQ2FsZW5kYXJTaXplLkxBUkdFO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZGF5czogTmJDYWxlbmRhckRheVtdID0gdGhpcy5jcmVhdGVEYXlzTmFtZXMoKTtcbiAgICB0aGlzLmRheXMgPSB0aGlzLnNoaWZ0U3RhcnRPZldlZWsoZGF5cyk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURheXNOYW1lcygpOiBOYkNhbGVuZGFyRGF5W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldERheU9mV2Vla05hbWVzKClcbiAgICAgIC5tYXAodGhpcy5tYXJrSWZIb2xpZGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hpZnRTdGFydE9mV2VlayhkYXlzOiBOYkNhbGVuZGFyRGF5W10pOiBOYkNhbGVuZGFyRGF5W10ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRlU2VydmljZS5nZXRGaXJzdERheU9mV2VlaygpOyBpKyspIHtcbiAgICAgIGRheXMucHVzaChkYXlzLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXJrSWZIb2xpZGF5KG5hbWUsIGkpIHtcbiAgICByZXR1cm4geyBuYW1lLCBpc0hvbGlkYXk6IGkgJSA2ID09PSAwIH07XG4gIH1cbn1cbiJdfQ==