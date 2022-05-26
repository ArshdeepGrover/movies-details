/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, ViewChild, ContentChildren, ContentChild, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbChatFormComponent } from './chat-form.component';
import { NbChatMessageComponent } from './chat-message.component';
import { NbChatCustomMessageService } from './chat-custom-message.service';
import { NbChatTitleDirective } from './chat-title.directive';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
import * as i2 from "@angular/common";
/**
 * Conversational UI collection - a set of components for chat-like UI construction.
 *
 * Main features:
 * - different message types support (text, image, file, file group, map, etc)
 * - drag & drop for images and files with preview
 * - different UI styles
 * - custom action buttons (coming soon)
 *
 * Here's a complete example build in a bot-like app. Type `help` to be able to receive different message types.
 * Enjoy the conversation and the beautiful UI.
 * @stacked-example(Showcase, chat/chat-showcase.component)
 *
 * Basic chat configuration and usage:
 * ```ts
 * <nb-chat title="Nebular Conversational UI">
 *       <nb-chat-message *ngFor="let msg of messages"
 *                        [type]="msg.type"
 *                        [message]="msg.text"
 *                        [reply]="msg.reply"
 *                        [sender]="msg.user.name"
 *                        [date]="msg.date"
 *                        [files]="msg.files"
 *                        [quote]="msg.quote"
 *                        [latitude]="msg.latitude"
 *                        [longitude]="msg.longitude"
 *                        [avatar]="msg.user.avatar">
 *   </nb-chat-message>
 *
 *   <nb-chat-form (send)="sendMessage($event)" [dropFiles]="true">
 *   </nb-chat-form>
 * </nb-chat>
 * ```
 * ### Installation
 *
 * Import `NbChatModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 *
 * If you need to provide an API key for a `map` message type (which is required by Google Maps)
 * you may use `NbChatModule.forRoot({ ... })` call if this is a global app configuration
 * or `NbChatModule.forChild({ ... })` for a feature module configuration:
 *
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * There are three main components:
 * ```ts
 * <nb-chat>
 * </nb-chat> // chat container
 *
 * <nb-chat-form>
 * </nb-chat-form> // chat form with drag&drop files feature
 *
 * <nb-chat-message>
 * </nb-chat-message> // chat message, available multiple types
 * ```
 *
 * You could provide a title template via the `nbChatTitle` directive. It overrides `title` input.
 * @stacked-example(Custom template as a title, chat/chat-template-title.component)
 *
 * Two users conversation showcase:
 * @stacked-example(Conversation, chat/chat-conversation-showcase.component)
 *
 * Chat UI is also available in different colors by specifying a `[status]` input:
 *
 * @stacked-example(Colored Chat, chat/chat-colors.component)
 *
 * Also it is possible to configure sizes through `[size]` input:
 *
 * @stacked-example(Chat Sizes, chat/chat-sizes.component)
 *
 * # Custom message types
 *
 * Besides built-in message types, you could provide custom ones with their own template to render.
 * As an example, let's add the `link` message type.
 * <br>
 * First, you need to provide a template for the `link` message type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 * </nb-chat>
 * ```
 * Then, add the `nb-chat-message` component with the `link` type:
 * ```html
 * <nb-chat>
 *   <a *nbCustomMessage="'link'" href="https://example.com">example.com</a>
 *   <nb-chat-message type="link"></nb-chat-message>
 * </nb-chat>
 * ```
 *
 * <div class="note note-warning">
 *   <div class="note-title">Important!</div>
 *   <div class="note-body">
 *     Custom chat messages must be defined before the `nb-chat-message`.
 *   </div>
 * </div>
 *
 * Custom message templates could have arbitrary data associated with them. Let's extract hardcoded link
 * href and text. To pass some data to the custom message template, use the `customMessageData` input
 * of the `nb-chat-message` component:
 * ```html
 * ...
 * <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 * </nb-chat-message>
 * ...
 * ```
 * When `customMessageData` is set, this object would become a template context and you'll be able
 * to reference it via `let varName` syntax:
 * ```html
 * <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 * ```
 *
 * That's it, full example will look like this:
 * ```html
 * <nb-chat title="Nebular Conversational UI">
 *   <a *nbCustomMessage="'link'; let data" [href]="data.href">{{ data.text }}</a>
 *   <nb-chat-message type="link" [customMessageData]="{ href: 'https://example.com', text: 'example.com' }">
 *   </nb-chat-message>
 * </nb-chat>
 * ```
 *
 * If you want to style your custom template from the ground up you could turn off generic message styling
 * (such as round borders, color, background, etc.) via the `noStyles` input:
 * ```html
 *   <div *nbCustomMessage="'my-custom-type'; noStyles: true">...</div>
 * ```
 * When you decide to use your own styles, the `isReply` property of the custom message template context
 * would come in handy. This property allows you to determine whether the message is a reply or not.
 * For example, to change link text color (as replies have a different background):
 * ```html
 * <a *nbCustomMessage="'link'; let data; let isReply=isReply"
 *    [href]="data.href"
 *    [class.link-control]="!isReply">
 *   {{ data.label }}
 * </a>
 * ```
 *
 * Below, you could find a more complex example with multiple custom message types:
 * @stacked-example(Custom message, chat/chat-custom-message.component)
 *
 * @styles
 *
 * chat-background-color:
 * chat-border:
 * chat-border-radius:
 * chat-shadow:
 * chat-padding:
 * chat-scrollbar-color:
 * chat-scrollbar-background-color:
 * chat-scrollbar-width:
 * chat-text-color:
 * chat-text-font-family:
 * chat-text-font-size:
 * chat-text-font-weight:
 * chat-text-line-height:
 * chat-header-text-font-family:
 * chat-header-text-font-size:
 * chat-header-text-font-weight:
 * chat-header-text-line-height:
 * chat-tiny-height:
 * chat-small-height:
 * chat-medium-height:
 * chat-large-height:
 * chat-giant-height:
 * chat-basic-background-color:
 * chat-basic-text-color:
 * chat-primary-background-color:
 * chat-primary-text-color:
 * chat-success-background-color:
 * chat-success-text-color:
 * chat-info-background-color:
 * chat-info-text-color:
 * chat-warning-background-color:
 * chat-warning-text-color:
 * chat-danger-background-color:
 * chat-danger-text-color:
 * chat-control-background-color:
 * chat-control-text-color:
 * chat-divider-color:
 * chat-divider-style:
 * chat-divider-width:
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
export class NbChatComponent {
    constructor(statusService) {
        this.statusService = statusService;
        /**
         * Chat status color (adds specific styles):
         * `basic` (default), `primary`, `success`, `info`, `warning`, `danger`, `control`.
         */
        this.status = 'basic';
        this.noMessagesPlaceholder = 'No messages yet.';
        this._scrollBottom = true;
    }
    /**
     * Scroll chat to the bottom of the list when a new message arrives
     */
    get scrollBottom() {
        return this._scrollBottom;
    }
    set scrollBottom(value) {
        this._scrollBottom = convertToBoolProperty(value);
    }
    ngOnChanges(changes) {
        if ('status' in changes) {
            this.updateFormStatus();
        }
    }
    ngAfterContentInit() {
        this.updateFormStatus();
    }
    ngAfterViewInit() {
        this.messages.changes.subscribe((messages) => {
            this.messages = messages;
            this.updateView();
        });
        this.updateView();
    }
    updateView() {
        if (this.scrollBottom) {
            this.scrollListBottom();
        }
    }
    scrollListBottom() {
        this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
    }
    updateFormStatus() {
        if (this.chatForm) {
            this.chatForm.setStatus(this.status);
        }
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
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get info() {
        return this.status === 'info';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
}
NbChatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatComponent, deps: [{ token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbChatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatComponent, selector: "nb-chat", inputs: { title: "title", size: "size", status: "status", noMessagesPlaceholder: "noMessagesPlaceholder", scrollBottom: "scrollBottom" }, host: { properties: { "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.status-primary": "this.primary", "class.status-success": "this.success", "class.status-info": "this.info", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses" } }, providers: [NbChatCustomMessageService], queries: [{ propertyName: "chatForm", first: true, predicate: NbChatFormComponent, descendants: true }, { propertyName: "titleTemplate", first: true, predicate: NbChatTitleDirective, descendants: true }, { propertyName: "messages", predicate: NbChatMessageComponent }], viewQueries: [{ propertyName: "scrollable", first: true, predicate: ["scrollable"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="header">
      <ng-container
        *ngIf="titleTemplate; else textTitleTemplate"
        [ngTemplateOutlet]="titleTemplate.templateRef"
        [ngTemplateOutletContext]="{ $implicit: titleTemplate.context }"
      >
      </ng-container>
      <ng-template #textTitleTemplate>
        {{ title }}
      </ng-template>
    </div>

    <div class="scrollable" #scrollable>
      <div class="messages">
        <ng-content select="nb-chat-message"></ng-content>
        <p class="no-messages" *ngIf="!messages?.length">{{ noMessagesPlaceholder }}</p>
      </div>
    </div>
    <div class="form">
      <ng-content select="nb-chat-form"></ng-content>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;position:relative;height:100%}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-chat', template: `
    <div class="header">
      <ng-container
        *ngIf="titleTemplate; else textTitleTemplate"
        [ngTemplateOutlet]="titleTemplate.templateRef"
        [ngTemplateOutletContext]="{ $implicit: titleTemplate.context }"
      >
      </ng-container>
      <ng-template #textTitleTemplate>
        {{ title }}
      </ng-template>
    </div>

    <div class="scrollable" #scrollable>
      <div class="messages">
        <ng-content select="nb-chat-message"></ng-content>
        <p class="no-messages" *ngIf="!messages?.length">{{ noMessagesPlaceholder }}</p>
      </div>
    </div>
    <div class="form">
      <ng-content select="nb-chat-form"></ng-content>
    </div>
  `, providers: [NbChatCustomMessageService], styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host{display:flex;flex-direction:column;position:relative;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbStatusService }]; }, propDecorators: { title: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], noMessagesPlaceholder: [{
                type: Input
            }], scrollBottom: [{
                type: Input
            }], scrollable: [{
                type: ViewChild,
                args: ['scrollable']
            }], messages: [{
                type: ContentChildren,
                args: [NbChatMessageComponent]
            }], chatForm: [{
                type: ContentChild,
                args: [NbChatFormComponent]
            }], titleTemplate: [{
                type: ContentChild,
                args: [NbChatTitleDirective]
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
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFFVCxlQUFlLEVBR2YsWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnTkc7QUE2QkgsTUFBTSxPQUFPLGVBQWU7SUFtQzFCLFlBQXNCLGFBQThCO1FBQTlCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQTFCcEQ7OztXQUdHO1FBQ00sV0FBTSxHQUE4QixPQUFPLENBQUM7UUFFNUMsMEJBQXFCLEdBQVcsa0JBQWtCLENBQUM7UUFZbEQsa0JBQWEsR0FBWSxJQUFJLENBQUM7SUFRZSxDQUFDO0lBbEJ4RDs7T0FFRztJ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Vzt1QkFBQyxzQkFBc0I7Z0JBTS9CLGlCQUFpQjtzQkFEcEIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYlN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdGF0dXMuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudFNpemUgfSBmcm9tICcuLi9jb21wb25lbnQtc2l6ZSc7XG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9Cb29sUHJvcGVydHksIE5iQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkNoYXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0Q3VzdG9tTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL2NoYXQtY3VzdG9tLW1lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBOYkNoYXRUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vY2hhdC10aXRsZS5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIENvbnZlcnNhdGlvbmFsIFVJIGNvbGxlY3Rpb24gLSBhIHNldCBvZiBjb21wb25lbnRzIGZvciBjaGF0LWxpa2UgVUkgY29uc3RydWN0aW9uLlxuICpcbiAqIE1haW4gZmVhdHVyZXM6XG4gKiAtIGRpZmZlcmVudCBtZXNzYWdlIHR5cGVzIHN1cHBvcnQgKHRleHQsIGltYWdlLCBmaWxlLCBmaWxlIGdyb3VwLCBtYXAsIGV0YylcbiAqIC0gZHJhZyAmIGRyb3AgZm9yIGltYWdlcyBhbmQgZmlsZXMgd2l0aCBwcmV2aWV3XG4gKiAtIGRpZmZlcmVudCBVSSBzdHlsZXNcbiAqIC0gY3VzdG9tIGFjdGlvbiBidXR0b25zIChjb21pbmcgc29vbilcbiAqXG4gKiBIZXJlJ3MgYSBjb21wbGV0ZSBleGFtcGxlIGJ1aWxkIGluIGEgYm90LWxpa2UgYXBwLiBUeXBlIGBoZWxwYCB0byBiZSBhYmxlIHRvIHJlY2VpdmUgZGlmZmVyZW50IG1lc3NhZ2UgdHlwZXMuXG4gKiBFbmpveSB0aGUgY29udmVyc2F0aW9uIGFuZCB0aGUgYmVhdXRpZnVsIFVJLlxuICogQHN0YWNrZWQtZXhhbXBsZShTaG93Y2FzZSwgY2hhdC9jaGF0LXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBCYXNpYyBjaGF0IGNvbmZpZ3VyYXRpb24gYW5kIHVzYWdlOlxuICogYGBgdHNcbiAqIDxuYi1jaGF0IHRpdGxlPVwiTmVidWxhciBDb252ZXJzYXRpb25hbCBVSVwiPlxuICogICAgICAgPG5iLWNoYXQtbWVzc2FnZSAqbmdGb3I9XCJsZXQgbXNnIG9mIG1lc3NhZ2VzXCJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwibXNnLnR5cGVcIlxuICogICAgICAgICAgICAgICAgICAgICAgICBbbWVzc2FnZV09XCJtc2cudGV4dFwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXBseV09XCJtc2cucmVwbHlcIlxuICogICAgICAgICAgICAgICAgICAgICAgICBbc2VuZGVyXT1cIm1zZy51c2VyLm5hbWVcIlxuICogICAgICAgICAgICAgICAgICAgICAgICBbZGF0ZV09XCJtc2cuZGF0ZVwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWxlc109XCJtc2cuZmlsZXNcIlxuICogICAgICAgICAgICAgICAgICAgICAgICBbcXVvdGVdPVwibXNnLnF1b3RlXCJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgW2xhdGl0dWRlXT1cIm1zZy5sYXRpdHVkZVwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFtsb25naXR1ZGVdPVwibXNnLmxvbmdpdHVkZVwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFthdmF0YXJdPVwibXNnLnVzZXIuYXZhdGFyXCI+XG4gKiAgIDwvbmItY2hhdC1tZXNzYWdlPlxuICpcbiAqICAgPG5iLWNoYXQtZm9ybSAoc2VuZCk9XCJzZW5kTWVzc2FnZSgkZXZlbnQpXCIgW2Ryb3BGaWxlc109XCJ0cnVlXCI+XG4gKiAgIDwvbmItY2hhdC1mb3JtPlxuICogPC9uYi1jaGF0PlxuICogYGBgXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYkNoYXRNb2R1bGVgIHRvIHlvdXIgZmVhdHVyZSBtb2R1bGUuXG4gKiBgYGB0c1xuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iQ2hhdE1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICpcbiAqIElmIHlvdSBuZWVkIHRvIHByb3ZpZGUgYW4gQVBJIGtleSBmb3IgYSBgbWFwYCBtZXNzYWdlIHR5cGUgKHdoaWNoIGlzIHJlcXVpcmVkIGJ5IEdvb2dsZSBNYXBzKVxuICogeW91IG1heSB1c2UgYE5iQ2hhdE1vZHVsZS5mb3JSb290KHsgLi4uIH0pYCBjYWxsIGlmIHRoaXMgaXMgYSBnbG9iYWwgYXBwIGNvbmZpZ3VyYXRpb25cbiAqIG9yIGBOYkNoYXRNb2R1bGUuZm9yQ2hpbGQoeyAuLi4gfSlgIGZvciBhIGZlYXR1cmUgbW9kdWxlIGNvbmZpZ3VyYXRpb246XG4gKlxuICogYGBgdHNcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYkNoYXRNb2R1bGUuZm9yUm9vdCh7IG1lc3NhZ2VHb29nbGVNYXBLZXk6ICdNQVBfS0VZJyB9KSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogVGhlcmUgYXJlIHRocmVlIG1haW4gY29tcG9uZW50czpcbiAqIGBgYHRzXG4gKiA8bmItY2hhdD5cbiAqIDwvbmItY2hhdD4gLy8gY2hhdCBjb250YWluZXJcbiAqXG4gKiA8bmItY2hhdC1mb3JtPlxuICogPC9uYi1jaGF0LWZvcm0+IC8vIGNoYXQgZm9ybSB3aXRoIGRyYWcmZHJvcCBmaWxlcyBmZWF0dXJlXG4gKlxuICogPG5iLWNoYXQtbWVzc2FnZT5cbiAqIDwvbmItY2hhdC1tZXNzYWdlPiAvLyBjaGF0IG1lc3NhZ2UsIGF2YWlsYWJsZSBtdWx0aXBsZSB0eXBlc1xuICogYGBgXG4gKlxuICogWW91IGNvdWxkIHByb3ZpZGUgYSB0aXRsZSB0ZW1wbGF0ZSB2aWEgdGhlIGBuYkNoYXRUaXRsZWAgZGlyZWN0aXZlLiBJdCBvdmVycmlkZXMgYHRpdGxlYCBpbnB1dC5cbiAqIEBzdGFja2VkLWV4YW1wbGUoQ3VzdG9tIHRlbXBsYXRlIGFzIGEgdGl0bGUsIGNoYXQvY2hhdC10ZW1wbGF0ZS10aXRsZS5jb21wb25lbnQpXG4gKlxuICogVHdvIHVzZXJzIGNvbnZlcnNhdGlvbiBzaG93Y2FzZTpcbiAqIEBzdGFja2VkLWV4YW1wbGUoQ29udmVyc2F0aW9uLCBjaGF0L2NoYXQtY29udmVyc2F0aW9uLXNob3djYXNlLmNvbXBvbmVudClcbiAqXG4gKiBDaGF0IFVJIGlzIGFsc28gYXZhaWxhYmxlIGluIGRpZmZlcmVudCBjb2xvcnMgYnkgc3BlY2lmeWluZyBhIGBbc3RhdHVzXWAgaW5wdXQ6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShDb2xvcmVkIENoYXQsIGNoYXQvY2hhdC1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIEFsc28gaXQgaXMgcG9zc2libGUgdG8gY29uZmlndXJlIHNpemVzIHRocm91Z2ggYFtzaXplXWAgaW5wdXQ6XG4gKlxuICogQHN0YWNrZWQtZXhhbXBsZShDaGF0IFNpemVzLCBjaGF0L2NoYXQtc2l6ZXMuY29tcG9uZW50KVxuICpcbiAqICMgQ3VzdG9tIG1lc3NhZ2UgdHlwZXNcbiAqXG4gKiBCZXNpZGVzIGJ1aWx0LWluIG1lc3NhZ2UgdHlwZXMsIHlvdSBjb3VsZCBwcm92aWRlIGN1c3RvbSBvbmVzIHdpdGggdGhlaXIgb3duIHRlbXBsYXRlIHRvIHJlbmRlci5cbiAqIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0aGUgYGxpbmtgIG1lc3NhZ2UgdHlwZS5cbiAqIDxicj5cbiAqIEZpcnN0LCB5b3UgbmVlZCB0byBwcm92aWRlIGEgdGVtcGxhdGUgZm9yIHRoZSBgbGlua2AgbWVzc2FnZSB0eXBlOlxuICogYGBgaHRtbFxuICogPG5iLWNoYXQ+XG4gKiAgIDxhICpuYkN1c3RvbU1lc3NhZ2U9XCInbGluaydcIiBocmVmPVwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiPmV4YW1wbGUuY29tPC9hPlxuICogPC9uYi1jaGF0PlxuICogYGBgXG4gKiBUaGVuLCBhZGQgdGhlIGBuYi1jaGF0LW1lc3NhZ2VgIGNvbXBvbmVudCB3aXRoIHRoZSBgbGlua2AgdHlwZTpcbiAqIGBgYGh0bWxcbiAqIDxuYi1jaGF0PlxuICogICA8YSAqbmJDdXN0b21NZXNzYWdlPVwiJ2xpbmsnXCIgaHJlZj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIj5leGFtcGxlLmNvbTwvYT5cbiAqICAgPG5iLWNoYXQtbWVzc2FnZSB0eXBlPVwibGlua1wiPjwvbmItY2hhdC1tZXNzYWdlPlxuICogPC9uYi1jaGF0PlxuICogYGBgXG4gKlxuICogPGRpdiBjbGFzcz1cIm5vdGUgbm90ZS13YXJuaW5nXCI+XG4gKiAgIDxkaXYgY2xhc3M9XCJub3RlLXRpdGxlXCI+SW1wb3J0YW50ITwvZGl2PlxuICogICA8ZGl2IGNsYXNzPVwibm90ZS1ib2R5XCI+XG4gKiAgICAgQ3VzdG9tIGNoYXQgbWVzc2FnZXMgbXVzdCBiZSBkZWZpbmVkIGJlZm9yZSB0aGUgYG5iLWNoYXQtbWVzc2FnZWAuXG4gKiAgIDwvZGl2PlxuICogPC9kaXY+XG4gKlxuICogQ3VzdG9tIG1lc3NhZ2UgdGVtcGxhdGVzIGNvdWxkIGhhdmUgYXJiaXRyYXJ5IGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZW0uIExldCdzIGV4dHJhY3QgaGFyZGNvZGVkIGxpbmtcbiAqIGhyZWYgYW5kIHRleHQuIFRvIHBhc3Mgc29tZSBkYXRhIHRvIHRoZSBjdXN0b20gbWVzc2FnZSB0ZW1wbGF0ZSwgdXNlIHRoZSBgY3VzdG9tTWVzc2FnZURhdGFgIGlucHV0XG4gKiBvZiB0aGUgYG5iLWNoYXQtbWVzc2FnZWAgY29tcG9uZW50OlxuICogYGBgaHRtbFxuICogLi4uXG4gKiA8bmItY2hhdC1tZXNzYWdlIHR5cGU9XCJsaW5rXCIgW2N1c3RvbU1lc3NhZ2VEYXRhXT1cInsgaHJlZjogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLCB0ZXh0OiAnZXhhbXBsZS5jb20nIH1cIj5cbiAqIDwvbmItY2hhdC1tZXNzYWdlPlxuICogLi4uXG4gKiBgYGBcbiAqIFdoZW4gYGN1c3RvbU1lc3NhZ2VEYXRhYCBpcyBzZXQsIHRoaXMgb2JqZWN0IHdvdWxkIGJlY29tZSBhIHRlbXBsYXRlIGNvbnRleHQgYW5kIHlvdSdsbCBiZSBhYmxlXG4gKiB0byByZWZlcmVuY2UgaXQgdmlhIGBsZXQgdmFyTmFtZWAgc3ludGF4OlxuICogYGBgaHRtbFxuICogPGEgKm5iQ3VzdG9tTWVzc2FnZT1cIidsaW5rJzsgbGV0IGRhdGFcIiBbaHJlZl09XCJkYXRhLmhyZWZcIj57eyBkYXRhLnRleHQgfX08L2E+XG4gKiBgYGBcbiAqXG4gKiBUaGF0J3MgaXQsIGZ1bGwgZXhhbXBsZSB3aWxsIGxvb2sgbGlrZSB0aGlzOlxuICogYGBgaHRtbFxuICogPG5iLWNoYXQgdGl0bGU9XCJOZWJ1bGFyIENvbnZlcnNhdGlvbmFsIFVJXCI+XG4gKiAgIDxhICpuYkN1c3RvbU1lc3NhZ2U9XCInbGluayc7IGxldCBkYXRhXCIgW2hyZWZdPVwiZGF0YS5ocmVmXCI+e3sgZGF0YS50ZXh0IH19PC9hPlxuICogICA8bmItY2hhdC1tZXNzYWdlIHR5cGU9XCJsaW5rXCIgW2N1c3RvbU1lc3NhZ2VEYXRhXT1cInsgaHJlZjogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLCB0ZXh0OiAnZXhhbXBsZS5jb20nIH1cIj5cbiAqICAgPC9uYi1jaGF0LW1lc3NhZ2U+XG4gKiA8L25iLWNoYXQ+XG4gKiBgYGBcbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBzdHlsZSB5b3VyIGN1c3RvbSB0ZW1wbGF0ZSBmcm9tIHRoZSBncm91bmQgdXAgeW91IGNvdWxkIHR1cm4gb2ZmIGdlbmVyaWMgbWVzc2FnZSBzdHlsaW5nXG4gKiAoc3VjaCBhcyByb3VuZCBib3JkZXJzLCBjb2xvciwgYmFja2dyb3VuZCwgZXRjLikgdmlhIHRoZSBgbm9TdHlsZXNgIGlucHV0OlxuICogYGBgaHRtbFxuICogICA8ZGl2ICpuYkN1c3RvbU1lc3NhZ2U9XCInbXktY3VzdG9tLXR5cGUnOyBub1N0eWxlczogdHJ1ZVwiPi4uLjwvZGl2PlxuICogYGBgXG4gKiBXaGVuIHlvdSBkZWNpZGUgdG8gdXNlIHlvdXIgb3duIHN0eWxlcywgdGhlIGBpc1JlcGx5YCBwcm9wZXJ0eSBvZiB0aGUgY3VzdG9tIG1lc3NhZ2UgdGVtcGxhdGUgY29udGV4dFxuICogd291bGQgY29tZSBpbiBoYW5keS4gVGhpcyBwcm9wZXJ0eSBhbGxvd3MgeW91IHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBtZXNzYWdlIGlzIGEgcmVwbHkgb3Igbm90LlxuICogRm9yIGV4YW1wbGUsIHRvIGNoYW5nZSBsaW5rIHRleHQgY29sb3IgKGFzIHJlcGxpZXMgaGF2ZSBhIGRpZmZlcmVudCBiYWNrZ3JvdW5kKTpcbiAqIGBgYGh0bWxcbiAqIDxhICpuYkN1c3RvbU1lc3NhZ2U9XCInbGluayc7IGxldCBkYXRhOyBsZXQgaXNSZXBseT1pc1JlcGx5XCJcbiAqICAgIFtocmVmXT1cImRhdGEuaHJlZlwiXG4gKiAgICBbY2xhc3MubGluay1jb250cm9sXT1cIiFpc1JlcGx5XCI+XG4gKiAgIHt7IGRhdGEubGFiZWwgfX1cbiAqIDwvYT5cbiAqIGBgYFxuICpcbiAqIEJlbG93LCB5b3UgY291bGQgZmluZCBhIG1vcmUgY29tcGxleCBleGFtcGxlIHdpdGggbXVsdGlwbGUgY3VzdG9tIG1lc3NhZ2UgdHlwZXM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKEN1c3RvbSBtZXNzYWdlLCBjaGF0L2NoYXQtY3VzdG9tLW1lc3NhZ2UuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiBjaGF0LWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LWJvcmRlcjpcbiAqIGNoYXQtYm9yZGVyLXJhZGl1czpcbiAqIGNoYXQtc2hhZG93OlxuICogY2hhdC1wYWRkaW5nOlxuICogY2hhdC1zY3JvbGxiYXItY29sb3I6XG4gKiBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hhdC1zY3JvbGxiYXItd2lkdGg6XG4gKiBjaGF0LXRleHQtY29sb3I6XG4gKiBjaGF0LXRleHQtZm9udC1mYW1pbHk6XG4gKiBjaGF0LXRleHQtZm9udC1zaXplOlxuICogY2hhdC10ZXh0LWZvbnQtd2VpZ2h0OlxuICogY2hhdC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogY2hhdC1oZWFkZXItdGV4dC1mb250LWZhbWlseTpcbiAqIGNoYXQtaGVhZGVyLXRleHQtZm9udC1zaXplOlxuICogY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodDpcbiAqIGNoYXQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6XG4gKiBjaGF0LXRpbnktaGVpZ2h0OlxuICogY2hhdC1zbWFsbC1oZWlnaHQ6XG4gKiBjaGF0LW1lZGl1bS1oZWlnaHQ6XG4gKiBjaGF0LWxhcmdlLWhlaWdodDpcbiAqIGNoYXQtZ2lhbnQtaGVpZ2h0OlxuICogY2hhdC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hhdC1iYXNpYy10ZXh0LWNvbG9yOlxuICogY2hhdC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LXByaW1hcnktdGV4dC1jb2xvcjpcbiAqIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hhdC1zdWNjZXNzLXRleHQtY29sb3I6XG4gKiBjaGF0LWluZm8tYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoYXQtaW5mby10ZXh0LWNvbG9yOlxuICogY2hhdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LXdhcm5pbmctdGV4dC1jb2xvcjpcbiAqIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOlxuICogY2hhdC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LWNvbnRyb2wtdGV4dC1jb2xvcjpcbiAqIGNoYXQtZGl2aWRlci1jb2xvcjpcbiAqIGNoYXQtZGl2aWRlci1zdHlsZTpcbiAqIGNoYXQtZGl2aWRlci13aWR0aDpcbiAqIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOlxuICogY2hhdC1tZXNzYWdlLXRleHQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2UtcmVwbHktYmFja2dyb3VuZC1jb2xvcjpcbiAqIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOlxuICogY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yOlxuICogY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOlxuICogY2hhdC1tZXNzYWdlLXF1b3RlLWJhY2tncm91bmQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2UtcXVvdGUtdGV4dC1jb2xvcjpcbiAqIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6XG4gKiBjaGF0LW1lc3NhZ2UtZmlsZS1iYWNrZ3JvdW5kLWNvbG9yOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jaGF0JyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJ0aXRsZVRlbXBsYXRlOyBlbHNlIHRleHRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdGl0bGVUZW1wbGF0ZS5jb250ZXh0IH1cIlxuICAgICAgPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI3RleHRUaXRsZVRlbXBsYXRlPlxuICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxhYmxlXCIgI3Njcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXNcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItY2hhdC1tZXNzYWdlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8cCBjbGFzcz1cIm5vLW1lc3NhZ2VzXCIgKm5nSWY9XCIhbWVzc2FnZXM/Lmxlbmd0aFwiPnt7IG5vTWVzc2FnZXNQbGFjZWhvbGRlciB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1jaGF0LWZvcm1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogW05iQ2hhdEN1c3RvbU1lc3NhZ2VTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogQ2hhdCBzaXplLCBhdmFpbGFibGUgc2l6ZXM6XG4gICAqIGB0aW55YCwgYHNtYWxsYCwgYG1lZGl1bWAsIGBsYXJnZWAsIGBnaWFudGBcbiAgICovXG4gIEBJbnB1dCgpIHNpemU6IE5iQ29tcG9uZW50U2l6ZTtcblxuICAvKipcbiAgICogQ2hhdCBzdGF0dXMgY29sb3IgKGFkZHMgc3BlY2lmaWMgc3R5bGVzKTpcbiAgICogYGJhc2ljYCAoZGVmYXVsdCksIGBwcmltYXJ5YCwgYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBjb250cm9sYC5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyA9ICdiYXNpYyc7XG5cbiAgQElucHV0KCkgbm9NZXNzYWdlc1BsYWNlaG9sZGVyOiBzdHJpbmcgPSAnTm8gbWVzc2FnZXMgeWV0Lic7XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBjaGF0IHRvIHRoZSBib3R0b20gb2YgdGhlIGxpc3Qgd2hlbiBhIG5ldyBtZXNzYWdlIGFycml2ZXNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBzY3JvbGxCb3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEJvdHRvbTtcbiAgfVxuICBzZXQgc2Nyb2xsQm90dG9tKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2Nyb2xsQm90dG9tID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX3Njcm9sbEJvdHRvbTogYm9vbGVhbiA9IHRydWU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zY3JvbGxCb3R0b206IE5iQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGFibGUnKSBzY3JvbGxhYmxlOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE5iQ2hhdE1lc3NhZ2VDb21wb25lbnQpIG1lc3NhZ2VzOiBRdWVyeUxpc3Q8TmJDaGF0TWVzc2FnZUNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoTmJDaGF0Rm9ybUNvbXBvbmVudCkgY2hhdEZvcm06IE5iQ2hhdEZvcm1Db21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoTmJDaGF0VGl0bGVEaXJlY3RpdmUpIHRpdGxlVGVtcGxhdGU6IE5iQ2hhdFRpdGxlRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgnc3RhdHVzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZvcm1TdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVGb3JtU3RhdHVzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5jaGFuZ2VzLnN1YnNjcmliZSgobWVzc2FnZXMpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEJvdHRvbSkge1xuICAgICAgdGhpcy5zY3JvbGxMaXN0Qm90dG9tKCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsTGlzdEJvdHRvbSgpIHtcbiAgICB0aGlzLnNjcm9sbGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbGFibGUubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlRm9ybVN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGF0Rm9ybSkge1xuICAgICAgdGhpcy5jaGF0Rm9ybS5zZXRTdGF0dXModGhpcy5zdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS10aW55JylcbiAgZ2V0IHRpbnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3RpbnknO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXNtYWxsJylcbiAgZ2V0IHNtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtbWVkaXVtJylcbiAgZ2V0IG1lZGl1bSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBsYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWdpYW50JylcbiAgZ2V0IGdpYW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdnaWFudCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1wcmltYXJ5JylcbiAgZ2V0IHByaW1hcnkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAncHJpbWFyeSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1zdWNjZXNzJylcbiAgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2Vzcyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1pbmZvJylcbiAgZ2V0IGluZm8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnaW5mbyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy13YXJuaW5nJylcbiAgZ2V0IHdhcm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnd2FybmluZyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1kYW5nZXInKVxuICBnZXQgZGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Rhbmdlcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1iYXNpYycpXG4gIGdldCBiYXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdiYXNpYyc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YXR1cy1jb250cm9sJylcbiAgZ2V0IGNvbnRyb2woKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnY29udHJvbCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGFkZGl0aW9uYWxDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5zdGF0dXNTZXJ2aWNlLmlzQ3VzdG9tU3RhdHVzKHRoaXMuc3RhdHVzKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy5zdGF0dXMpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iXX0=