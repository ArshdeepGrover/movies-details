/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Chat message component.
 */
export class NbChatMessageTextComponent {
    constructor() {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
}
NbChatMessageTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbChatMessageTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatMessageTextComponent, selector: "nb-chat-message-text", inputs: { sender: "sender", message: "message", date: "date", dateFormat: "dateFormat" }, ngImport: i0, template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date  | date: dateFormat }}</time></p>
    <p class="text" *ngIf="message">{{ message }}</p>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "date": i1.DatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-message-text',
                    template: `
    <p class="sender" *ngIf="sender || date">{{ sender }} <time>{{ date  | date: dateFormat }}</time></p>
    <p class="text" *ngIf="message">{{ message }}</p>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { sender: [{
                type: Input
            }], message: [{
                type: Input
            }], date: [{
                type: Input
            }], dateFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tZXNzYWdlLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NoYXQvY2hhdC1tZXNzYWdlLXRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRTFFOztHQUVHO0FBU0gsTUFBTSxPQUFPLDBCQUEwQjtJQVJ2QztRQTRCRTs7O1dBR0c7UUFDTSxlQUFVLEdBQVcsV0FBVyxDQUFDO0tBRTNDOzt1SEExQlksMEJBQTBCOzJHQUExQiwwQkFBMEIsc0pBTjNCOzs7R0FHVDsyRkFHVSwwQkFBMEI7a0JBUnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OEJBT1UsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLE9BQU87c0JBQWYsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBTUcsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBDaGF0IG1lc3NhZ2UgY29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jaGF0LW1lc3NhZ2UtdGV4dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHAgY2xhc3M9XCJzZW5kZXJcIiAqbmdJZj1cInNlbmRlciB8fCBkYXRlXCI+e3sgc2VuZGVyIH19IDx0aW1lPnt7IGRhdGUgIHwgZGF0ZTogZGF0ZUZvcm1hdCB9fTwvdGltZT48L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0XCIgKm5nSWY9XCJtZXNzYWdlXCI+e3sgbWVzc2FnZSB9fTwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2hhdE1lc3NhZ2VUZXh0Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHNlbmRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmRlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmQgZGF0ZVxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpIGRhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZCBkYXRlIGZvcm1hdCwgZGVmYXVsdCAnc2hvcnRUaW1lJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ3Nob3J0VGltZSc7XG5cbn1cbiJdfQ==