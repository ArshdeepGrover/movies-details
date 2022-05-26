import { ContentChildren, Directive, ElementRef, HostBinding, Input, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NbIconComponent } from '../icon/icon.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/status.service";
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NbButton {
    constructor(renderer, hostElement, cd, zone, statusService) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.cd = cd;
        this.zone = zone;
        this.statusService = statusService;
        /**
         * Button size, available sizes:
         * `tiny`, `small`, `medium`, `large`, `giant`
         */
        this.size = 'medium';
        /**
         * Button status (adds specific styles):
         * `primary`, `info`, `success`, `warning`, `danger`
         */
        this.status = 'basic';
        /**
         * Button shapes: `rectangle`, `round`, `semi-round`
         */
        this.shape = 'rectangle';
        /**
         * Button appearance: `filled`, `outline`, `ghost`, `hero`
         */
        this.appearance = 'filled';
        this._fullWidth = false;
        this._disabled = false;
        this.iconLeft = false;
        this.iconRight = false;
    }
    /**
     * Sets `filled` appearance
     */
    get filled() {
        return this.appearance === 'filled';
    }
    set filled(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'filled';
        }
    }
    /**
     * Sets `outline` appearance
     */
    get outline() {
        return this.appearance === 'outline';
    }
    set outline(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'outline';
        }
    }
    /**
     * Sets `ghost` appearance
     */
    get ghost() {
        return this.appearance === 'ghost';
    }
    set ghost(value) {
        if (convertToBoolProperty(value)) {
            this.appearance = 'ghost';
        }
    }
    /**
     * If set element will fill its container
     */
    get fullWidth() {
        return this._fullWidth;
    }
    set fullWidth(value) {
        this._fullWidth = convertToBoolProperty(value);
    }
    /**
     * Disables the button
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (this.disabled !== convertToBoolProperty(value)) {
            this._disabled = !this.disabled;
            this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
        }
    }
    // issue #794
    get tabbable() {
        if (this.disabled) {
            return '-1';
        }
        if (this.tabIndex == null) {
            return '0';
        }
        return this.tabIndex.toString();
    }
    get tiny() {
        return this.size === 'tiny';
    }
    get small() {
        return this.size === 'small';
    }
    get medium() {
        return this.size === 'medium';
    }
    get large() {
        return this.size === 'large';
    }
    get giant() {
        return this.size === 'giant';
    }
    get rectangle() {
        return this.shape === 'rectangle';
    }
    get round() {
        return this.shape === 'round';
    }
    get semiRound() {
        return this.shape === 'semi-round';
    }
    get additionalClasses() {
        if (this.statusService.isCustomStatus(this.status)) {
            return [this.statusService.getStatusClass(this.status)];
        }
        return [];
    }
    ngAfterContentChecked() {
        const firstNode = this.nodes[0];
        const lastNode = this.nodes[this.nodes.length - 1];
        this.iconLeft = this.isIconExist(firstNode);
        this.iconRight = this.isIconExist(lastNode);
    }
    ngAfterViewInit() {
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    /**
     * @docs-private
     **/
    updateProperties(config) {
        let isPropertyChanged = false;
        for (const key in config) {
            if (config.hasOwnProperty(key) && this[key] !== config[key]) {
                this[key] = config[key];
                isPropertyChanged = true;
            }
        }
        if (isPropertyChanged) {
            this.cd.markForCheck();
        }
    }
    get iconElement() {
        const el = this.hostElement.nativeElement;
        return el.querySelector('nb-icon');
    }
    get nodes() {
        return this.cd.rootNodes.filter((child) => child.nodeType !== Node.COMMENT_NODE);
    }
    isIconExist(node) {
        return this.icons.some((item) => item.nativeElement === node);
    }
}
NbButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButton, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i1.NbStatusService }], target: i0.ɵɵFactoryTarget.Directive });
NbButton.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbButton, inputs: { size: "size", status: "status", shape: "shape", appearance: "appearance", filled: "filled", outline: "outline", ghost: "ghost", fullWidth: "fullWidth", disabled: "disabled", tabIndex: "tabIndex" }, host: { properties: { "class.appearance-filled": "this.filled", "class.appearance-outline": "this.outline", "class.appearance-ghost": "this.ghost", "class.full-width": "this.fullWidth", "attr.aria-disabled": "this.disabled", "class.btn-disabled": "this.disabled", "attr.tabindex": "this.tabbable", "class.size-tiny": "this.tiny", "class.size-small": "this.small", "class.size-medium": "this.medium", "class.size-large": "this.large", "class.size-giant": "this.giant", "class.shape-rectangle": "this.rectangle", "class.shape-round": "this.round", "class.shape-semi-round": "this.semiRound", "class.icon-start": "this.iconLeft", "class.icon-end": "this.iconRight", "class": "this.additionalClasses" } }, queries: [{ propertyName: "icons", predicate: NbIconComponent, read: ElementRef }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbButton, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.NbStatusService }]; }, propDecorators: { size: [{
                type: Input
            }], status: [{
                type: Input
            }], shape: [{
                type: Input
            }], appearance: [{
                type: Input
            }], filled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.appearance-filled']
            }], outline: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.appearance-outline']
            }], ghost: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.appearance-ghost']
            }], fullWidth: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.full-width']
            }], disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-disabled']
            }, {
                type: HostBinding,
                args: ['class.btn-disabled']
            }], tabIndex: [{
                type: Input
            }], tabbable: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], tiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], small: [{
                type: HostBinding,
                args: ['class.size-small']
            }], medium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], large: [{
                type: HostBinding,
                args: ['class.size-large']
            }], giant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }], rectangle: [{
                type: HostBinding,
                args: ['class.shape-rectangle']
            }], round: [{
                type: HostBinding,
                args: ['class.shape-round']
            }], semiRound: [{
                type: HostBinding,
                args: ['class.shape-semi-round']
            }], iconLeft: [{
                type: HostBinding,
                args: ['class.icon-start']
            }], iconRight: [{
                type: HostBinding,
                args: ['class.icon-end']
            }], additionalClasses: [{
                type: HostBinding,
                args: ['class']
            }], icons: [{
                type: ContentChildren,
                args: [NbIconComponent, { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1idXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9uL2Jhc2UtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFFVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFJbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPekQsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBZ0IsUUFBUTtJQTZLNUIsWUFDWSxRQUFtQixFQUNuQixXQUFvQyxFQUNwQyxFQUFxQixFQUNyQixJQUFZLEVBQ1osYUFBOEI7UUFKOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQWpMMUM7OztXQUdHO1FBQ00sU0FBSSxHQUFvQixRQUFRLENBQUM7UUFFMUM7OztXQUdHO1FBQ00sV0FBTSxHQUE4QixPQUFPLENBQUM7UUFFckQ7O1dBRUc7UUFDTSxVQUFLLEdBQXFCLFdBQVcsQ0FBQztRQUUvQzs7V0FFRztRQUNNLGVBQVUsR0FBdUIsUUFBUSxDQUFDO1FBMEQzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBa0JuQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBOERGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQW1CakQsQ0FBQztJQTdKRDs7T0FFRztJQUNILElBRUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUM7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O3VCQUFDLG9CQUFvQjtnQkFnQnhCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBSUYsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLGVBQWU7Z0JBY3hCLElBQUk7c0JBRFAsV0FBVzt1QkFBQyxpQkFBaUI7Z0JBTTFCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyx1QkFBdUI7Z0JBTWhDLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyx3QkFBd0I7Z0JBS0osUUFBUTtzQkFBeEMsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBRUEsU0FBUztzQkFBdkMsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBR3pCLGlCQUFpQjtzQkFEcEIsV0FBVzt1QkFBQyxPQUFPO2dCQVFvQyxLQUFLO3NCQUE1RCxlQUFlO3VCQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTaXplIH0gZnJvbSAnLi4vY29tcG9uZW50LXNpemUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTaGFwZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaGFwZSc7XG5pbXBvcnQgeyBOYkljb25Db21wb25lbnQgfSBmcm9tICcuLi9pY29uL2ljb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTmJCdXR0b25BcHBlYXJhbmNlID0gJ2ZpbGxlZCcgfCAnb3V0bGluZScgfCAnZ2hvc3QnIHwgJ2hlcm8nO1xuXG5leHBvcnQgdHlwZSBOYkJ1dHRvblByb3BlcnRpZXMgPSBQaWNrPE5iQnV0dG9uLCAnYXBwZWFyYW5jZScgfCAnc2l6ZScgfCAnc2hhcGUnIHwgJ3N0YXR1cycgfCAnZGlzYWJsZWQnPiAmIE9iamVjdDtcblxuQERpcmVjdGl2ZSgpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOYkJ1dHRvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogQnV0dG9uIHNpemUsIGF2YWlsYWJsZSBzaXplczpcbiAgICogYHRpbnlgLCBgc21hbGxgLCBgbWVkaXVtYCwgYGxhcmdlYCwgYGdpYW50YFxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogTmJDb21wb25lbnRTaXplID0gJ21lZGl1bSc7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBzdGF0dXMgKGFkZHMgc3BlY2lmaWMgc3R5bGVzKTpcbiAgICogYHByaW1hcnlgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYFxuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzID0gJ2Jhc2ljJztcblxuICAvKipcbiAgICogQnV0dG9uIHNoYXBlczogYHJlY3RhbmdsZWAsIGByb3VuZGAsIGBzZW1pLXJvdW5kYFxuICAgKi9cbiAgQElucHV0KCkgc2hhcGU6IE5iQ29tcG9uZW50U2hhcGUgPSAncmVjdGFuZ2xlJztcblxuICAvKipcbiAgICogQnV0dG9uIGFwcGVhcmFuY2U6IGBmaWxsZWRgLCBgb3V0bGluZWAsIGBnaG9zdGAsIGBoZXJvYFxuICAgKi9cbiAgQElucHV0KCkgYXBwZWFyYW5jZTogTmJCdXR0b25BcHBlYXJhbmNlID0gJ2ZpbGxlZCc7XG5cbiAgLyoqXG4gICAqIFNldHMgYGZpbGxlZGAgYXBwZWFyYW5jZVxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcHBlYXJhbmNlLWZpbGxlZCcpXG4gIGdldCBmaWxsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZWFyYW5jZSA9PT0gJ2ZpbGxlZCc7XG4gIH1cbiAgc2V0IGZpbGxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmIChjb252ZXJ0VG9Cb29sUHJvcGVydHkodmFsdWUpKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSAnZmlsbGVkJztcbiAgICB9XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpbGxlZDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNldHMgYG91dGxpbmVgIGFwcGVhcmFuY2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXBwZWFyYW5jZS1vdXRsaW5lJylcbiAgZ2V0IG91dGxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZWFyYW5jZSA9PT0gJ291dGxpbmUnO1xuICB9XG4gIHNldCBvdXRsaW5lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICdvdXRsaW5lJztcbiAgICB9XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX291dGxpbmU6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIGBnaG9zdGAgYXBwZWFyYW5jZVxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcHBlYXJhbmNlLWdob3N0JylcbiAgZ2V0IGdob3N0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09ICdnaG9zdCc7XG4gIH1cbiAgc2V0IGdob3N0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9ICdnaG9zdCc7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9naG9zdDogTmJCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIElmIHNldCBlbGVtZW50IHdpbGwgZmlsbCBpdHMgY29udGFpbmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZ1bGwtd2lkdGgnKVxuICBnZXQgZnVsbFdpZHRoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cbiAgc2V0IGZ1bGxXaWR0aCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZnVsbFdpZHRoID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mdWxsV2lkdGg6IE5iQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYnRuLWRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBOYkJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogVGFiaW5kZXggb2YgdGhlIGJ1dHRvbi5cbiAgICovXG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXI7XG5cbiAgLy8gaXNzdWUgIzc5NFxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiYmFibGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuICctMSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJJbmRleC50b1N0cmluZygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLXRpbnknKVxuICBnZXQgdGlueSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAndGlueSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtc21hbGwnKVxuICBnZXQgc21hbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgbWVkaXVtKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaXplLWxhcmdlJylcbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpemUtZ2lhbnQnKVxuICBnZXQgZ2lhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hhcGUtcmVjdGFuZ2xlJylcbiAgZ2V0IHJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ3JlY3RhbmdsZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNoYXBlLXJvdW5kJylcbiAgZ2V0IHJvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlID09PSAncm91bmQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaGFwZS1zZW1pLXJvdW5kJylcbiAgZ2V0IHNlbWlSb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZSA9PT0gJ3NlbWktcm91bmQnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pY29uLXN0YXJ0JykgaWNvbkxlZnQgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmljb24tZW5kJykgaWNvblJpZ2h0ID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBhZGRpdGlvbmFsQ2xhc3NlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzU2VydmljZS5pc0N1c3RvbVN0YXR1cyh0aGlzLnN0YXR1cykpIHtcbiAgICAgIHJldHVybiBbdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0NsYXNzKHRoaXMuc3RhdHVzKV07XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJJY29uQ29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaWNvbnM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHN0YXR1c1NlcnZpY2U6IE5iU3RhdHVzU2VydmljZSxcbiAgKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gdGhpcy5ub2Rlc1swXTtcbiAgICBjb25zdCBsYXN0Tm9kZSA9IHRoaXMubm9kZXNbdGhpcy5ub2Rlcy5sZW5ndGggLSAxXTtcblxuICAgIHRoaXMuaWNvbkxlZnQgPSB0aGlzLmlzSWNvbkV4aXN0KGZpcnN0Tm9kZSk7XG4gICAgdGhpcy5pY29uUmlnaHQgPSB0aGlzLmlzSWNvbkV4aXN0KGxhc3ROb2RlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBUT0RPOiAjMjI1NFxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbmItdHJhbnNpdGlvbicpO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqKi9cbiAgdXBkYXRlUHJvcGVydGllcyhjb25maWc6IFBhcnRpYWw8TmJCdXR0b25Qcm9wZXJ0aWVzPikge1xuICAgIGxldCBpc1Byb3BlcnR5Q2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpc1trZXldICE9PSBjb25maWdba2V5XSkge1xuICAgICAgICB0aGlzW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgaXNQcm9wZXJ0eUNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1Byb3BlcnR5Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaWNvbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3IoJ25iLWljb24nKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbm9kZXMoKTogTm9kZVtdIHtcbiAgICByZXR1cm4gKHRoaXMuY2QgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlcy5maWx0ZXIoKGNoaWxkOiBOb2RlKSA9PiBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzSWNvbkV4aXN0KG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pY29ucy5zb21lKChpdGVtKSA9PiBpdGVtLm5hdGl2ZUVsZW1lbnQgPT09IG5vZGUpO1xuICB9XG59XG4iXX0=