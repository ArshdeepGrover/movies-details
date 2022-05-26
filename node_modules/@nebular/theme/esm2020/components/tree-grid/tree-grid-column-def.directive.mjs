import { Directive, Input } from '@angular/core';
import { NbCdkColumnDef } from '../cdk/table/type-mappings';
import { NB_SORT_HEADER_COLUMN_DEF, NbColumnDefDirective } from '../cdk/table/cell';
import * as i0 from "@angular/core";
/**
 * Column definition for the tree-grid.
 * Defines a set of cells available for a table column.
 */
export class NbTreeGridColumnDefDirective extends NbColumnDefDirective {
    constructor() {
        super(...arguments);
        this.hideOnValue = null;
        this.showOnValue = null;
    }
    /**
     * Column name
     */
    get name() {
        return this._name;
    }
    set name(value) {
        this._setNameInput(value);
    }
    /**
     * Amount of pixels of viewport at which column should be hidden.
     * type number
     */
    get hideOn() {
        return this.hideOnValue;
    }
    set hideOn(value) {
        this.hideOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    /**
     * Amount of pixels of viewport at which column should be shown.
     * type number
     */
    get showOn() {
        return this.showOnValue;
    }
    set showOn(value) {
        this.showOnValue = !value && value !== 0
            ? null
            : parseInt(value, 10);
    }
    ngOnChanges() {
        if (this.hideOn != null && this.showOn != null) {
            throw new Error(`hideOn and showOn are mutually exclusive and can't be used simultaneously.`);
        }
    }
    shouldHide(width) {
        return !this.shouldShow(width);
    }
    shouldShow(width) {
        if (this.hideOn == null && this.showOn == null) {
            return true;
        }
        if (this.hideOn != null) {
            return width > this.hideOn;
        }
        return width >= this.showOn;
    }
}
NbTreeGridColumnDefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridColumnDefDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbTreeGridColumnDefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTreeGridColumnDefDirective, selector: "[nbTreeGridColumnDef]", inputs: { name: ["nbTreeGridColumnDef", "name"], hideOn: "hideOn", showOn: "showOn" }, providers: [
        { provide: NbCdkColumnDef, useExisting: NbTreeGridColumnDefDirective },
        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbTreeGridColumnDefDirective },
    ], usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridColumnDefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbTreeGridColumnDef]',
                    providers: [
                        { provide: NbCdkColumnDef, useExisting: NbTreeGridColumnDefDirective },
                        { provide: NB_SORT_HEADER_COLUMN_DEF, useExisting: NbTreeGridColumnDefDirective },
                    ],
                }]
        }], propDecorators: { name: [{
                type: Input,
                args: ['nbTreeGridColumnDef']
            }], hideOn: [{
                type: Input
            }], showOn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWNvbHVtbi1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQtY29sdW1uLWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVwRjs7O0dBR0c7QUFRSCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9CO0lBUHRFOztRQW1CVSxnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFlbEMsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0tBb0MzQztJQTlEQzs7T0FFRztJQUNILElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRDs7O09BR0c7SUFDSCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdEOzs7T0FHRztJQUNILElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7UUFFRCxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7O3lIQTlEVSw0QkFBNEI7NkdBQTVCLDRCQUE0Qix1SUFMNUI7UUFDVCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFO1FBQ3RFLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRTtLQUNsRjsyRkFFVSw0QkFBNEI7a0JBUHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLDhCQUE4QixFQUFFO3dCQUN0RSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxXQUFXLDhCQUE4QixFQUFFO3FCQUNsRjtpQkFDRjs4QkFNSyxJQUFJO3NCQURQLEtBQUs7dUJBQUMscUJBQXFCO2dCQWN4QixNQUFNO3NCQURULEtBQUs7Z0JBZ0JGLE1BQU07c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJDZGtDb2x1bW5EZWYgfSBmcm9tICcuLi9jZGsvdGFibGUvdHlwZS1tYXBwaW5ncyc7XG5pbXBvcnQgeyBOQl9TT1JUX0hFQURFUl9DT0xVTU5fREVGLCBOYkNvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4uL2Nkay90YWJsZS9jZWxsJztcblxuLyoqXG4gKiBDb2x1bW4gZGVmaW5pdGlvbiBmb3IgdGhlIHRyZWUtZ3JpZC5cbiAqIERlZmluZXMgYSBzZXQgb2YgY2VsbHMgYXZhaWxhYmxlIGZvciBhIHRhYmxlIGNvbHVtbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25iVHJlZUdyaWRDb2x1bW5EZWZdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOYkNka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUgfSxcbiAgICB7IHByb3ZpZGU6IE5CX1NPUlRfSEVBREVSX0NPTFVNTl9ERUYsIHVzZUV4aXN0aW5nOiBOYlRyZWVHcmlkQ29sdW1uRGVmRGlyZWN0aXZlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRDb2x1bW5EZWZEaXJlY3RpdmUgZXh0ZW5kcyBOYkNvbHVtbkRlZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDb2x1bW4gbmFtZVxuICAgKi9cbiAgQElucHV0KCduYlRyZWVHcmlkQ29sdW1uRGVmJylcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2V0TmFtZUlucHV0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZU9uVmFsdWU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogQW1vdW50IG9mIHBpeGVscyBvZiB2aWV3cG9ydCBhdCB3aGljaCBjb2x1bW4gc2hvdWxkIGJlIGhpZGRlbi5cbiAgICogdHlwZSBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRlT24oKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaGlkZU9uVmFsdWU7XG4gIH1cbiAgc2V0IGhpZGVPbih2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuICAgIHRoaXMuaGlkZU9uVmFsdWUgPSAhdmFsdWUgJiYgdmFsdWUgIT09IDBcbiAgICAgID8gbnVsbFxuICAgICAgOiBwYXJzZUludCh2YWx1ZSBhcyB1bmtub3duIGFzIHN0cmluZywgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93T25WYWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIC8qKlxuICAgKiBBbW91bnQgb2YgcGl4ZWxzIG9mIHZpZXdwb3J0IGF0IHdoaWNoIGNvbHVtbiBzaG91bGQgYmUgc2hvd24uXG4gICAqIHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd09uKCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNob3dPblZhbHVlO1xuICB9XG4gIHNldCBzaG93T24odmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICB0aGlzLnNob3dPblZhbHVlID0gIXZhbHVlICYmIHZhbHVlICE9PSAwXG4gICAgICA/IG51bGxcbiAgICAgIDogcGFyc2VJbnQodmFsdWUgYXMgdW5rbm93biBhcyBzdHJpbmcsIDEwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmhpZGVPbiAhPSBudWxsICYmIHRoaXMuc2hvd09uICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaGlkZU9uIGFuZCBzaG93T24gYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSBhbmQgY2FuJ3QgYmUgdXNlZCBzaW11bHRhbmVvdXNseS5gKTtcbiAgICB9XG4gIH1cblxuICBzaG91bGRIaWRlKHdpZHRoOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuc2hvdWxkU2hvdyh3aWR0aCk7XG4gIH1cblxuICBzaG91bGRTaG93KHdpZHRoOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oaWRlT24gPT0gbnVsbCAmJiB0aGlzLnNob3dPbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWRlT24gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpZHRoID4gdGhpcy5oaWRlT247XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoID49IHRoaXMuc2hvd09uO1xuICB9XG59XG4iXX0=