import * as i0 from "@angular/core";
/**
 * Chat message component.
 */
export declare class NbChatMessageTextComponent {
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message sender
     * @type {string}
     */
    message: string;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageTextComponent, "nb-chat-message-text", never, { "sender": "sender"; "message": "message"; "date": "date"; "dateFormat": "dateFormat"; }, {}, never, never>;
}
