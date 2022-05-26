/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { NbCalendarSize } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
import * as i2 from "@angular/common";
export class NbCalendarWeekNumberComponent {
    constructor(dateService) {
        this.dateService = dateService;
    }
    get isLarge() {
        return this.size === NbCalendarSize.LARGE;
    }
    ngOnChanges(changes) {
        if (changes.weeks) {
            this.weekNumbers = this.getWeeks();
        }
    }
    getWeeks() {
        return this.weeks.map((week) => {
            // Find last defined day as week could contain null days in case
            // boundingMonth set to false
            const lastDay = [...week].reverse().find((day) => !!day);
            // Use last day of the week to determine week number.
            // This way weeks which span between sibling years is marked first
            return this.dateService.getWeekNumber(lastDay);
        });
    }
}
NbCalendarWeekNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarWeekNumberComponent, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarWeekNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarWeekNumberComponent, selector: "nb-calendar-week-numbers", inputs: { weeks: "weeks", size: "size", weekNumberSymbol: "weekNumberSymbol" }, host: { properties: { "class.size-large": "this.isLarge" } }, usesOnChanges: true, ngImport: i0, template: `
    <div class="sign-container">
      <div class="sign">{{ weekNumberSymbol }}</div>
    </div>
    <div class="week-number" *ngFor="let weekNumber of weekNumbers">{{ weekNumber }}</div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarWeekNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-week-numbers', template: `
    <div class="sign-container">
      <div class="sign">{{ weekNumberSymbol }}</div>
    </div>
    <div class="week-number" *ngFor="let weekNumber of weekNumbers">{{ weekNumber }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; }, propDecorators: { weeks: [{
                type: Input
            }], size: [{
                type: Input
            }], weekNumberSymbol: [{
                type: Input
            }], isLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyLWtpdC9jb21wb25lbnRzL2NhbGVuZGFyLXdlZWstbnVtYmVyL2NhbGVuZGFyLXdlZWstbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQUUsY0FBYyxFQUF3QixNQUFNLGFBQWEsQ0FBQzs7OztBQWFuRSxNQUFNLE9BQU8sNkJBQTZCO0lBcUJ4QyxZQUFvQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7SUFBRyxDQUFDO0lBTHJELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbEMsZ0VBQWdFO1lBQ2hFLDZCQUE2QjtZQUM3QixNQUFNLE9BQU8sR0FBRyxDQUFFLEdBQUcsSUFBSSxDQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUQscURBQXFEO1lBQ3JELGtFQUFrRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEhBdENVLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLG1PQVQ5Qjs7Ozs7R0FLVDsyRkFJVSw2QkFBNkI7a0JBWHpDLFNBQVM7K0JBQ0UsMEJBQTBCLFlBQzFCOzs7OztHQUtULG1CQUVnQix1QkFBdUIsQ0FBQyxNQUFNO29HQU8vQyxLQUFLO3NCQURKLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQU9HLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFHRixPQUFPO3NCQURWLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDYWxlbmRhclNpemUsIE5iQ2FsZW5kYXJTaXplVmFsdWVzIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhci13ZWVrLW51bWJlcnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzaWduLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNpZ25cIj57eyB3ZWVrTnVtYmVyU3ltYm9sIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndlZWstbnVtYmVyXCIgKm5nRm9yPVwibGV0IHdlZWtOdW1iZXIgb2Ygd2Vla051bWJlcnNcIj57eyB3ZWVrTnVtYmVyIH19PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXdlZWstbnVtYmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNhbGVuZGFyV2Vla051bWJlckNvbXBvbmVudDxEPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgd2Vla051bWJlcnM6IG51bWJlcltdO1xuXG4gIEBJbnB1dCgpXG4gIHdlZWtzOiBEW11bXTtcblxuICBASW5wdXQoKVxuICBzaXplOiBOYkNhbGVuZGFyU2l6ZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE5iQ2FsZW5kYXJTaXplVmFsdWVzO1xuXG4gIC8qKlxuICAgKiBTZXRzIHN5bWJvbCB1c2VkIGFzIGEgaGVhZGVyIGZvciB3ZWVrIG51bWJlcnMgY29sdW1uXG4gICAqICovXG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJTeW1ib2w6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbGFyZ2UnKVxuICBnZXQgaXNMYXJnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSBOYkNhbGVuZGFyU2l6ZS5MQVJHRTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLndlZWtzKSB7XG4gICAgICB0aGlzLndlZWtOdW1iZXJzID0gdGhpcy5nZXRXZWVrcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldFdlZWtzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrcy5tYXAoKHdlZWs6IERbXSkgPT4ge1xuICAgICAgLy8gRmluZCBsYXN0IGRlZmluZWQgZGF5IGFzIHdlZWsgY291bGQgY29udGFpbiBudWxsIGRheXMgaW4gY2FzZVxuICAgICAgLy8gYm91bmRpbmdNb250aCBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IGxhc3REYXkgPSBbIC4uLndlZWsgXS5yZXZlcnNlKCkuZmluZCgoZGF5OiBEKSA9PiAhIWRheSk7XG4gICAgICAvLyBVc2UgbGFzdCBkYXkgb2YgdGhlIHdlZWsgdG8gZGV0ZXJtaW5lIHdlZWsgbnVtYmVyLlxuICAgICAgLy8gVGhpcyB3YXkgd2Vla3Mgd2hpY2ggc3BhbiBiZXR3ZWVuIHNpYmxpbmcgeWVhcnMgaXMgbWFya2VkIGZpcnN0XG4gICAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5nZXRXZWVrTnVtYmVyKGxhc3REYXkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=