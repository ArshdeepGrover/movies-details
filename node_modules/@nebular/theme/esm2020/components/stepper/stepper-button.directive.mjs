import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./stepper.component";
export class NbStepperNextDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'submit';
    }
    onClick() {
        this.stepper.next();
    }
}
NbStepperNextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperNextDirective, deps: [{ token: i1.NbStepperComponent }], target: i0.ɵɵFactoryTarget.Directive });
NbStepperNextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbStepperNextDirective, selector: "button[nbStepperNext]", inputs: { type: "type" }, host: { listeners: { "click": "onClick()" }, properties: { "attr.type": "this.type" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperNextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[nbStepperNext]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbStepperComponent }]; }, propDecorators: { type: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.type']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
export class NbStepperPreviousDirective {
    constructor(stepper) {
        this.stepper = stepper;
        this.type = 'button';
    }
    onClick() {
        this.stepper.previous();
    }
}
NbStepperPreviousDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperPreviousDirective, deps: [{ token: i1.NbStepperComponent }], target: i0.ɵɵFactoryTarget.Directive });
NbStepperPreviousDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbStepperPreviousDirective, selector: "button[nbStepperPrevious]", inputs: { type: "type" }, host: { listeners: { "click": "onClick()" }, properties: { "attr.type": "this.type" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStepperPreviousDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'button[nbStepperPrevious]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbStepperComponent }]; }, propDecorators: { type: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.type']
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUs1RSxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDLFlBQXNCLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBRmQsU0FBSSxHQUFXLFFBQVEsQ0FBQztJQUczRCxDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7bUhBVlUsc0JBQXNCO3VHQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzt5R0FHb0MsSUFBSTtzQkFBdEMsS0FBSzs7c0JBQUksV0FBVzt1QkFBQyxXQUFXO2dCQU1qQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTzs7QUFTdkIsTUFBTSxPQUFPLDBCQUEwQjtJQUlyQyxZQUFzQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUZkLFNBQUksR0FBVyxRQUFRLENBQUM7SUFHM0QsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7O3VIQVZVLDBCQUEwQjsyR0FBMUIsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBSHRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7eUdBR29DLElBQUk7c0JBQXRDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsV0FBVztnQkFNakMsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYlN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW25iU3RlcHBlck5leHRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJTdGVwcGVyTmV4dERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKSB0eXBlOiBzdHJpbmcgPSAnc3VibWl0JztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RlcHBlcjogTmJTdGVwcGVyQ29tcG9uZW50KSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5zdGVwcGVyLm5leHQoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbmJTdGVwcGVyUHJldmlvdXNdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJTdGVwcGVyUHJldmlvdXNEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci50eXBlJykgdHlwZTogc3RyaW5nID0gJ2J1dHRvbic7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0ZXBwZXI6IE5iU3RlcHBlckNvbXBvbmVudCkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc3RlcHBlci5wcmV2aW91cygpO1xuICB9XG59XG4iXX0=