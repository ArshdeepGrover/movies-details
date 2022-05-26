/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { NB_MEDIA_BREAKPOINTS } from '../theme.options';
import * as i0 from "@angular/core";
export const DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
export class NbMediaBreakpointsService {
    constructor(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce((res, b) => {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    getByWidth(width) {
        const unknown = { name: 'unknown', width: width };
        const breakpoints = this.getBreakpoints();
        return breakpoints
            .find((point, index) => {
            const next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    }
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    getByName(name) {
        const unknown = { name: 'unknown', width: NaN };
        const breakpoints = this.getBreakpoints();
        return breakpoints.find((point) => name === point.name) || unknown;
    }
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    getBreakpoints() {
        return this.breakpoints;
    }
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    getBreakpointsMap() {
        return this.breakpointsMap;
    }
}
NbMediaBreakpointsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMediaBreakpointsService, deps: [{ token: NB_MEDIA_BREAKPOINTS }], target: i0.ɵɵFactoryTarget.Injectable });
NbMediaBreakpointsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMediaBreakpointsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbMediaBreakpointsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_MEDIA_BREAKPOINTS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvc2VydmljZXMvYnJlYWtwb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBWXhELE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHO0lBQ3ZDO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRDtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsSUFBSSxFQUFFLEtBQUs7UUFDWCxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUY7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8seUJBQXlCO0lBSXBDLFlBQWtELFdBQVc7UUFBWCxnQkFBVyxHQUFYLFdBQVcsQ0FBQTtRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQW9CLEVBQUUsRUFBRTtZQUMxRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLE1BQU0sT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTFDLE9BQU8sV0FBVzthQUNmLElBQUksQ0FBQyxDQUFDLEtBQXdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsSUFBWTtRQUNwQixNQUFNLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUxQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUN4RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O3NIQXJEVSx5QkFBeUIsa0JBSWhCLG9CQUFvQjswSEFKN0IseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBRHJDLFVBQVU7OzBCQUtJLE1BQU07MkJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5CX01FRElBX0JSRUFLUE9JTlRTIH0gZnJvbSAnLi4vdGhlbWUub3B0aW9ucyc7XG5cbi8qKlxuICogTWVkaWEgYnJlYWtwb2ludCB0eXBlXG4gKlxuICogV2hlcmUgYG5hbWVgIC0gYnJlYWtwb2ludCBuYW1lIGFsaWFzIChlLmcuIHhzLCBzbSwgbWQsIGV0YyksIGFuZCB3aWR0aCAtIG1pbiBicmVha3BvaW50IHdpZHRoXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmJNZWRpYUJyZWFrcG9pbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01FRElBX0JSRUFLUE9JTlRTID0gW1xuICB7XG4gICAgbmFtZTogJ3hzJyxcbiAgICB3aWR0aDogMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpcycsXG4gICAgd2lkdGg6IDQwMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzbScsXG4gICAgd2lkdGg6IDU3NixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtZCcsXG4gICAgd2lkdGg6IDc2OCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsZycsXG4gICAgd2lkdGg6IDk5MixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd4bCcsXG4gICAgd2lkdGg6IDEyMDAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAneHhsJyxcbiAgICB3aWR0aDogMTQwMCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd4eHhsJyxcbiAgICB3aWR0aDogMTYwMCxcbiAgfSxcbl07XG5cbi8qKlxuICogTWFuYWdlcyBtZWRpYSBicmVha3BvaW50c1xuICpcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBhdmFpbGFibGUgbWVkaWEgYnJlYWtwb2ludHMgdG8gY29udmVydCB3aW5kb3cgd2lkdGggdG8gYSBjb25maWd1cmVkIGJyZWFrcG9pbnQsXG4gKiBlLmcuIDIwMHB4IC0gKnhzKiBicmVha3BvaW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYk1lZGlhQnJlYWtwb2ludHNTZXJ2aWNlIHtcblxuICBwcml2YXRlIGJyZWFrcG9pbnRzTWFwOiB7IFticmVha3BvaW50OiBzdHJpbmddOiBudW1iZXIgfTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5CX01FRElBX0JSRUFLUE9JTlRTKSBwcml2YXRlIGJyZWFrcG9pbnRzKSB7XG4gICAgdGhpcy5icmVha3BvaW50c01hcCA9IHRoaXMuYnJlYWtwb2ludHMucmVkdWNlKChyZXMsIGI6IE5iTWVkaWFCcmVha3BvaW50KSA9PiB7XG4gICAgICByZXNbYi5uYW1lXSA9IGIud2lkdGg7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29uZmlndXJlZCBicmVha3BvaW50IGJ5IHdpZHRoXG4gICAqIEBwYXJhbSB3aWR0aCBudW1iZXJcbiAgICogQHJldHVybnMge1p8e25hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlcn19XG4gICAqL1xuICBnZXRCeVdpZHRoKHdpZHRoOiBudW1iZXIpOiBOYk1lZGlhQnJlYWtwb2ludCB7XG4gICAgY29uc3QgdW5rbm93biA9IHsgbmFtZTogJ3Vua25vd24nLCB3aWR0aDogd2lkdGggfTtcbiAgICBjb25zdCBicmVha3BvaW50cyA9IHRoaXMuZ2V0QnJlYWtwb2ludHMoKTtcblxuICAgIHJldHVybiBicmVha3BvaW50c1xuICAgICAgLmZpbmQoKHBvaW50OiBOYk1lZGlhQnJlYWtwb2ludCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gYnJlYWtwb2ludHNbaW5kZXggKyAxXTtcbiAgICAgICAgcmV0dXJuIHdpZHRoID49IHBvaW50LndpZHRoICYmICghbmV4dCB8fCB3aWR0aCA8IG5leHQud2lkdGgpO1xuICAgICAgfSkgfHwgdW5rbm93bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29uZmlndXJlZCBicmVha3BvaW50IGJ5IG5hbWVcbiAgICogQHBhcmFtIG5hbWUgc3RyaW5nXG4gICAqIEByZXR1cm5zIE5iTWVkaWFCcmVha3BvaW50XG4gICAqL1xuICBnZXRCeU5hbWUobmFtZTogc3RyaW5nKTogTmJNZWRpYUJyZWFrcG9pbnQge1xuICAgIGNvbnN0IHVua25vd24gPSB7IG5hbWU6ICd1bmtub3duJywgd2lkdGg6IE5hTiB9O1xuICAgIGNvbnN0IGJyZWFrcG9pbnRzID0gdGhpcy5nZXRCcmVha3BvaW50cygpO1xuXG4gICAgcmV0dXJuIGJyZWFrcG9pbnRzLmZpbmQoKHBvaW50OiBOYk1lZGlhQnJlYWtwb2ludCkgPT4gbmFtZSA9PT0gcG9pbnQubmFtZSkgfHwgdW5rbm93bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBjb25maWd1cmVkIGJyZWFrcG9pbnRzIGZvciB0aGUgdGhlbWVcbiAgICogQHJldHVybnMgTmJNZWRpYUJyZWFrcG9pbnRbXVxuICAgKi9cbiAgZ2V0QnJlYWtwb2ludHMoKTogTmJNZWRpYUJyZWFrcG9pbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hcCBvZiBjb25maWd1cmVkIGJyZWFrcG9pbnRzIGZvciB0aGUgdGhlbWVcbiAgICogQHJldHVybnMge1twOiBzdHJpbmddOiBudW1iZXJ9XG4gICAqL1xuICBnZXRCcmVha3BvaW50c01hcCgpOiB7IFticmVha3BvaW50OiBzdHJpbmddOiBudW1iZXIgfSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHNNYXA7XG4gIH1cbn1cbiJdfQ==