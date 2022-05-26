import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../icon/icon.component";
import * as i2 from "@angular/common";
/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
export class NbRevealCardComponent {
    constructor() {
        /**
         * Reveal state
         * @type boolean
         */
        this.revealed = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.revealed = !this.revealed;
    }
}
NbRevealCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRevealCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbRevealCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRevealCardComponent, selector: "nb-reveal-card", inputs: { revealed: "revealed", showToggleButton: "showToggleButton" }, host: { properties: { "class.revealed": "this.revealed" } }, ngImport: i0, template: `
    <ng-content select="nb-card-front"></ng-content>
    <div class="second-card-container">
      <ng-content select="nb-card-back"></ng-content>
    </div>
    <a *ngIf="showToggleButton" class="reveal-button" (click)="toggle()">
      <nb-icon icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </a>
  `, isInline: true, styles: [":host{display:block;position:relative;overflow:hidden}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s .5s}:host ::ng-deep nb-card-front nb-card,:host ::ng-deep nb-card-back nb-card{box-shadow:none;margin:0}:host ::ng-deep nb-card-front{display:block;height:100%}:host ::ng-deep nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top .5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform .3s}:host(.revealed) .second-card-container{top:0;transition:none}:host(.revealed) .second-card-container ::ng-deep nb-card-back{top:0}:host(.revealed) .reveal-button{transform:none}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRevealCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-reveal-card', template: `
    <ng-content select="nb-card-front"></ng-content>
    <div class="second-card-container">
      <ng-content select="nb-card-back"></ng-content>
    </div>
    <a *ngIf="showToggleButton" class="reveal-button" (click)="toggle()">
      <nb-icon icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </a>
  `, styles: [":host{display:block;position:relative;overflow:hidden}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s .5s}:host ::ng-deep nb-card-front nb-card,:host ::ng-deep nb-card-back nb-card{box-shadow:none;margin:0}:host ::ng-deep nb-card-front{display:block;height:100%}:host ::ng-deep nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top .5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform .3s}:host(.revealed) .second-card-container{top:0;transition:none}:host(.revealed) .second-card-container ::ng-deep nb-card-back{top:0}:host(.revealed) .reveal-button{transform:none}\n"] }]
        }], propDecorators: { revealed: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.revealed']
            }], showToggleButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZWFsLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NhcmQvcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxREc7QUFjSCxNQUFNLE9BQU8scUJBQXFCO0lBYmxDO1FBY0U7OztXQUdHO1FBR0gsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQjs7O1dBR0c7UUFDTSxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FLbEM7SUFIQyxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQzs7a0hBakJVLHFCQUFxQjtzR0FBckIscUJBQXFCLDJMQVZ0Qjs7Ozs7Ozs7R0FRVDsyRkFFVSxxQkFBcUI7a0JBYmpDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBRWhCOzs7Ozs7OztHQVFUOzhCQVNELFFBQVE7c0JBRlAsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBT3BCLGdCQUFnQjtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICpcbiAqIFJldmVhbCBjYXJkIGV4YW1wbGU6XG4gKiBAc3RhY2tlZC1leGFtcGxlKE15IGV4YW1wbGUsIHJldmVhbC1jYXJkL3JldmVhbC1jYXJkLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBBcyBhIGNvbnRlbnQgUmV2ZWFsIGNhcmQgYWNjZXB0cyB0d28gaW5zdGFuY2VzIG9mIGBuYi1jYXJkYCAtIGZvciBmcm9udCBhbmQgYmFjayBzaWRlcy5cbiAqXG4gKiBCYXNpYyByZXZlYWwgY2FyZCBjb25maWd1cmF0aW9uOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1yZXZlYWwtY2FyZD5cbiAqICAgPG5iLWNhcmQtZnJvbnQ+XG4gKiAgICAgPG5iLWNhcmQ+XG4gKiAgICAgICA8bmItY2FyZC1ib2R5PlxuICogICAgICAgICBGcm9udFxuICogICAgICAgPC9uYi1jYXJkLWJvZHk+XG4gKiAgICAgPC9uYi1jYXJkPlxuICogICA8L25iLWNhcmQtZnJvbnQ+XG4gKiAgIDxuYi1jYXJkLWJhY2s+XG4gKiAgICAgPG5iLWNhcmQ+XG4gKiAgICAgICA8bmItY2FyZC1ib2R5PlxuICogICAgICAgICBCYWNrXG4gKiAgICAgICA8L25iLWNhcmQtYm9keT5cbiAqICAgICA8L25iLWNhcmQ+XG4gKiAgIDwvbmItY2FyZC1iYWNrPlxuICogPC9uYi1yZXZlYWwtY2FyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBJbXBvcnQgYE5iQ2FyZE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJDYXJkTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBQYWdlTW9kdWxlIHsgfVxuICogYGBgXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBSZXZlYWwgQ2FyZCB3aXRoIGhlYWRlciBhbmQgZm9vdGVyOlxuICogQHN0YWNrZWQtZXhhbXBsZShXaXRoIEhlYWRlciAmIEZvb3RlciwgcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQtZnVsbC5jb21wb25lbnQpXG4gKlxuICogQ29sb3JlZCByZXZlYWwtY2FyZHMgY291bGQgYmUgc2ltcGx5IGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgQ2FyZCwgcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQtY29sb3JzLmNvbXBvbmVudClcbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIGFzc2lnbiBhbiBgYWNjZW50YCBwcm9wZXJ0eSBmb3IgYSBzbGlnaHQgY2FyZCBoaWdobGlnaHRcbiAqIGFzIHdlbGwgYXMgY29tYmluZSBpdCB3aXRoIGBzdGF0dXNgOlxuICogQHN0YWNrZWQtZXhhbXBsZShBY2NlbnQgQ2FyZCwgcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQtYWNjZW50cy5jb21wb25lbnQpXG4gKlxuICogQGFkZGl0aW9uYWwtZXhhbXBsZShNdWx0aXBsZSBTaXplcywgcmV2ZWFsLWNhcmQvcmV2ZWFsLWNhcmQtc2l6ZXMuY29tcG9uZW50KVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yZXZlYWwtY2FyZCcsXG4gIHN0eWxlVXJsczogWycuL3JldmVhbC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItY2FyZC1mcm9udFwiPjwvbmctY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLWNhcmQtY29udGFpbmVyXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1jYXJkLWJhY2tcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGEgKm5nSWY9XCJzaG93VG9nZ2xlQnV0dG9uXCIgY2xhc3M9XCJyZXZlYWwtYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gICAgICA8bmItaWNvbiBpY29uPVwiY2hldnJvbi1kb3duLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9uYi1pY29uPlxuICAgIDwvYT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTmJSZXZlYWxDYXJkQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFJldmVhbCBzdGF0ZVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJldmVhbGVkJylcbiAgcmV2ZWFsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2hvdy9oaWRlIHRvZ2dsZSBidXR0b24gdG8gYmUgYWJsZSB0byBjb250cm9sIHRvZ2dsZSBmcm9tIHlvdXIgY29kZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBJbnB1dCgpIHNob3dUb2dnbGVCdXR0b24gPSB0cnVlO1xuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnJldmVhbGVkID0gIXRoaXMucmV2ZWFsZWQ7XG4gIH1cbn1cbiJdfQ==