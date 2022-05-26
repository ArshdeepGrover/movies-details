import * as i0 from "@angular/core";
/**
 * Chat message component.
 */
export declare class NbChatMessageQuoteComponent {
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
     * Quoted message
     * @type {Date}
     */
    quote: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatMessageQuoteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbChatMessageQuoteComponent, "nb-chat-message-quote", never, { "message": "message"; "sender": "sender"; "date": "date"; "dateFormat": "dateFormat"; "quote": "quote"; }, {}, never, never>;
}
