/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ViewChild } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-container";
export class NbDatepickerContainerComponent extends NbPositionedContainerComponent {
    attach(portal) {
        return this.overlayContainer.attachComponentPortal(portal);
    }
}
NbDatepickerContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbDatepickerContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbDatepickerContainerComponent, selector: "nb-datepicker-container", viewQueries: [{ propertyName: "overlayContainer", first: true, predicate: NbOverlayContainerComponent, descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `
    <nb-overlay-container></nb-overlay-container>
  `, isInline: true, components: [{ type: i1.NbOverlayContainerComponent, selector: "nb-overlay-container" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDatepickerContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-datepicker-container',
                    template: `
    <nb-overlay-container></nb-overlay-container>
  `,
                }]
        }], propDecorators: { overlayContainer: [{
                type: ViewChild,
                args: [NbOverlayContainerComponent, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFnQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7OztBQVMvRyxNQUFNLE9BQU8sOEJBQStCLFNBQVEsOEJBQThCO0lBS2hGLE1BQU0sQ0FBSSxNQUE0QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDOzsySEFQVSw4QkFBOEI7K0dBQTlCLDhCQUE4QixpSEFHOUIsMkJBQTJCLHFGQVA1Qjs7R0FFVDsyRkFFVSw4QkFBOEI7a0JBTjFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFOztHQUVUO2lCQUNGOzhCQUkyRCxnQkFBZ0I7c0JBQXpFLFNBQVM7dUJBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9tYXBwaW5nJztcbmltcG9ydCB7IE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudCwgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWRhdGVwaWNrZXItY29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItb3ZlcmxheS1jb250YWluZXI+PC9uYi1vdmVybGF5LWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICAvLyBUT0RPIHN0YXRpYyBtdXN0IGJlIGZhbHNlIGFzIG9mIEFuZ3VsYXIgOS4wLjAsIGlzc3Vlcy8xNTE0XG4gIEBWaWV3Q2hpbGQoTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBvdmVybGF5Q29udGFpbmVyOiBOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQ7XG5cbiAgYXR0YWNoPFQ+KHBvcnRhbDogTmJDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlDb250YWluZXIuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG4gIH1cbn1cbiJdfQ==