import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../icon/icon.component";
import * as i2 from "@angular/common";
/**
 *
 * Flip card example:
 * @stacked-example(Showcase, flip-card/flip-card-showcase.component)
 *
 * As a content Flip card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic flip card configuration:
 *
 * ```html
 * <nb-flip-card>
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
 * </nb-flip-card>
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
 * Flip Card with header and footer:
 * @stacked-example(With Header & Footer, flip-card/flip-card-full.component.ts)
 *
 * Colored flip-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, flip-card/flip-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, flip-card/flip-card-accents.component)
 *
 * @additional-example(Multiple Sizes, flip-card/flip-card-sizes.component)
 *
 */
export class NbFlipCardComponent {
    constructor() {
        /**
         * Flip state
         * @type boolean
         */
        this.flipped = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.flipped = !this.flipped;
    }
}
NbFlipCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFlipCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbFlipCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbFlipCardComponent, selector: "nb-flip-card", inputs: { flipped: "flipped", showToggleButton: "showToggleButton" }, host: { properties: { "class.flipped": "this.flipped" } }, ngImport: i0, template: `
    <div class="flipcard-body">
      <div class="front-container">
        <ng-content select="nb-card-front"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
      <div class="back-container">
        <ng-content select="nb-card-back"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block;min-width:0;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s .25s;backface-visibility:hidden;-webkit-backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible;-webkit-backface-visibility:visible}.flipcard-body{display:flex;transition:transform .5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:auto}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s .15s}.flipcard-body .front-container{backface-visibility:visible;-webkit-backface-visibility:visible;transition:opacity 0s .2s}.flipcard-body .back-container{backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg)}\n"], components: [{ type: i1.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFlipCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-flip-card', template: `
    <div class="flipcard-body">
      <div class="front-container">
        <ng-content select="nb-card-front"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
      <div class="back-container">
        <ng-content select="nb-card-back"></ng-content>
        <a *ngIf="showToggleButton" class="flip-button" (click)="toggle()">
          <nb-icon icon="chevron-left-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
        </a>
      </div>
    </div>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:block;min-width:0;perspective:1200px;position:relative}:host-context(.flipped) .flipcard-body{transform:rotateY(-180deg)}:host-context(.flipped) .flipcard-body .front-container{opacity:0;transition:opacity 0s .25s;backface-visibility:hidden;-webkit-backface-visibility:hidden}:host-context(.flipped) .flipcard-body .front-container .flip-button{opacity:0;z-index:-1}:host-context(.flipped) .flipcard-body .back-container{backface-visibility:visible;-webkit-backface-visibility:visible}.flipcard-body{display:flex;transition:transform .5s;transform-style:preserve-3d}.flipcard-body .front-container,.flipcard-body .back-container{flex:1;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:auto}.flipcard-body .front-container .flip-button,.flipcard-body .back-container .flip-button{cursor:pointer;position:absolute;right:0;bottom:0;opacity:1;transition:opacity 0s .15s}.flipcard-body .front-container{backface-visibility:visible;-webkit-backface-visibility:visible;transition:opacity 0s .2s}.flipcard-body .back-container{backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg)}\n"] }]
        }], propDecorators: { flipped: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.flipped']
            }], showToggleButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jYXJkL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0RHO0FBcUJILE1BQU0sT0FBTyxtQkFBbUI7SUFwQmhDO1FBcUJFOzs7V0FHRztRQUdILFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekI7OztXQUdHO1FBQ00scUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBS2xDO0lBSEMsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7O2dIQWpCVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixxTEFqQnBCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDsyRkFFVSxtQkFBbUI7a0JBcEIvQixTQUFTOytCQUNFLGNBQWMsWUFFZDs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7OEJBU0QsT0FBTztzQkFGTixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLGVBQWU7Z0JBT25CLGdCQUFnQjtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICpcbiAqIEZsaXAgY2FyZCBleGFtcGxlOlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgZmxpcC1jYXJkL2ZsaXAtY2FyZC1zaG93Y2FzZS5jb21wb25lbnQpXG4gKlxuICogQXMgYSBjb250ZW50IEZsaXAgY2FyZCBhY2NlcHRzIHR3byBpbnN0YW5jZXMgb2YgYG5iLWNhcmRgIC0gZm9yIGZyb250IGFuZCBiYWNrIHNpZGVzLlxuICpcbiAqIEJhc2ljIGZsaXAgY2FyZCBjb25maWd1cmF0aW9uOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuYi1mbGlwLWNhcmQ+XG4gKiAgIDxuYi1jYXJkLWZyb250PlxuICogICAgIDxuYi1jYXJkPlxuICogICAgICAgPG5iLWNhcmQtYm9keT5cbiAqICAgICAgICAgRnJvbnRcbiAqICAgICAgIDwvbmItY2FyZC1ib2R5PlxuICogICAgIDwvbmItY2FyZD5cbiAqICAgPC9uYi1jYXJkLWZyb250PlxuICogICA8bmItY2FyZC1iYWNrPlxuICogICAgIDxuYi1jYXJkPlxuICogICAgICAgPG5iLWNhcmQtYm9keT5cbiAqICAgICAgICAgQmFja1xuICogICAgICAgPC9uYi1jYXJkLWJvZHk+XG4gKiAgICAgPC9uYi1jYXJkPlxuICogICA8L25iLWNhcmQtYmFjaz5cbiAqIDwvbmItZmxpcC1jYXJkPlxuICogYGBgXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJDYXJkTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYkNhcmRNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIEZsaXAgQ2FyZCB3aXRoIGhlYWRlciBhbmQgZm9vdGVyOlxuICogQHN0YWNrZWQtZXhhbXBsZShXaXRoIEhlYWRlciAmIEZvb3RlciwgZmxpcC1jYXJkL2ZsaXAtY2FyZC1mdWxsLmNvbXBvbmVudC50cylcbiAqXG4gKiBDb2xvcmVkIGZsaXAtY2FyZHMgY291bGQgYmUgc2ltcGx5IGNvbmZpZ3VyZWQgYnkgcHJvdmlkaW5nIGEgYHN0YXR1c2AgcHJvcGVydHk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgQ2FyZCwgZmxpcC1jYXJkL2ZsaXAtY2FyZC1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gYXNzaWduIGFuIGBhY2NlbnRgIHByb3BlcnR5IGZvciBhIHNsaWdodCBjYXJkIGhpZ2hsaWdodFxuICogYXMgd2VsbCBhcyBjb21iaW5lIGl0IHdpdGggYHN0YXR1c2A6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEFjY2VudCBDYXJkLCBmbGlwLWNhcmQvZmxpcC1jYXJkLWFjY2VudHMuY29tcG9uZW50KVxuICpcbiAqIEBhZGRpdGlvbmFsLWV4YW1wbGUoTXVsdGlwbGUgU2l6ZXMsIGZsaXAtY2FyZC9mbGlwLWNhcmQtc2l6ZXMuY29tcG9uZW50KVxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItZmxpcC1jYXJkJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxpcC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZsaXBjYXJkLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmcm9udC1jb250YWluZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItY2FyZC1mcm9udFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGEgKm5nSWY9XCJzaG93VG9nZ2xlQnV0dG9uXCIgY2xhc3M9XCJmbGlwLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJjaGV2cm9uLWxlZnQtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L25iLWljb24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stY29udGFpbmVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLWNhcmQtYmFja1wiPjwvbmctY29udGVudD5cbiAgICAgICAgPGEgKm5nSWY9XCJzaG93VG9nZ2xlQnV0dG9uXCIgY2xhc3M9XCJmbGlwLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJjaGV2cm9uLWxlZnQtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L25iLWljb24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYkZsaXBDYXJkQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEZsaXAgc3RhdGVcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbGlwcGVkJylcbiAgZmxpcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTaG93L2hpZGUgdG9nZ2xlIGJ1dHRvbiB0byBiZSBhYmxlIHRvIGNvbnRyb2wgdG9nZ2xlIGZyb20geW91ciBjb2RlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgc2hvd1RvZ2dsZUJ1dHRvbiA9IHRydWU7XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZmxpcHBlZCA9ICF0aGlzLmZsaXBwZWQ7XG4gIH1cbn1cbiJdfQ==