/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../badge/badge.component";
import * as i3 from "@angular/common";
/**
 * Represents a component showing a user avatar (picture) with a user name on the right.
 * @stacked-example(Showcase, user/user-showcase.component)
 *
 * ```ts
 *   <nb-user name="John Doe" title="Engineer"></nb-user>
 * ```
 *
 * ### Installation
 *
 * Import `NbUserModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbUserModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Available in multiple sizes:
 * @stacked-example(Multiple Sizes, user/user-sizes.component)
 *
 *
 * You can hide unnecessary captions (name, title or both):
 * @stacked-example(Hide captions in user component, user/user-hide-captions.component)
 *
 *
 * You can set custom avatar background-color, user image (as link or BASE64 string) and disable user initials:
 * @stacked-example(Avatar image settings, user/user-avatar-settings.component)
 *
 * Component shape could be controlled with `shape` input.
 * @stacked-example(Shapes, user/user-shape.component)
 *
 * @styles
 *
 * user-picture-box-background-color:
 * user-picture-box-border-color:
 * user-picture-box-border-width:
 * user-initials-text-color:
 * user-initials-text-font-family:
 * user-initials-text-font-weight:
 * user-name-text-color:
 * user-name-text-font-family:
 * user-name-text-font-weight:
 * user-title-text-color:
 * user-title-text-font-family:
 * user-title-text-font-weight:
 * user-rectangle-border-radius:
 * user-semi-round-border-radius:
 * user-round-border-radius:
 * user-tiny-height:
 * user-tiny-width:
 * user-tiny-initials-text-font-size:
 * user-tiny-initials-text-line-height:
 * user-tiny-name-text-font-size:
 * user-tiny-name-text-line-height:
 * user-tiny-title-text-font-size:
 * user-tiny-title-text-line-height:
 * user-small-height:
 * user-small-width:
 * user-small-initials-text-font-size:
 * user-small-initials-text-line-height:
 * user-small-name-text-font-size:
 * user-small-name-text-line-height:
 * user-small-title-text-font-size:
 * user-small-title-text-line-height:
 * user-medium-height:
 * user-medium-width:
 * user-medium-initials-text-font-size:
 * user-medium-initials-text-line-height:
 * user-medium-name-text-font-size:
 * user-medium-name-text-line-height:
 * user-medium-title-text-font-size:
 * user-medium-title-text-line-height:
 * user-large-height:
 * user-large-width:
 * user-large-initials-text-font-size:
 * user-large-initials-text-line-height:
 * user-large-name-text-font-size:
 * user-large-name-text-line-height:
 * user-large-title-text-font-size:
 * user-large-title-text-line-height:
 * user-giant-height:
 * user-giant-width:
 * user-giant-initials-text-font-size:
 * user-giant-initials-text-line-height:
 * user-giant-name-text-font-size:
 * user-giant-name-text-line-height:
 * user-giant-title-text-font-size:
 * user-giant-title-text-line-height:
 */
export class NbUserComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Specifies a name to be shown on the right of a user picture
         * @type string
         */
        this.name = 'Anonymous';
        /**
         * Size of the component.
         * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
         */
        this.size = 'medium';
        /**
         * Shape of the picture box.
         * Possible values: `rectangle`, `semi-round`, `round`.
         */
        this.shape = 'round';
        this._showName = true;
        this._showTitle = true;
        this._showInitials = true;
        /**
         * Badge status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         * @param {string} val
         */
        this.badgeStatus = 'basic';
    }
    /**
     * Absolute path to a user picture or base64 image.
     * User name initials will be shown if no picture specified (JD for John Doe).
     * @type string
     */
    set picture(value) {
        this.imageBackgroundStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    /**
     * Whether to show a user name or not
     */
    get showName() {
        return this._showName;
    }
    set showName(val) {
        this._showName = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    get showTitle() {
        return this._showTitle;
    }
    set showTitle(val) {
        this._showTitle = convertToBoolProperty(val);
    }
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    get showInitials() {
        return this._showInitials;
    }
    set showInitials(val) {
        this._showInitials = convertToBoolProperty(val);
    }
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    get onlyPicture() {
        return !this.showName && !this.showTitle;
    }
    set onlyPicture(val) {
        this.showName = this.showTitle = !convertToBoolProperty(val);
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get round() {
        return this.shape === 'round';
    }
    getInitials() {
        if (this.name) {
            const names = this.name.split(' ');
            return names.map(n => n.charAt(0)).splice(0, 2).join('').toUpperCase();
        }
        return '';
    }
}
NbUserComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserComponent, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
NbUserComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbUserComponent, selector: "nb-user", inputs: { name: "name", title: "title", picture: "picture", color: "color", size: "size", shape: "shape", showName: "showName", showTitle: "showTitle", showInitials: "showInitials", onlyPicture: "onlyPicture", badgeText: "badgeText", badgeStatus: "badgeStatus", badgePosition: "badgePosition" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.shape-rectangle": "this.rectangle", "class.shape-semi-round": "this.semiRound", "class.shape-round": "this.round" } }, ngImport: i0, template: "<div class=\"user-container\">\n  <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\">\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n  <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture initials\" [style.background-color]=\"color\">\n    <ng-container *ngIf=\"showInitials\">\n      {{ getInitials() }}\n    </ng-container>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n\n  <div class=\"info-container\">\n    <div *ngIf=\"showName && name\" class=\"user-name\">{{ name }}</div>\n    <div *ngIf=\"showTitle && title\" class=\"user-title\">{{ title }}</div>\n  </div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.initials{display:flex;align-items:center;justify-content:center}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem}\n"], components: [{ type: i2.NbBadgeComponent, selector: "nb-badge", inputs: ["text", "position", "dotMode", "status"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbUserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-user', template: "<div class=\"user-container\">\n  <div *ngIf=\"imageBackgroundStyle\" class=\"user-picture image\" [style.background-image]=\"imageBackgroundStyle\">\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n  <div *ngIf=\"!imageBackgroundStyle\" class=\"user-picture initials\" [style.background-color]=\"color\">\n    <ng-container *ngIf=\"showInitials\">\n      {{ getInitials() }}\n    </ng-container>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  </div>\n\n  <div class=\"info-container\">\n    <div *ngIf=\"showName && name\" class=\"user-name\">{{ name }}</div>\n    <div *ngIf=\"showTitle && title\" class=\"user-title\">{{ title }}</div>\n  </div>\n</div>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex}:host .user-container{position:relative;display:flex;align-items:center}:host .user-picture{position:relative;flex-shrink:0}:host .user-picture.image{background-size:cover;background-repeat:no-repeat}:host .user-picture.initials{display:flex;align-items:center;justify-content:center}[dir=rtl] :host .user-name,[dir=rtl] :host .user-title{text-align:right}[dir=ltr] :host .info-container{margin-left:.5rem}[dir=rtl] :host .info-container{margin-right:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; }, propDecorators: { name: [{
                type: Input
            }], title: [{
                type: Input
            }], picture: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }], showName: [{
                type: Input
            }], showTitle: [{
                type: Input
            }], showInitials: [{
                type: Input
            }], onlyPicture: [{
                type: Input
            }], badgeText: [{
                type: Input
            }], badgeStatus: [{
                type: Input
            }], badgePosition: [{
                type: Input
            }], tiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], small: [{
                type: HostBinding,
                args: ['class.size-small']
            }], medium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }], giant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }], rectangle: [{
                type: HostBinding,
                args: ['class.shape-rectangle']
            }], semiRound: [{
                type: HostBinding,
                args: ['class.shape-semi-round']
            }], round: [{
                type: HostBinding,
                args: ['class.shape-round']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc5RCxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDOzs7OztBQU1uRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkZHO0FBTUgsTUFBTSxPQUFPLGVBQWU7SUFnSzFCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBNUo5Qzs7O1dBR0c7UUFDTSxTQUFJLEdBQVcsV0FBVyxDQUFDO1FBd0JwQzs7O1dBR0c7UUFDTSxTQUFJLEdBQW9CLFFBQVEsQ0FBQztRQUUxQzs7O1dBR0c7UUFDTSxVQUFLLEdBQXFCLE9BQU8sQ0FBQztRQVluQyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBYzFCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFjM0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFzQnRDOzs7O1dBSUc7UUFDTSxnQkFBVyxHQUE4QixPQUFPLENBQUM7SUFtRFIsQ0FBQztJQWhKbkQ7Ozs7T0FJRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFP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O2dCQWVGLFNBQVM7c0JBRFosS0FBSztnQkFlRixZQUFZO3NCQURmLEtBQUs7Z0JBZUYsV0FBVztzQkFEZCxLQUFLO2dCQWFHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBT0csV0FBVztzQkFBbkIsS0FBSztnQkFTRyxhQUFhO3NCQUFyQixLQUFLO2dCQUdGLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxpQkFBaUI7Z0JBTTFCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyx1QkFBdUI7Z0JBTWhDLFNBQVM7c0JBRFosV0FBVzt1QkFBQyx3QkFBd0I7Z0JBTWpDLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNoYXBlIH0gZnJvbSAnLi4vY29tcG9uZW50LXNoYXBlJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcbmltcG9ydCB7IE5iQmFkZ2VQb3NpdGlvbiB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbXBvbmVudCBzaG93aW5nIGEgdXNlciBhdmF0YXIgKHBpY3R1cmUpIHdpdGggYSB1c2VyIG5hbWUgb24gdGhlIHJpZ2h0LlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgdXNlci91c2VyLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBgYGB0c1xuICogICA8bmItdXNlciBuYW1lPVwiSm9obiBEb2VcIiB0aXRsZT1cIkVuZ2luZWVyXCI+PC9uYi11c2VyPlxuICogYGBgXG4gKlxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEltcG9ydCBgTmJVc2VyTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlLlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYlVzZXJNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIEF2YWlsYWJsZSBpbiBtdWx0aXBsZSBzaXplczpcbiAqIEBzdGFja2VkLWV4YW1wbGUoTXVsdGlwbGUgU2l6ZXMsIHVzZXIvdXNlci1zaXplcy5jb21wb25lbnQpXG4gKlxuICpcbiAqIFlvdSBjYW4gaGlkZSB1bm5lY2Vzc2FyeSBjYXB0aW9ucyAobmFtZSwgdGl0bGUgb3IgYm90aCk6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEhpZGUgY2FwdGlvbnMgaW4gdXNlciBjb21wb25lbnQsIHVzZXIvdXNlci1oaWRlLWNhcHRpb25zLmNvbXBvbmVudClcbiAqXG4gKlxuICogWW91IGNhbiBzZXQgY3VzdG9tIGF2YXRhciBiYWNrZ3JvdW5kLWNvbG9yLCB1c2VyIGltYWdlIChhcyBsaW5rIG9yIEJBU0U2NCBzdHJpbmcpIGFuZCBkaXNhYmxlIHVzZXIgaW5pdGlhbHM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEF2YXRhciBpbWFnZSBzZXR0aW5ncywgdXNlci91c2VyLWF2YXRhci1zZXR0aW5ncy5jb21wb25lbnQpXG4gKlxuICogQ29tcG9uZW50IHNoYXBlIGNvdWxkIGJlIGNvbnRyb2xsZWQgd2l0aCBgc2hhcGVgIGlucHV0LlxuICogQHN0YWNrZWQtZXhhbXBsZShTaGFwZXMsIHVzZXIvdXNlci1zaGFwZS5jb21wb25lbnQpXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOlxuICogdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6XG4gKiB1c2VyLWluaXRpYWxzLXRleHQtY29sb3I6XG4gKiB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6XG4gKiB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB1c2VyLW5hbWUtdGV4dC1jb2xvcjpcbiAqIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OlxuICogdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB1c2VyLXRpdGxlLXRleHQtY29sb3I6XG4gKiB1c2VyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6XG4gKiB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6XG4gKiB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOlxuICogdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6XG4gKiB1c2VyLXJvdW5kLWJvcmRlci1yYWRpdXM6XG4gKiB1c2VyLXRpbnktaGVpZ2h0OlxuICogdXNlci10aW55LXdpZHRoOlxuICogdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOlxuICogdXNlci10aW55LWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHVzZXItdGlueS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6XG4gKiB1c2VyLXRpbnktdGl0bGUtdGV4dC1saW5lLWhlaWdodDpcbiAqIHVzZXItc21hbGwtaGVpZ2h0OlxuICogdXNlci1zbWFsbC13aWR0aDpcbiAqIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6XG4gKiB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6XG4gKiB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDpcbiAqIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6XG4gKiB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLW1lZGl1bS1oZWlnaHQ6XG4gKiB1c2VyLW1lZGl1bS13aWR0aDpcbiAqIHVzZXItbWVkaXVtLWluaXRpYWxzLXRleHQtZm9udC1zaXplOlxuICogdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDpcbiAqIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6XG4gKiB1c2VyLW1lZGl1bS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLWxhcmdlLWhlaWdodDpcbiAqIHVzZXItbGFyZ2Utd2lkdGg6XG4gKiB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtZm9udC1zaXplOlxuICogdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdXNlci1sYXJnZS1uYW1lLXRleHQtZm9udC1zaXplOlxuICogdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6XG4gKiB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOlxuICogdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdXNlci1naWFudC1oZWlnaHQ6XG4gKiB1c2VyLWdpYW50LXdpZHRoOlxuICogdXNlci1naWFudC1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTpcbiAqIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDpcbiAqIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OlxuICogdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTpcbiAqIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1saW5lLWhlaWdodDpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdXNlcicsXG4gIHN0eWxlVXJsczogWycuL3VzZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOYlVzZXJDb21wb25lbnQge1xuXG4gIGltYWdlQmFja2dyb3VuZFN0eWxlOiBTYWZlU3R5bGU7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIG5hbWUgdG8gYmUgc2hvd24gb24gdGhlIHJpZ2h0IG9mIGEgdXNlciBwaWN0dXJlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJ0Fub255bW91cyc7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIHRpdGxlIHRvIGJlIHNob3duIHVuZGVyIHRoZSAqKm5hbWUqKlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFic29sdXRlIHBhdGggdG8gYSB1c2VyIHBpY3R1cmUgb3IgYmFzZTY0IGltYWdlLlxuICAgKiBVc2VyIG5hbWUgaW5pdGlhbHMgd2lsbCBiZSBzaG93biBpZiBubyBwaWN0dXJlIHNwZWNpZmllZCAoSkQgZm9yIEpvaG4gRG9lKS5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcGljdHVyZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbWFnZUJhY2tncm91bmRTdHlsZSA9IHZhbHVlID8gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHt2YWx1ZX0pYCkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIHRoZSBhcmVhIHNob3duIHdoZW4gbm8gcGljdHVyZSBzcGVjaWZpZWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIFBvc3NpYmxlIHZhbHVlczogYHRpbnlgLCBgc21hbGxgLCBgbWVkaXVtYCAoZGVmYXVsdCksIGBsYXJnZWAsICdnaWFudCcuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBOYkNvbXBvbmVudFNpemUgPSAnbWVkaXVtJztcblxuICAvKipcbiAgICogU2hhcGUgb2YgdGhlIHBpY3R1cmUgYm94LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGByZWN0YW5nbGVgLCBgc2VtaS1yb3VuZGAsIGByb3VuZGAuXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZTogTmJDb21wb25lbnRTaGFwZSA9ICdyb3VuZCc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyBhIHVzZXIgbmFtZSBvciBub3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaG93TmFtZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd05hbWU7XG4gIH1cbiAgc2V0IHNob3dOYW1lKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dOYW1lID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgcHJpdmF0ZSBfc2hvd05hbWU6IGJvb2xlYW4gPSB0cnVlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd05hbWU6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHNob3cgYSB1c2VyIHRpdGxlIG9yIG5vdFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd1RpdGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93VGl0bGU7XG4gIH1cbiAgc2V0IHNob3dUaXRsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93VGl0bGUgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcml2YXRlIF9zaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd1RpdGxlOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IGEgdXNlciBpbml0aWFscyAoaWYgbm8gcGljdHVyZSBzcGVjaWZpZWQpIG9yIG5vdFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgc2hvd0luaXRpYWxzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93SW5pdGlhbHM7XG4gIH1cbiAgc2V0IHNob3dJbml0aWFscyh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SW5pdGlhbHMgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBwcml2YXRlIF9zaG93SW5pdGlhbHM6IGJvb2xlYW4gPSB0cnVlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0luaXRpYWxzOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaG93IG9ubHkgYSBwaWN0dXJlIG9yIGFsc28gc2hvdyB0aGUgbmFtZSBhbmQgdGl0bGVcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG9ubHlQaWN0dXJlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zaG93TmFtZSAmJiAhdGhpcy5zaG93VGl0bGU7XG4gIH1cbiAgc2V0IG9ubHlQaWN0dXJlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd05hbWUgPSB0aGlzLnNob3dUaXRsZSA9ICFjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsKTtcbiAgfVxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb25seVBpY3R1cmU6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBCYWRnZSB0ZXh0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogQmFkZ2Ugc3RhdHVzIChhZGRzIHNwZWNpZmljIHN0eWxlcyk6XG4gICAqIGBwcmltYXJ5YCwgYGluZm9gLCBgc3VjY2Vzc2AsIGB3YXJuaW5nYCwgYGRhbmdlcmBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICAgKi9cbiAgQElucHV0KCkgYmFkZ2VTdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuXG4gIC8qKlxuICAgKiBCYWRnZSBwb3NpdGlvbi5cbiAgICogQ2FuIGJlIHNldCB0byBhbnkgY2xhc3Mgb3IgdG8gb25lIG9mIHByZWRlZmluZWQgcG9zaXRpb25zOlxuICAgKiAndG9wIGxlZnQnLCAndG9wIHJpZ2h0JywgJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSByaWdodCcsXG4gICAqICd0b3Agc3RhcnQnLCAndG9wIGVuZCcsICdib3R0b20gc3RhcnQnLCAnYm90dG9tIGVuZCdcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZVBvc2l0aW9uOiBOYkJhZGdlUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtc21hbGwnKVxuICBnZXQgc21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtZ2lhbnQnKVxuICBnZXQgZ2lhbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hhcGUtcmVjdGFuZ2xlJylcbiAgZ2V0IHJlY3RhbmdsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ3JlY3RhbmdsZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNoYXBlLXNlbWktcm91bmQnKVxuICBnZXQgc2VtaVJvdW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYXBlID09PSAnc2VtaS1yb3VuZCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNoYXBlLXJvdW5kJylcbiAgZ2V0IHJvdW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYXBlID09PSAncm91bmQnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XG5cbiAgZ2V0SW5pdGlhbHMoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZS5zcGxpdCgnICcpO1xuXG4gICAgICByZXR1cm4gbmFtZXMubWFwKG4gPT4gbi5jaGFyQXQoMCkpLnNwbGljZSgwLCAyKS5qb2luKCcnKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVzZXItY29udGFpbmVyXCI+XG4gIDxkaXYgKm5nSWY9XCJpbWFnZUJhY2tncm91bmRTdHlsZVwiIGNsYXNzPVwidXNlci1waWN0dXJlIGltYWdlXCIgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiaW1hZ2VCYWNrZ3JvdW5kU3R5bGVcIj5cbiAgICA8bmItYmFkZ2UgKm5nSWY9XCJiYWRnZVRleHRcIiBbdGV4dF09XCJiYWRnZVRleHRcIiBbc3RhdHVzXT1cImJhZGdlU3RhdHVzXCIgW3Bvc2l0aW9uXT1cImJhZGdlUG9zaXRpb25cIj48L25iLWJhZGdlPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpbWFnZUJhY2tncm91bmRTdHlsZVwiIGNsYXNzPVwidXNlci1waWN0dXJlIGluaXRpYWxzXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0luaXRpYWxzXCI+XG4gICAgICB7eyBnZXRJbml0aWFscygpIH19XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5iLWJhZGdlICpuZ0lmPVwiYmFkZ2VUZXh0XCIgW3RleHRdPVwiYmFkZ2VUZXh0XCIgW3N0YXR1c109XCJiYWRnZVN0YXR1c1wiIFtwb3NpdGlvbl09XCJiYWRnZVBvc2l0aW9uXCI+PC9uYi1iYWRnZT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImluZm8tY29udGFpbmVyXCI+XG4gICAgPGRpdiAqbmdJZj1cInNob3dOYW1lICYmIG5hbWVcIiBjbGFzcz1cInVzZXItbmFtZVwiPnt7IG5hbWUgfX08L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1RpdGxlICYmIHRpdGxlXCIgY2xhc3M9XCJ1c2VyLXRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==