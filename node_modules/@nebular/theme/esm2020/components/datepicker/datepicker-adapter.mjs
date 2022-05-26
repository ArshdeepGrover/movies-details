/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbDatepickerComponent, NbRangepickerComponent } from './datepicker.component';
import { NbDatepickerAdapter } from './datepicker.directive';
import { NbDateTimePickerComponent } from './date-timepicker.component';
import * as i0 from "@angular/core";
import * as i1 from "../calendar-kit/services/date.service";
export class NbDateAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDatepickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateAdapterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateAdapterService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable });
NbDateAdapterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateAdapterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateAdapterService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; } });
export class NbRangeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbRangepickerComponent;
    }
    parse(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return {
            start: this.dateService.parse(start, format),
            end: this.dateService.parse(end, format),
        };
    }
    format(range, format) {
        if (!range) {
            return '';
        }
        const start = this.dateService.format(range.start, format);
        const isStartValid = this.dateService.isValidDateString(start, format);
        if (!isStartValid) {
            return '';
        }
        const end = this.dateService.format(range.end, format);
        const isEndValid = this.dateService.isValidDateString(end, format);
        if (isEndValid) {
            return `${start} - ${end}`;
        }
        else {
            return start;
        }
    }
    isValid(range, format) {
        const [start, end] = range.split('-').map(subDate => subDate.trim());
        return this.dateService.isValidDateString(start, format) && this.dateService.isValidDateString(end, format);
    }
}
NbRangeAdapterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRangeAdapterService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable });
NbRangeAdapterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRangeAdapterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRangeAdapterService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; } });
export class NbDateTimeAdapterService extends NbDatepickerAdapter {
    constructor(dateService) {
        super();
        this.dateService = dateService;
        this.picker = NbDateTimePickerComponent;
    }
    parse(date, format) {
        return this.dateService.parse(date, format);
    }
    format(date, format) {
        return this.dateService.format(date, format);
    }
    isValid(date, format) {
        return this.dateService.isValidDateString(date, format);
    }
}
NbDateTimeAdapterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateTimeAdapterService, deps: [{ token: i1.NbDateService }], target: i0.ɵɵFactoryTarget.Injectable });
NbDateTimeAdapterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateTimeAdapterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDateTimeAdapterService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbDateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFHeEUsTUFBTSxPQUFPLG9CQUF3QixTQUFRLG1CQUFzQjtJQUdqRSxZQUFzQixXQUE2QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURZLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUZuRCxXQUFNLEdBQW1DLHFCQUFxQixDQUFDO0lBSS9ELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBWSxFQUFFLE1BQU07UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFPLEVBQUUsTUFBYztRQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVksRUFBRSxNQUFjO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7aUhBakJVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVU7O0FB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QUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7O3FIQWpCVSx3QkFBd0I7eUhBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDYWxlbmRhclJhbmdlIH0gZnJvbSAnLi4vY2FsZW5kYXIvY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5iRGF0ZXBpY2tlckNvbXBvbmVudCwgTmJSYW5nZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJEYXRlcGlja2VyQWRhcHRlciB9IGZyb20gJy4vZGF0ZXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJEYXRlU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLWtpdC9zZXJ2aWNlcy9kYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lcGlja2VyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkRhdGVBZGFwdGVyU2VydmljZTxEPiBleHRlbmRzIE5iRGF0ZXBpY2tlckFkYXB0ZXI8RD4ge1xuICBwaWNrZXI6IFR5cGU8TmJEYXRlcGlja2VyQ29tcG9uZW50PEQ+PiA9IE5iRGF0ZXBpY2tlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcGFyc2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5wYXJzZShkYXRlLCBmb3JtYXQpO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IEQsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5mb3JtYXQoZGF0ZSwgZm9ybWF0KTtcbiAgfVxuXG4gIGlzVmFsaWQoZGF0ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzVmFsaWREYXRlU3RyaW5nKGRhdGUsIGZvcm1hdCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iUmFuZ2VBZGFwdGVyU2VydmljZTxEPiBleHRlbmRzIE5iRGF0ZXBpY2tlckFkYXB0ZXI8TmJDYWxlbmRhclJhbmdlPEQ+PiB7XG4gIHBpY2tlcjogVHlwZTxOYlJhbmdlcGlja2VyQ29tcG9uZW50PEQ+PiA9IE5iUmFuZ2VwaWNrZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVTZXJ2aWNlOiBOYkRhdGVTZXJ2aWNlPEQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHBhcnNlKHJhbmdlOiBzdHJpbmcsIGZvcm1hdCk6IE5iQ2FsZW5kYXJSYW5nZTxEPiB7XG4gICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gcmFuZ2Uuc3BsaXQoJy0nKS5tYXAoc3ViRGF0ZSA9PiBzdWJEYXRlLnRyaW0oKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlKHN0YXJ0LCBmb3JtYXQpLFxuICAgICAgZW5kOiB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlKGVuZCwgZm9ybWF0KSxcbiAgICB9O1xuICB9XG5cbiAgZm9ybWF0KHJhbmdlOiBOYkNhbGVuZGFyUmFuZ2U8RD4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmRhdGVTZXJ2aWNlLmZvcm1hdChyYW5nZS5zdGFydCwgZm9ybWF0KTtcbiAgICBjb25zdCBpc1N0YXJ0VmFsaWQgPSB0aGlzLmRhdGVTZXJ2aWNlLmlzVmFsaWREYXRlU3RyaW5nKHN0YXJ0LCBmb3JtYXQpO1xuXG4gICAgaWYgKCFpc1N0YXJ0VmFsaWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLmRhdGVTZXJ2aWNlLmZvcm1hdChyYW5nZS5lbmQsIGZvcm1hdCk7XG4gICAgY29uc3QgaXNFbmRWYWxpZCA9IHRoaXMuZGF0ZVNlcnZpY2UuaXNWYWxpZERhdGVTdHJpbmcoZW5kLCBmb3JtYXQpO1xuXG4gICAgaWYgKGlzRW5kVmFsaWQpIHtcbiAgICAgIHJldHVybiBgJHtzdGFydH0gLSAke2VuZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZChyYW5nZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlLnNwbGl0KCctJykubWFwKHN1YkRhdGUgPT4gc3ViRGF0ZS50cmltKCkpO1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLmlzVmFsaWREYXRlU3RyaW5nKHN0YXJ0LCBmb3JtYXQpICYmIHRoaXMuZGF0ZVNlcnZpY2UuaXNWYWxpZERhdGVTdHJpbmcoZW5kLCBmb3JtYXQpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkRhdGVUaW1lQWRhcHRlclNlcnZpY2U8RD4gZXh0ZW5kcyBOYkRhdGVwaWNrZXJBZGFwdGVyPEQ+IHtcbiAgcGlja2VyOiBUeXBlPE5iRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQ8RD4+ID0gTmJEYXRlVGltZVBpY2tlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZVNlcnZpY2U6IE5iRGF0ZVNlcnZpY2U8RD4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcGFyc2UoZGF0ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IEQge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZXJ2aWNlLnBhcnNlKGRhdGUsIGZvcm1hdCk7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlcnZpY2UuZm9ybWF0KGRhdGUsIGZvcm1hdCk7XG4gIH1cblxuICBpc1ZhbGlkKGRhdGU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlU2VydmljZS5pc1ZhbGlkRGF0ZVN0cmluZyhkYXRlLCBmb3JtYXQpO1xuICB9XG59XG4iXX0=