/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { range, batch } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "./date.service";
export class NbCalendarYearModelService {
    constructor(dateService) {
        this.dateService = dateService;
        this.yearsInView = 12;
        this.yearsInRow = 4;
    }
    getYearsInView() {
        return this.yearsInView;
    }
    getYearsInRow() {
        return this.yearsInRow;
    }
    getViewYears(viewYear) {
        const year = this.dateService.getYear(viewYear);
        let viewStartYear;
        if (year >= 0) {
            viewStartYear = year - (year % this.yearsInView);
        }
        else {
            viewStartYear = year - (year % this.yearsInView + this.yearsInView);
        }
        const years = range(this.yearsInView).map(i => this.copyWithYear(viewStartYear + i, viewYear));
        return batch(years, this.yearsInRow);
    }
    copyWithYear(year, date) {
        return this.dateService.createDate(year, this.dateService.getMonth(date), this.dateService.getDate(date));
    }
}
NbCalendarYearModelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearModelService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable });
NbCalendarYearModelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearModelService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarYearModelService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhci1tb2RlbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9jYWxlbmRhci15ZWFyLW1vZGVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUkxQyxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQXNCLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUh6QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBR3pCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBVztRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLGFBQXFCLENBQUM7UUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2IsYUFBYSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7UUFDRCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRS9GLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVTLFlBQVksQ0FBQyxJQUFZLEVBQUUsSUFBTztRQUMxQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7O3VIQS9CVSwwQkFBMEI7MkhBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUR0QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgcmFuZ2UsIGJhdGNoIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkRhdGVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclllYXJNb2RlbFNlcnZpY2U8RD4ge1xuXG4gIHByb3RlY3RlZCB5ZWFyc0luVmlldyA9IDEyO1xuICBwcm90ZWN0ZWQgeWVhcnNJblJvdyA9IDQ7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gIH1cblxuICBnZXRZZWFyc0luVmlldygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnllYXJzSW5WaWV3O1xuICB9XG5cbiAgZ2V0WWVhcnNJblJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnllYXJzSW5Sb3c7XG4gIH1cblxuICBnZXRWaWV3WWVhcnModmlld1llYXI6IEQpOiBEW11bXSB7XG4gICAgY29uc3QgeWVhciA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0WWVhcih2aWV3WWVhcik7XG4gICAgbGV0IHZpZXdTdGFydFllYXI6IG51bWJlcjtcbiAgICBpZiAoeWVhciA+PSAwKSB7XG4gICAgICB2aWV3U3RhcnRZZWFyID0geWVhciAtICh5ZWFyICUgdGhpcy55ZWFyc0luVmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdTdGFydFllYXIgPSB5ZWFyIC0gKHllYXIgJSB0aGlzLnllYXJzSW5WaWV3ICsgdGhpcy55ZWFyc0luVmlldyk7XG4gICAgfVxuICAgIGNvbnN0IHllYXJzID0gcmFuZ2UodGhpcy55ZWFyc0luVmlldykubWFwKGkgPT4gdGhpcy5jb3B5V2l0aFllYXIodmlld1N0YXJ0WWVhciArIGksIHZpZXdZZWFyKSk7XG5cbiAgICByZXR1cm4gYmF0Y2goeWVhcnMsIHRoaXMueWVhcnNJblJvdyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29weVdpdGhZZWFyKHllYXI6IG51bWJlciwgZGF0ZTogRCk6IEQge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmNyZWF0ZURhdGUoeWVhciwgdGhpcy5kYXRlU2VydmljZS5nZXRNb250aChkYXRlKSwgdGhpcy5kYXRlU2VydmljZS5nZXREYXRlKGRhdGUpKTtcbiAgfVxufVxuIl19