/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ENTER } from '../cdk/keycodes/keycodes';
import { NbFormFieldControl } from '../form-field/form-field-control';
import { NbInputDirective } from '../input/input.directive';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/a11y/a11y.module";
import * as i2 from "../../services/status.service";
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 */
export class NbTagInputDirective extends NbInputDirective {
    constructor(_hostElement, focusMonitor, renderer, zone, statusService) {
        super(_hostElement, focusMonitor, renderer, zone, statusService);
        this._hostElement = _hostElement;
        this.focusMonitor = focusMonitor;
        this.renderer = renderer;
        this.zone = zone;
        this.statusService = statusService;
        this.keyDown$ = new Subject();
        /**
         * Controls which keys should trigger tag add event.
         */
        this.separatorKeys = [ENTER];
        /**
         * Emits when a tag need to be added.
         */
        this.tagAdd = new EventEmitter();
        this.nbTagInputClass = true;
    }
    get _value() {
        return this._hostElement.nativeElement.value;
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.keyDown$
            .pipe(filter(({ keyCode }) => this.isSeparatorKey(keyCode)), map(() => this._value), takeUntil(this.destroy$))
            .subscribe((value) => this.tagAdd.emit({ value, input: this._hostElement }));
    }
    isSeparatorKey(keyCode) {
        return this.separatorKeys.includes(keyCode);
    }
}
NbTagInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagInputDirective, deps: [{ token: i0.ElementRef }, { token: i1.NbFocusMonitor }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i2.NbStatusService }], target: i0.ɵɵFactoryTarget.Directive });
NbTagInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbTagInputDirective, selector: "input[nbTagInput]", inputs: { separatorKeys: "separatorKeys" }, outputs: { tagAdd: "tagAdd" }, host: { listeners: { "keydown": "_onKeydown($event)" }, properties: { "class.nb-tag-input": "this.nbTagInputClass" } }, providers: [
        { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
    ], exportAs: ["nbTagInput"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nbTagInput]',
                    exportAs: 'nbTagInput',
                    providers: [
                        { provide: NbFormFieldControl, useExisting: NbTagInputDirective },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NbFocusMonitor }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i2.NbStatusService }]; }, propDecorators: { separatorKeys: [{
                type: Input
            }], tagAdd: [{
                type: Output
            }], nbTagInputClass: [{
                type: HostBinding,
                args: ['class.nb-tag-input']
            }], _onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWcvdGFnLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBTzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQVFILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUF5QnZELFlBQ1MsWUFBMEMsRUFDdkMsWUFBNEIsRUFDNUIsUUFBbUIsRUFDbkIsSUFBWSxFQUNaLGFBQThCO1FBRXhDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFOMUQsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUE1QnZCLGFBQVEsR0FBMkIsSUFBSSxPQUFPLEVBQWlCLENBQUM7UUFNbkY7O1dBRUc7UUFDTSxrQkFBYSxHQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0M7O1dBRUc7UUFDTyxXQUFNLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRWhELG9CQUFlLEdBQUcsSUFBSSxDQUFDO0lBZW5FLENBQUM7SUE3QkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQWVELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBWUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNwRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVTLGNBQWMsQ0FBQyxPQUFlO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0hBakRVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLCtPQUpuQjtRQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRTtLQUNsRTsyRkFFVSxtQkFBbUI7a0JBUC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLHFCQUFxQixFQUFFO3FCQUNsRTtpQkFDRjt5TUFZVSxhQUFhO3NCQUFyQixLQUFLO2dCQUtJLE1BQU07c0JBQWYsTUFBTTtnQkFFcUMsZUFBZTtzQkFBMUQsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBR2pDLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYkZvY3VzTW9uaXRvciB9IGZyb20gJy4uL2Nkay9hMTF5L2ExMXkubW9kdWxlJztcbmltcG9ydCB7IEVOVEVSIH0gZnJvbSAnLi4vY2RrL2tleWNvZGVzL2tleWNvZGVzJztcbmltcG9ydCB7IE5iRm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jb250cm9sJztcbmltcG9ydCB7IE5iSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iVGFnSW5wdXRBZGRFdmVudCB7XG4gIGlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqXG4gKiBgW25iVGFnSW5wdXRdYCBkaXJlY3RpdmUgY29ubmVjdHMgaW5wdXQgd2l0aCBhIGBuYi10YWctbGlzdGAgY29tcG9uZW50LlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVGFnIElucHV0LCB0YWcvdGFnLWlucHV0LmNvbXBvbmVudClcbiAqXG4gKiBAYWRkaXRpb25hbC1leGFtcGxlKFRhZyBJbnB1dCB3aXRoIEF1dG9jb21wbGV0ZSwgdGFnL3RhZy1pbnB1dC13aXRoLWF1dG9jb21wbGV0ZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHRhZy1saXN0LXRpbnktdGFnLW9mZnNldDpcbiAqIHRhZy1saXN0LXNtYWxsLXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1tZWRpdW0tdGFnLW9mZnNldDpcbiAqIHRhZy1saXN0LWxhcmdlLXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1naWFudC10YWctb2Zmc2V0OlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC10aW55LXBhZGRpbmc6XG4gKiB0YWctbGlzdC13aXRoLWlucHV0LXNtYWxsLXBhZGRpbmc6XG4gKiB0YWctbGlzdC13aXRoLWlucHV0LW1lZGl1bS1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1sYXJnZS1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1naWFudC1wYWRkaW5nOlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuYlRhZ0lucHV0XScsXG4gIGV4cG9ydEFzOiAnbmJUYWdJbnB1dCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTmJGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTmJUYWdJbnB1dERpcmVjdGl2ZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYlRhZ0lucHV0RGlyZWN0aXZlIGV4dGVuZHMgTmJJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBrZXlEb3duJDogU3ViamVjdDxLZXlib2FyZEV2ZW50PiA9IG5ldyBTdWJqZWN0PEtleWJvYXJkRXZlbnQ+KCk7XG5cbiAgZ2V0IF92YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoaWNoIGtleXMgc2hvdWxkIHRyaWdnZXIgdGFnIGFkZCBldmVudC5cbiAgICovXG4gIEBJbnB1dCgpIHNlcGFyYXRvcktleXM6IG51bWJlcltdID0gW0VOVEVSXTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBhIHRhZyBuZWVkIHRvIGJlIGFkZGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIHRhZ0FkZDogRXZlbnRFbWl0dGVyPE5iVGFnSW5wdXRBZGRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE5iVGFnSW5wdXRBZGRFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLXRhZy1pbnB1dCcpIHJlYWRvbmx5IG5iVGFnSW5wdXRDbGFzcyA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIF9vbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmtleURvd24kLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9ob3N0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgZm9jdXNNb25pdG9yOiBOYkZvY3VzTW9uaXRvcixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKF9ob3N0RWxlbWVudCwgZm9jdXNNb25pdG9yLCByZW5kZXJlciwgem9uZSwgc3RhdHVzU2VydmljZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG5cbiAgICB0aGlzLmtleURvd24kXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IGtleUNvZGUgfTogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5pc1NlcGFyYXRvcktleShrZXlDb2RlKSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLl92YWx1ZSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMudGFnQWRkLmVtaXQoeyB2YWx1ZSwgaW5wdXQ6IHRoaXMuX2hvc3RFbGVtZW50IH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1NlcGFyYXRvcktleShrZXlDb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXBhcmF0b3JLZXlzLmluY2x1ZGVzKGtleUNvZGUpO1xuICB9XG59XG4iXX0=