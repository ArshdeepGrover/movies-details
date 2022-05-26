import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NbChatAvatarComponent {
    constructor() {
        this.avatarClass = true;
    }
}
NbChatAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatAvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbChatAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbChatAvatarComponent, selector: "nb-chat-avatar", inputs: { initials: "initials", avatarStyle: "avatarStyle" }, host: { properties: { "style.background-image": "this.avatarStyle", "class.avatar": "this.avatarClass" } }, ngImport: i0, template: `
    <ng-container *ngIf="!avatarStyle">
      {{ initials }}
    </ng-container>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatAvatarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-chat-avatar',
                    template: `
    <ng-container *ngIf="!avatarStyle">
      {{ initials }}
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { initials: [{
                type: Input
            }], avatarStyle: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['style.background-image']
            }], avatarClass: [{
                type: HostBinding,
                args: ['class.avatar']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NoYXQvY2hhdC1hdmF0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBWXZGLE1BQU0sT0FBTyxxQkFBcUI7SUFUbEM7UUFrQlcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7S0FDN0I7O2tIQVZZLHFCQUFxQjtzR0FBckIscUJBQXFCLGdPQVB0Qjs7OztHQUlUOzJGQUdVLHFCQUFxQjtrQkFUakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OEJBR1UsUUFBUTtzQkFBaEIsS0FBSztnQkFJTixXQUFXO3NCQUZWLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsd0JBQXdCO2dCQUk1QixXQUFXO3NCQURuQixXQUFXO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1jaGF0LWF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhdmF0YXJTdHlsZVwiPlxuICAgICAge3sgaW5pdGlhbHMgfX1cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQ2hhdEF2YXRhckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaW5pdGlhbHM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQtaW1hZ2UnKVxuICBhdmF0YXJTdHlsZTogU2FmZVN0eWxlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXZhdGFyJylcbiAgcmVhZG9ubHkgYXZhdGFyQ2xhc3MgPSB0cnVlO1xufVxuIl19