/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./chat.options";
import * as i2 from "./chat-message-file.component";
/**
 * Chat message component.
 */
export class NbChatMessageMapComponent {
    constructor(options) {
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
        this.mapKey = options.messageGoogleMapKey;
    }
    get file() {
        return {
            // eslint-disable-next-line max-len
            url: `https://maps.googleapis.com/maps/api/staticmap?center=${this.latitude},${this.longitude}&zoom=12&size=400x400&key=${this.mapKey}`,
            type: 'image/png',
            icon: 'location',
        };
    }
}
NbChatMessageMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageMapComponent, deps: [{ token: i1.NbChatOptions }], target: i0.ɵɵFactoryTarget.Component });
NbChatMessageMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatMessageMapComponent, selector: "nb-chat-message-map", inputs: { message: "message", sender: "sender", date: "date", dateFormat: "dateFormat", latitude: "latitude", longitude: "longitude" }, ngImport: i0, template: `
    <nb-chat-message-file [files]="[file]" [message]="message" [sender]="sender" [date]="date"
     [dateFormat]="dateFormat"></nb-chat-message-file>
  `, isInline: true, components: [{ type: i2.NbChatMessageFileComponent, selector: "nb-chat-message-file", inputs: ["message", "sender", "date", "dateFormat", "files"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-message-map',
                    template: `
    <nb-chat-message-file [files]="[file]" [message]="message" [sender]="sender" [date]="date"
     [dateFormat]="dateFormat"></nb-chat-message-file>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbChatOptions }]; }, propDecorators: { message: [{
                type: Input
            }], sender: [{
                type: Input
            }], date: [{
                type: Input
            }], dateFormat: [{
                type: Input
            }], latitude: [{
                type: Input
            }], longitude: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tZXNzYWdlLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2hhdC9jaGF0LW1lc3NhZ2UtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHMUU7O0dBRUc7QUFTSCxNQUFNLE9BQU8seUJBQXlCO0lBaURwQyxZQUFZLE9BQXNCO1FBN0JsQzs7O1dBR0c7UUFDTSxlQUFVLEdBQVcsV0FBVyxDQUFDO1FBMEJ4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztJQUM1QyxDQUFDO0lBYkQsSUFBSSxJQUFJO1FBQ04sT0FBTztZQUNMLG1DQUFtQztZQUNuQyxHQUFHLEVBQUUseURBQXlELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsNkJBQTZCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdkksSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLFVBQVU7U0FDakIsQ0FBQztJQUNKLENBQUM7O3NIQTdDVSx5QkFBeUI7MEdBQXpCLHlCQUF5QixtTUFOMUI7OztHQUdUOzJGQUdVLHlCQUF5QjtrQkFSckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7OztHQUdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDtvR0FPVSxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iQ2hhdE9wdGlvbnMgfSBmcm9tICcuL2NoYXQub3B0aW9ucyc7XG5cbi8qKlxuICogQ2hhdCBtZXNzYWdlIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2hhdC1tZXNzYWdlLW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWNoYXQtbWVzc2FnZS1maWxlIFtmaWxlc109XCJbZmlsZV1cIiBbbWVzc2FnZV09XCJtZXNzYWdlXCIgW3NlbmRlcl09XCJzZW5kZXJcIiBbZGF0ZV09XCJkYXRlXCJcbiAgICAgW2RhdGVGb3JtYXRdPVwiZGF0ZUZvcm1hdFwiPjwvbmItY2hhdC1tZXNzYWdlLWZpbGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRNZXNzYWdlTWFwQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIHNlbmRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmQgZGF0ZVxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpIGRhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZCBkYXRlIGZvcm1hdCwgZGVmYXVsdCAnc2hvcnRUaW1lJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ3Nob3J0VGltZSc7XG5cbiAgLyoqXG4gICAqIE1hcCBsYXRpdHVkZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogTWFwIGxvbmdpdHVkZVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQElucHV0KCkgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgZ2V0IGZpbGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB1cmw6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwP2NlbnRlcj0ke3RoaXMubGF0aXR1ZGV9LCR7dGhpcy5sb25naXR1ZGV9Jnpvb209MTImc2l6ZT00MDB4NDAwJmtleT0ke3RoaXMubWFwS2V5fWAsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIGljb246ICdsb2NhdGlvbicsXG4gICAgfTtcbiAgfVxuXG4gIG1hcEtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5iQ2hhdE9wdGlvbnMpIHtcbiAgICB0aGlzLm1hcEtleSA9IG9wdGlvbnMubWVzc2FnZUdvb2dsZU1hcEtleTtcbiAgfVxufVxuIl19