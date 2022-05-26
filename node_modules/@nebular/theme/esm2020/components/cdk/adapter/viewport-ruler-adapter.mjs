import { Inject, Injectable } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { map } from 'rxjs/operators';
import { NB_DOCUMENT } from '../../../theme.options';
import * as i0 from "@angular/core";
import * as i1 from "../platform/platform-service";
import * as i2 from "../../../services/ruler.service";
import * as i3 from "../../../services/scroll.service";
export class NbViewportRulerAdapter extends ViewportRuler {
    constructor(platform, ngZone, ruler, scroll, document) {
        super(platform, ngZone, document);
        this.ruler = ruler;
        this.scroll = scroll;
    }
    getViewportSize() {
        let res;
        /*
        * getDimensions call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.ruler.getDimensions()
            .pipe(map(dimensions => ({ width: dimensions.clientWidth, height: dimensions.clientHeight })))
            .subscribe(rect => res = rect);
        return res;
    }
    getViewportScrollPosition() {
        let res;
        /*
        * getPosition call is really synchronous operation.
        * And we have to conform with the interface of the original service.
        * */
        this.scroll.getPosition()
            .pipe(map((position) => ({ top: position.y, left: position.x })))
            .subscribe(position => res = position);
        return res;
    }
}
NbViewportRulerAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbViewportRulerAdapter, deps: [{ token: i1.NbPlatform }, { token: i0.NgZone }, { token: i2.NbLayoutRulerService }, { token: i3.NbLayoutScrollService }, { token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbViewportRulerAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbViewportRulerAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbViewportRulerAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbPlatform }, { type: i0.NgZone }, { type: i2.NbLayoutRulerService }, { type: i3.NbLayoutScrollService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQtcnVsZXItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jZGsvYWRhcHRlci92aWV3cG9ydC1ydWxlci1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUlyRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUN2RCxZQUFZLFFBQW9CLEVBQUUsTUFBYyxFQUMxQixLQUEyQixFQUMzQixNQUE2QixFQUNsQixRQUFhO1FBQzVDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSGQsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7SUFHbkQsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLEdBQUcsQ0FBQztRQUNSOzs7WUFHSTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0YsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELHlCQUF5QjtRQUN2QixJQUFJLEdBQUcsQ0FBQztRQUNSOzs7WUFHSTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEYsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7bUhBOUJVLHNCQUFzQiwySUFJYixXQUFXO3VIQUpwQixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVTs7MEJBS0ksTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdwb3J0UnVsZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9wbGF0Zm9ybS1zZXJ2aWNlJztcbmltcG9ydCB7IE5iTGF5b3V0UnVsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcnVsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOYkxheW91dFNjcm9sbFNlcnZpY2UsIE5iU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBOQl9ET0NVTUVOVCB9IGZyb20gJy4uLy4uLy4uL3RoZW1lLm9wdGlvbnMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlZpZXdwb3J0UnVsZXJBZGFwdGVyIGV4dGVuZHMgVmlld3BvcnRSdWxlciB7XG4gIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBOYlBsYXRmb3JtLCBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHJ1bGVyOiBOYkxheW91dFJ1bGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHNjcm9sbDogTmJMYXlvdXRTY3JvbGxTZXJ2aWNlLFxuICAgICAgICAgICAgICBASW5qZWN0KE5CX0RPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XG4gICAgc3VwZXIocGxhdGZvcm0sIG5nWm9uZSwgZG9jdW1lbnQpO1xuICB9XG5cbiAgZ2V0Vmlld3BvcnRTaXplKCk6IFJlYWRvbmx5PHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IH0+IHtcbiAgICBsZXQgcmVzO1xuICAgIC8qXG4gICAgKiBnZXREaW1lbnNpb25zIGNhbGwgaXMgcmVhbGx5IHN5bmNocm9ub3VzIG9wZXJhdGlvbi5cbiAgICAqIEFuZCB3ZSBoYXZlIHRvIGNvbmZvcm0gd2l0aCB0aGUgaW50ZXJmYWNlIG9mIHRoZSBvcmlnaW5hbCBzZXJ2aWNlLlxuICAgICogKi9cbiAgICB0aGlzLnJ1bGVyLmdldERpbWVuc2lvbnMoKVxuICAgICAgLnBpcGUobWFwKGRpbWVuc2lvbnMgPT4gKHsgd2lkdGg6IGRpbWVuc2lvbnMuY2xpZW50V2lkdGgsIGhlaWdodDogZGltZW5zaW9ucy5jbGllbnRIZWlnaHQgfSkpKVxuICAgICAgLnN1YnNjcmliZShyZWN0ID0+IHJlcyA9IHJlY3QpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBnZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk6IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlciB9IHtcbiAgICBsZXQgcmVzO1xuICAgIC8qXG4gICAgKiBnZXRQb3NpdGlvbiBjYWxsIGlzIHJlYWxseSBzeW5jaHJvbm91cyBvcGVyYXRpb24uXG4gICAgKiBBbmQgd2UgaGF2ZSB0byBjb25mb3JtIHdpdGggdGhlIGludGVyZmFjZSBvZiB0aGUgb3JpZ2luYWwgc2VydmljZS5cbiAgICAqICovXG4gICAgdGhpcy5zY3JvbGwuZ2V0UG9zaXRpb24oKVxuICAgICAgLnBpcGUobWFwKChwb3NpdGlvbjogTmJTY3JvbGxQb3NpdGlvbikgPT4gKHsgdG9wOiBwb3NpdGlvbi55LCBsZWZ0OiBwb3NpdGlvbi54IH0pKSlcbiAgICAgIC5zdWJzY3JpYmUocG9zaXRpb24gPT4gcmVzID0gcG9zaXRpb24pO1xuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==