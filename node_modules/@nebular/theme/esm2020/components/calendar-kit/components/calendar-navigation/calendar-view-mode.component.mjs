/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { TranslationWidth } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NbCalendarViewMode } from '../../model';
import * as i0 from "@angular/core";
import * as i1 from "../../services/date.service";
import * as i2 from "../../services/calendar-year-model.service";
import * as i3 from "../../../button/button.component";
import * as i4 from "../../../icon/icon.component";
export class NbCalendarViewModeComponent {
    constructor(dateService, yearModelService) {
        this.dateService = dateService;
        this.yearModelService = yearModelService;
        this.viewMode = NbCalendarViewMode.DATE;
        this.changeMode = new EventEmitter(true);
    }
    getText() {
        if (!this.date) {
            return '';
        }
        switch (this.viewMode) {
            case NbCalendarViewMode.DATE: {
                const month = this.dateService.getMonthName(this.date, TranslationWidth.Wide);
                const year = this.dateService.getYear(this.date);
                return `${month} ${year}`;
            }
            case NbCalendarViewMode.MONTH:
                return `${this.dateService.getYear(this.date)}`;
            case NbCalendarViewMode.YEAR:
                return `${this.getFirstYear()} - ${this.getLastYear()}`;
        }
    }
    getIcon() {
        if (this.viewMode === NbCalendarViewMode.DATE) {
            return 'chevron-down-outline';
        }
        return 'chevron-up-outline';
    }
    getFirstYear() {
        const years = this.yearModelService.getViewYears(this.date);
        return this.dateService.getYear(years[0][0]).toString();
    }
    getLastYear() {
        const years = this.yearModelService.getViewYears(this.date);
        const lastRow = years[years.length - 1];
        const lastYear = lastRow[lastRow.length - 1];
        return this.dateService.getYear(lastYear).toString();
    }
}
NbCalendarViewModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarViewModeComponent, deps: [{ token: i1.NbDateService }, { token: i2.NbCalendarYearModelService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarViewModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarViewModeComponent, selector: "nb-calendar-view-mode", inputs: { date: "date", viewMode: "viewMode" }, outputs: { changeMode: "changeMode" }, ngImport: i0, template: `
    <button nbButton (click)="changeMode.emit()" ghost status="basic">
      {{ getText() }}
      <nb-icon [icon]="getIcon()" pack="nebular-essentials"></nb-icon>
    </button>
  `, isInline: true, components: [{ type: i3.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i4.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarViewModeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-calendar-view-mode',
                    template: `
    <button nbButton (click)="changeMode.emit()" ghost status="basic">
      {{ getText() }}
      <nb-icon [icon]="getIcon()" pack="nebular-essentials"></nb-icon>
    </button>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDateService }, { type: i2.NbCalendarYearModelService }]; }, propDecorators: { date: [{
                type: Input
            }], viewMode: [{
                type: Input
            }], changeMode: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy1tb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYWxlbmRhci1raXQvY29tcG9uZW50cy9jYWxlbmRhci1uYXZpZ2F0aW9uL2NhbGVuZGFyLXZpZXctbW9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRW5ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLGtCQUFrQixFQUE0QixNQUFNLGFBQWEsQ0FBQzs7Ozs7O0FBZTNFLE1BQU0sT0FBTywyQkFBMkI7SUFNdEMsWUFDWSxXQUE2QixFQUM3QixnQkFBK0M7UUFEL0MsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBK0I7UUFObEQsYUFBUSxHQUF1QixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFFdEQsZUFBVSxHQUFHLElBQUksWUFBWSxDQUFPLElBQUksQ0FBQyxDQUFDO0lBS2pELENBQUM7SUFFSixPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUMzQjtZQUNELEtBQUssa0JBQWtCLENBQUMsS0FBSztnQkFDM0IsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2xELEtBQUssa0JBQWtCLENBQUMsSUFBSTtnQkFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGtCQUFrQixDQUFDLElBQUksRUFBRTtZQUM3QyxPQUFPLHNCQUFzQixDQUFDO1NBQy9CO1FBRUQsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRVMsWUFBWTtRQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFUyxXQUFXO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7d0hBaERVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLG9KQVI1Qjs7Ozs7R0FLVDsyRkFHVSwyQkFBMkI7a0JBVnZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOzs7OztHQUtUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs2SUFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBUcmFuc2xhdGlvbldpZHRoIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkNhbGVuZGFyVmlld01vZGUsIE5iQ2FsZW5kYXJWaWV3TW9kZVZhbHVlcyB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IE5iQ2FsZW5kYXJZZWFyTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXIteWVhci1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXZpZXctbW9kZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTW9kZS5lbWl0KClcIiBnaG9zdCBzdGF0dXM9XCJiYXNpY1wiPlxuICAgICAge3sgZ2V0VGV4dCgpIH19XG4gICAgICA8bmItaWNvbiBbaWNvbl09XCJnZXRJY29uKClcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclZpZXdNb2RlQ29tcG9uZW50PEQ+IHtcbiAgQElucHV0KCkgZGF0ZTogRDtcbiAgQElucHV0KCkgdmlld01vZGU6IE5iQ2FsZW5kYXJWaWV3TW9kZSA9IE5iQ2FsZW5kYXJWaWV3TW9kZS5EQVRFO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlld01vZGU6IE5iQ2FsZW5kYXJWaWV3TW9kZVZhbHVlcztcbiAgQE91dHB1dCgpIGNoYW5nZU1vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KHRydWUpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPixcbiAgICBwcm90ZWN0ZWQgeWVhck1vZGVsU2VydmljZTogTmJDYWxlbmRhclllYXJNb2RlbFNlcnZpY2U8RD4sXG4gICkge31cblxuICBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmRhdGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMudmlld01vZGUpIHtcbiAgICAgIGNhc2UgTmJDYWxlbmRhclZpZXdNb2RlLkRBVEU6IHtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmRhdGVTZXJ2aWNlLmdldE1vbnRoTmFtZSh0aGlzLmRhdGUsIFRyYW5zbGF0aW9uV2lkdGguV2lkZSk7XG4gICAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXIodGhpcy5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGAke21vbnRofSAke3llYXJ9YDtcbiAgICAgIH1cbiAgICAgIGNhc2UgTmJDYWxlbmRhclZpZXdNb2RlLk1PTlRIOlxuICAgICAgICByZXR1cm4gYCR7dGhpcy5kYXRlU2VydmljZS5nZXRZZWFyKHRoaXMuZGF0ZSl9YDtcbiAgICAgIGNhc2UgTmJDYWxlbmRhclZpZXdNb2RlLllFQVI6XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldEZpcnN0WWVhcigpfSAtICR7dGhpcy5nZXRMYXN0WWVhcigpfWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSBOYkNhbGVuZGFyVmlld01vZGUuREFURSkge1xuICAgICAgcmV0dXJuICdjaGV2cm9uLWRvd24tb3V0bGluZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdjaGV2cm9uLXVwLW91dGxpbmUnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZpcnN0WWVhcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHllYXJzID0gdGhpcy55ZWFyTW9kZWxTZXJ2aWNlLmdldFZpZXdZZWFycyh0aGlzLmRhdGUpO1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmdldFllYXIoeWVhcnNbMF1bMF0pLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TGFzdFllYXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ZWFycyA9IHRoaXMueWVhck1vZGVsU2VydmljZS5nZXRWaWV3WWVhcnModGhpcy5kYXRlKTtcbiAgICBjb25zdCBsYXN0Um93ID0geWVhcnNbeWVhcnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbGFzdFllYXIgPSBsYXN0Um93W2xhc3RSb3cubGVuZ3RoIC0gMV07XG5cbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5nZXRZZWFyKGxhc3RZZWFyKS50b1N0cmluZygpO1xuICB9XG59XG4iXX0=