import { Component, ComponentFactoryResolver, HostBinding, Input, ViewChild, } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbPortalInjector, NbPortalOutletDirective } from './mapping';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./mapping";
export class NbPositionedContainerComponent {
    get top() {
        return this.position === NbPosition.TOP;
    }
    get topStart() {
        return this.position === NbPosition.TOP_START;
    }
    get topEnd() {
        return this.position === NbPosition.TOP_END;
    }
    get right() {
        return this.position === NbPosition.RIGHT || this.position === NbPosition.END;
    }
    get endTop() {
        return this.position === NbPosition.END_TOP;
    }
    get endBottom() {
        return this.position === NbPosition.END_BOTTOM;
    }
    get bottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get bottomStart() {
        return this.position === NbPosition.BOTTOM_START;
    }
    get bottomEnd() {
        return this.position === NbPosition.BOTTOM_END;
    }
    get left() {
        return this.position === NbPosition.LEFT || this.position === NbPosition.START;
    }
    get startTop() {
        return this.position === NbPosition.START_TOP;
    }
    get startBottom() {
        return this.position === NbPosition.START_BOTTOM;
    }
}
NbPositionedContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPositionedContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbPositionedContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbPositionedContainerComponent, selector: "ng-component", inputs: { position: "position" }, host: { properties: { "class.nb-overlay-top": "this.top", "class.nb-overlay-top-start": "this.topStart", "class.nb-overlay-top-end": "this.topEnd", "class.nb-overlay-right": "this.right", "class.nb-overlay-end-top": "this.endTop", "class.nb-overlay-end-bottom": "this.endBottom", "class.nb-overlay-bottom": "this.bottom", "class.nb-overlay-bottom-start": "this.bottomStart", "class.nb-overlay-bottom-end": "this.bottomEnd", "class.nb-overlay-left": "this.left", "class.nb-overlay-start-top": "this.startTop", "class.nb-overlay-start-bottom": "this.startBottom" } }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPositionedContainerComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], propDecorators: { position: [{
                type: Input
            }], top: [{
                type: HostBinding,
                args: ['class.nb-overlay-top']
            }], topStart: [{
                type: HostBinding,
                args: ['class.nb-overlay-top-start']
            }], topEnd: [{
                type: HostBinding,
                args: ['class.nb-overlay-top-end']
            }], right: [{
                type: HostBinding,
                args: ['class.nb-overlay-right']
            }], endTop: [{
                type: HostBinding,
                args: ['class.nb-overlay-end-top']
            }], endBottom: [{
                type: HostBinding,
                args: ['class.nb-overlay-end-bottom']
            }], bottom: [{
                type: HostBinding,
                args: ['class.nb-overlay-bottom']
            }], bottomStart: [{
                type: HostBinding,
                args: ['class.nb-overlay-bottom-start']
            }], bottomEnd: [{
                type: HostBinding,
                args: ['class.nb-overlay-bottom-end']
            }], left: [{
                type: HostBinding,
                args: ['class.nb-overlay-left']
            }], startTop: [{
                type: HostBinding,
                args: ['class.nb-overlay-start-top']
            }], startBottom: [{
                type: HostBinding,
                args: ['class.nb-overlay-start-bottom']
            }] } });
export class NbOverlayContainerComponent {
    constructor(vcr, injector, changeDetectorRef) {
        this.vcr = vcr;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.isAttached = false;
    }
    get isStringContent() {
        return !!this.content;
    }
    attachComponentPortal(portal, context) {
        portal.injector = this.createChildInjector(portal.componentFactoryResolver);
        const componentRef = this.portalOutlet.attachComponentPortal(portal);
        if (context) {
            Object.assign(componentRef.instance, context);
        }
        componentRef.changeDetectorRef.markForCheck();
        componentRef.changeDetectorRef.detectChanges();
        this.isAttached = true;
        return componentRef;
    }
    attachTemplatePortal(portal) {
        const templateRef = this.portalOutlet.attachTemplatePortal(portal);
        templateRef.detectChanges();
        this.isAttached = true;
        return templateRef;
    }
    attachStringContent(content) {
        this.content = content;
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
        this.isAttached = true;
    }
    detach() {
        if (this.portalOutlet.hasAttached()) {
            this.portalOutlet.detach();
        }
        this.attachStringContent(null);
        this.isAttached = false;
    }
    createChildInjector(cfr) {
        return new NbPortalInjector(this.injector, new WeakMap([
            [ComponentFactoryResolver, cfr],
        ]));
    }
}
NbOverlayContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainerComponent, deps: [{ token: i0.ViewContainerRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbOverlayContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbOverlayContainerComponent, selector: "nb-overlay-container", viewQueries: [{ propertyName: "portalOutlet", first: true, predicate: NbPortalOutletDirective, descendants: true, static: true }], ngImport: i0, template: `
    <div *ngIf="isStringContent" class="primitive-overlay">{{ content }}</div>
    <ng-template nbPortalOutlet></ng-template>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NbPortalOutletDirective, selector: "[nbPortalOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-overlay-container',
                    template: `
    <div *ngIf="isStringContent" class="primitive-overlay">{{ content }}</div>
    <ng-template nbPortalOutlet></ng-template>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { portalOutlet: [{
                type: ViewChild,
                args: [NbPortalOutletDirective, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCx3QkFBd0IsRUFHeEIsV0FBVyxFQUVYLEtBQUssRUFDTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQW9CLE1BQU0sV0FBVyxDQUFDOzs7O0FBZ0IzRyxNQUFNLE9BQU8sOEJBQThCO0lBR3pDLElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUNoRixDQUFDO0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUNJLE1BQU07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XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iUG9zaXRpb24gfSBmcm9tICcuL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgTmJDb21wb25lbnRQb3J0YWwsIE5iUG9ydGFsSW5qZWN0b3IsIE5iUG9ydGFsT3V0bGV0RGlyZWN0aXZlLCBOYlRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnLi9tYXBwaW5nJztcblxuZXhwb3J0IGludGVyZmFjZSBOYlJlbmRlcmFibGVDb250YWluZXIge1xuXG4gIC8qKlxuICAgKiBBIHJlbmRlckNvbnRlbnQgbWV0aG9kIHJlbmRlcnMgY29udGVudCB3aXRoIHByb3ZpZGVkIGNvbnRleHQuXG4gICAqIE5hdHVyYWxseSwgdGhpcyBqb2IgaGFzIHRvIGJlIGRvbmUgYnkgbmdPbkNoYW5nZXMgbGlmZWN5Y2xlIGhvb2ssIGJ1dFxuICAgKiBuZ09uQ2hhbmdlcyBob29rIHdpbGwgYmUgdHJpZ2dlcmVkIG9ubHkgaWYgd2UgdXBkYXRlIGNvbnRlbnQgb3IgY29udGV4dCBwcm9wZXJ0aWVzXG4gICAqIHRocm91Z2ggdGVtcGxhdGUgcHJvcGVydHkgYmluZGluZyBzeW50YXguIEJ1dCBpbiBvdXIgY2FzZSB3ZSdyZSB1cGRhdGluZyB0aGVzZSBwcm9wZXJ0aWVzIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqICovXG4gIHJlbmRlckNvbnRlbnQoKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJQb3NpdGlvbmVkQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcG9zaXRpb246IE5iUG9zaXRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1vdmVybGF5LXRvcCcpXG4gIGdldCB0b3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IE5iUG9zaXRpb24uVE9QO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1vdmVybGF5LXRvcC1zdGFydCcpXG4gIGdldCB0b3BTdGFydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5UT1BfU1RBUlQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLW92ZXJsYXktdG9wLWVuZCcpXG4gIGdldCB0b3BFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IE5iUG9zaXRpb24uVE9QX0VORDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmItb3ZlcmxheS1yaWdodCcpXG4gIGdldCByaWdodCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5SSUdIVCB8fCB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLkVORDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmItb3ZlcmxheS1lbmQtdG9wJylcbiAgZ2V0IGVuZFRvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5FTkRfVE9QO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1vdmVybGF5LWVuZC1ib3R0b20nKVxuICBnZXQgZW5kQm90dG9tKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLkVORF9CT1RUT007XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLW92ZXJsYXktYm90dG9tJylcbiAgZ2V0IGJvdHRvbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5CT1RUT007XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLW92ZXJsYXktYm90dG9tLXN0YXJ0JylcbiAgZ2V0IGJvdHRvbVN0YXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLkJPVFRPTV9TVEFSVDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmItb3ZlcmxheS1ib3R0b20tZW5kJylcbiAgZ2V0IGJvdHRvbUVuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5CT1RUT01fRU5EO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1vdmVybGF5LWxlZnQnKVxuICBnZXQgbGVmdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gTmJQb3NpdGlvbi5MRUZUIHx8IHRoaXMucG9zaXRpb24gPT09IE5iUG9zaXRpb24uU1RBUlQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLW92ZXJsYXktc3RhcnQtdG9wJylcbiAgZ2V0IHN0YXJ0VG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLlNUQVJUX1RPUDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmItb3ZlcmxheS1zdGFydC1ib3R0b20nKVxuICBnZXQgc3RhcnRCb3R0b20oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24gPT09IE5iUG9zaXRpb24uU1RBUlRfQk9UVE9NO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItb3ZlcmxheS1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpc1N0cmluZ0NvbnRlbnRcIiBjbGFzcz1cInByaW1pdGl2ZS1vdmVybGF5XCI+e3sgY29udGVudCB9fTwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSBuYlBvcnRhbE91dGxldD48L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYk92ZXJsYXlDb250YWluZXJDb21wb25lbnQge1xuXG4gIC8vIFRPRE8gc3RhdGljIG11c3QgYmUgZmFsc2UgYXMgb2YgQW5ndWxhciA5LjAuMCwgaXNzdWVzLzE1MTRcbiAgQFZpZXdDaGlsZChOYlBvcnRhbE91dGxldERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcG9ydGFsT3V0bGV0OiBOYlBvcnRhbE91dGxldERpcmVjdGl2ZTtcblxuICBpc0F0dGFjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29udGVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBnZXQgaXNTdHJpbmdDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY29udGVudDtcbiAgfVxuXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IE5iQ29tcG9uZW50UG9ydGFsPFQ+LCBjb250ZXh0PzogT2JqZWN0KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICBwb3J0YWwuaW5qZWN0b3IgPSB0aGlzLmNyZWF0ZUNoaWxkSW5qZWN0b3IocG9ydGFsLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50UmVmLmluc3RhbmNlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBOYlRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlZiA9IHRoaXMucG9ydGFsT3V0bGV0LmF0dGFjaFRlbXBsYXRlUG9ydGFsKHBvcnRhbCk7XG4gICAgdGVtcGxhdGVSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuaXNBdHRhY2hlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRlbXBsYXRlUmVmO1xuICB9XG5cbiAgYXR0YWNoU3RyaW5nQ29udGVudChjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5wb3J0YWxPdXRsZXQuZGV0YWNoKCk7XG4gICAgfVxuICAgIHRoaXMuYXR0YWNoU3RyaW5nQ29udGVudChudWxsKTtcbiAgICB0aGlzLmlzQXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDaGlsZEluamVjdG9yKGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTogTmJQb3J0YWxJbmplY3RvciB7XG4gICAgcmV0dXJuIG5ldyBOYlBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIG5ldyBXZWFrTWFwKFtcbiAgICAgIFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGNmcl0sXG4gICAgXSkpO1xuICB9XG59XG4iXX0=