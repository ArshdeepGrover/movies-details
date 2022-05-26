/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../icon/icon.component";
import * as i3 from "../button/button.component";
import * as i4 from "@angular/common";
import * as i5 from "../input/input.directive";
import * as i6 from "@angular/forms";
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
export class NbChatFormComponent {
    constructor(cd, domSanitizer) {
        this.cd = cd;
        this.domSanitizer = domSanitizer;
        this.status = 'basic';
        this.inputFocus = false;
        this.inputHover = false;
        this.droppedFiles = [];
        this.imgDropTypes = ['image/png', 'image/jpeg', 'image/gif'];
        /**
         * Predefined message text
         * @type {string}
         */
        this.message = '';
        /**
         * Message placeholder text
         * @type {string}
         */
        this.messagePlaceholder = 'Type a message';
        /**
         * Send button title
         * @type {string}
         */
        this.buttonTitle = '';
        /**
         * Send button icon, shown if `buttonTitle` is empty
         * @type {string}
         */
        this.buttonIcon = 'paper-plane-outline';
        /**
         * Show send button
         * @type {boolean}
         */
        this.showButton = true;
        /**
         * Show send button
         * @type {boolean}
         */
        this.dropFiles = false;
        /**
         * File drop placeholder text
         * @type {string}
         */
        this.dropFilePlaceholder = 'Drop file to send';
        /**
         *
         * @type {EventEmitter<{ message: string, files: File[] }>}
         */
        this.send = new EventEmitter();
        /**
         * Emits when message input value has been changed
         * @type {EventEmitter<string>}
         */
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onInputChange = new EventEmitter();
        this.fileOver = false;
    }
    onDrop(event) {
        if (this.dropFiles) {
            event.preventDefault();
            event.stopPropagation();
            this.fileOver = false;
            if (event.dataTransfer && event.dataTransfer.files) {
                for (const file of event.dataTransfer.files) {
                    const res = file;
                    if (this.imgDropTypes.includes(file.type)) {
                        const fr = new FileReader();
                        fr.onload = (e) => {
                            res.src = e.target.result;
                            res.urlStyle = this.domSanitizer.bypassSecurityTrustStyle(`url(${res.src})`);
                            this.cd.detectChanges();
                        };
                        fr.readAsDataURL(file);
                    }
                    this.droppedFiles.push(res);
                }
            }
        }
    }
    removeFile(file) {
        const index = this.droppedFiles.indexOf(file);
        if (index >= 0) {
            this.droppedFiles.splice(index, 1);
        }
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.dropFiles) {
            this.fileOver = true;
        }
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.dropFiles) {
            this.fileOver = false;
        }
    }
    sendMessage() {
        if (this.droppedFiles.length || String(this.message).trim().length) {
            this.send.emit({ message: this.message, files: this.droppedFiles });
            this.message = '';
            this.droppedFiles = [];
        }
    }
    setStatus(status) {
        if (this.status !== status) {
            this.status = status;
            this.cd.detectChanges();
        }
    }
    getInputStatus() {
        if (this.fileOver) {
            return this.getHighlightStatus();
        }
        if (this.inputFocus || this.inputHover) {
            return this.status;
        }
        return 'basic';
    }
    getButtonStatus() {
        return this.getHighlightStatus();
    }
    getHighlightStatus() {
        if (this.status === 'basic' || this.status === 'control') {
            return 'primary';
        }
        return this.status;
    }
    onModelChange(value) {
        this.onInputChange.emit(value);
    }
}
NbChatFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatFormComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
NbChatFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatFormComponent, selector: "nb-chat-form", inputs: { message: "message", messagePlaceholder: "messagePlaceholder", buttonTitle: "buttonTitle", buttonIcon: "buttonIcon", showButton: "showButton", dropFiles: "dropFiles", dropFilePlaceholder: "dropFilePlaceholder" }, outputs: { send: "send", onInputChange: "onInputChange" }, host: { listeners: { "drop": "onDrop($event)", "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)" }, properties: { "class.file-over": "this.fileOver" } }, ngImport: i0, template: `
    <div class="dropped-files" *ngIf="droppedFiles?.length">
      <ng-container *ngFor="let file of droppedFiles">
        <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle">
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>

        <div *ngIf="!file.urlStyle">
          <nb-icon icon="file-text-outline" pack="nebular-essentials"></nb-icon>
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>
      </ng-container>
    </div>
    <div class="message-row">
      <input
        nbInput
        fullWidth
        [status]="getInputStatus()"
        (focus)="inputFocus = true"
        (blur)="inputFocus = false"
        (mouseenter)="inputHover = true"
        (mouseleave)="inputHover = false"
        [(ngModel)]="message"
        (ngModelChange)="onModelChange($event)"
        [class.with-button]="showButton"
        type="text"
        placeholder="{{ fileOver ? dropFilePlaceholder : messagePlaceholder }}"
        (keyup.enter)="sendMessage()"
      />
      <button
        nbButton
        [status]="getButtonStatus()"
        *ngIf="showButton"
        [class.with-icon]="!buttonTitle"
        (click)="sendMessage()"
        class="send-button"
      >
        <nb-icon *ngIf="!buttonTitle; else title" [icon]="buttonIcon" pack="nebular-essentials"></nb-icon>
        <ng-template #title>{{ buttonTitle }}</ng-template>
      </button>
    </div>
  `, isInline: true, components: [{ type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: i3.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatFormComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-form',
                    template: `
    <div class="dropped-files" *ngIf="droppedFiles?.length">
      <ng-container *ngFor="let file of droppedFiles">
        <div *ngIf="file.urlStyle" [style.background-image]="file.urlStyle">
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>

        <div *ngIf="!file.urlStyle">
          <nb-icon icon="file-text-outline" pack="nebular-essentials"></nb-icon>
          <span class="remove" (click)="removeFile(file)">&times;</span>
        </div>
      </ng-container>
    </div>
    <div class="message-row">
      <input
        nbInput
        fullWidth
        [status]="getInputStatus()"
        (focus)="inputFocus = true"
        (blur)="inputFocus = false"
        (mouseenter)="inputHover = true"
        (mouseleave)="inputHover = false"
        [(ngModel)]="message"
        (ngModelChange)="onModelChange($event)"
        [class.with-button]="showButton"
        type="text"
        placeholder="{{ fileOver ? dropFilePlaceholder : messagePlaceholder }}"
        (keyup.enter)="sendMessage()"
      />
      <button
        nbButton
        [status]="getButtonStatus()"
        *ngIf="showButton"
        [class.with-icon]="!buttonTitle"
        (click)="sendMessage()"
        class="send-button"
      >
        <nb-icon *ngIf="!buttonTitle; else title" [icon]="buttonIcon" pack="nebular-essentials"></nb-icon>
        <ng-template #title>{{ buttonTitle }}</ng-template>
      </button>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }]; }, propDecorators: { message: [{
                type: Input
            }], messagePlaceholder: [{
                type: Input
            }], buttonTitle: [{
                type: Input
            }], buttonIcon: [{
                type: Input
            }], showButton: [{
                type: Input
            }], dropFiles: [{
                type: Input
            }], dropFilePlaceholder: [{
                type: Input
            }], send: [{
                type: Output
            }], onInputChange: [{
                type: Output
            }], fileOver: [{
                type: HostBinding,
                args: ['class.file-over']
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }], onDragOver: [{
                type: HostListener,
                args: ['dragover', ['$event']]
            }], onDragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jaGF0L2NoYXQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBS3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUErQ0gsTUFBTSxPQUFPLG1CQUFtQjtJQWdFOUIsWUFBc0IsRUFBcUIsRUFBWSxZQUEwQjtRQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBL0RqRixXQUFNLEdBQThCLE9BQU8sQ0FBQztRQUM1QyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFeEQ7OztXQUdHO1FBQ00sWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUU5Qjs7O1dBR0c7UUFDTSx1QkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUN2RDs7O1dBR0c7UUFDTSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUVsQzs7O1dBR0c7UUFDTSxlQUFVLEdBQVcscUJBQXFCLENBQUM7UUFFcEQ7OztXQUdHO1FBQ00sZUFBVSxHQUFZLElBQUksQ0FBQztRQUVwQzs7O1dBR0c7UUFDTSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRXBDOzs7V0FHRztRQUNNLHdCQUFtQixHQUFXLG1CQUFtQixDQUFDO1FBRTNEOzs7V0FHRztRQUNPLFNB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QW5CLEtBQUs7Z0JBTUcsVUFBVTtzQkFBbEIsS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU1HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTUcsbUJBQW1CO3NCQUEzQixLQUFLO2dCQU1JLElBQUk7c0JBQWIsTUFBTTtnQkFPRyxhQUFhO3NCQUF0QixNQUFNO2dCQUV5QixRQUFRO3NCQUF2QyxXQUFXO3VCQUFDLGlCQUFpQjtnQkFLOUIsTUFBTTtzQkFETCxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFtQ2hDLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBVXBDLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgfSBmcm9tICcuLi9jb21wb25lbnQtc3RhdHVzJztcblxuLyoqXG4gKiBDaGF0IGZvcm0gY29tcG9uZW50LlxuICpcbiAqIFNob3cgYSBtZXNzYWdlIGZvcm0gd2l0aCBhIHNlbmQgbWVzc2FnZSBidXR0b24uXG4gKlxuICogYGBgdHNcbiAqIDxuYi1jaGF0LWZvcm0gc2hvd0J1dHRvbj1cInRydWVcIiBidXR0b25JY29uPVwibmItc2VuZFwiPlxuICogPC9uYi1jaGF0LWZvcm0+XG4gKiBgYGBcbiAqXG4gKiBXaGVuIGBbZHJvcEZpbGVzXT1cInRydWVcImAgaGFuZGxlcyBmaWxlcyBkcmFnJmRyb3Agd2l0aCBhIGZpbGUgcHJldmlldy5cbiAqXG4gKiBEcmFnICYgZHJvcCBhdmFpbGFibGUgZm9yIGZpbGVzIGFuZCBpbWFnZXM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKERyYWcgJiBEcm9wIENoYXQsIGNoYXQvY2hhdC1kcm9wLmNvbXBvbmVudClcbiAqXG4gKiBOZXcgbWVzc2FnZSBjb3VsZCBiZSB0cmFja2VkIG91dHNpZGUgYnkgdXNpbmcgYChzZW5kKWAgb3V0cHV0LlxuICpcbiAqIGBgYHRzXG4gKiA8bmItY2hhdC1mb3JtIChzZW5kKT1cIm9uTmV3TWVzc2FnZSgkZXZlbnQpXCI+XG4gKiA8L25iLWNoYXQtZm9ybT5cbiAqXG4gKiAvLyAuLi5cbiAqXG4gKiBvbk5ld01lc3NhZ2UoeyBtZXNzYWdlOiBzdHJpbmcsIGZpbGVzOiBhbnlbXSB9KSB7XG4gKiAgIHRoaXMuc2VydmljZS5zZW5kVG9TZXJ2ZXIobWVzc2FnZSwgZmlsZXMpO1xuICogfVxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWNoYXQtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRyb3BwZWQtZmlsZXNcIiAqbmdJZj1cImRyb3BwZWRGaWxlcz8ubGVuZ3RoXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIGRyb3BwZWRGaWxlc1wiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZmlsZS51cmxTdHlsZVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImZpbGUudXJsU3R5bGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlbW92ZVwiIChjbGljayk9XCJyZW1vdmVGaWxlKGZpbGUpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFmaWxlLnVybFN0eWxlXCI+XG4gICAgICAgICAgPG5iLWljb24gaWNvbj1cImZpbGUtdGV4dC1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlbW92ZVwiIChjbGljayk9XCJyZW1vdmVGaWxlKGZpbGUpXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1yb3dcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBuYklucHV0XG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBbc3RhdHVzXT1cImdldElucHV0U3RhdHVzKClcIlxuICAgICAgICAoZm9jdXMpPVwiaW5wdXRGb2N1cyA9IHRydWVcIlxuICAgICAgICAoYmx1cik9XCJpbnB1dEZvY3VzID0gZmFsc2VcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJpbnB1dEhvdmVyID0gdHJ1ZVwiXG4gICAgICAgIChtb3VzZWxlYXZlKT1cImlucHV0SG92ZXIgPSBmYWxzZVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtjbGFzcy53aXRoLWJ1dHRvbl09XCJzaG93QnV0dG9uXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGZpbGVPdmVyID8gZHJvcEZpbGVQbGFjZWhvbGRlciA6IG1lc3NhZ2VQbGFjZWhvbGRlciB9fVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJzZW5kTWVzc2FnZSgpXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5iQnV0dG9uXG4gICAgICAgIFtzdGF0dXNdPVwiZ2V0QnV0dG9uU3RhdHVzKClcIlxuICAgICAgICAqbmdJZj1cInNob3dCdXR0b25cIlxuICAgICAgICBbY2xhc3Mud2l0aC1pY29uXT1cIiFidXR0b25UaXRsZVwiXG4gICAgICAgIChjbGljayk9XCJzZW5kTWVzc2FnZSgpXCJcbiAgICAgICAgY2xhc3M9XCJzZW5kLWJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxuYi1pY29uICpuZ0lmPVwiIWJ1dHRvblRpdGxlOyBlbHNlIHRpdGxlXCIgW2ljb25dPVwiYnV0dG9uSWNvblwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIj48L25iLWljb24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgYnV0dG9uVGl0bGUgfX08L25nLXRlbXBsYXRlPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRGb3JtQ29tcG9uZW50IHtcbiAgc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcbiAgaW5wdXRGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBpbnB1dEhvdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZHJvcHBlZEZpbGVzOiBhbnlbXSA9IFtdO1xuICBpbWdEcm9wVHlwZXMgPSBbJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZiddO1xuXG4gIC8qKlxuICAgKiBQcmVkZWZpbmVkIG1lc3NhZ2UgdGV4dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgcGxhY2Vob2xkZXIgdGV4dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgbWVzc2FnZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnVHlwZSBhIG1lc3NhZ2UnO1xuICAvKipcbiAgICogU2VuZCBidXR0b24gdGl0bGVcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGJ1dHRvblRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogU2VuZCBidXR0b24gaWNvbiwgc2hvd24gaWYgYGJ1dHRvblRpdGxlYCBpcyBlbXB0eVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgYnV0dG9uSWNvbjogc3RyaW5nID0gJ3BhcGVyLXBsYW5lLW91dGxpbmUnO1xuXG4gIC8qKlxuICAgKiBTaG93IHNlbmQgYnV0dG9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgQElucHV0KCkgc2hvd0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFNob3cgc2VuZCBidXR0b25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBASW5wdXQoKSBkcm9wRmlsZXM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRmlsZSBkcm9wIHBsYWNlaG9sZGVyIHRleHRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBJbnB1dCgpIGRyb3BGaWxlUGxhY2Vob2xkZXI6IHN0cmluZyA9ICdEcm9wIGZpbGUgdG8gc2VuZCc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8eyBtZXNzYWdlOiBzdHJpbmcsIGZpbGVzOiBGaWxlW10gfT59XG4gICAqL1xuICBAT3V0cHV0KCkgc2VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtZXNzYWdlOiBzdHJpbmc7IGZpbGVzOiBGaWxlW10gfT4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBtZXNzYWdlIGlucHV0IHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxzdHJpbmc+fVxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtb24tcHJlZml4XG4gIEBPdXRwdXQoKSBvbklucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maWxlLW92ZXInKSBmaWxlT3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5kcm9wRmlsZXMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdGhpcy5maWxlT3ZlciA9IGZhbHNlO1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGZpbGU7XG5cbiAgICAgICAgICBpZiAodGhpcy5pbWdEcm9wVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKSkge1xuICAgICAgICAgICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgZnIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXMuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICByZXMudXJsU3R5bGUgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgke3Jlcy5zcmN9KWApO1xuICAgICAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHJvcHBlZEZpbGVzLnB1c2gocmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZpbGUoZmlsZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kcm9wcGVkRmlsZXMuaW5kZXhPZihmaWxlKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5kcm9wcGVkRmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZHJvcEZpbGVzKSB7XG4gICAgICB0aGlzLmZpbGVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBvbkRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5kcm9wRmlsZXMpIHtcbiAgICAgIHRoaXMuZmlsZU92ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZW5kTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5kcm9wcGVkRmlsZXMubGVuZ3RoIHx8IFN0cmluZyh0aGlzLm1lc3NhZ2UpLnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VuZC5lbWl0KHsgbWVzc2FnZTogdGhpcy5tZXNzYWdlLCBmaWxlczogdGhpcy5kcm9wcGVkRmlsZXMgfSk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgIHRoaXMuZHJvcHBlZEZpbGVzID0gW107XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdHVzKHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gc3RhdHVzKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldElucHV0U3RhdHVzKCk6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMge1xuICAgIGlmICh0aGlzLmZpbGVPdmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRIaWdobGlnaHRTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnB1dEZvY3VzIHx8IHRoaXMuaW5wdXRIb3Zlcikge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHJldHVybiAnYmFzaWMnO1xuICB9XG5cbiAgZ2V0QnV0dG9uU3RhdHVzKCk6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMge1xuICAgIHJldHVybiB0aGlzLmdldEhpZ2hsaWdodFN0YXR1cygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEhpZ2hsaWdodFN0YXR1cygpOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzIHtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdiYXNpYycgfHwgdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJykge1xuICAgICAgcmV0dXJuICdwcmltYXJ5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH1cblxuICBvbk1vZGVsQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==