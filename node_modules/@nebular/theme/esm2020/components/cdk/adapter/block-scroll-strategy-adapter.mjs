import { Inject, Injectable } from '@angular/core';
import { BlockScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NB_DOCUMENT } from '../../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "./viewport-ruler-adapter";
import * as i2 from "../../../services/scroll.service";
import * as i3 from "@angular/cdk/overlay";
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
export class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    constructor(document, viewportRuler, scrollService) {
        super(viewportRuler, document);
        this.scrollService = scrollService;
    }
    enable() {
        super.enable();
        this.scrollService.scrollable(false);
    }
    disable() {
        super.disable();
        this.scrollService.scrollable(true);
    }
}
NbBlockScrollStrategyAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBlockScrollStrategyAdapter, deps: [{ token: NB_DOCUMENT }, { token: i1.NbViewportRulerAdapter }, { token: i2.NbLayoutScrollService }], target: i0.ɵɵFactoryTarget.Injectable });
NbBlockScrollStrategyAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBlockScrollStrategyAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbBlockScrollStrategyAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }, { type: i1.NbViewportRulerAdapter }, { type: i2.NbLayoutScrollService }]; } });
export class NbScrollStrategyOptions extends ScrollStrategyOptions {
    constructor(scrollService, scrollDispatcher, viewportRuler, ngZone, document) {
        super(scrollDispatcher, viewportRuler, ngZone, document);
        this.scrollService = scrollService;
        this.scrollDispatcher = scrollDispatcher;
        this.viewportRuler = viewportRuler;
        this.ngZone = ngZone;
        this.document = document;
        this.block = () => new NbBlockScrollStrategyAdapter(this.document, this.viewportRuler, this.scrollService);
    }
}
NbScrollStrategyOptions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollStrategyOptions, deps: [{ token: i2.NbLayoutScrollService }, { token: i3.ScrollDispatcher }, { token: i1.NbViewportRulerAdapter }, { token: i0.NgZone }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbScrollStrategyOptions.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollStrategyOptions });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollStrategyOptions, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.NbLayoutScrollService }, { type: i3.ScrollDispatcher }, { type: i1.NbViewportRulerAdapter }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL2FkYXB0ZXIvYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFvQixxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3BHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFJckQ7OztLQUdLO0FBRUwsTUFBTSxPQUFPLDRCQUE2QixTQUFRLG1CQUFtQjtJQUNuRSxZQUFpQyxRQUFhLEVBQ2xDLGFBQXFDLEVBQzNCLGFBQW9DO1FBQ3hELEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFEWCxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFFMUQsQ0FBQztJQUVELE1BQU07UUFDSixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsT0FBTztRQUNMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzt5SEFmVSw0QkFBNEIsa0JBQ25CLFdBQVc7NkhBRHBCLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQUR4QyxVQUFVOzswQkFFSSxNQUFNOzJCQUFDLFdBQVc7O0FBa0JqQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEscUJBQXFCO0lBQ2hFLFlBQXNCLGFBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxhQUFxQyxFQUNyQyxNQUFjLEVBQ08sUUFBUTtRQUNqRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUxyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBd0I7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNPLGFBQVEsR0FBUixRQUFRLENBQUE7UUFJbkQsVUFBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksNEJBQTRCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUZ0RyxDQUFDOztvSEFQVSx1QkFBdUIsbUpBS2QsV0FBVzt3SEFMcEIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVU7OzBCQU1JLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja1Njcm9sbFN0cmF0ZWd5LCBTY3JvbGxEaXNwYXRjaGVyLCBTY3JvbGxTdHJhdGVneU9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE5iTGF5b3V0U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Njcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5pbXBvcnQgeyBOYlZpZXdwb3J0UnVsZXJBZGFwdGVyIH0gZnJvbSAnLi92aWV3cG9ydC1ydWxlci1hZGFwdGVyJztcblxuXG4vKipcbiAqIE92ZXJyaWRlcyBkZWZhdWx0IGJsb2NrIHNjcm9sbCBzdHJhdGVneSBiZWNhdXNlIGRlZmF1bHQgc3RyYXRlZ3kgYmxvY2tzIHNjcm9sbGluZyBvbiB0aGUgYm9keSBvbmx5LlxuICogQnV0IE5lYnVsYXIgaGFzIGl0cyBvd24gc2Nyb2xsYWJsZSBjb250YWluZXIgLSBuYi1sYXlvdXQuIFNvLCB3ZSBuZWVkIHRvIGJsb2NrIHNjcm9sbGluZyBpbiBpdCB0by5cbiAqICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJCbG9ja1Njcm9sbFN0cmF0ZWd5QWRhcHRlciBleHRlbmRzIEJsb2NrU2Nyb2xsU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5CX0RPQ1VNRU5UKSBkb2N1bWVudDogYW55LFxuICAgICAgICAgICAgICB2aWV3cG9ydFJ1bGVyOiBOYlZpZXdwb3J0UnVsZXJBZGFwdGVyLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgc2Nyb2xsU2VydmljZTogTmJMYXlvdXRTY3JvbGxTZXJ2aWNlKSB7XG4gICAgc3VwZXIodmlld3BvcnRSdWxlciwgZG9jdW1lbnQpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHN1cGVyLmVuYWJsZSgpO1xuICAgIHRoaXMuc2Nyb2xsU2VydmljZS5zY3JvbGxhYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgIHRoaXMuc2Nyb2xsU2VydmljZS5zY3JvbGxhYmxlKHRydWUpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlNjcm9sbFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzY3JvbGxTZXJ2aWNlOiBOYkxheW91dFNjcm9sbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgdmlld3BvcnRSdWxlcjogTmJWaWV3cG9ydFJ1bGVyQWRhcHRlcixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQpIHtcbiAgICBzdXBlcihzY3JvbGxEaXNwYXRjaGVyLCB2aWV3cG9ydFJ1bGVyLCBuZ1pvbmUsIGRvY3VtZW50KTtcbiAgfVxuXG4gIGJsb2NrID0gKCkgPT4gbmV3IE5iQmxvY2tTY3JvbGxTdHJhdGVneUFkYXB0ZXIodGhpcy5kb2N1bWVudCwgdGhpcy52aWV3cG9ydFJ1bGVyLCB0aGlzLnNjcm9sbFNlcnZpY2UpO1xufVxuXG5leHBvcnQgdHlwZSBOYlNjcm9sbFN0cmF0ZWdpZXMgPSBrZXlvZiBQaWNrPE5iU2Nyb2xsU3RyYXRlZ3lPcHRpb25zLCAnbm9vcCcgfCAnY2xvc2UnIHwgJ2Jsb2NrJyB8ICdyZXBvc2l0aW9uJz47XG4iXX0=