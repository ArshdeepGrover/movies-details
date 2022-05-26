import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NbBooleanInput } from '../helpers';
import { NbComponentSize } from '../component-size';
import { NbComponentShape } from '../component-shape';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbBadgePosition } from '../badge/badge.component';
import * as i0 from "@angular/core";
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
export declare class NbUserComponent {
    private domSanitizer;
    imageBackgroundStyle: SafeStyle;
    /**
     * Specifies a name to be shown on the right of a user picture
     * @type string
     */
    name: string;
    /**
     * Specifies a title to be shown under the **name**
     * @type string
     */
    title: string;
    /**
     * Absolute path to a user picture or base64 image.
     * User name initials will be shown if no picture specified (JD for John Doe).
     * @type string
     */
    set picture(value: string);
    /**
     * Color of the area shown when no picture specified
     * @type string
     */
    color: string;
    /**
     * Size of the component.
     * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
     */
    size: NbComponentSize;
    /**
     * Shape of the picture box.
     * Possible values: `rectangle`, `semi-round`, `round`.
     */
    shape: NbComponentShape;
    /**
     * Whether to show a user name or not
     */
    get showName(): boolean;
    set showName(val: boolean);
    private _showName;
    static ngAcceptInputType_showName: NbBooleanInput;
    /**
     * Whether to show a user title or not
     * @type boolean
     */
    get showTitle(): boolean;
    set showTitle(val: boolean);
    private _showTitle;
    static ngAcceptInputType_showTitle: NbBooleanInput;
    /**
     * Whether to show a user initials (if no picture specified) or not
     * @type boolean
     */
    get showInitials(): boolean;
    set showInitials(val: boolean);
    private _showInitials;
    static ngAcceptInputType_showInitials: NbBooleanInput;
    /**
     * Whether to show only a picture or also show the name and title
     * @type boolean
     */
    get onlyPicture(): boolean;
    set onlyPicture(val: boolean);
    static ngAcceptInputType_onlyPicture: NbBooleanInput;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     * @param {string} val
     */
    badgeStatus: NbComponentOrCustomStatus;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right',
     * 'top start', 'top end', 'bottom start', 'bottom end'
     * @type string
     */
    badgePosition: NbBadgePosition;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get rectangle(): boolean;
    get semiRound(): boolean;
    get round(): boolean;
    constructor(domSanitizer: DomSanitizer);
    getInitials(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbUserComponent, "nb-user", never, { "name": "name"; "title": "title"; "picture": "picture"; "color": "color"; "size": "size"; "shape": "shape"; "showName": "showName"; "showTitle": "showTitle"; "showInitials": "showInitials"; "onlyPicture": "onlyPicture"; "badgeText": "badgeText"; "badgeStatus": "badgeStatus"; "badgePosition": "badgePosition"; }, {}, never, never>;
}
