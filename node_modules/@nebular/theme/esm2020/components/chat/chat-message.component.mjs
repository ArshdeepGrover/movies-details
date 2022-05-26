/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { convertToBoolProperty } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./chat-custom-message.service";
import * as i3 from "./chat-avatar.component";
import * as i4 from "./chat-message-file.component";
import * as i5 from "./chat-message-quote.component";
import * as i6 from "./chat-message-map.component";
import * as i7 from "./chat-message-text.component";
import * as i8 from "@angular/common";
/**
 * Chat message component.
 *
 * Multiple message types are available through a `type` property, such as
 * - text - simple text message
 * - file - could be a file preview or a file icon
 * if multiple files are provided grouped files are shown
 * - quote - quotes a message with specific quote styles
 * - map - shows a google map picture by provided [latitude] and [longitude] properties
 *
 * @stacked-example(Available Types, chat/chat-message-types-showcase.component)
 *
 * Message with attached files:
 * ```html
 * <nb-chat-message
 *   type="file"
 *   [files]="[ { url: '...' } ]"
 *   message="Hello world!">
 * </nb-chat-message>
 * ```
 *
 * Map message:
 * ```html
 * <nb-chat-message
 *   type="map"
 *   [latitude]="53.914"
 *   [longitude]="27.59"
 *   message="Here I am">
 * </nb-chat-message>
 * ```
 *
 * @styles
 *
 * chat-message-background:
 * chat-message-text-color:
 * chat-message-reply-background-color:
 * chat-message-reply-text-color:
 * chat-message-avatar-background-color:
 * chat-message-sender-text-color:
 * chat-message-quote-background-color:
 * chat-message-quote-text-color:
 * chat-message-file-text-color:
 * chat-message-file-background-color:
 */
export class NbChatMessageComponent {
    constructor(domSanitizer, customMessageService) {
        this.domSanitizer = domSanitizer;
        this.customMessageService = customMessageService;
        this.builtInMessageTypes = ['text', 'file', 'map', 'quote'];
        this._reply = false;
    }
    get _addReplyClass() {
        return this._areDefaultStylesEnabled() && this.reply;
    }
    get _addNotReplyClass() {
        return this._areDefaultStylesEnabled() && this.notReply;
    }
    get _addNoSpaceClass() {
        return this._areDefaultStylesEnabled() && !this.message;
    }
    get flyInOut() {
        return true;
    }
    get notReply() {
        return !this.reply;
    }
    /**
     * Determines if a message is a reply
     */
    get reply() {
        return this._reply;
    }
    set reply(value) {
        this._reply = convertToBoolProperty(value);
    }
    /**
     * Message send avatar
     * @type {string}
     */
    set avatar(value) {
        this.avatarStyle = value ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`) : null;
    }
    getInitials() {
        if (this.sender) {
            const names = this.sender.split(' ');
            return names
                .map((n) => n.charAt(0))
                .splice(0, 2)
                .join('')
                .toUpperCase();
        }
        return '';
    }
    _isBuiltInMessageType() {
        // Unset type defaults to "text" type
        return this.type == null || this.builtInMessageTypes.includes(this.type);
    }
    _getTemplate() {
        const customMessage = this.getCustomMessage(this.type);
        return customMessage.templateRef;
    }
    _getTemplateContext() {
        return { $implicit: this.customMessageData, isReply: this.reply };
    }
    _areDefaultStylesEnabled() {
        const customMessageDirective = this.getCustomMessage(this.type);
        return !customMessageDirective.noStyles;
    }
    getCustomMessage(type) {
        const customMessageDirective = this.customMessageService.getInstance(type);
        if (!customMessageDirective) {
            throw new Error(`nb-chat: Can't find template for custom type '${type}'. ` +
                `Make sure you provide it in the chat component with *nbCustomMessage='${type}'.`);
        }
        return customMessageDirective;
    }
}
NbChatMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.NbChatCustomMessageService }], target: i0.ɵɵFactoryTarget.Component });
NbChatMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatMessageComponent, selector: "nb-chat-message", inputs: { reply: "reply", message: "message", sender: "sender", date: "date", dateFormat: "dateFormat", files: "files", quote: "quote", latitude: "latitude", longitude: "longitude", avatar: "avatar", type: "type", customMessageData: "customMessageData" }, host: { properties: { "@flyInOut": "this.flyInOut", "class.not-reply": "this.notReply", "class.reply": "this.reply" } }, ngImport: i0, template: `
    <nb-chat-avatar *ngIf="notReply" [initials]="getInitials()" [avatarStyle]="avatarStyle"> </nb-chat-avatar>

    <div class="message">
      <ng-container [ngSwitch]="type" *ngIf="_isBuiltInMessageType(); else customTemplate">
        <nb-chat-message-file
          *ngSwitchCase="'file'"
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
          [files]="files"
        >
        </nb-chat-message-file>

        <nb-chat-message-quote
          *ngSwitchCase="'quote'"
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
          [quote]="quote"
        >
        </nb-chat-message-quote>

        <nb-chat-message-map
          *ngSwitchCase="'map'"
          [sender]="sender"
          [date]="date"
          [message]="message"
          [latitude]="latitude"
          [longitude]="longitude"
        >
        </nb-chat-message-map>

        <nb-chat-message-text
          *ngSwitchDefault
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
        >
        </nb-chat-message-text>
      </ng-container>
    </div>

    <ng-template #customTemplate>
      <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      </nb-chat-message-text>
      <div
        [class.nb-custom-message]="_areDefaultStylesEnabled()"
        [class.nb-custom-message-no-space]="_addNoSpaceClass"
        [class.nb-custom-message-reply]="_addReplyClass"
        [class.nb-custom-message-not-reply]="_addNotReplyClass"
        [class.nb-custom-message-full-width]="!_areDefaultStylesEnabled()"
      >
        <ng-container [ngTemplateOutlet]="_getTemplate()" [ngTemplateOutletContext]="_getTemplateContext()">
        </ng-container>
      </div>
    </ng-template>
  `, isInline: true, components: [{ type: i3.NbChatAvatarComponent, selector: "nb-chat-avatar", inputs: ["initials", "avatarStyle"] }, { type: i4.NbChatMessageFileComponent, selector: "nb-chat-message-file", inputs: ["message", "sender", "date", "dateFormat", "files"] }, { type: i5.NbChatMessageQuoteComponent, selector: "nb-chat-message-quote", inputs: ["message", "sender", "date", "dateFormat", "quote"] }, { type: i6.NbChatMessageMapComponent, selector: "nb-chat-message-map", inputs: ["message", "sender", "date", "dateFormat", "latitude", "longitude"] }, { type: i7.NbChatMessageTextComponent, selector: "nb-chat-message-text", inputs: ["sender", "message", "date", "dateFormat"] }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i8.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i8.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i8.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(80)]),
            transition('* => void', [animate(80, style({ transform: 'translateX(100%)' }))]),
        ]),
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-message',
                    template: `
    <nb-chat-avatar *ngIf="notReply" [initials]="getInitials()" [avatarStyle]="avatarStyle"> </nb-chat-avatar>

    <div class="message">
      <ng-container [ngSwitch]="type" *ngIf="_isBuiltInMessageType(); else customTemplate">
        <nb-chat-message-file
          *ngSwitchCase="'file'"
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
          [files]="files"
        >
        </nb-chat-message-file>

        <nb-chat-message-quote
          *ngSwitchCase="'quote'"
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
          [quote]="quote"
        >
        </nb-chat-message-quote>

        <nb-chat-message-map
          *ngSwitchCase="'map'"
          [sender]="sender"
          [date]="date"
          [message]="message"
          [latitude]="latitude"
          [longitude]="longitude"
        >
        </nb-chat-message-map>

        <nb-chat-message-text
          *ngSwitchDefault
          [sender]="sender"
          [date]="date"
          [dateFormat]="dateFormat"
          [message]="message"
        >
        </nb-chat-message-text>
      </ng-container>
    </div>

    <ng-template #customTemplate>
      <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      </nb-chat-message-text>
      <div
        [class.nb-custom-message]="_areDefaultStylesEnabled()"
        [class.nb-custom-message-no-space]="_addNoSpaceClass"
        [class.nb-custom-message-reply]="_addReplyClass"
        [class.nb-custom-message-not-reply]="_addNotReplyClass"
        [class.nb-custom-message-full-width]="!_areDefaultStylesEnabled()"
      >
        <ng-container [ngTemplateOutlet]="_getTemplate()" [ngTemplateOutletContext]="_getTemplateContext()">
        </ng-container>
      </div>
    </ng-template>
  `,
                    animations: [
                        trigger('flyInOut', [
                            state('in', style({ transform: 'translateX(0)' })),
                            transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(80)]),
                            transition('* => void', [animate(80, style({ transform: 'translateX(100%)' }))]),
                        ]),
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.NbChatCustomMessageService }]; }, propDecorators: { flyInOut: [{
                type: HostBinding,
                args: ['@flyInOut']
            }], notReply: [{
                type: HostBinding,
                args: ['class.not-reply']
            }], reply: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.reply']
            }], message: [{
                type: Input
            }], sender: [{
                type: Input
            }], date: [{
                type: Input
            }], dateFormat: [{
                type: Input
            }], files: [{
                type: Input
            }], quote: [{
                type: Input
            }], latitude: [{
                type: Input
            }], longitude: [{
                type: Input
            }], avatar: [{
                type: Input
            }], type: [{
                type: Input
            }], customMessageData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jaGF0L2NoYXQtbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFLbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUF5RUgsTUFBTSxPQUFPLHNCQUFzQjtJQTZHakMsWUFBc0IsWUFBMEIsRUFBWSxvQkFBZ0Q7UUFBdEYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBWSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1FBNUd6Rix3QkFBbUIsR0FBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBcUMxRSxXQUFNLEdBQVksS0FBSyxDQUFDO0lBdUU2RSxDQUFDO0lBeEdoSCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUks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LEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFPRixNQUFNO3NCQURULEtBQUs7Z0JBU0csSUFBSTtzQkFBWixLQUFLO2dCQU1HLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNoYXRNZXNzYWdlRmlsZSB9IGZyb20gJy4vY2hhdC1tZXNzYWdlLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdEN1c3RvbU1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LWN1c3RvbS1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDaGF0Q3VzdG9tTWVzc2FnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2hhdC1jdXN0b20tbWVzc2FnZS5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIENoYXQgbWVzc2FnZSBjb21wb25lbnQuXG4gKlxuICogTXVsdGlwbGUgbWVzc2FnZSB0eXBlcyBhcmUgYXZhaWxhYmxlIHRocm91Z2ggYSBgdHlwZWAgcHJvcGVydHksIHN1Y2ggYXNcbiAqIC0gdGV4dCAtIHNpbXBsZSB0ZXh0IG1lc3NhZ2VcbiAqIC0gZmlsZSAtIGNvdWxkIGJlIGEgZmlsZSBwcmV2aWV3IG9yIGEgZmlsZSBpY29uXG4gKiBpZiBtdWx0aXBsZSBmaWxlcyBhcmUgcHJvdmlkZWQgZ3JvdXBlZCBmaWxlcyBhcmUgc2hvd25cbiAqIC0gcXVvdGUgLSBxdW90ZXMgYSBtZXNzYWdlIHdpdGggc3BlY2lmaWMgcXVvdGUgc3R5bGVzXG4gKiAtIG1hcCAtIHNob3dzIGEgZ29vZ2xlIG1hcCBwaWN0dXJlIGJ5IHByb3ZpZGVkIFtsYXRpdHVkZV0gYW5kIFtsb25naXR1ZGVdIHByb3BlcnRpZXNcbiAqXG4gKiBAc3RhY2tlZC1leGFtcGxlKEF2YWlsYWJsZSBUeXBlcywgY2hhdC9jaGF0LW1lc3NhZ2UtdHlwZXMtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIE1lc3NhZ2Ugd2l0aCBhdHRhY2hlZCBmaWxlczpcbiAqIGBgYGh0bWxcbiAqIDxuYi1jaGF0LW1lc3NhZ2VcbiAqICAgdHlwZT1cImZpbGVcIlxuICogICBbZmlsZXNdPVwiWyB7IHVybDogJy4uLicgfSBdXCJcbiAqICAgbWVzc2FnZT1cIkhlbGxvIHdvcmxkIVwiPlxuICogPC9uYi1jaGF0LW1lc3NhZ2U+XG4gKiBgYGBcbiAqXG4gKiBNYXAgbWVzc2FnZTpcbiAqIGBgYGh0bWxcbiAqIDxuYi1jaGF0LW1lc3NhZ2VcbiAqICAgdHlwZT1cIm1hcFwiXG4gKiAgIFtsYXRpdHVkZV09XCI1My45MTRcIlxuICogICBbbG9uZ2l0dWRlXT1cIjI3LjU5XCJcbiAqICAgbWVzc2FnZT1cIkhlcmUgSSBhbVwiPlxuICogPC9uYi1jaGF0LW1lc3NhZ2U+XG4gKiBgYGBcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogY2hhdC1tZXNzYWdlLWJhY2tncm91bmQ6XG4gKiBjaGF0LW1lc3NhZ2UtdGV4dC1jb2xvcjpcbiAqIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hhdC1tZXNzYWdlLXJlcGx5LXRleHQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2Utc2VuZGVyLXRleHQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2UtcXVvdGUtYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOlxuICogY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcjpcbiAqIGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3I6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNoYXQtbWVzc2FnZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWNoYXQtYXZhdGFyICpuZ0lmPVwibm90UmVwbHlcIiBbaW5pdGlhbHNdPVwiZ2V0SW5pdGlhbHMoKVwiIFthdmF0YXJTdHlsZV09XCJhdmF0YXJTdHlsZVwiPiA8L25iLWNoYXQtYXZhdGFyPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIiAqbmdJZj1cIl9pc0J1aWx0SW5NZXNzYWdlVHlwZSgpOyBlbHNlIGN1c3RvbVRlbXBsYXRlXCI+XG4gICAgICAgIDxuYi1jaGF0LW1lc3NhZ2UtZmlsZVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZmlsZSdcIlxuICAgICAgICAgIFtzZW5kZXJdPVwic2VuZGVyXCJcbiAgICAgICAgICBbZGF0ZV09XCJkYXRlXCJcbiAgICAgICAgICBbZGF0ZUZvcm1hdF09XCJkYXRlRm9ybWF0XCJcbiAgICAgICAgICBbbWVzc2FnZV09XCJtZXNzYWdlXCJcbiAgICAgICAgICBbZmlsZXNdPVwiZmlsZXNcIlxuICAgICAgICA+XG4gICAgICAgIDwvbmItY2hhdC1tZXNzYWdlLWZpbGU+XG5cbiAgICAgICAgPG5iLWNoYXQtbWVzc2FnZS1xdW90ZVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIncXVvdGUnXCJcbiAgICAgICAgICBbc2VuZGVyXT1cInNlbmRlclwiXG4gICAgICAgICAgW2RhdGVdPVwiZGF0ZVwiXG4gICAgICAgICAgW2RhdGVGb3JtYXRdPVwiZGF0ZUZvcm1hdFwiXG4gICAgICAgICAgW21lc3NhZ2VdPVwibWVzc2FnZVwiXG4gICAgICAgICAgW3F1b3RlXT1cInF1b3RlXCJcbiAgICAgICAgPlxuICAgICAgICA8L25iLWNoYXQtbWVzc2FnZS1xdW90ZT5cblxuICAgICAgICA8bmItY2hhdC1tZXNzYWdlLW1hcFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbWFwJ1wiXG4gICAgICAgICAgW3NlbmRlcl09XCJzZW5kZXJcIlxuICAgICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICAgIFttZXNzYWdlXT1cIm1lc3NhZ2VcIlxuICAgICAgICAgIFtsYXRpdHVkZV09XCJsYXRpdHVkZVwiXG4gICAgICAgICAgW2xvbmdpdHVkZV09XCJsb25naXR1ZGVcIlxuICAgICAgICA+XG4gICAgICAgIDwvbmItY2hhdC1tZXNzYWdlLW1hcD5cblxuICAgICAgICA8bmItY2hhdC1tZXNzYWdlLXRleHRcbiAgICAgICAgICAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgW3NlbmRlcl09XCJzZW5kZXJcIlxuICAgICAgICAgIFtkYXRlXT1cImRhdGVcIlxuICAgICAgICAgIFtkYXRlRm9ybWF0XT1cImRhdGVGb3JtYXRcIlxuICAgICAgICAgIFttZXNzYWdlXT1cIm1lc3NhZ2VcIlxuICAgICAgICA+XG4gICAgICAgIDwvbmItY2hhdC1tZXNzYWdlLXRleHQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjY3VzdG9tVGVtcGxhdGU+XG4gICAgICA8bmItY2hhdC1tZXNzYWdlLXRleHQgW3NlbmRlcl09XCJzZW5kZXJcIiBbZGF0ZV09XCJkYXRlXCIgW2RhdGVGb3JtYXRdPVwiZGF0ZUZvcm1hdFwiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIj5cbiAgICAgIDwvbmItY2hhdC1tZXNzYWdlLXRleHQ+XG4gICAgICA8ZGl2XG4gICAgICAgIFtjbGFzcy5uYi1jdXN0b20tbWVzc2FnZV09XCJfYXJlRGVmYXVsdFN0eWxlc0VuYWJsZWQoKVwiXG4gICAgICAgIFtjbGFzcy5uYi1jdXN0b20tbWVzc2FnZS1uby1zcGFjZV09XCJfYWRkTm9TcGFjZUNsYXNzXCJcbiAgICAgICAgW2NsYXNzLm5iLWN1c3RvbS1tZXNzYWdlLXJlcGx5XT1cIl9hZGRSZXBseUNsYXNzXCJcbiAgICAgICAgW2NsYXNzLm5iLWN1c3RvbS1tZXNzYWdlLW5vdC1yZXBseV09XCJfYWRkTm90UmVwbHlDbGFzc1wiXG4gICAgICAgIFtjbGFzcy5uYi1jdXN0b20tbWVzc2FnZS1mdWxsLXdpZHRoXT1cIiFfYXJlRGVmYXVsdFN0eWxlc0VuYWJsZWQoKVwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2dldFRlbXBsYXRlKClcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiX2dldFRlbXBsYXRlQ29udGV4dCgpXCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZseUluT3V0JywgW1xuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScgfSksIGFuaW1hdGUoODApXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbYW5pbWF0ZSg4MCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSldKSxcbiAgICBdKSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2hhdE1lc3NhZ2VDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnVpbHRJbk1lc3NhZ2VUeXBlczogc3RyaW5nW10gPSBbJ3RleHQnLCAnZmlsZScsICdtYXAnLCAncXVvdGUnXTtcblxuICBhdmF0YXJTdHlsZTogU2FmZVN0eWxlO1xuXG4gIGdldCBfYWRkUmVwbHlDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXJlRGVmYXVsdFN0eWxlc0VuYWJsZWQoKSAmJiB0aGlzLnJlcGx5O1xuICB9XG5cbiAgZ2V0IF9hZGROb3RSZXBseUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hcmVEZWZhdWx0U3R5bGVzRW5hYmxlZCgpICYmIHRoaXMubm90UmVwbHk7XG4gIH1cblxuICBnZXQgX2FkZE5vU3BhY2VDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXJlRGVmYXVsdFN0eWxlc0VuYWJsZWQoKSAmJiAhdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdAZmx5SW5PdXQnKVxuICBnZXQgZmx5SW5PdXQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5vdC1yZXBseScpXG4gIGdldCBub3RSZXBseSgpIHtcbiAgICByZXR1cm4gIXRoaXMucmVwbHk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIG1lc3NhZ2UgaXMgYSByZXBseVxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZXBseScpXG4gIGdldCByZXBseSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbHk7XG4gIH1cbiAgc2V0IHJlcGx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVwbHkgPSBjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByb3RlY3RlZCBfcmVwbHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcGx5OiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHNlbmRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmQgZGF0ZVxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpIGRhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZCBkYXRlIGZvcm1hdCwgZGVmYXVsdCAnc2hvcnRUaW1lJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBmaWxlcyBgeyB1cmw6ICdmaWxlIHVybCcsIGljb246ICdmaWxlIGljb24gY2xhc3MnIH1gXG4gICAqL1xuICBASW5wdXQoKSBmaWxlczogTmJDaGF0TWVzc2FnZUZpbGVbXTtcblxuICAvKipcbiAgICogUXVvdGVkIG1lc3NhZ2UgdGV4dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgcXVvdGU6IHN0cmluZztcblxuICAvKipcbiAgICogTWFwIGxhdGl0dWRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBASW5wdXQoKSBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXAgbG9uZ2l0dWRlXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBASW5wdXQoKSBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kIGF2YXRhclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGF2YXRhcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hdmF0YXJTdHlsZSA9IHZhbHVlID8gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHt2YWx1ZX0pYCkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdHlwZSwgYXZhaWxhYmxlIG9wdGlvbnMgYHRleHR8ZmlsZXxtYXB8cXVvdGVgXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgd2hpY2ggd2lsbCBiZSBzZXQgYXMgY3VzdG9tIG1lc3NhZ2UgdGVtcGxhdGUgY29udGV4dFxuICAgKiBAdHlwZSB7YW55fVxuICAgKi9cbiAgQElucHV0KCkgY3VzdG9tTWVzc2FnZURhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByb3RlY3RlZCBjdXN0b21NZXNzYWdlU2VydmljZTogTmJDaGF0Q3VzdG9tTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgZ2V0SW5pdGlhbHMoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZW5kZXIpIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gdGhpcy5zZW5kZXIuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiBuYW1lc1xuICAgICAgICAubWFwKChuKSA9PiBuLmNoYXJBdCgwKSlcbiAgICAgICAgLnNwbGljZSgwLCAyKVxuICAgICAgICAuam9pbignJylcbiAgICAgICAgLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIF9pc0J1aWx0SW5NZXNzYWdlVHlwZSgpOiBib29sZWFuIHtcbiAgICAvLyBVbnNldCB0eXBlIGRlZmF1bHRzIHRvIFwidGV4dFwiIHR5cGVcbiAgICByZXR1cm4gdGhpcy50eXBlID09IG51bGwgfHwgdGhpcy5idWlsdEluTWVzc2FnZVR5cGVzLmluY2x1ZGVzKHRoaXMudHlwZSk7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IHRoaXMuZ2V0Q3VzdG9tTWVzc2FnZSh0aGlzLnR5cGUpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlLnRlbXBsYXRlUmVmO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlQ29udGV4dCgpOiB7ICRpbXBsaWNpdDogYW55OyBpc1JlcGx5OiBib29sZWFuIH0ge1xuICAgIHJldHVybiB7ICRpbXBsaWNpdDogdGhpcy5jdXN0b21NZXNzYWdlRGF0YSwgaXNSZXBseTogdGhpcy5yZXBseSB9O1xuICB9XG5cbiAgX2FyZURlZmF1bHRTdHlsZXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUgPSB0aGlzLmdldEN1c3RvbU1lc3NhZ2UodGhpcy50eXBlKTtcbiAgICByZXR1cm4gIWN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUubm9TdHlsZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q3VzdG9tTWVzc2FnZSh0eXBlOiBzdHJpbmcpOiBOYkNoYXRDdXN0b21NZXNzYWdlRGlyZWN0aXZlIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlRGlyZWN0aXZlID0gdGhpcy5jdXN0b21NZXNzYWdlU2VydmljZS5nZXRJbnN0YW5jZSh0eXBlKTtcbiAgICBpZiAoIWN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5iLWNoYXQ6IENhbid0IGZpbmQgdGVtcGxhdGUgZm9yIGN1c3RvbSB0eXBlICcke3R5cGV9Jy4gYCArXG4gICAgICAgICAgYE1ha2Ugc3VyZSB5b3UgcHJvdmlkZSBpdCBpbiB0aGUgY2hhdCBjb21wb25lbnQgd2l0aCAqbmJDdXN0b21NZXNzYWdlPScke3R5cGV9Jy5gLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2VEaXJlY3RpdmU7XG4gIH1cbn1cbiJdfQ==