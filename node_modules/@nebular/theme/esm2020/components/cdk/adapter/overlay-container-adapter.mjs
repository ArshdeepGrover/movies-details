import { Injectable } from '@angular/core';
import { NbOverlayContainer } from '../overlay/mapping';
import * as i0 from "@angular/core";
function throwLayoutNotFoundError() {
    throw new Error(`[NbOverlayContainerAdapter]: Layout not found.
  When using Nebular '<nb-layout>' is required and should wrap other nebular components.`);
}
/**
 * Provides nb-layout as overlay container.
 * Container has to be cleared when layout destroys.
 * Another way previous version of the container will be used
 * but it isn't inserted in DOM and exists in memory only.
 * This case important only if you switch between multiple layouts.
 * */
export class NbOverlayContainerAdapter extends NbOverlayContainer {
    setContainer(container) {
        this.container = container;
    }
    clearContainer() {
        this.container = null;
        this._containerElement = null;
    }
    _createContainer() {
        this.checkContainer();
        const container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this.container.appendChild(container);
        this._containerElement = container;
    }
    checkContainer() {
        if (!this.container) {
            throwLayoutNotFoundError();
        }
    }
}
NbOverlayContainerAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainerAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NbOverlayContainerAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainerAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOverlayContainerAdapter, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvYWRhcHRlci9vdmVybGF5LWNvbnRhaW5lci1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXhELFNBQVMsd0JBQXdCO0lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUM7eUZBQ3VFLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQ7Ozs7OztLQU1LO0FBRUwsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGtCQUFrQjtJQUcvRCxZQUFZLENBQUMsU0FBc0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsY0FBYztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQix3QkFBd0IsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7c0hBekJVLHlCQUF5QjswSEFBekIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXkvbWFwcGluZyc7XG5cbmZ1bmN0aW9uIHRocm93TGF5b3V0Tm90Rm91bmRFcnJvcigpOiB2b2lkIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBbTmJPdmVybGF5Q29udGFpbmVyQWRhcHRlcl06IExheW91dCBub3QgZm91bmQuXG4gIFdoZW4gdXNpbmcgTmVidWxhciAnPG5iLWxheW91dD4nIGlzIHJlcXVpcmVkIGFuZCBzaG91bGQgd3JhcCBvdGhlciBuZWJ1bGFyIGNvbXBvbmVudHMuYCk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgbmItbGF5b3V0IGFzIG92ZXJsYXkgY29udGFpbmVyLlxuICogQ29udGFpbmVyIGhhcyB0byBiZSBjbGVhcmVkIHdoZW4gbGF5b3V0IGRlc3Ryb3lzLlxuICogQW5vdGhlciB3YXkgcHJldmlvdXMgdmVyc2lvbiBvZiB0aGUgY29udGFpbmVyIHdpbGwgYmUgdXNlZFxuICogYnV0IGl0IGlzbid0IGluc2VydGVkIGluIERPTSBhbmQgZXhpc3RzIGluIG1lbW9yeSBvbmx5LlxuICogVGhpcyBjYXNlIGltcG9ydGFudCBvbmx5IGlmIHlvdSBzd2l0Y2ggYmV0d2VlbiBtdWx0aXBsZSBsYXlvdXRzLlxuICogKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYk92ZXJsYXlDb250YWluZXJBZGFwdGVyIGV4dGVuZHMgTmJPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgc2V0Q29udGFpbmVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIGNsZWFyQ29udGFpbmVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250YWluZXIoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjZGstb3ZlcmxheS1jb250YWluZXInKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tDb250YWluZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhyb3dMYXlvdXROb3RGb3VuZEVycm9yKCk7XG4gICAgfVxuICB9XG59XG4iXX0=