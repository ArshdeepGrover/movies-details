/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, Input, HostBinding, } from '@angular/core';
import { NbSpinnerComponent } from './spinner.component';
import * as i0 from "@angular/core";
/**
 * Styled spinner directive
 *
 * @stacked-example(Spinner Showcase, spinner/spinner-card.component)
 *
 *
 * ```ts
 * <nb-card [nbSpinner]="loading" nbSpinnerStatus="danger">
 *   <nb-card-body>Card Content</nb-card-body>
 * </nb-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbSpinnerModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSpinnerModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Could be colored using `status` property
 *
 * @stacked-example(Spinner Colors, spinner/spinner-colors.component)
 *
 * Available in different sizes with `size` property:
 *
 * @stacked-example(Spinner Sizes, spinner/spinner-sizes.component)
 *
 * It is also possible to place it into the button:
 * @stacked-example(Buttons with spinner, spinner/spinner-button.component)
 *
 * Or tabs:
 * @stacked-example(Spinner in tabs, spinner/spinner-tabs.component)
 */
export class NbSpinnerDirective {
    constructor(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        /**
         * Spinner status color
         * `basic`, `primary`, `info`, `success`, `warning`, `danger`, `control`.
         */
        this.spinnerStatus = 'basic';
        /**
         * Spinner size. Possible values: `tiny`, `small`, `medium` (default), `large`, `giant`
         */
        this.spinnerSize = 'medium';
        this.isSpinnerExist = false;
    }
    /**
     * Directive value - show or hide spinner
     * @param {boolean} val
     */
    set nbSpinner(val) {
        if (this.componentFactory) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        else {
            this.shouldShow = val;
        }
    }
    ngOnInit() {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NbSpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    }
    hide() {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    }
    show() {
        if (!this.isSpinnerExist) {
            this.spinner = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinner.instance);
            this.spinner.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
            this.isSpinnerExist = true;
        }
    }
    setInstanceInputs(instance) {
        instance.message = this.spinnerMessage;
        typeof this.spinnerStatus !== 'undefined' && (instance.status = this.spinnerStatus);
        typeof this.spinnerSize !== 'undefined' && (instance.size = this.spinnerSize);
    }
}
NbSpinnerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NbSpinnerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbSpinnerDirective, selector: "[nbSpinner]", inputs: { spinnerMessage: ["nbSpinnerMessage", "spinnerMessage"], spinnerStatus: ["nbSpinnerStatus", "spinnerStatus"], spinnerSize: ["nbSpinnerSize", "spinnerSize"], nbSpinner: "nbSpinner" }, host: { properties: { "class.nb-spinner-container": "this.isSpinnerExist" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbSpinner]' }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { spinnerMessage: [{
                type: Input,
                args: ['nbSpinnerMessage']
            }], spinnerStatus: [{
                type: Input,
                args: ['nbSpinnerStatus']
            }], spinnerSize: [{
                type: Input,
                args: ['nbSpinnerSize']
            }], nbSpinner: [{
                type: Input,
                args: ['nbSpinner']
            }], isSpinnerExist: [{
                type: HostBinding,
                args: ['class.nb-spinner-container']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUlMLFNBQVMsRUFFVCxLQUFLLEVBSUwsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQTBDN0IsWUFBb0IsYUFBK0IsRUFDL0Isd0JBQWtELEVBQ2xELFFBQW1CLEVBQ25CLGdCQUE0QjtRQUg1QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBWTtRQTNDeEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVUzQjs7O1dBR0c7UUFDdUIsa0JBQWEsR0FBOEIsT0FBTyxDQUFDO1FBRTdFOztXQUVHO1FBQ3FCLGdCQUFXLEdBQW9CLFFBQVEsQ0FBQztRQW1CckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFNbEUsQ0FBQztJQXZCRDs7O09BR0c7SUFDSCxJQUNJLFNBQVMsQ0FBQyxHQUFZO1FBQ3hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBcUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLFFBQTRCO1FBQzVDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OytHQTVFVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQzsrTEFXUCxjQUFjO3NCQUF4QyxLQUFLO3VCQUFDLGtCQUFrQjtnQkFNQyxhQUFhO3NCQUF0QyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFLQSxXQUFXO3NCQUFsQyxLQUFLO3VCQUFDLGVBQWU7Z0JBT2xCLFNBQVM7c0JBRFosS0FBSzt1QkFBQyxXQUFXO2dCQWF5QixjQUFjO3NCQUF4RCxXQUFXO3VCQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ29tcG9uZW50U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaXplJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IE5iU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xuXG4vKipcbiAqIFN0eWxlZCBzcGlubmVyIGRpcmVjdGl2ZVxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU3Bpbm5lciBTaG93Y2FzZSwgc3Bpbm5lci9zcGlubmVyLWNhcmQuY29tcG9uZW50KVxuICpcbiAqXG4gKiBgYGB0c1xuICogPG5iLWNhcmQgW25iU3Bpbm5lcl09XCJsb2FkaW5nXCIgbmJTcGlubmVyU3RhdHVzPVwiZGFuZ2VyXCI+XG4gKiAgIDxuYi1jYXJkLWJvZHk+Q2FyZCBDb250ZW50PC9uYi1jYXJkLWJvZHk+XG4gKiA8L25iLWNhcmQ+XG4gKiBgYGBcbiAqXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlNwaW5uZXJNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iU3Bpbm5lck1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogQ291bGQgYmUgY29sb3JlZCB1c2luZyBgc3RhdHVzYCBwcm9wZXJ0eVxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU3Bpbm5lciBDb2xvcnMsIHNwaW5uZXIvc3Bpbm5lci1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIEF2YWlsYWJsZSBpbiBkaWZmZXJlbnQgc2l6ZXMgd2l0aCBgc2l6ZWAgcHJvcGVydHk6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShTcGlubmVyIFNpemVzLCBzcGlubmVyL3NwaW5uZXItc2l6ZXMuY29tcG9uZW50KVxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGxhY2UgaXQgaW50byB0aGUgYnV0dG9uOlxuICogQHN0YWNrZWQtZXhhbXBsZShCdXR0b25zIHdpdGggc3Bpbm5lciwgc3Bpbm5lci9zcGlubmVyLWJ1dHRvbi5jb21wb25lbnQpXG4gKlxuICogT3IgdGFiczpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU3Bpbm5lciBpbiB0YWJzLCBzcGlubmVyL3NwaW5uZXItdGFicy5jb21wb25lbnQpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25iU3Bpbm5lcl0nfSlcbmV4cG9ydCBjbGFzcyBOYlNwaW5uZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hvdWxkU2hvdyA9IGZhbHNlO1xuICBzcGlubmVyOiBDb21wb25lbnRSZWY8TmJTcGlubmVyQ29tcG9uZW50PjtcbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOYlNwaW5uZXJDb21wb25lbnQ+O1xuXG4gIC8qKlxuICAgKiBTcGlubmVyIG1lc3NhZ2Ugc2hvd24gbmV4dCB0byB0aGUgaWNvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCduYlNwaW5uZXJNZXNzYWdlJykgc3Bpbm5lck1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogU3Bpbm5lciBzdGF0dXMgY29sb3JcbiAgICogYGJhc2ljYCwgYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCwgYGNvbnRyb2xgLlxuICAgKi9cbiAgQElucHV0KCduYlNwaW5uZXJTdGF0dXMnKSBzcGlubmVyU3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICAvKipcbiAgICogU3Bpbm5lciBzaXplLiBQb3NzaWJsZSB2YWx1ZXM6IGB0aW55YCwgYHNtYWxsYCwgYG1lZGl1bWAgKGRlZmF1bHQpLCBgbGFyZ2VgLCBgZ2lhbnRgXG4gICAqL1xuICBASW5wdXQoJ25iU3Bpbm5lclNpemUnKSBzcGlubmVyU2l6ZTogTmJDb21wb25lbnRTaXplID0gJ21lZGl1bSc7XG5cbiAgLyoqXG4gICAqIERpcmVjdGl2ZSB2YWx1ZSAtIHNob3cgb3IgaGlkZSBzcGlubmVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsXG4gICAqL1xuICBASW5wdXQoJ25iU3Bpbm5lcicpXG4gIHNldCBuYlNwaW5uZXIodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3VsZFNob3cgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1zcGlubmVyLWNvbnRhaW5lcicpIGlzU3Bpbm5lckV4aXN0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXJlY3RpdmVWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGlyZWN0aXZlRWxlbWVudDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTmJTcGlubmVyQ29tcG9uZW50KTtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93KSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlzU3Bpbm5lckV4aXN0KSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZVZpZXcucmVtb3ZlKCk7XG4gICAgICB0aGlzLmlzU3Bpbm5lckV4aXN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuaXNTcGlubmVyRXhpc3QpIHtcbiAgICAgIHRoaXMuc3Bpbm5lciA9IHRoaXMuZGlyZWN0aXZlVmlldy5jcmVhdGVDb21wb25lbnQ8TmJTcGlubmVyQ29tcG9uZW50Pih0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZUlucHV0cyh0aGlzLnNwaW5uZXIuaW5zdGFuY2UpO1xuICAgICAgdGhpcy5zcGlubmVyLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXJlY3RpdmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc3Bpbm5lci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuaXNTcGlubmVyRXhpc3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldEluc3RhbmNlSW5wdXRzKGluc3RhbmNlOiBOYlNwaW5uZXJDb21wb25lbnQpIHtcbiAgICBpbnN0YW5jZS5tZXNzYWdlID0gdGhpcy5zcGlubmVyTWVzc2FnZVxuICAgIHR5cGVvZiB0aGlzLnNwaW5uZXJTdGF0dXMgIT09ICd1bmRlZmluZWQnICYmIChpbnN0YW5jZS5zdGF0dXMgPSB0aGlzLnNwaW5uZXJTdGF0dXMpO1xuICAgIHR5cGVvZiB0aGlzLnNwaW5uZXJTaXplICE9PSAndW5kZWZpbmVkJyAmJiAoaW5zdGFuY2Uuc2l6ZSA9IHRoaXMuc3Bpbm5lclNpemUpO1xuICB9XG59XG4iXX0=