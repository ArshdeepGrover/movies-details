import { Inject, Injectable } from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { NB_DOCUMENT } from '../../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/**
 * Overrides angular cdk focus trap to keep restore functionality inside trap.
 * */
export class NbFocusTrap extends FocusTrap {
    constructor(element, checker, ngZone, document, deferAnchors) {
        super(element, checker, ngZone, document, deferAnchors);
        this.element = element;
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
        this.savePreviouslyFocusedElement();
    }
    restoreFocus() {
        this.previouslyFocusedElement.focus();
        this.destroy();
    }
    blurPreviouslyFocusedElement() {
        this.previouslyFocusedElement.blur();
    }
    savePreviouslyFocusedElement() {
        this.previouslyFocusedElement = this.document.activeElement;
    }
}
export class NbFocusTrapFactoryService extends FocusTrapFactory {
    constructor(checker, ngZone, document) {
        super(checker, ngZone, document);
        this.checker = checker;
        this.ngZone = ngZone;
        this.document = document;
    }
    create(element, deferCaptureElements) {
        return new NbFocusTrap(element, this.checker, this.ngZone, this.document, deferCaptureElements);
    }
}
NbFocusTrapFactoryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusTrapFactoryService, deps: [{ token: i1.InteractivityChecker }, { token: i0.NgZone }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbFocusTrapFactoryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusTrapFactoryService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFocusTrapFactoryService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.InteractivityChecker }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvYTExeS9mb2N1cy10cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sbUJBQW1CLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHckQ7O0tBRUs7QUFDTCxNQUFNLE9BQU8sV0FBWSxTQUFRLFNBQVM7SUFHeEMsWUFDWSxPQUFvQixFQUNwQixPQUE2QixFQUM3QixNQUFjLEVBQ2QsUUFBa0IsRUFDNUIsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMOUMsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUc1QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDRCQUE0QjtRQUMxQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVTLDRCQUE0QjtRQUNwQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUE0QixDQUFDO0lBQzdFLENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBZ0I7SUFDN0QsWUFDWSxPQUE2QixFQUM3QixNQUFjLEVBQ0ssUUFBUTtRQUNyQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUh2QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0ssYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUV2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQW9CLEVBQUUsb0JBQThCO1FBQ3pELE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbEcsQ0FBQzs7c0hBVlUseUJBQXlCLDRFQUkxQixXQUFXOzBIQUpWLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFLTixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5LCBJbnRlcmFjdGl2aXR5Q2hlY2tlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICcuLi8uLi8uLi90aGVtZS5vcHRpb25zJztcblxuXG4vKipcbiAqIE92ZXJyaWRlcyBhbmd1bGFyIGNkayBmb2N1cyB0cmFwIHRvIGtlZXAgcmVzdG9yZSBmdW5jdGlvbmFsaXR5IGluc2lkZSB0cmFwLlxuICogKi9cbmV4cG9ydCBjbGFzcyBOYkZvY3VzVHJhcCBleHRlbmRzIEZvY3VzVHJhcCB7XG4gIHByb3RlY3RlZCBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcm90ZWN0ZWQgY2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgZGVmZXJBbmNob3JzKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY2hlY2tlciwgbmdab25lLCBkb2N1bWVudCwgZGVmZXJBbmNob3JzKTtcbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgfVxuXG4gIHJlc3RvcmVGb2N1cygpIHtcbiAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgYmx1clByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpIHtcbiAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpIHtcbiAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJGb2N1c1RyYXBGYWN0b3J5U2VydmljZSBleHRlbmRzIEZvY3VzVHJhcEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tlcjogSW50ZXJhY3Rpdml0eUNoZWNrZXIsXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoTkJfRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQpIHtcbiAgICBzdXBlcihjaGVja2VyLCBuZ1pvbmUsIGRvY3VtZW50KTtcbiAgfVxuXG4gIGNyZWF0ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGVmZXJDYXB0dXJlRWxlbWVudHM/OiBib29sZWFuKTogTmJGb2N1c1RyYXAge1xuICAgIHJldHVybiBuZXcgTmJGb2N1c1RyYXAoZWxlbWVudCwgdGhpcy5jaGVja2VyLCB0aGlzLm5nWm9uZSwgdGhpcy5kb2N1bWVudCwgZGVmZXJDYXB0dXJlRWxlbWVudHMpO1xuICB9XG59XG4iXX0=