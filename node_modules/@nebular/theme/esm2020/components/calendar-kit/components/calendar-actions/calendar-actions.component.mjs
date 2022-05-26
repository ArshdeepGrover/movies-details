import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.component";
import * as i2 from "@angular/common";
export class NbCalendarActionsComponent {
    constructor() {
        this._applyButtonText = 'ok';
        this._currentTimeButtonText = 'now';
        this.setCurrentTime = new EventEmitter();
        this.saveValue = new EventEmitter();
    }
    set applyButtonText(value) {
        if (value) {
            this._applyButtonText = value;
        }
    }
    ;
    get applyText() {
        return this._applyButtonText;
    }
    ;
    set currentTimeButtonText(value) {
        if (value) {
            this._currentTimeButtonText = value;
        }
    }
    get currentTimeText() {
        return this._currentTimeButtonText;
    }
    ;
}
NbCalendarActionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbCalendarActionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbCalendarActionsComponent, selector: "nb-calendar-actions", inputs: { applyButtonText: "applyButtonText", currentTimeButtonText: "currentTimeButtonText", showCurrentTimeButton: "showCurrentTimeButton" }, outputs: { setCurrentTime: "setCurrentTime", saveValue: "saveValue" }, ngImport: i0, template: `
    <button
      *ngIf="showCurrentTimeButton"
      nbButton
      ghost
      status="primary"
      size="small"
      (click)="setCurrentTime.emit()">
      {{ currentTimeText }}</button>
    <button
      class="apply-text-button"
      nbButton
      status="primary"
      size="small"
      (click)="saveValue.emit()">
      {{ applyText }}</button>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;justify-content:space-between}[dir=ltr] :host .apply-text-button{margin-left:auto}[dir=rtl] :host .apply-text-button{margin-right:auto}\n"], components: [{ type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbCalendarActionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-calendar-actions', template: `
    <button
      *ngIf="showCurrentTimeButton"
      nbButton
      ghost
      status="primary"
      size="small"
      (click)="setCurrentTime.emit()">
      {{ currentTimeText }}</button>
    <button
      class="apply-text-button"
      nbButton
      status="primary"
      size="small"
      (click)="saveValue.emit()">
      {{ applyText }}</button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;justify-content:space-between}[dir=ltr] :host .apply-text-button{margin-left:auto}[dir=rtl] :host .apply-text-button{margin-right:auto}\n"] }]
        }], propDecorators: { applyButtonText: [{
                type: Input
            }], currentTimeButtonText: [{
                type: Input
            }], showCurrentTimeButton: [{
                type: Input
            }], setCurrentTime: [{
                type: Output
            }], saveValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NvbXBvbmVudHMvY2FsZW5kYXItYWN0aW9ucy9jYWxlbmRhci1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBd0JoRyxNQUFNLE9BQU8sMEJBQTBCO0lBdEJ2QztRQStCWSxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFVbEMsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBSXJCLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBQzlEO0lBeEJDLElBQWEsZUFBZSxDQUFDLEtBQWE7UUFDeEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztJQUdGLElBQWEscUJBQXFCLENBQUMsS0FBYTtRQUM5QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFBQSxDQUFDOzt1SEFsQlMsMEJBQTBCOzJHQUExQiwwQkFBMEIsa1JBcEIzQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDsyRkFJVSwwQkFBMEI7a0JBdEJ0QyxTQUFTOytCQUNFLHFCQUFxQixZQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCxtQkFFZ0IsdUJBQXVCLENBQUMsTUFBTTs4QkFHbEMsZUFBZTtzQkFBM0IsS0FBSztnQkFVTyxxQkFBcUI7c0JBQWpDLEtBQUs7Z0JBVUcscUJBQXFCO3NCQUE3QixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jYWxlbmRhci1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAqbmdJZj1cInNob3dDdXJyZW50VGltZUJ1dHRvblwiXG4gICAgICBuYkJ1dHRvblxuICAgICAgZ2hvc3RcbiAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIChjbGljayk9XCJzZXRDdXJyZW50VGltZS5lbWl0KClcIj5cbiAgICAgIHt7IGN1cnJlbnRUaW1lVGV4dCB9fTwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYXBwbHktdGV4dC1idXR0b25cIlxuICAgICAgbmJCdXR0b25cbiAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIChjbGljayk9XCJzYXZlVmFsdWUuZW1pdCgpXCI+XG4gICAgICB7eyBhcHBseVRleHQgfX08L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXItYWN0aW9ucy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmJDYWxlbmRhckFjdGlvbnNDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgYXBwbHlCdXR0b25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX2FwcGx5QnV0dG9uVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgfTtcbiAgZ2V0IGFwcGx5VGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlCdXR0b25UZXh0O1xuICB9O1xuICBwcm90ZWN0ZWQgX2FwcGx5QnV0dG9uVGV4dCA9ICdvayc7XG5cbiAgQElucHV0KCkgc2V0IGN1cnJlbnRUaW1lQnV0dG9uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGltZUJ1dHRvblRleHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0IGN1cnJlbnRUaW1lVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWVCdXR0b25UZXh0O1xuICB9O1xuICBfY3VycmVudFRpbWVCdXR0b25UZXh0ID0gJ25vdyc7XG5cbiAgQElucHV0KCkgc2hvd0N1cnJlbnRUaW1lQnV0dG9uOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZXRDdXJyZW50VGltZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2F2ZVZhbHVlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=