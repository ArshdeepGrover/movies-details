import { Inject, Injectable } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { merge } from 'rxjs';
import { NB_DOCUMENT } from '../../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../platform/platform-service";
import * as i2 from "../../../services/scroll.service";
export class NbScrollDispatcherAdapter extends ScrollDispatcher {
    constructor(ngZone, platform, scrollService, document) {
        super(ngZone, platform, document);
        this.scrollService = scrollService;
    }
    scrolled(auditTimeInMs) {
        return merge(super.scrolled(auditTimeInMs), this.scrollService.onScroll());
    }
}
NbScrollDispatcherAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollDispatcherAdapter, deps: [{ token: i0.NgZone }, { token: i1.NbPlatform }, { token: i2.NbLayoutScrollService }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbScrollDispatcherAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollDispatcherAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbScrollDispatcherAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i1.NbPlatform }, { type: i2.NbLayoutScrollService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRpc3BhdGNoZXItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvYWRhcHRlci9zY3JvbGwtZGlzcGF0Y2hlci1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBSXpDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUdyRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO0lBQzdELFlBQVksTUFBYyxFQUNkLFFBQW9CLEVBQ1YsYUFBb0MsRUFDekIsUUFBYTtRQUM1QyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUZkLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUcxRCxDQUFDO0lBRUQsUUFBUSxDQUFDLGFBQXNCO1FBQzdCLE9BQU8sS0FBSyxDQUNWLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQzlCLENBQUM7SUFDSixDQUFDOztzSEFiVSx5QkFBeUIsdUdBSWhCLFdBQVc7MEhBSnBCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFLSSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSwgU2Nyb2xsRGlzcGF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE5iUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9wbGF0Zm9ybS1zZXJ2aWNlJztcbmltcG9ydCB7IE5iTGF5b3V0U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Njcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnLi4vLi4vLi4vdGhlbWUub3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlNjcm9sbERpc3BhdGNoZXJBZGFwdGVyIGV4dGVuZHMgU2Nyb2xsRGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwbGF0Zm9ybTogTmJQbGF0Zm9ybSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHNjcm9sbFNlcnZpY2U6IE5iTGF5b3V0U2Nyb2xsU2VydmljZSxcbiAgICAgICAgICAgICAgQEluamVjdChOQl9ET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xuICAgIHN1cGVyKG5nWm9uZSwgcGxhdGZvcm0sIGRvY3VtZW50KTtcbiAgfVxuXG4gIHNjcm9sbGVkKGF1ZGl0VGltZUluTXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPENka1Njcm9sbGFibGUgfCB2b2lkPiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgc3VwZXIuc2Nyb2xsZWQoYXVkaXRUaW1lSW5NcyksXG4gICAgICB0aGlzLnNjcm9sbFNlcnZpY2Uub25TY3JvbGwoKSxcbiAgICApO1xuICB9XG59XG5cbiJdfQ==