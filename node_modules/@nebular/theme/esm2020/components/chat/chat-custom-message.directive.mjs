import { Directive, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "./chat-custom-message.service";
function throwCustomMessageTypeIsRequired() {
    throw new Error('[nbCustomMessage]: custom message type is required.');
}
/**
 * `[nbCustomMessage]` directive should be used as a structural directive or should be applied to the `ng-template`:
 *
 * ```html
 * <div *nbCustomMessage="'my-custom-type'; let data">
 *   <!-- custom message -->
 * </div>
 * ```
 * or
 * ```html
 * <ng-template nbCustomMessage='my-custom-type' let-data>
 *   <!-- custom message -->
 * </ng-template>
 * ```
 */
export class NbChatCustomMessageDirective {
    constructor(templateRef, customMessageService) {
        this.templateRef = templateRef;
        this.customMessageService = customMessageService;
        this._noStyles = false;
    }
    /**
     * Defines a message type which should rendered with the custom message template.
     * @type {string}
     */
    get nbCustomMessage() {
        return this._type;
    }
    set nbCustomMessage(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
    /**
     * Disables generic message styles, such as round corners, text color, background, etc.,
     * so a custom message could be styled from the ground up.
     *
     * @type {boolean}
     */
    set nbCustomMessageNoStyles(value) {
        this._noStyles = convertToBoolProperty(value);
    }
    get nbCustomMessageNoStyles() {
        return this._noStyles;
    }
    get noStyles() {
        return this.nbCustomMessageNoStyles;
    }
    ngOnInit() {
        if (!this._type) {
            throwCustomMessageTypeIsRequired();
        }
        this.customMessageService.register(this.type, this);
    }
    ngOnDestroy() {
        this.customMessageService.unregister(this.type);
    }
}
NbChatCustomMessageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatCustomMessageDirective, deps: [{ token: i0.TemplateRef }, { token: i1.NbChatCustomMessageService }], target: i0.ɵɵFactoryTarget.Directive });
NbChatCustomMessageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbChatCustomMessageDirective, selector: "[nbCustomMessage]", inputs: { nbCustomMessage: "nbCustomMessage", nbCustomMessageNoStyles: "nbCustomMessageNoStyles" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatCustomMessageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[nbCustomMessage]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i1.NbChatCustomMessageService }]; }, propDecorators: { nbCustomMessage: [{
                type: Input
            }], nbCustomMessageNoStyles: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1jdXN0b20tbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2hhdC9jaGF0LWN1c3RvbS1tZXNzYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBa0MsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLHFCQUFxQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7O0FBR25FLFNBQVMsZ0NBQWdDO0lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFJSCxNQUFNLE9BQU8sNEJBQTRCO0lBc0N2QyxZQUFtQixXQUE2QixFQUFZLG9CQUFnRDtRQUF6RixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBWSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1FBUGxHLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFPMEUsQ0FBQztJQXJDaEg7OztPQUdHO0lBQ0gsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBR0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQ0ksdUJBQXVCLENBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixnQ0FBZ0MsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7eUhBakRVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7MklBT0ssZUFBZTtzQkFEbEIsS0FBSztnQkFvQkYsdUJBQXVCO3NCQUQxQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iQ2hhdEN1c3RvbU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LWN1c3RvbS1tZXNzYWdlLnNlcnZpY2UnO1xuXG5mdW5jdGlvbiB0aHJvd0N1c3RvbU1lc3NhZ2VUeXBlSXNSZXF1aXJlZCgpOiB2b2lkIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdbbmJDdXN0b21NZXNzYWdlXTogY3VzdG9tIG1lc3NhZ2UgdHlwZSBpcyByZXF1aXJlZC4nKTtcbn1cblxuLyoqXG4gKiBgW25iQ3VzdG9tTWVzc2FnZV1gIGRpcmVjdGl2ZSBzaG91bGQgYmUgdXNlZCBhcyBhIHN0cnVjdHVyYWwgZGlyZWN0aXZlIG9yIHNob3VsZCBiZSBhcHBsaWVkIHRvIHRoZSBgbmctdGVtcGxhdGVgOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgKm5iQ3VzdG9tTWVzc2FnZT1cIidteS1jdXN0b20tdHlwZSc7IGxldCBkYXRhXCI+XG4gKiAgIDwhLS0gY3VzdG9tIG1lc3NhZ2UgLS0+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICogb3JcbiAqIGBgYGh0bWxcbiAqIDxuZy10ZW1wbGF0ZSBuYkN1c3RvbU1lc3NhZ2U9J215LWN1c3RvbS10eXBlJyBsZXQtZGF0YT5cbiAqICAgPCEtLSBjdXN0b20gbWVzc2FnZSAtLT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW25iQ3VzdG9tTWVzc2FnZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRDdXN0b21NZXNzYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogRGVmaW5lcyBhIG1lc3NhZ2UgdHlwZSB3aGljaCBzaG91bGQgcmVuZGVyZWQgd2l0aCB0aGUgY3VzdG9tIG1lc3NhZ2UgdGVtcGxhdGUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbmJDdXN0b21NZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbiAgc2V0IG5iQ3VzdG9tTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZ2VuZXJpYyBtZXNzYWdlIHN0eWxlcywgc3VjaCBhcyByb3VuZCBjb3JuZXJzLCB0ZXh0IGNvbG9yLCBiYWNrZ3JvdW5kLCBldGMuLFxuICAgKiBzbyBhIGN1c3RvbSBtZXNzYWdlIGNvdWxkIGJlIHN0eWxlZCBmcm9tIHRoZSBncm91bmQgdXAuXG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5iQ3VzdG9tTWVzc2FnZU5vU3R5bGVzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbm9TdHlsZXMgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIGdldCBuYkN1c3RvbU1lc3NhZ2VOb1N0eWxlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbm9TdHlsZXM7XG4gIH1cbiAgcHJvdGVjdGVkIF9ub1N0eWxlczogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9TdHlsZXM6IE5iQm9vbGVhbklucHV0O1xuXG4gIGdldCBub1N0eWxlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYkN1c3RvbU1lc3NhZ2VOb1N0eWxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJvdGVjdGVkIGN1c3RvbU1lc3NhZ2VTZXJ2aWNlOiBOYkNoYXRDdXN0b21NZXNzYWdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX3R5cGUpIHtcbiAgICAgIHRocm93Q3VzdG9tTWVzc2FnZVR5cGVJc1JlcXVpcmVkKCk7XG4gICAgfVxuICAgIHRoaXMuY3VzdG9tTWVzc2FnZVNlcnZpY2UucmVnaXN0ZXIodGhpcy50eXBlLCB0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY3VzdG9tTWVzc2FnZVNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnR5cGUpO1xuICB9XG59XG4iXX0=