/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { TemplateRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NbBooleanInput } from '../helpers';
import { NbChatMessageFile } from './chat-message-file.component';
import { NbChatCustomMessageService } from './chat-custom-message.service';
import { NbChatCustomMessageDirective } from './chat-custom-message.directive';
import * as i0 from "@angular/core";
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
export declare class NbChatMessageComponent {
    protected domSanitizer: DomSanitizer;
    protected customMessageService: NbChatCustomMessageService;
    protected readonly builtInMessageTypes: string[];
    avatarStyle: SafeStyle;
    get _addReplyClass(): boolean;
    get _addNotReplyClass(): boolean;
    get _addNoSpaceClass(): boolean;
    get flyInOut(): boolean;
    get notReply(): boolean;
    /**
     * Determines if a message is a reply
     */
    get reply(): boolean;
    set reply(value: boolean);
    protected _reply: boolean;
    static ngAcceptInputType_reply: NbBooleanInput;
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Array of files `{ url: 'file url', icon: 'file icon class' }`
     */
    files: NbChatMessageFile[];
    /**
     * Quoted message text
     * @type {string}
     */
    quote: string;
    /**
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    /**
     * Message send avatar
     * @type {string}
     */
    set avatar(value: string);
    /**
     * Message type, available options `text|file|map|quote`
     * @type {string}
     */
    type: string;
    /**
     * Data which will be set as custom message template context
     * @type {any}
     */
    customMessageData: any;
    constructor(domSanitizer: DomSanitizer, customMessageService: NbChatCustomMessageService);
    getInitials(): string;
    _isBuiltInMessageType(): boolean;
    _getTemplate(): TemplateRef<any>;
    _getTemplateContext(): {
        $implicit: any;
        isReply: boolean;
    };
    _areDefaultStylesEnabled(): boolean;
    protected getCustomMessage(type: string): NbChatCustomMessageDirective;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageComponent, "nb-chat-message", never, { "reply": "reply"; "message": "message"; "sender": "sender"; "date": "date"; "dateFormat": "dateFormat"; "files": "files"; "quote": "quote"; "latitude": "latitude"; "longitude": "longitude"; "avatar": "avatar"; "type": "type"; "customMessageData": "customMessageData"; }, {}, never, never>;
}
