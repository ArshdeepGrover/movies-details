/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./icon-libraries";
import * as i3 from "../../services/status.service";
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `@nebular/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i eva-icons @nebular/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from '@nebular/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from '@nebular/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-svg-vertical-align:
 * icon-basic-color:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 * icon-control-color:
 */
export class NbIconComponent {
    constructor(sanitizer, iconLibrary, el, renderer, statusService) {
        this.sanitizer = sanitizer;
        this.iconLibrary = iconLibrary;
        this.el = el;
        this.renderer = renderer;
        this.statusService = statusService;
        this.prevClasses = [];
        this.html = '';
    }
    get primary() {
        return this.status === 'primary';
    }
    get info() {
        return this.status === 'info';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get basic() {
        return this.status === 'basic';
    }
    get control() {
        return this.status === 'control';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    get config() {
        return this._config;
    }
    set config(value) {
        if (!value) {
            return;
        }
        this._config = value;
        if (typeof value === 'string') {
            this.icon = value;
        }
        else {
            this.icon = value.icon;
            this.pack = value.pack;
            this.status = value.status;
            this.options = value.options;
        }
    }
    ngOnInit() {
        this.iconDef = this.renderIcon(this.icon, this.pack, this.options);
    }
    ngOnChanges() {
        const iconDef = this.iconLibrary.getIcon(this.icon, this.pack);
        if (iconDef) {
            this.renderIcon(this.icon, this.pack, this.options);
        }
        else {
            this.clearIcon();
        }
    }
    renderIcon(name, pack, options) {
        const iconDefinition = this.iconLibrary.getIcon(name, pack);
        if (!iconDefinition) {
            return undefined;
        }
        const content = iconDefinition.icon.getContent(options);
        if (content) {
            this.html = this.sanitizer.bypassSecurityTrustHtml(content);
        }
        this.assignClasses(iconDefinition.icon.getClasses(options));
        return iconDefinition;
    }
    clearIcon() {
        this.html = '';
        this.assignClasses([]);
    }
    assignClasses(classes) {
        this.prevClasses.forEach((className) => {
            this.renderer.removeClass(this.el.nativeElement, className);
        });
        classes.forEach((className) => {
            this.renderer.addClass(this.el.nativeElement, className);
        });
        this.prevClasses = classes;
    }
}
NbIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbIconComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.NbIconLibraries }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbIconComponent, selector: "nb-icon", inputs: { icon: "icon", pack: "pack", options: "options", status: "status", config: "config" }, host: { properties: { "innerHtml": "this.html", "class.status-primary": "this.primary", "class.status-info": "this.info", "class.status-success": "this.success", "class.status-warning": "this.warning", "class.status-danger": "this.danger", "class.status-basic": "this.basic", "class.status-control": "this.control", "class": "this.additionalClasses" } }, usesOnChanges: true, ngImport: i0, template: '', isInline: true, styles: [":host{display:inline-block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-icon', template: '', changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:inline-block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.NbIconLibraries }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.NbStatusService }]; }, propDecorators: { html: [{
                type: HostBinding,
                args: ['innerHtml']
            }], primary: [{
                type: HostBinding,
                args: ['class.status-primary']
            }], info: [{
                type: HostBinding,
                args: ['class.status-info']
            }], success: [{
                type: HostBinding,
                args: ['class.status-success']
            }], warning: [{
                type: HostBinding,
                args: ['class.status-warning']
            }], danger: [{
                type: HostBinding,
                args: ['class.status-danger']
            }], basic: [{
                type: HostBinding,
                args: ['class.status-basic']
            }], control: [{
                type: HostBinding,
                args: ['class.status-control']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], icon: [{
                type: Input
            }], pack: [{
                type: Input
            }], options: [{
                type: Input
            }], status: [{
                type: Input
            }], config: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsV0FBVyxFQUNYLEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFjdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErRUc7QUFPSCxNQUFNLE9BQU8sZUFBZTtJQXNHMUIsWUFDWSxTQUF1QixFQUN2QixXQUE0QixFQUM1QixFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsYUFBOEI7UUFKOUIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBeEdoQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUczQixTQUFJLEdBQWEsRUFBRSxDQUFDO0lBc0dqQixDQUFDO0lBcEdKLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQ0ks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b250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJJY29uTGlicmFyaWVzIH0gZnJvbSAnLi9pY29uLWxpYnJhcmllcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJJY29uQ29uZmlnIHtcbiAgaWNvbjogc3RyaW5nO1xuICBwYWNrPzogc3RyaW5nO1xuICBzdGF0dXM/OiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzO1xuICBvcHRpb25zPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG59XG5cbi8qKlxuICogSWNvbiBjb21wb25lbnQuIEFsbG93cyB0byByZW5kZXIgYm90aCBgc3ZnYCBhbmQgYGZvbnRgIGljb25zLlxuICogU3RhcnRpbmcgZnJvbSBOZWJ1bGFyIDQuMCB1c2VzIFtFdmEgSWNvbnNdKGh0dHBzOi8vYWt2ZW8uZ2l0aHViLmlvL2V2YS1pY29ucy8pIHBhY2sgYnkgZGVmYXVsdC5cbiAqXG4gKiBCYXNpYyBpY29uIGV4YW1wbGU6XG4gKiBAc3RhY2tlZC1leGFtcGxlKFNob3djYXNlLCBpY29uL2ljb24tc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIEljb24gY29uZmlndXJhdGlvbjpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmItaWNvbiBpY29uPVwic3RhclwiPjwvbmItaWNvbj5cbiAqIGBgYFxuICogIyMjIEluc3RhbGxhdGlvblxuICpcbiAqIEJ5IGRlZmF1bHQgTmVidWxhciBjb21lcyB3aXRob3V0IGFueSBwcmUtaW5zdGFsbGVkIGljb24gcGFjay5cbiAqIFN0YXJ0aW5nIHdpdGggTmVidWxhciA0LjAuMCB3ZSBzaGlwIHNlcGFyYXRlIHBhY2thZ2UgY2FsbGVkIGBAbmVidWxhci9ldmEtaWNvbnNgXG4gKiB3aGljaCBpbnRlZ3JhdGVzIFNWRyBbRXZhIEljb25zXShodHRwczovL2FrdmVvLmdpdGh1Yi5pby9ldmEtaWNvbnMvKSBwYWNrIHRvIE5lYnVsYXIuIFRvIGFkZCBpdCB0byB5b3VyXG4gKiBwcm9qZWN0IHJ1bjpcbiAqIGBgYHNoXG4gKiBucG0gaSBldmEtaWNvbnMgQG5lYnVsYXIvZXZhLWljb25zXG4gKiBgYGBcbiAqIFRoaXMgY29tbWFuZCB3aWxsIGluc3RhbGwgRXZhIEljb25zIHBhY2suIFRoZW4gcmVnaXN0ZXIgYE5iRXZhSWNvbnNNb2R1bGVgIGludG8geW91ciBhcHAgbW9kdWxlOlxuICogYGBgdHNcbiAqIGltcG9ydCB7IE5iRXZhSWNvbnNNb2R1bGUgfSBmcm9tICdAbmVidWxhci9ldmEtaWNvbnMnO1xuICpcbiAqIEBOZ01vZHVsZSh7XG4gKiAgIGltcG9ydHM6IFtcbiAqICAgICAvLyAuLi5cbiAqICAgICBOYkV2YUljb25zTW9kdWxlLFxuICogICBdLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4gKiBgYGBcbiAqIExhc3QgdGhpbmcsIGltcG9ydCBgTmJJY29uTW9kdWxlYCB0byB5b3VyIGZlYXR1cmUgbW9kdWxlIHdoZXJlIHlvdSBuZWVkIHRvIHNob3cgYW4gaWNvbjpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIC8vIC4uLlxuICogICAgIE5iSWNvbk1vZHVsZSxcbiAqICAgXSxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7IH1cbiAqIGBgYFxuICogIyMjIFVzYWdlXG4gKlxuICogSWNvbiBjYW4gYmUgY29sb3JlZCB1c2luZyBgc3RhdHVzYCBpbnB1dDpcbiAqIGBgYGh0bWxcbiAqIDxuYi1pY29uIGljb249XCJzdGFyXCIgc3RhdHVzPVwid2FybmluZ1wiPjwvbmItaWNvbj5cbiAqIGBgYFxuICpcbiAqIENvbG9yZWQgaWNvbnM6XG4gKiBAc3RhY2tlZC1leGFtcGxlKENvbG9yZWQgSWNvbnMsIGljb24vaWNvbi1jb2xvcnMuY29tcG9uZW50KVxuICpcbiAqIEluIGNhc2UgeW91IG5lZWQgdG8gc3BlY2lmeSBhbiBpY29uIGZyb20gYSBzcGVjaWZpYyBpY29uIHBhY2ssIHRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBgcGFja2AgaW5wdXQgcHJvcGVydHk6XG4gKiBgYGBodG1sXG4gKiA8bmItaWNvbiBpY29uPVwic3RhclwiIHBhY2s9XCJmb250LWF3ZXNvbWVcIj48L25iLWljb24+XG4gKiBgYGBcbiAqIEFkZGl0aW9uYWwgaWNvbiBzZXR0aW5ncyAoaWYgYXZhaWxhYmxlIGJ5IHRoZSBpY29uIHBhY2spIGNvdWxkIGJlIHBhc3NlZCB1c2luZyBgb3B0aW9uc2AgaW5wdXQ6XG4gKlxuICogYGBgaHRtbFxuICogPG5iLWljb24gaWNvbj1cInN0YXJcIiBbb3B0aW9uc109XCJ7IGFuaW1hdGlvbjogeyB0eXBlOiAnem9vbScgfSB9XCI+PC9uYi1pY29uPlxuICogYGBgXG4gKlxuICogQHN0eWxlc1xuICpcbiAqIGljb24tZm9udC1zaXplOlxuICogaWNvbi1saW5lLWhlaWdodDpcbiAqIGljb24td2lkdGg6XG4gKiBpY29uLWhlaWdodDpcbiAqIGljb24tc3ZnLXZlcnRpY2FsLWFsaWduOlxuICogaWNvbi1iYXNpYy1jb2xvcjpcbiAqIGljb24tcHJpbWFyeS1jb2xvcjpcbiAqIGljb24taW5mby1jb2xvcjpcbiAqIGljb24tc3VjY2Vzcy1jb2xvcjpcbiAqIGljb24td2FybmluZy1jb2xvcjpcbiAqIGljb24tZGFuZ2VyLWNvbG9yOlxuICogaWNvbi1jb250cm9sLWNvbG9yOlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1pY29uJyxcbiAgc3R5bGVVcmxzOiBbYC4vaWNvbi5jb21wb25lbnQuc2Nzc2BdLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYkljb25Db21wb25lbnQgaW1wbGVtZW50cyBOYkljb25Db25maWcsIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICBwcm90ZWN0ZWQgaWNvbkRlZjtcbiAgcHJvdGVjdGVkIHByZXZDbGFzc2VzID0gW107XG5cbiAgQEhvc3RCaW5kaW5nKCdpbm5lckh0bWwnKVxuICBodG1sOiBTYWZlSHRtbCA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXByaW1hcnknKVxuICBnZXQgcHJpbWFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdwcmltYXJ5JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWluZm8nKVxuICBnZXQgaW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdpbmZvJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXN1Y2Nlc3MnKVxuICBnZXQgc3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLXdhcm5pbmcnKVxuICBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWRhbmdlcicpXG4gIGdldCBkYW5nZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZGFuZ2VyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWJhc2ljJylcbiAgZ2V0IGJhc2ljKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Jhc2ljJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhdHVzLWNvbnRyb2wnKVxuICBnZXQgY29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdjb250cm9sJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgYWRkaXRpb25hbENsYXNzZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLnN0YXR1c1NlcnZpY2UuaXNDdXN0b21TdGF0dXModGhpcy5zdGF0dXMpKSB7XG4gICAgICByZXR1cm4gW3RoaXMuc3RhdHVzU2VydmljZS5nZXRTdGF0dXNDbGFzcyh0aGlzLnN0YXR1cyldO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogSWNvbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNcbiAgICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICAvKipcbiAgICogSWNvbiBwYWNrIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1c1xuICAgKi9cbiAgQElucHV0KCkgcGFjazogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGljb24gc2V0dGluZ3NcbiAgICogQHBhcmFtIHtbbmFtZTogc3RyaW5nXTogYW55fVxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uczogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cbiAgLyoqXG4gICAqIEljb24gc3RhdHVzIChhZGRzIHNwZWNpZmljIHN0eWxlcyk6XG4gICAqIGBiYXNpY2AsIGBwcmltYXJ5YCwgYGluZm9gLCBgc3VjY2Vzc2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAsIGBjb250cm9sYFxuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzPzogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cztcblxuICAvKipcbiAgICogU2V0cyBhbGwgaWNvbiBjb25maWd1cmFibGUgcHJvcGVydGllcyB2aWEgY29uZmlnIG9iamVjdC5cbiAgICogSWYgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nIHNldCBpY29uIG5hbWUuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogc3RyaW5nIHwgTmJJY29uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsdWU6IHN0cmluZyB8IE5iSWNvbkNvbmZpZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmljb24gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pY29uID0gdmFsdWUuaWNvbjtcbiAgICAgIHRoaXMucGFjayA9IHZhbHVlLnBhY2s7XG4gICAgICB0aGlzLnN0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICAgIHRoaXMub3B0aW9ucyA9IHZhbHVlLm9wdGlvbnM7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfY29uZmlnOiBzdHJpbmcgfCBOYkljb25Db25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByb3RlY3RlZCBpY29uTGlicmFyeTogTmJJY29uTGlicmFyaWVzLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogTmJTdGF0dXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pY29uRGVmID0gdGhpcy5yZW5kZXJJY29uKHRoaXMuaWNvbiwgdGhpcy5wYWNrLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgaWNvbkRlZiA9IHRoaXMuaWNvbkxpYnJhcnkuZ2V0SWNvbih0aGlzLmljb24sIHRoaXMucGFjayk7XG4gICAgaWYgKGljb25EZWYpIHtcbiAgICAgIHRoaXMucmVuZGVySWNvbih0aGlzLmljb24sIHRoaXMucGFjaywgdGhpcy5vcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhckljb24oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJY29uKG5hbWU6IHN0cmluZywgcGFjaz86IHN0cmluZywgb3B0aW9ucz86IHsgW25hbWU6IHN0cmluZ106IGFueSB9KSB7XG4gICAgY29uc3QgaWNvbkRlZmluaXRpb24gPSB0aGlzLmljb25MaWJyYXJ5LmdldEljb24obmFtZSwgcGFjayk7XG5cbiAgICBpZiAoIWljb25EZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBpY29uRGVmaW5pdGlvbi5pY29uLmdldENvbnRlbnQob3B0aW9ucyk7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIHRoaXMuaHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuYXNzaWduQ2xhc3NlcyhpY29uRGVmaW5pdGlvbi5pY29uLmdldENsYXNzZXMob3B0aW9ucykpO1xuICAgIHJldHVybiBpY29uRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBjbGVhckljb24oKTogdm9pZCB7XG4gICAgdGhpcy5odG1sID0gJyc7XG4gICAgdGhpcy5hc3NpZ25DbGFzc2VzKFtdKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3NpZ25DbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wcmV2Q2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfSk7XG5cbiAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJldkNsYXNzZXMgPSBjbGFzc2VzO1xuICB9XG59XG4iXX0=