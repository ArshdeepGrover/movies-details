/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/direction.service";
import * as i2 from "../../../button/button.component";
import * as i3 from "../../../icon/icon.component";
export class NbCalendarPageableNavigationComponent {
    constructor(directionService) {
        this.directionService = directionService;
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
    }
    get isLtr() {
        return this.directionService.isLtr();
    }
}
NbCalendarPageableNavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPageableNavigationComponent, deps: [{ token: i1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Component });
NbCalendarPageableNavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarPageableNavigationComponent, selector: "nb-calendar-pageable-navigation", outputs: { next: "next", prev: "prev" }, ngImport: i0, template: `
    <button nbButton (click)="prev.emit()" ghost status="basic" class="prev-month">
      <nb-icon [icon]="isLtr ? 'chevron-left-outline' : 'chevron-right-outline'" pack="nebular-essentials"></nb-icon>
    </button>
    <button nbButton (click)="next.emit()" ghost status="basic" class="next-month">
      <nb-icon [icon]="isLtr ? 'chevron-right-outline' : 'chevron-left-outline'" pack="nebular-essentials"></nb-icon>
    </button>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;justify-content:flex-start}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarPageableNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-pageable-navigation', template: `
    <button nbButton (click)="prev.emit()" ghost status="basic" class="prev-month">
      <nb-icon [icon]="isLtr ? 'chevron-left-outline' : 'chevron-right-outline'" pack="nebular-essentials"></nb-icon>
    </button>
    <button nbButton (click)="next.emit()" ghost status="basic" class="next-month">
      <nb-icon [icon]="isLtr ? 'chevron-right-outline' : 'chevron-left-outline'" pack="nebular-essentials"></nb-icon>
    </button>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;align-items:center;justify-content:flex-start}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbLayoutDirectionService }]; }, propDecorators: { next: [{
                type: Output
            }], prev: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGFnZWFibGUtbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItbmF2aWdhdGlvbi9jYWxlbmRhci1wYWdlYWJsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQWlCaEUsTUFBTSxPQUFPLHFDQUFxQztJQUloRCxZQUFvQixnQkFBMEM7UUFBMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUEwQjtRQUhwRCxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNoQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUcxQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7a0lBVFUscUNBQXFDO3NIQUFyQyxxQ0FBcUMsZ0hBVHRDOzs7Ozs7O0dBT1Q7MkZBRVUscUNBQXFDO2tCQVpqRCxTQUFTOytCQUNFLGlDQUFpQyxZQUVqQzs7Ozs7OztHQU9UOytHQUdTLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNhbGVuZGFyLXBhZ2VhYmxlLW5hdmlnYXRpb24nLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1wYWdlYWJsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiAoY2xpY2spPVwicHJldi5lbWl0KClcIiBnaG9zdCBzdGF0dXM9XCJiYXNpY1wiIGNsYXNzPVwicHJldi1tb250aFwiPlxuICAgICAgPG5iLWljb24gW2ljb25dPVwiaXNMdHIgPyAnY2hldnJvbi1sZWZ0LW91dGxpbmUnIDogJ2NoZXZyb24tcmlnaHQtb3V0bGluZSdcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbmJCdXR0b24gKGNsaWNrKT1cIm5leHQuZW1pdCgpXCIgZ2hvc3Qgc3RhdHVzPVwiYmFzaWNcIiBjbGFzcz1cIm5leHQtbW9udGhcIj5cbiAgICAgIDxuYi1pY29uIFtpY29uXT1cImlzTHRyID8gJ2NoZXZyb24tcmlnaHQtb3V0bGluZScgOiAnY2hldnJvbi1sZWZ0LW91dGxpbmUnXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhclBhZ2VhYmxlTmF2aWdhdGlvbkNvbXBvbmVudDxEPiB7XG4gIEBPdXRwdXQoKSBuZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHJldiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSkge1xuICB9XG5cbiAgZ2V0IGlzTHRyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvblNlcnZpY2UuaXNMdHIoKTtcbiAgfVxufVxuIl19