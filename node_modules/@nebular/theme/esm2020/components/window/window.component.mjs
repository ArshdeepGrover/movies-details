import { Component, HostBinding, Inject, TemplateRef, ViewChild, Input, } from '@angular/core';
import { NbComponentPortal, NbTemplatePortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent } from '../cdk/overlay/overlay-container';
import { NB_WINDOW_CONTENT, NbWindowState, NB_WINDOW_CONTEXT } from './window.options';
import * as i0 from "@angular/core";
import * as i1 from "./window-ref";
import * as i2 from "./window.options";
import * as i3 from "../cdk/a11y/focus-trap";
import * as i4 from "../card/card.component";
import * as i5 from "../button/button.component";
import * as i6 from "../icon/icon.component";
import * as i7 from "../cdk/overlay/overlay-container";
import * as i8 from "@angular/common";
export class NbWindowComponent {
    constructor(content, context, windowRef, config, focusTrapFactory, elementRef, renderer) {
        this.content = content;
        this.context = context;
        this.windowRef = windowRef;
        this.config = config;
        this.focusTrapFactory = focusTrapFactory;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get isFullScreen() {
        return this.windowRef.state === NbWindowState.FULL_SCREEN;
    }
    get maximized() {
        return this.windowRef.state === NbWindowState.MAXIMIZED;
    }
    get minimized() {
        return this.windowRef.state === NbWindowState.MINIMIZED;
    }
    get showMinimize() {
        return this.config.buttons.minimize;
    }
    get showMaximize() {
        return this.config.buttons.maximize;
    }
    get showFullScreen() {
        return this.config.buttons.fullScreen;
    }
    get showClose() {
        return this.config.buttons.close;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.focusTrap.blurPreviouslyFocusedElement();
        this.focusTrap.focusInitialElement();
        if (this.config.windowClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.config.windowClass);
        }
    }
    ngAfterViewChecked() {
        if (!this.overlayContainer || this.overlayContainer.isAttached) {
            return;
        }
        if (this.content instanceof TemplateRef) {
            this.attachTemplate();
        }
        else {
            this.attachComponent();
        }
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
        this.close();
    }
    minimize() {
        if (this.windowRef.state === NbWindowState.MINIMIZED) {
            this.windowRef.toPreviousState();
        }
        else {
            this.windowRef.minimize();
        }
    }
    maximize() {
        this.windowRef.maximize();
    }
    fullScreen() {
        this.windowRef.fullScreen();
    }
    maximizeOrFullScreen() {
        if (this.windowRef.state === NbWindowState.MINIMIZED && this.showMaximize) {
            this.maximize();
        }
        else {
            this.fullScreen();
        }
    }
    close() {
        this.windowRef.close();
    }
    attachTemplate() {
        this.overlayContainer.attachTemplatePortal(new NbTemplatePortal(this.content, null, this.context));
    }
    attachComponent() {
        const portal = new NbComponentPortal(this.content, null, null, this.cfr);
        const ref = this.overlayContainer.attachComponentPortal(portal, this.context);
        this.windowRef.componentInstance = ref.instance;
        ref.changeDetectorRef.detectChanges();
    }
}
NbWindowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbWindowComponent, deps: [{ token: NB_WINDOW_CONTENT }, { token: NB_WINDOW_CONTEXT }, { token: i1.NbWindowRef }, { token: i2.NbWindowConfig }, { token: i3.NbFocusTrapFactoryService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NbWindowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbWindowComponent, selector: "nb-window", inputs: { cfr: "cfr" }, host: { properties: { "class.full-screen": "this.isFullScreen", "class.maximized": "this.maximized", "class.minimized": "this.minimized" } }, viewQueries: [{ propertyName: "overlayContainer", first: true, predicate: NbOverlayContainerComponent, descendants: true }], ngImport: i0, template: `
    <nb-card>
      <nb-card-header>
        <div *ngIf="config.titleTemplate; else textTitleTemplate" cdkFocusInitial tabindex="-1">
          <ng-container
            *ngTemplateOutlet="config.titleTemplate; context: { $implicit: config.titleTemplateContext }"
          ></ng-container>
        </div>

        <ng-template #textTitleTemplate>
          <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>
        </ng-template>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showClose">
            <button nbButton ghost (click)="close()">
              <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `, isInline: true, styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"], components: [{ type: i4.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { type: i4.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i6.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: i4.NbCardBodyComponent, selector: "nb-card-body" }, { type: i7.NbOverlayContainerComponent, selector: "nb-overlay-container" }], directives: [{ type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbWindowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-window', template: `
    <nb-card>
      <nb-card-header>
        <div *ngIf="config.titleTemplate; else textTitleTemplate" cdkFocusInitial tabindex="-1">
          <ng-container
            *ngTemplateOutlet="config.titleTemplate; context: { $implicit: config.titleTemplateContext }"
          ></ng-container>
        </div>

        <ng-template #textTitleTemplate>
          <div cdkFocusInitial class="title" tabindex="-1">{{ config.title }}</div>
        </ng-template>

        <div class="buttons">
          <ng-container *ngIf="showMinimize">
            <button nbButton ghost (click)="minimize()">
              <nb-icon icon="minus-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showMaximize">
            <button nbButton ghost *ngIf="isFullScreen" (click)="maximize()">
              <nb-icon icon="collapse-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showFullScreen">
            <button nbButton ghost *ngIf="minimized || maximized" (click)="maximizeOrFullScreen()">
              <nb-icon icon="expand-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>

          <ng-container *ngIf="showClose">
            <button nbButton ghost (click)="close()">
              <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
            </button>
          </ng-container>
        </div>
      </nb-card-header>
      <nb-card-body *ngIf="maximized || isFullScreen">
        <nb-overlay-container></nb-overlay-container>
      </nb-card-body>
    </nb-card>
  `, styles: [":host{flex:1 0 auto;min-width:20rem}:host nb-card{margin:0}:host nb-card-header{display:flex;justify-content:space-between;align-items:center;overflow:hidden}:host .title{flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .buttons{width:9.5rem;display:flex;justify-content:flex-end}:host .buttons [nbButton]{flex:0 0 3rem}:host(.full-screen){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}:host(.maximized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0}:host(.minimized) nb-card{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}:host(.minimized) nb-card nb-card-header{border-bottom:none}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW_CONTENT]
                }] }, { type: Object, decorators: [{
                    type: Inject,
                    args: [NB_WINDOW_CONTEXT]
                }] }, { type: i1.NbWindowRef }, { type: i2.NbWindowConfig }, { type: i3.NbFocusTrapFactoryService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { cfr: [{
                type: Input
            }], isFullScreen: [{
                type: HostBinding,
                args: ['class.full-screen']
            }], maximized: [{
                type: HostBinding,
                args: ['class.maximized']
            }], minimized: [{
                type: HostBinding,
                args: ['class.minimized']
            }], overlayContainer: [{
                type: ViewChild,
                args: [NbOverlayContainerComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy93aW5kb3cvd2luZG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxNQUFNLEVBR04sV0FBVyxFQUVYLFNBQVMsRUFHVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7QUFtRHZHLE1BQU0sT0FBTyxpQkFBaUI7SUFzQzVCLFlBQ29DLE9BQTJDLEVBQzNDLE9BQWUsRUFDMUMsU0FBc0IsRUFDdEIsTUFBc0IsRUFDbkIsZ0JBQTJDLEVBQzNDLFVBQXNCLEVBQ3RCLFFBQW1CO1FBTkssWUFBTyxHQUFQLE9BQU8sQ0FBb0M7UUFDM0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUMxQyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMkI7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzVCLENBQUM7SUEzQ0osSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLGFBQWEs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QUVTLGVBQWU7UUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFaEQsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7OzhHQXRIVSxpQkFBaUIsa0JBdUNsQixpQkFBaUIsYUFDakIsaUJBQWlCO2tHQXhDaEIsaUJBQWlCLHlRQWtDakIsMkJBQTJCLGdEQWhGNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ1Q7MkZBR1UsaUJBQWlCO2tCQWhEN0IsU0FBUzsrQkFDRSxXQUFXLFlBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ1Q7OzBCQTBDRSxNQUFNOzJCQUFDLGlCQUFpQjs4QkFDa0IsTUFBTTswQkFBaEQsTUFBTTsyQkFBQyxpQkFBaUI7NExBdkNsQixHQUFHO3NCQUFYLEtBQUs7Z0JBR0YsWUFBWTtzQkFEZixXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsU0FBUztzQkFEWixXQUFXO3VCQUFDLGlCQUFpQjtnQkFNMUIsU0FBUztzQkFEWixXQUFXO3VCQUFDLGlCQUFpQjtnQkFxQlUsZ0JBQWdCO3NCQUF2RCxTQUFTO3VCQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVHlwZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkZvY3VzVHJhcCwgTmJGb2N1c1RyYXBGYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL2Nkay9hMTF5L2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iQ29tcG9uZW50VHlwZSwgTmJUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuaW1wb3J0IHsgTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgTkJfV0lORE9XX0NPTlRFTlQsIE5iV2luZG93Q29uZmlnLCBOYldpbmRvd1N0YXRlLCBOQl9XSU5ET1dfQ09OVEVYVCB9IGZyb20gJy4vd2luZG93Lm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJXaW5kb3dSZWYgfSBmcm9tICcuL3dpbmRvdy1yZWYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi13aW5kb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1jYXJkPlxuICAgICAgPG5iLWNhcmQtaGVhZGVyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLnRpdGxlVGVtcGxhdGU7IGVsc2UgdGV4dFRpdGxlVGVtcGxhdGVcIiBjZGtGb2N1c0luaXRpYWwgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLnRpdGxlVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb25maWcudGl0bGVUZW1wbGF0ZUNvbnRleHQgfVwiXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3RleHRUaXRsZVRlbXBsYXRlPlxuICAgICAgICAgIDxkaXYgY2RrRm9jdXNJbml0aWFsIGNsYXNzPVwidGl0bGVcIiB0YWJpbmRleD1cIi0xXCI+e3sgY29uZmlnLnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd01pbmltaXplXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IChjbGljayk9XCJtaW5pbWl6ZSgpXCI+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJtaW51cy1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dNYXhpbWl6ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCAqbmdJZj1cImlzRnVsbFNjcmVlblwiIChjbGljayk9XCJtYXhpbWl6ZSgpXCI+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJjb2xsYXBzZS1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dGdWxsU2NyZWVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0ICpuZ0lmPVwibWluaW1pemVkIHx8IG1heGltaXplZFwiIChjbGljayk9XCJtYXhpbWl6ZU9yRnVsbFNjcmVlbigpXCI+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJleHBhbmQtb3V0bGluZVwiIHBhY2s9XCJuZWJ1bGFyLWVzc2VudGlhbHNcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93Q2xvc2VcIj5cbiAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3QgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cImNsb3NlLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYi1jYXJkLWhlYWRlcj5cbiAgICAgIDxuYi1jYXJkLWJvZHkgKm5nSWY9XCJtYXhpbWl6ZWQgfHwgaXNGdWxsU2NyZWVuXCI+XG4gICAgICAgIDxuYi1vdmVybGF5LWNvbnRhaW5lcj48L25iLW92ZXJsYXktY29udGFpbmVyPlxuICAgICAgPC9uYi1jYXJkLWJvZHk+XG4gICAgPC9uYi1jYXJkPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi93aW5kb3cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJXaW5kb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZnVsbC1zY3JlZW4nKVxuICBnZXQgaXNGdWxsU2NyZWVuKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd1JlZi5zdGF0ZSA9PT0gTmJXaW5kb3dTdGF0ZS5GVUxMX1NDUkVFTjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF4aW1pemVkJylcbiAgZ2V0IG1heGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dSZWYuc3RhdGUgPT09IE5iV2luZG93U3RhdGUuTUFYSU1JWkVEO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5taW5pbWl6ZWQnKVxuICBnZXQgbWluaW1pemVkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd1JlZi5zdGF0ZSA9PT0gTmJXaW5kb3dTdGF0ZS5NSU5JTUlaRUQ7XG4gIH1cblxuICBnZXQgc2hvd01pbmltaXplKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5idXR0b25zLm1pbmltaXplO1xuICB9XG5cbiAgZ2V0IHNob3dNYXhpbWl6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnV0dG9ucy5tYXhpbWl6ZTtcbiAgfVxuXG4gIGdldCBzaG93RnVsbFNjcmVlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnV0dG9ucy5mdWxsU2NyZWVuO1xuICB9XG5cbiAgZ2V0IHNob3dDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYnV0dG9ucy5jbG9zZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoTmJPdmVybGF5Q29udGFpbmVyQ29tcG9uZW50KSBvdmVybGF5Q29udGFpbmVyOiBOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQ7XG5cbiAgcHJvdGVjdGVkIGZvY3VzVHJhcDogTmJGb2N1c1RyYXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChOQl9XSU5ET1dfQ09OVEVOVCkgcHVibGljIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT4gfCBOYkNvbXBvbmVudFR5cGUsXG4gICAgQEluamVjdChOQl9XSU5ET1dfQ09OVEVYVCkgcHVibGljIGNvbnRleHQ6IE9iamVjdCxcbiAgICBwdWJsaWMgd2luZG93UmVmOiBOYldpbmRvd1JlZixcbiAgICBwdWJsaWMgY29uZmlnOiBOYldpbmRvd0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgZm9jdXNUcmFwRmFjdG9yeTogTmJGb2N1c1RyYXBGYWN0b3J5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5mb2N1c1RyYXAuYmx1clByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnQoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy53aW5kb3dDbGFzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jb25maWcud2luZG93Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheUNvbnRhaW5lciB8fCB0aGlzLm92ZXJsYXlDb250YWluZXIuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdHRhY2hUZW1wbGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF0dGFjaENvbXBvbmVudCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAucmVzdG9yZUZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgbWluaW1pemUoKSB7XG4gICAgaWYgKHRoaXMud2luZG93UmVmLnN0YXRlID09PSBOYldpbmRvd1N0YXRlLk1JTklNSVpFRCkge1xuICAgICAgdGhpcy53aW5kb3dSZWYudG9QcmV2aW91c1N0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2luZG93UmVmLm1pbmltaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbWF4aW1pemUoKSB7XG4gICAgdGhpcy53aW5kb3dSZWYubWF4aW1pemUoKTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy53aW5kb3dSZWYuZnVsbFNjcmVlbigpO1xuICB9XG5cbiAgbWF4aW1pemVPckZ1bGxTY3JlZW4oKSB7XG4gICAgaWYgKHRoaXMud2luZG93UmVmLnN0YXRlID09PSBOYldpbmRvd1N0YXRlLk1JTklNSVpFRCAmJiB0aGlzLnNob3dNYXhpbWl6ZSkge1xuICAgICAgdGhpcy5tYXhpbWl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLndpbmRvd1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGF0dGFjaFRlbXBsYXRlKCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5hdHRhY2hUZW1wbGF0ZVBvcnRhbChcbiAgICAgIG5ldyBOYlRlbXBsYXRlUG9ydGFsKHRoaXMuY29udGVudCBhcyBUZW1wbGF0ZVJlZjxhbnk+LCBudWxsLCB0aGlzLmNvbnRleHQpLFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXR0YWNoQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBOYkNvbXBvbmVudFBvcnRhbCh0aGlzLmNvbnRlbnQgYXMgVHlwZTxhbnk+LCBudWxsLCBudWxsLCB0aGlzLmNmcik7XG4gICAgY29uc3QgcmVmID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwsIHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy53aW5kb3dSZWYuY29tcG9uZW50SW5zdGFuY2UgPSByZWYuaW5zdGFuY2U7XG5cbiAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=