/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NbComponentOrCustomStatus } from '../component-status';
import * as i0 from "@angular/core";
/**
 * Chat form component.
 *
 * Show a message form with a send message button.
 *
 * ```ts
 * <nb-chat-form showButton="true" buttonIcon="nb-send">
 * </nb-chat-form>
 * ```
 *
 * When `[dropFiles]="true"` handles files drag&drop with a file preview.
 *
 * Drag & drop available for files and images:
 * @stacked-example(Drag & Drop Chat, chat/chat-drop.component)
 *
 * New message could be tracked outside by using `(send)` output.
 *
 * ```ts
 * <nb-chat-form (send)="onNewMessage($event)">
 * </nb-chat-form>
 *
 * // ...
 *
 * onNewMessage({ message: string, files: any[] }) {
 *   this.service.sendToServer(message, files);
 * }
 * ```
 */
export declare class NbChatFormComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    status: NbComponentOrCustomStatus;
    inputFocus: boolean;
    inputHover: boolean;
    droppedFiles: any[];
    imgDropTypes: string[];
    /**
     * Predefined message text
     * @type {string}
     */
    message: string;
    /**
     * Message placeholder text
     * @type {string}
     */
    messagePlaceholder: string;
    /**
     * Send button title
     * @type {string}
     */
    buttonTitle: string;
    /**
     * Send button icon, shown if `buttonTitle` is empty
     * @type {string}
     */
    buttonIcon: string;
    /**
     * Show send button
     * @type {boolean}
     */
    showButton: boolean;
    /**
     * Show send button
     * @type {boolean}
     */
    dropFiles: boolean;
    /**
     * File drop placeholder text
     * @type {string}
     */
    dropFilePlaceholder: string;
    /**
     *
     * @type {EventEmitter<{ message: string, files: File[] }>}
     */
    send: EventEmitter<{
        message: string;
        files: File[];
    }>;
    /**
     * Emits when message input value has been changed
     * @type {EventEmitter<string>}
     */
    onInputChange: EventEmitter<string>;
    fileOver: boolean;
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    onDrop(event: any): void;
    removeFile(file: any): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    sendMessage(): void;
    setStatus(status: NbComponentOrCustomStatus): void;
    getInputStatus(): NbComponentOrCustomStatus;
    getButtonStatus(): NbComponentOrCustomStatus;
    protected getHighlightStatus(): NbComponentOrCustomStatus;
    onModelChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatFormComponent, "nb-chat-form", never, { "message": "message"; "messagePlaceholder": "messagePlaceholder"; "buttonTitle": "buttonTitle"; "buttonIcon": "buttonIcon"; "showButton": "showButton"; "dropFiles": "dropFiles"; "dropFilePlaceholder": "dropFilePlaceholder"; }, { "send": "send"; "onInputChange": "onInputChange"; }, never, never>;
}
