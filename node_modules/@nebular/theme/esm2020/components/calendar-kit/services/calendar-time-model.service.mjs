import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
export class NbCalendarTimeModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.MINUTES_AND_SECONDS = 60;
    }
    getHoursRange(step = this.MINUTES_AND_SECONDS) {
        let date = this.getResetTime();
        const endDate = this.dateService.addDay(date, 1);
        const result = [];
        while (this.dateService.compareDates(date, endDate) < 0) {
            result.push(date);
            date = this.dateService.addMinutes(date, step);
        }
        return result;
    }
    getResetTime() {
        let today = this.dateService.today();
        today = this.dateService.setHours(today, 0);
        today = this.dateService.setMinutes(today, 0);
        today = this.dateService.setSeconds(today, 0);
        today = this.dateService.setMilliseconds(today, 0);
        return today;
    }
    paddToTwoSymbols(n) {
        if (n < 10) {
            return '0' + n;
        }
        return n.toString();
    }
    buildDateFormat(twelveHoursFormat, withSeconds = false) {
        if (twelveHoursFormat) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwelveHoursFormat()}`;
        }
        if (withSeconds) {
            return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormatWithSeconds()}`;
        }
        return `${this.dateService.getDateFormat()} ${this.dateService.getTwentyFourHoursFormat()}`;
    }
}
NbCalendarTimeModelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarTimeModelService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable });
NbCalendarTimeModelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarTimeModelService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarTimeModelService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdGltZS1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9jYWxlbmRhci10aW1lLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTywwQkFBMEI7SUFHckMsWUFBc0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBRjFDLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztJQUdsQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWUsSUFBSSxDQUFDLG1CQUFtQjtRQUNuRCxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsQ0FBUztRQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDVixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFFRCxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZSxDQUFDLGlCQUEwQixFQUFFLGNBQXVCLEtBQUs7UUFDdEUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQTtTQUN4RjtRQUVELElBQUksV0FBVyxFQUFFO1lBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsRUFBRSxFQUFFLENBQUE7U0FDdkc7UUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQTtJQUM3RixDQUFDOzt1SEFqRFUsMEJBQTBCOzJIQUExQiwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGF0ZVNlcnZpY2UgfSBmcm9tICcuL2RhdGUuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iQ2FsZW5kYXJUaW1lTW9kZWxTZXJ2aWNlPEQ+IHtcbiAgcmVhZG9ubHkgTUlOVVRFU19BTkRfU0VDT05EUyA9IDYwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRlU2VydmljZTogTmJEYXRlU2VydmljZTxEPikge1xuICB9XG5cbiAgZ2V0SG91cnNSYW5nZShzdGVwOiBudW1iZXIgPSB0aGlzLk1JTlVURVNfQU5EX1NFQ09ORFMpOiBEW10ge1xuICAgIGxldCBkYXRlOiBEID0gdGhpcy5nZXRSZXNldFRpbWUoKTtcblxuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLmFkZERheShkYXRlLCAxKTtcblxuICAgIGNvbnN0IHJlc3VsdDogRFtdID0gW107XG5cbiAgICB3aGlsZSAodGhpcy5kYXRlU2VydmljZS5jb21wYXJlRGF0ZXMoZGF0ZSwgZW5kRGF0ZSkgPCAwKSB7XG4gICAgICByZXN1bHQucHVzaChkYXRlKTtcbiAgICAgIGRhdGUgPSB0aGlzLmRhdGVTZXJ2aWNlLmFkZE1pbnV0ZXMoZGF0ZSwgc3RlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFJlc2V0VGltZSgpOiBEIHtcbiAgICBsZXQgdG9kYXkgPSB0aGlzLmRhdGVTZXJ2aWNlLnRvZGF5KCk7XG4gICAgdG9kYXkgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldEhvdXJzKHRvZGF5LCAwKTtcbiAgICB0b2RheSA9IHRoaXMuZGF0ZVNlcnZpY2Uuc2V0TWludXRlcyh0b2RheSwgMCk7XG4gICAgdG9kYXkgPSB0aGlzLmRhdGVTZXJ2aWNlLnNldFNlY29uZHModG9kYXksIDApO1xuICAgIHRvZGF5ID0gdGhpcy5kYXRlU2VydmljZS5zZXRNaWxsaXNlY29uZHModG9kYXksIDApO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xuICB9XG5cbiAgcGFkZFRvVHdvU3ltYm9scyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChuIDwgMTApIHtcbiAgICAgIHJldHVybiAnMCcgKyBuO1xuICAgIH1cblxuICAgIHJldHVybiBuLnRvU3RyaW5nKCk7XG4gIH1cblxuICBidWlsZERhdGVGb3JtYXQodHdlbHZlSG91cnNGb3JtYXQ6IGJvb2xlYW4sIHdpdGhTZWNvbmRzOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGlmICh0d2VsdmVIb3Vyc0Zvcm1hdCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMuZGF0ZVNlcnZpY2UuZ2V0RGF0ZUZvcm1hdCgpfSAke3RoaXMuZGF0ZVNlcnZpY2UuZ2V0VHdlbHZlSG91cnNGb3JtYXQoKX1gXG4gICAgfVxuXG4gICAgaWYgKHdpdGhTZWNvbmRzKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5kYXRlU2VydmljZS5nZXREYXRlRm9ybWF0KCl9ICR7dGhpcy5kYXRlU2VydmljZS5nZXRUd2VudHlGb3VySG91cnNGb3JtYXRXaXRoU2Vjb25kcygpfWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy5kYXRlU2VydmljZS5nZXREYXRlRm9ybWF0KCl9ICR7dGhpcy5kYXRlU2VydmljZS5nZXRUd2VudHlGb3VySG91cnNGb3JtYXQoKX1gXG4gIH1cbn1cbiJdfQ==