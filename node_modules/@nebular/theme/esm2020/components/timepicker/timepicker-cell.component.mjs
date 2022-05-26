import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { filter, take, takeUntil } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/platform/platform-service";
export class NbTimePickerCellComponent {
    constructor(ngZone, platformService) {
        this.ngZone = ngZone;
        this.platformService = platformService;
        this.selectedChange$ = new Subject();
        this.unselected$ = this.selectedChange$.pipe(filter((selected) => !selected));
        this.destroy$ = new Subject();
        this.select = new EventEmitter();
    }
    set selected(selected) {
        if (selected) {
            this._selected = selected;
            this.scrollToElement();
        }
        this.selectedChange$.next(selected);
    }
    ;
    get selected() {
        return this._selected;
    }
    onClick() {
        this.select.emit({ value: this.value });
    }
    ngAfterViewInit() {
        if (this.selected) {
            // Since we render timepicker in the overlay, at the moment this hook called,
            // timepicker could be not fully rendered and placed. Because of it, we're waiting for Angular
            // to finish change detection run and only then scroll to the selected cell.
            this.ngZone.onStable
                .pipe(take(1), takeUntil(merge(this.unselected$, this.destroy$)))
                .subscribe(() => this.scrollToElement());
        }
    }
    scrollToElement() {
        if (this.valueContainerElement && this.platformService.isBrowser) {
            this.ngZone.runOutsideAngular(() => this.valueContainerElement.nativeElement.scrollIntoView({ block: 'center' }));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbTimePickerCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerCellComponent, deps: [{ token: i0.NgZone }, { token: i1.NbPlatform }], target: i0.ɵɵFactoryTarget.Component });
NbTimePickerCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTimePickerCellComponent, selector: "nb-timepicker-cell", inputs: { selected: "selected", value: "value" }, outputs: { select: "select" }, host: { listeners: { "click": "onClick()" } }, viewQueries: [{ propertyName: "valueContainerElement", first: true, predicate: ["valueContainer"], descendants: true }], ngImport: i0, template: `
    <div #valueContainer>{{ value }}</div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-ms-user-select:none;user-select:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTimePickerCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-timepicker-cell', template: `
    <div #valueContainer>{{ value }}</div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{width:100%;height:100%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-ms-user-select:none;user-select:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i1.NbPlatform }]; }, propDecorators: { selected: [{
                type: Input
            }], value: [{
                type: Input
            }], select: [{
                type: Output
            }], valueContainerElement: [{
                type: ViewChild,
                args: ['valueContainer']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXItY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBWXRDLE1BQU0sT0FBTyx5QkFBeUI7SUFxQnBDLFlBQXNCLE1BQWMsRUFDZCxlQUEyQjtRQUQzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQVk7UUFyQnZDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBYy9CLFdBQU0sR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU16RSxDQUFDO0lBakJELElBQWEsUUFBUSxDQUFDLFFBQWlCO1FBQ3JDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVdELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQiw2RUFBNkU7WUFDN0UsOEZBQThGO1lBQzlGLDRFQUE0RTtZQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7aUJBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNuRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRVMsZUFBZTtRQUN2QixJQUFJLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztzSEFyRFUseUJBQXlCOzBHQUF6Qix5QkFBeUIsbVRBTjFCOztHQUVUOzJGQUlVLHlCQUF5QjtrQkFSckMsU0FBUzsrQkFDRSxvQkFBb0IsWUFDcEI7O0dBRVQsbUJBRWdCLHVCQUF1QixDQUFDLE1BQU07c0hBUWxDLFFBQVE7c0JBQXBCLEtBQUs7Z0JBVUcsS0FBSztzQkFBYixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTTtnQkFFc0IscUJBQXFCO3NCQUFqRCxTQUFTO3VCQUFDLGdCQUFnQjtnQkFPM0IsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYlNlbGVjdGVkVGltZU1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBOYlBsYXRmb3JtIH0gZnJvbSAnLi4vY2RrL3BsYXRmb3JtL3BsYXRmb3JtLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi10aW1lcGlja2VyLWNlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI3ZhbHVlQ29udGFpbmVyPnt7IHZhbHVlIH19PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RpbWVwaWNrZXItY2VsbC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJUaW1lUGlja2VyQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBzZWxlY3RlZENoYW5nZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcm90ZWN0ZWQgdW5zZWxlY3RlZCQgPSB0aGlzLnNlbGVjdGVkQ2hhbmdlJC5waXBlKGZpbHRlcigoc2VsZWN0ZWQpID0+ICFzZWxlY3RlZCkpO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBfc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZSQubmV4dChzZWxlY3RlZCk7XG4gIH07XG4gIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPE5iU2VsZWN0ZWRUaW1lTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZhbHVlQ29udGFpbmVyJykgdmFsdWVDb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHBsYXRmb3JtU2VydmljZTogTmJQbGF0Zm9ybSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgLy8gU2luY2Ugd2UgcmVuZGVyIHRpbWVwaWNrZXIgaW4gdGhlIG92ZXJsYXksIGF0IHRoZSBtb21lbnQgdGhpcyBob29rIGNhbGxlZCxcbiAgICAgIC8vIHRpbWVwaWNrZXIgY291bGQgYmUgbm90IGZ1bGx5IHJlbmRlcmVkIGFuZCBwbGFjZWQuIEJlY2F1c2Ugb2YgaXQsIHdlJ3JlIHdhaXRpbmcgZm9yIEFuZ3VsYXJcbiAgICAgIC8vIHRvIGZpbmlzaCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biBhbmQgb25seSB0aGVuIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgY2VsbC5cbiAgICAgIHRoaXMubmdab25lLm9uU3RhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgdGFrZVVudGlsKG1lcmdlKHRoaXMudW5zZWxlY3RlZCQsIHRoaXMuZGVzdHJveSQpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zY3JvbGxUb0VsZW1lbnQoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNjcm9sbFRvRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZUNvbnRhaW5lckVsZW1lbnQgJiYgdGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgICB0aGlzLnZhbHVlQ29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEludG9WaWV3KHtibG9jazogJ2NlbnRlcid9KSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=