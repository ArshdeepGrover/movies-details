/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./chat-message-text.component";
import * as i2 from "@angular/common";
/**
 * Chat message component.
 */
export class NbChatMessageQuoteComponent {
    constructor() {
        /**
          * Message send date format, default 'shortTime'
          * @type {string}
          */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageQuoteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageQuoteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbChatMessageQuoteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatMessageQuoteComponent, selector: "nb-chat-message-quote", inputs: { message: "message", sender: "sender", date: "date", dateFormat: "dateFormat", quote: "quote" }, ngImport: i0, template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date | date: dateFormat }}</time></p>
    <p class="quote">
      {{ quote }}
    </p>
    <nb-chat-message-text [message]="message">
      {{ message }}
    </nb-chat-message-text>
  `, isInline: true, components: [{ type: i1.NbChatMessageTextComponent, selector: "nb-chat-message-text", inputs: ["sender", "message", "date", "dateFormat"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "date": i2.DatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageQuoteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-message-quote',
                    template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date | date: dateFormat }}</time></p>
    <p class="quote">
      {{ quote }}
    </p>
    <nb-chat-message-text [message]="message">
      {{ message }}
    </nb-chat-message-text>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { message: [{
                type: Input
            }], sender: [{
                type: Input
            }], date: [{
                type: Input
            }], dateFormat: [{
                type: Input
            }], quote: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tZXNzYWdlLXF1b3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jaGF0L2NoYXQtbWVzc2FnZS1xdW90ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTFFOztHQUVHO0FBY0gsTUFBTSxPQUFPLDJCQUEyQjtJQWJ4QztRQWlDQzs7O1lBR0k7UUFDTSxlQUFVLEdBQVcsV0FBVyxDQUFDO0tBUTNDOzt3SEFoQ1ksMkJBQTJCOzRHQUEzQiwyQkFBMkIsdUtBWDVCOzs7Ozs7OztHQVFUOzJGQUdVLDJCQUEyQjtrQkFidkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQU9VLE9BQU87c0JBQWYsS0FBSztnQkFNRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIENoYXQgbWVzc2FnZSBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNoYXQtbWVzc2FnZS1xdW90ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAgY2xhc3M9XCJzZW5kZXJcIiAqbmdJZj1cInNlbmRlciB8fCBkYXRlXCI+e3sgc2VuZGVyIH19IDx0aW1lPnt7IGRhdGUgfCBkYXRlOiBkYXRlRm9ybWF0IH19PC90aW1lPjwvcD5cbiAgICA8cCBjbGFzcz1cInF1b3RlXCI+XG4gICAgICB7eyBxdW90ZSB9fVxuICAgIDwvcD5cbiAgICA8bmItY2hhdC1tZXNzYWdlLXRleHQgW21lc3NhZ2VdPVwibWVzc2FnZVwiPlxuICAgICAge3sgbWVzc2FnZSB9fVxuICAgIDwvbmItY2hhdC1tZXNzYWdlLXRleHQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRNZXNzYWdlUXVvdGVDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmRlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmRlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgc2VuZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZCBkYXRlXG4gICAqIEB0eXBlIHtEYXRlfVxuICAgKi9cbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcblxuIC8qKlxuICAgKiBNZXNzYWdlIHNlbmQgZGF0ZSBmb3JtYXQsIGRlZmF1bHQgJ3Nob3J0VGltZSdcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdzaG9ydFRpbWUnO1xuXG4gIC8qKlxuICAgKiBRdW90ZWQgbWVzc2FnZVxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpIHF1b3RlOiBzdHJpbmc7XG5cbn1cbiJdfQ==