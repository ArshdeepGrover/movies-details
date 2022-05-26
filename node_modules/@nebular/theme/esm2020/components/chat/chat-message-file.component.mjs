/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./chat-message-text.component";
import * as i3 from "../icon/icon.component";
import * as i4 from "@angular/common";
/**
 * Chat message component.
 */
export class NbChatMessageFileComponent {
    constructor(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        /**
         * Message send date format, default 'shortTime'
         * @type {string}
         */
        this.dateFormat = 'shortTime';
    }
    /**
     * Message file path
     * @type {Date}
     */
    set files(files) {
        this.readyFiles = (files || []).map((file) => {
            const isImage = this.isImage(file);
            return {
                ...file,
                urlStyle: isImage && this.domSanitizer.bypassSecurityTrustStyle(`url(${file.url})`),
                isImage: isImage,
            };
        });
        this.cd.detectChanges();
    }
    isImage(file) {
        const type = file.type;
        if (type) {
            return ['image/png', 'image/jpeg', 'image/gif'].includes(type);
        }
        return false;
    }
}
NbChatMessageFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageFileComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
NbChatMessageFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatMessageFileComponent, selector: "nb-chat-message-file", inputs: { message: "message", sender: "sender", date: "date", dateFormat: "dateFormat", files: "files" }, ngImport: i0, template: `
    <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      {{ message }}
    </nb-chat-message-text>

    <ng-container *ngIf="readyFiles?.length > 1">
      <div class="message-content-group">
        <a *ngFor="let file of readyFiles" [href]="file.url" target="_blank">
          <nb-icon [icon]="file.icon" *ngIf="!file.urlStyle && file.icon"></nb-icon>
          <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle"></div>
        </a>
      </div>
    </ng-container>

    <ng-container *ngIf="readyFiles?.length === 1">
      <a [href]="readyFiles[0].url" target="_blank">
        <nb-icon [icon]="readyFiles[0].icon" *ngIf="!readyFiles[0].urlStyle && readyFiles[0].icon"></nb-icon>
        <div *ngIf="readyFiles[0].urlStyle" [style.background-image]="readyFiles[0].urlStyle"></div>
      </a>
    </ng-container>
  `, isInline: true, components: [{ type: i2.NbChatMessageTextComponent, selector: "nb-chat-message-text", inputs: ["sender", "message", "date", "dateFormat"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatMessageFileComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-message-file',
                    template: `
    <nb-chat-message-text [sender]="sender" [date]="date" [dateFormat]="dateFormat" [message]="message">
      {{ message }}
    </nb-chat-message-text>

    <ng-container *ngIf="readyFiles?.length > 1">
      <div class="message-content-group">
        <a *ngFor="let file of readyFiles" [href]="file.url" target="_blank">
          <nb-icon [icon]="file.icon" *ngIf="!file.urlStyle && file.icon"></nb-icon>
          <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle"></div>
        </a>
      </div>
    </ng-container>

    <ng-container *ngIf="readyFiles?.length === 1">
      <a [href]="readyFiles[0].url" target="_blank">
        <nb-icon [icon]="readyFiles[0].icon" *ngIf="!readyFiles[0].urlStyle && readyFiles[0].icon"></nb-icon>
        <div *ngIf="readyFiles[0].urlStyle" [style.background-image]="readyFiles[0].urlStyle"></div>
      </a>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }]; }, propDecorators: { message: [{
                type: Input
            }], sender: [{
                type: Input
            }], date: [{
                type: Input
            }], dateFormat: [{
                type: Input
            }], files: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tZXNzYWdlLWZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NoYXQvY2hhdC1tZXNzYWdlLWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQWE3Rjs7R0FFRztBQTBCSCxNQUFNLE9BQU8sMEJBQTBCO0lBNkNyQyxZQUFzQixFQUFxQixFQUFZLFlBQTBCO1FBQTNELE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVksaUJBQVksR0FBWixZQUFZLENBQWM7UUF2QmpGOzs7V0FHRztRQUNNLGVBQVUsR0FBVyxXQUFXLENBQUM7SUFvQjFDLENBQUM7SUFsQkQ7OztPQUdHO0lBQ0gsSUFDSSxLQUFLLENBQUMsS0FBMEI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNoRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLE9BQU87Z0JBQ0wsR0FBRyxJQUFJO2dCQUNQLFFBQVEsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDbkYsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBTUQsT0FBTyxDQUFDLElBQXVCO1FBQzdCLE1BQU0sSUFBSSxHQUFJLElBQXNDLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxDQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzt1SEF2RFUsMEJBQTBCOzJHQUExQiwwQkFBMEIsc0tBdkIzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7MkZBR1UsMEJBQTBCO2tCQXpCdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDttSUFTVSxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9GLEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBOYkNoYXRNZXNzYWdlRmlsZUljb25QcmV2aWV3IHtcbiAgdXJsOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmJDaGF0TWVzc2FnZUZpbGVJbWFnZVByZXZpZXcge1xuICB1cmw6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgTmJDaGF0TWVzc2FnZUZpbGUgPSBOYkNoYXRNZXNzYWdlRmlsZUljb25QcmV2aWV3IHwgTmJDaGF0TWVzc2FnZUZpbGVJbWFnZVByZXZpZXc7XG5cbi8qKlxuICogQ2hhdCBtZXNzYWdlIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItY2hhdC1tZXNzYWdlLWZpbGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1jaGF0LW1lc3NhZ2UtdGV4dCBbc2VuZGVyXT1cInNlbmRlclwiIFtkYXRlXT1cImRhdGVcIiBbZGF0ZUZvcm1hdF09XCJkYXRlRm9ybWF0XCIgW21lc3NhZ2VdPVwibWVzc2FnZVwiPlxuICAgICAge3sgbWVzc2FnZSB9fVxuICAgIDwvbmItY2hhdC1tZXNzYWdlLXRleHQ+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVhZHlGaWxlcz8ubGVuZ3RoID4gMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY29udGVudC1ncm91cFwiPlxuICAgICAgICA8YSAqbmdGb3I9XCJsZXQgZmlsZSBvZiByZWFkeUZpbGVzXCIgW2hyZWZdPVwiZmlsZS51cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJmaWxlLmljb25cIiAqbmdJZj1cIiFmaWxlLnVybFN0eWxlICYmIGZpbGUuaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmlsZS51cmxTdHlsZVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImZpbGUudXJsU3R5bGVcIj48L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVhZHlGaWxlcz8ubGVuZ3RoID09PSAxXCI+XG4gICAgICA8YSBbaHJlZl09XCJyZWFkeUZpbGVzWzBdLnVybFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJyZWFkeUZpbGVzWzBdLmljb25cIiAqbmdJZj1cIiFyZWFkeUZpbGVzWzBdLnVybFN0eWxlICYmIHJlYWR5RmlsZXNbMF0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInJlYWR5RmlsZXNbMF0udXJsU3R5bGVcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJyZWFkeUZpbGVzWzBdLnVybFN0eWxlXCI+PC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRNZXNzYWdlRmlsZUNvbXBvbmVudCB7XG5cbiAgcmVhZHlGaWxlczogYW55W107XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZGVyXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2Ugc2VuZGVyXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBzZW5kZXI6IHN0cmluZztcblxuICAvKipcbiAgICogTWVzc2FnZSBzZW5kIGRhdGVcbiAgICogQHR5cGUge0RhdGV9XG4gICAqL1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHNlbmQgZGF0ZSBmb3JtYXQsIGRlZmF1bHQgJ3Nob3J0VGltZSdcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdzaG9ydFRpbWUnO1xuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGZpbGUgcGF0aFxuICAgKiBAdHlwZSB7RGF0ZX1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmaWxlcyhmaWxlczogTmJDaGF0TWVzc2FnZUZpbGVbXSkge1xuICAgIHRoaXMucmVhZHlGaWxlcyA9IChmaWxlcyB8fCBbXSkubWFwKChmaWxlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzSW1hZ2UgPSB0aGlzLmlzSW1hZ2UoZmlsZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5maWxlLFxuICAgICAgICB1cmxTdHlsZTogaXNJbWFnZSAmJiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgke2ZpbGUudXJsfSlgKSxcbiAgICAgICAgaXNJbWFnZTogaXNJbWFnZSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG5cbiAgaXNJbWFnZShmaWxlOiBOYkNoYXRNZXNzYWdlRmlsZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHR5cGUgPSAoZmlsZSBhcyBOYkNoYXRNZXNzYWdlRmlsZUltYWdlUHJldmlldykudHlwZTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgcmV0dXJuIFsgJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZicgXS5pbmNsdWRlcyh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=