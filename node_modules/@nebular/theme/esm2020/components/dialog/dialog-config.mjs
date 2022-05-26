/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
export const NB_DIALOG_CONFIG = new InjectionToken('Default dialog options');
/**
 * Describes all available options that may be passed to the NbDialogService.
 * */
export class NbDialogConfig {
    constructor(config) {
        /**
         * If true than overlay will render backdrop under a dialog.
         * */
        this.hasBackdrop = true;
        /**
         * Class that'll be assigned to the backdrop element.
         * */
        this.backdropClass = 'overlay-backdrop';
        /**
         * Class that'll be assigned to the dialog overlay.
         * */
        this.dialogClass = '';
        /**
         * If true then mouse clicks by backdrop will close a dialog.
         * */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a dialog.
         * */
        this.closeOnEsc = true;
        /**
         * Disables scroll on content under dialog if true and does nothing otherwise.
         * */
        this.hasScroll = false;
        /**
         * Focuses dialog automatically after open if true.
         * */
        this.autoFocus = true;
        Object.assign(this, config);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFHakUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWlCLHdCQUF3QixDQUFDLENBQUM7QUFFN0Y7O0tBRUs7QUFDTCxNQUFNLE9BQU8sY0FBYztJQThDekIsWUFBWSxNQUErQjtRQTdDM0M7O2FBRUs7UUFDTCxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1Qjs7YUFFSztRQUNMLGtCQUFhLEdBQVcsa0JBQWtCLENBQUM7UUFFM0M7O2FBRUs7UUFDTCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qjs7YUFFSztRQUNMLHlCQUFvQixHQUFZLElBQUksQ0FBQztRQUVyQzs7YUFFSztRQUNMLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0I7O2FBRUs7UUFDTCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCOzthQUVLO1FBQ0wsY0FBUyxHQUFZLElBQUksQ0FBQztRQWF4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNvbnN0IE5CX0RJQUxPR19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmJEaWFsb2dDb25maWc+KCdEZWZhdWx0IGRpYWxvZyBvcHRpb25zJyk7XG5cbi8qKlxuICogRGVzY3JpYmVzIGFsbCBhdmFpbGFibGUgb3B0aW9ucyB0aGF0IG1heSBiZSBwYXNzZWQgdG8gdGhlIE5iRGlhbG9nU2VydmljZS5cbiAqICovXG5leHBvcnQgY2xhc3MgTmJEaWFsb2dDb25maWc8RCA9IGFueT4ge1xuICAvKipcbiAgICogSWYgdHJ1ZSB0aGFuIG92ZXJsYXkgd2lsbCByZW5kZXIgYmFja2Ryb3AgdW5kZXIgYSBkaWFsb2cuXG4gICAqICovXG4gIGhhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ2xhc3MgdGhhdCdsbCBiZSBhc3NpZ25lZCB0byB0aGUgYmFja2Ryb3AgZWxlbWVudC5cbiAgICogKi9cbiAgYmFja2Ryb3BDbGFzczogc3RyaW5nID0gJ292ZXJsYXktYmFja2Ryb3AnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyB0aGF0J2xsIGJlIGFzc2lnbmVkIHRvIHRoZSBkaWFsb2cgb3ZlcmxheS5cbiAgICogKi9cbiAgZGlhbG9nQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlIHRoZW4gbW91c2UgY2xpY2tzIGJ5IGJhY2tkcm9wIHdpbGwgY2xvc2UgYSBkaWFsb2cuXG4gICAqICovXG4gIGNsb3NlT25CYWNrZHJvcENsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGVuIGVzY2FwZSBwcmVzcyB3aWxsIGNsb3NlIGEgZGlhbG9nLlxuICAgKiAqL1xuICBjbG9zZU9uRXNjOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGlzYWJsZXMgc2Nyb2xsIG9uIGNvbnRlbnQgdW5kZXIgZGlhbG9nIGlmIHRydWUgYW5kIGRvZXMgbm90aGluZyBvdGhlcndpc2UuXG4gICAqICovXG4gIGhhc1Njcm9sbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBGb2N1c2VzIGRpYWxvZyBhdXRvbWF0aWNhbGx5IGFmdGVyIG9wZW4gaWYgdHJ1ZS5cbiAgICogKi9cbiAgYXV0b0ZvY3VzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hlcmUgdGhlIGF0dGFjaGVkIGNvbXBvbmVudCBzaG91bGQgbGl2ZSBpbiBBbmd1bGFyJ3MgKmxvZ2ljYWwqIGNvbXBvbmVudCB0cmVlLlxuICAgKiBUaGlzIGFmZmVjdHMgd2hhdCBpcyBhdmFpbGFibGUgZm9yIGluamVjdGlvbiBhbmQgdGhlIGNoYW5nZSBkZXRlY3Rpb24gb3JkZXIgZm9yIHRoZVxuICAgKiBjb21wb25lbnQgaW5zdGFudGlhdGVkIGluc2lkZSBvZiB0aGUgZGlhbG9nLiBUaGlzIGRvZXMgbm90IGFmZmVjdCB3aGVyZSB0aGUgZGlhbG9nXG4gICAqIGNvbnRlbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29udGV4dDogRDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBhcnRpYWw8TmJEaWFsb2dDb25maWc+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG59XG4iXX0=