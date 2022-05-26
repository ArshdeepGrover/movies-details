/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Optional, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbButton } from '../button/base-button';
import { NB_BUTTON_GROUP } from './button-group-injection-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
/**
 * `[nbButtonToggle]` is a directive to add a `pressed` state to a button.
 */
export class NbButtonToggleDirective extends NbButton {
    constructor(renderer, hostElement, cd, zone, statusService, buttonGroup) {
        super(renderer, hostElement, cd, zone, statusService);
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        this.buttonGroup = buttonGroup;
        this._pressedChange$ = new Subject();
        this.appearance = 'filled';
        this._pressed = false;
        /**
         * Emits whenever button pressed state change
         **/
        this.pressedChange = new EventEmitter();
    }
    get pressedChange$() {
        return this._pressedChange$.asObservable();
    }
    /**
     * Controls button pressed state
     **/
    get pressed() {
        return this._pressed;
    }
    set pressed(value) {
        if (this.pressed !== convertToBoolProperty(value)) {
            this._pressed = !this.pressed;
            this.pressedChange.emit(this.pressed);
            this._pressedChange$.next({ source: this, pressed: this.pressed });
        }
    }
    get basic() {
        // By design, all toggle buttons should have a `basic` status when not pressed.
        return !this.pressed;
    }
    get primary() {
        return this.pressed && (this.status === 'basic' || this.status === 'primary');
    }
    get success() {
        return this.pressed && this.status === 'success';
    }
    get info() {
        return this.pressed && this.status === 'info';
    }
    get warning() {
        return this.pressed && this.status === 'warning';
    }
    get danger() {
        return this.pressed && this.status === 'danger';
    }
    get control() {
        return this.pressed && this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    onClick() {
        // Don't remove the pressed state of the button in single-toggle button-groups
        if (this.buttonGroup?.multiple || !this.pressed) {
            this.pressed = !this.pressed;
        }
    }
    /**
     * @docs-private
     */
    _updatePressed(value) {
        this.pressed = value;
        this.cd.markForCheck();
    }
}
NbButtonToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonToggleDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i1.NbStatusService }, { token: NB_BUTTON_GROUP, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
NbButtonToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbButtonToggleDirective, selector: "button[nbButtonToggle]", inputs: { appearance: "appearance", value: "value", pressed: "pressed" }, outputs: { pressedChange: "pressedChange" }, host: { listeners: { "click": "onClick()" }, properties: { "attr.aria-pressed": "this.pressed", "class.status-basic": "this.basic", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-control": "this.control", "class": "this.additionalClasses" } }, providers: [{ provide: NbButton, useExisting: NbButtonToggleDirective }], exportAs: ["nbButtonToggle"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButtonToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[nbButtonToggle]',
                    providers: [{ provide: NbButton, useExisting: NbButtonToggleDirective }],
                    exportAs: 'nbButtonToggle',
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.NbStatusService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NB_BUTTON_GROUP]
                }] }]; }, propDecorators: { appearance: [{
                type: Input
            }], value: [{
                type: Input
            }], pressed: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-pressed']
            }], pressedChange: [{
                type: Output
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQVNsRTs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxRQUFRO0lBeUZuRCxZQUNZLFFBQW1CLEVBQ25CLFdBQW9DLEVBQ3BDLEVBQXFCLEVBQ3JCLElBQVksRUFDWixhQUE4QixFQUNPLFdBQVk7UUFFM0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQVA1QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUM7UUE5RjFDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7UUFNaEUsZUFBVSxHQUE2QixRQUFRLENBQUM7UUFzQi9DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHcEM7O1lBRUk7UUFDZSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUErRC9ELENBQUM7SUEvRkQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBU0Q7O1FBRUk7SUFDSixJQUVJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQVNELElBQ0ksS0FBSztRQUNQLCtFQUErRTtRQUMvRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQ0ksaUJBQWlCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUdELE9BQU87UUFDTCw4RUFBOEU7UUFDOUUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBYUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7O29IQTFHVSx1QkFBdUIsMkpBK0ZaLGVBQWU7d0dBL0YxQix1QkFBdUIsMmpCQUh2QixDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQzsyRkFHN0QsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLHlCQUF5QixFQUFFLENBQUM7b0JBQ3hFLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzswQkFnR0ksUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxlQUFlOzRDQXhGNUIsVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBT0YsT0FBTztzQkFGVixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFpQmIsYUFBYTtzQkFBL0IsTUFBTTtnQkFHSCxLQUFLO3NCQURSLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU83QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixJQUFJO3NCQURQLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixNQUFNO3NCQURULFdBQVc7dUJBQUMscUJBQXFCO2dCQU05QixPQUFPO3NCQURWLFdBQVc7dUJBQUMsc0JBQXNCO2dCQU0vQixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTztnQkFTcEIsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkJ1dHRvbiwgTmJCdXR0b25BcHBlYXJhbmNlIH0gZnJvbSAnLi4vYnV0dG9uL2Jhc2UtYnV0dG9uJztcbmltcG9ydCB7IE5CX0JVVFRPTl9HUk9VUCB9IGZyb20gJy4vYnV0dG9uLWdyb3VwLWluamVjdGlvbi10b2tlbnMnO1xuXG5leHBvcnQgdHlwZSBOYkJ1dHRvblRvZ2dsZUFwcGVhcmFuY2UgPSBFeGNsdWRlPE5iQnV0dG9uQXBwZWFyYW5jZSwgJ2hlcm8nPjtcblxuZXhwb3J0IGludGVyZmFjZSBOYkJ1dHRvblRvZ2dsZUNoYW5nZSB7XG4gIHNvdXJjZTogTmJCdXR0b25Ub2dnbGVEaXJlY3RpdmU7XG4gIHByZXNzZWQ6IGJvb2xlYW47XG59XG5cbi8qKlxuICogYFtuYkJ1dHRvblRvZ2dsZV1gIGlzIGEgZGlyZWN0aXZlIHRvIGFkZCBhIGBwcmVzc2VkYCBzdGF0ZSB0byBhIGJ1dHRvbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW25iQnV0dG9uVG9nZ2xlXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTmJCdXR0b24sIHVzZUV4aXN0aW5nOiBOYkJ1dHRvblRvZ2dsZURpcmVjdGl2ZSB9XSxcbiAgZXhwb3J0QXM6ICduYkJ1dHRvblRvZ2dsZScsXG59KVxuZXhwb3J0IGNsYXNzIE5iQnV0dG9uVG9nZ2xlRGlyZWN0aXZlIGV4dGVuZHMgTmJCdXR0b24ge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3ByZXNzZWRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TmJCdXR0b25Ub2dnbGVDaGFuZ2U+KCk7XG5cbiAgZ2V0IHByZXNzZWRDaGFuZ2UkKCk6IE9ic2VydmFibGU8TmJCdXR0b25Ub2dnbGVDaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZENoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiBOYkJ1dHRvblRvZ2dsZUFwcGVhcmFuY2UgPSAnZmlsbGVkJztcblxuICAvKipcbiAgICogQSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGJ1dHRvbi5cbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIGJ1dHRvbiBwcmVzc2VkIHN0YXRlXG4gICAqKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIGdldCBwcmVzc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkO1xuICB9XG4gIHNldCBwcmVzc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMucHJlc3NlZCAhPT0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fcHJlc3NlZCA9ICF0aGlzLnByZXNzZWQ7XG4gICAgICB0aGlzLnByZXNzZWRDaGFuZ2UuZW1pdCh0aGlzLnByZXNzZWQpO1xuICAgICAgdGhpcy5fcHJlc3NlZENoYW5nZSQubmV4dCh7IHNvdXJjZTogdGhpcywgcHJlc3NlZDogdGhpcy5wcmVzc2VkIH0pO1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3ByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ByZXNzZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuZXZlciBidXR0b24gcHJlc3NlZCBzdGF0ZSBjaGFuZ2VcbiAgICoqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcHJlc3NlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpOiBib29sZWFuIHtcbiAgICAvLyBCeSBkZXNpZ24sIGFsbCB0b2dnbGUgYnV0dG9ucyBzaG91bGQgaGF2ZSBhIGBiYXNpY2Agc3RhdHVzIHdoZW4gbm90IHByZXNzZWQuXG4gICAgcmV0dXJuICF0aGlzLnByZXNzZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZCAmJiAodGhpcy5zdGF0dXMgPT09ICdiYXNpYycgfHwgdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5Jyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZCAmJiB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtaW5mbycpXG4gIGdldCBpbmZvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQgJiYgdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkICYmIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQgJiYgdGhpcy5zdGF0dXMgPT09ICdkYW5nZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGF0dXMtY29udHJvbCcpXG4gIGdldCBjb250cm9sKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByZXNzZWQgJiYgdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgLy8gRG9uJ3QgcmVtb3ZlIHRoZSBwcmVzc2VkIHN0YXRlIG9mIHRoZSBidXR0b24gaW4gc2luZ2xlLXRvZ2dsZSBidXR0b24tZ3JvdXBzXG4gICAgaWYgKHRoaXMuYnV0dG9uR3JvdXA/Lm11bHRpcGxlIHx8ICF0aGlzLnByZXNzZWQpIHtcbiAgICAgIHRoaXMucHJlc3NlZCA9ICF0aGlzLnByZXNzZWQ7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5CX0JVVFRPTl9HUk9VUCkgcHJvdGVjdGVkIGJ1dHRvbkdyb3VwPyxcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIGhvc3RFbGVtZW50LCBjZCwgem9uZSwgc3RhdHVzU2VydmljZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVByZXNzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnByZXNzZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=