/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, TemplateRef, Type, ViewChild, } from '@angular/core';
import { NbComponentPortal, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent, NbPositionedContainerComponent, } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/overlay/overlay-container";
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
export class NbPopoverComponent extends NbPositionedContainerComponent {
    renderContent() {
        this.detachContent();
        this.attachContent();
    }
    detachContent() {
        this.overlayContainer.detach();
    }
    attachContent() {
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else if (this.content instanceof Type) {
            this.attachComponent();
        }
        else {
            this.attachString();
        }
    }
    attachTemplate() {
        this.overlayContainer
            .attachTemplatePortal(new NbTemplatePortal(this.content, null, { $implicit: this.context }));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        ref.changeDetectorRef.detectChanges();
    }
    attachString() {
        this.overlayContainer.attachStringContent(this.content);
    }
}
NbPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NbPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbPopoverComponent, selector: "nb-popover", inputs: { content: "content", context: "context", cfr: "cfr" }, viewQueries: [{ propertyName: "overlayContainer", first: true, predicate: NbOverlayContainerComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: `
    <span class="arrow"></span>
    <nb-overlay-container></nb-overlay-container>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .arrow{position:absolute;width:0;height:0}\n"], components: [{ type: i1.NbOverlayContainerComponent, selector: "nb-overlay-container" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-popover', template: `
    <span class="arrow"></span>
    <nb-overlay-container></nb-overlay-container>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .arrow{position:absolute;width:0;height:0}\n"] }]
        }], propDecorators: { overlayContainer: [{
                type: ViewChild,
                args: [NbOverlayContainerComponent]
            }], content: [{
                type: Input
            }], context: [{
                type: Input
            }], cfr: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0UsT0FBTyxFQUNMLDJCQUEyQixFQUMzQiw4QkFBOEIsR0FFL0IsTUFBTSxrQ0FBa0MsQ0FBQzs7O0FBRzFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrQks7QUFTTCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsOEJBQThCO0lBT3BFLGFBQWE7UUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFUyxhQUFhO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxJQUFJLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRVMsY0FBYztRQUN0QixJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLG9CQUFvQixDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRVMsZUFBZTtRQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFUyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7K0dBdkNVLGtCQUFrQjttR0FBbEIsa0JBQWtCLG9LQUNsQiwyQkFBMkIsdUVBTjVCOzs7R0FHVDsyRkFFVSxrQkFBa0I7a0JBUjlCLFNBQVM7K0JBQ0UsWUFBWSxZQUVaOzs7R0FHVDs4QkFHdUMsZ0JBQWdCO3NCQUF2RCxTQUFTO3VCQUFDLDJCQUEyQjtnQkFFN0IsT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFBvcnRhbCwgTmJUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHtcbiAgTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50LFxuICBOYlBvc2l0aW9uZWRDb250YWluZXJDb21wb25lbnQsXG4gIE5iUmVuZGVyYWJsZUNvbnRhaW5lcixcbn0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xuXG5cbi8qKlxuICogT3ZlcmxheSBjb250YWluZXIuXG4gKiBSZW5kZXJzIHByb3ZpZGVkIGNvbnRlbnQgaW5zaWRlLlxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBwb3BvdmVyLXRleHQtY29sb3I6XG4gKiBwb3BvdmVyLXRleHQtZm9udC1mYW1pbHk6XG4gKiBwb3BvdmVyLXRleHQtZm9udC1zaXplOlxuICogcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OlxuICogcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OlxuICogcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogcG9wb3Zlci1ib3JkZXItd2lkdGg6XG4gKiBwb3BvdmVyLWJvcmRlci1jb2xvcjpcbiAqIHBvcG92ZXItYm9yZGVyLXJhZGl1czpcbiAqIHBvcG92ZXItc2hhZG93OlxuICogcG9wb3Zlci1hcnJvdy1zaXplOlxuICogcG9wb3Zlci1wYWRkaW5nOlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXBvcG92ZXInLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj5cbiAgICA8bmItb3ZlcmxheS1jb250YWluZXI+PC9uYi1vdmVybGF5LWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgTmJSZW5kZXJhYmxlQ29udGFpbmVyIHtcbiAgQFZpZXdDaGlsZChOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQpIG92ZXJsYXlDb250YWluZXI6IE5iT3ZlcmxheUNvbnRhaW5lckNvbXBvbmVudDtcblxuICBASW5wdXQoKSBjb250ZW50OiBhbnk7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IE9iamVjdDtcbiAgQElucHV0KCkgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG5cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICB0aGlzLmRldGFjaENvbnRlbnQoKTtcbiAgICB0aGlzLmF0dGFjaENvbnRlbnQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXRhY2hDb250ZW50KCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5kZXRhY2goKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRhY2hDb250ZW50KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdHRhY2hUZW1wbGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgdGhpcy5hdHRhY2hDb21wb25lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRhY2hTdHJpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYXR0YWNoVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyXG4gICAgICAuYXR0YWNoVGVtcGxhdGVQb3J0YWwobmV3IE5iVGVtcGxhdGVQb3J0YWwodGhpcy5jb250ZW50LCBudWxsLCA8YW55PnsgJGltcGxpY2l0OiB0aGlzLmNvbnRleHQgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGF0dGFjaENvbXBvbmVudCgpIHtcbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgTmJDb21wb25lbnRQb3J0YWwodGhpcy5jb250ZW50LCBudWxsLCBudWxsLCB0aGlzLmNmcik7XG4gICAgY29uc3QgcmVmID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwsIHRoaXMuY29udGV4dCk7XG4gICAgcmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhdHRhY2hTdHJpbmcoKSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmF0dGFjaFN0cmluZ0NvbnRlbnQodGhpcy5jb250ZW50KTtcbiAgfVxufVxuIl19