/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
import { NbGlobalLogicalPosition } from '../cdk/overlay/position-helper';
export const NB_TOASTR_CONFIG = new InjectionToken('Default toastr options');
/**
 * The `NbToastrConfig` class describes configuration of the `NbToastrService.show` and global toastr configuration.
 * */
export class NbToastrConfig {
    constructor(config) {
        /**
         * Determines where on the screen toast have to be rendered.
         * */
        this.position = NbGlobalLogicalPosition.TOP_END;
        /**
         * Status chooses color scheme for the toast.
         * */
        this.status = 'basic';
        /**
         * Duration is timeout between toast appears and disappears.
         * */
        this.duration = 3000;
        /**
         * Destroy by click means you can hide the toast by clicking it.
         * */
        this.destroyByClick = true;
        /**
         * If preventDuplicates is true then the toast with the same title, message and status will not be rendered.
         * Find duplicates behaviour determined by `preventDuplicates`.
         * The default `previous` duplicate behaviour is used.
         * */
        this.preventDuplicates = false;
        /**
         * Determines the how to treat duplicates.
         * */
        this.duplicatesBehaviour = 'previous';
        /*
        * The number of visible toasts. If the limit exceeded the oldest toast will be removed.
        * */
        this.limit = null;
        /**
         * Class to be applied to the toast.
         */
        this.toastClass = '';
        /**
         * Determines render icon or not.
         * */
        this.hasIcon = true;
        /**
         * Icon name or icon config object that can be provided to render custom icon.
         * */
        this.icon = 'email';
        /**
         * Toast status icon-class mapping.
         * */
        this.icons = {
            danger: 'flash-outline',
            success: 'checkmark-outline',
            info: 'question-mark-outline',
            warning: 'alert-triangle-outline',
            primary: 'email-outline',
            control: 'email-outline',
            basic: 'email-outline',
        };
        this.patchIcon(config);
        Object.assign(this, config);
    }
    patchIcon(config) {
        if (!('icon' in config)) {
            config.icon = {
                icon: this.icons[config.status] || this.icons.basic,
                pack: 'nebular-essentials',
            };
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90b2FzdHIvdG9hc3RyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQW9CLE1BQU0sZ0NBQWdDLENBQUM7QUFRM0YsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWlCLHdCQUF3QixDQUFDLENBQUM7QUFJN0Y7O0tBRUs7QUFDTCxNQUFNLE9BQU8sY0FBYztJQXdEekIsWUFBWSxNQUErQjtRQXZEM0M7O2FBRUs7UUFDTCxhQUFRLEdBQXFCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUM3RDs7YUFFSztRQUNMLFdBQU0sR0FBOEIsT0FBTyxDQUFDO1FBQzVDOzthQUVLO1FBQ0wsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4Qjs7YUFFSztRQUNMLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9COzs7O2FBSUs7UUFDTCxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkM7O2FBRUs7UUFDTCx3QkFBbUIsR0FBOEIsVUFBVSxDQUFDO1FBQzVEOztZQUVJO1FBQ0osVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0Qjs7V0FFRztRQUNILGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEI7O2FBRUs7UUFDTCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCOzthQUVLO1FBQ0wsU0FBSSxHQUEwQixPQUFPLENBQUM7UUFDdEM7O2FBRUs7UUFDSyxVQUFLLEdBQW1CO1lBQ2hDLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtBQUssRUFBRSxlQUFlO1NBQ3ZCLENBQUM7UUFHQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFUyxTQUFTLENBQUMsTUFBK0I7UUFDakQsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDbkQsSUFBSSxFQUFFLG9CQUFvQjthQUMzQixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uLCBOYkdsb2JhbFBvc2l0aW9uIH0gZnJvbSAnLi4vY2RrL292ZXJsYXkvcG9zaXRpb24taGVscGVyJztcbmltcG9ydCB7IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMsIE5iQ29tcG9uZW50U3RhdHVzIH0gZnJvbSAnLi4vY29tcG9uZW50LXN0YXR1cyc7XG5pbXBvcnQgeyBOYkljb25Db25maWcgfSBmcm9tICcuLi9pY29uL2ljb24uY29tcG9uZW50JztcblxudHlwZSBJY29uVG9DbGFzc01hcCA9IHtcbiAgW3N0YXR1cyBpbiBOYkNvbXBvbmVudFN0YXR1c106IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5CX1RPQVNUUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmJUb2FzdHJDb25maWc+KCdEZWZhdWx0IHRvYXN0ciBvcHRpb25zJyk7XG5cbmV4cG9ydCB0eXBlIE5iRHVwbGljYXRlVG9hc3RCZWhhdmlvdXIgPSAncHJldmlvdXMnIHwgJ2FsbCc7XG5cbi8qKlxuICogVGhlIGBOYlRvYXN0ckNvbmZpZ2AgY2xhc3MgZGVzY3JpYmVzIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGBOYlRvYXN0clNlcnZpY2Uuc2hvd2AgYW5kIGdsb2JhbCB0b2FzdHIgY29uZmlndXJhdGlvbi5cbiAqICovXG5leHBvcnQgY2xhc3MgTmJUb2FzdHJDb25maWcge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGVyZSBvbiB0aGUgc2NyZWVuIHRvYXN0IGhhdmUgdG8gYmUgcmVuZGVyZWQuXG4gICAqICovXG4gIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uID0gTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX0VORDtcbiAgLyoqXG4gICAqIFN0YXR1cyBjaG9vc2VzIGNvbG9yIHNjaGVtZSBmb3IgdGhlIHRvYXN0LlxuICAgKiAqL1xuICBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXMgPSAnYmFzaWMnO1xuICAvKipcbiAgICogRHVyYXRpb24gaXMgdGltZW91dCBiZXR3ZWVuIHRvYXN0IGFwcGVhcnMgYW5kIGRpc2FwcGVhcnMuXG4gICAqICovXG4gIGR1cmF0aW9uOiBudW1iZXIgPSAzMDAwO1xuICAvKipcbiAgICogRGVzdHJveSBieSBjbGljayBtZWFucyB5b3UgY2FuIGhpZGUgdGhlIHRvYXN0IGJ5IGNsaWNraW5nIGl0LlxuICAgKiAqL1xuICBkZXN0cm95QnlDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBJZiBwcmV2ZW50RHVwbGljYXRlcyBpcyB0cnVlIHRoZW4gdGhlIHRvYXN0IHdpdGggdGhlIHNhbWUgdGl0bGUsIG1lc3NhZ2UgYW5kIHN0YXR1cyB3aWxsIG5vdCBiZSByZW5kZXJlZC5cbiAgICogRmluZCBkdXBsaWNhdGVzIGJlaGF2aW91ciBkZXRlcm1pbmVkIGJ5IGBwcmV2ZW50RHVwbGljYXRlc2AuXG4gICAqIFRoZSBkZWZhdWx0IGBwcmV2aW91c2AgZHVwbGljYXRlIGJlaGF2aW91ciBpcyB1c2VkLlxuICAgKiAqL1xuICBwcmV2ZW50RHVwbGljYXRlczogYm9vbGVhbiA9IGZhbHNlO1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaG93IHRvIHRyZWF0IGR1cGxpY2F0ZXMuXG4gICAqICovXG4gIGR1cGxpY2F0ZXNCZWhhdmlvdXI6IE5iRHVwbGljYXRlVG9hc3RCZWhhdmlvdXIgPSAncHJldmlvdXMnO1xuICAvKlxuICAqIFRoZSBudW1iZXIgb2YgdmlzaWJsZSB0b2FzdHMuIElmIHRoZSBsaW1pdCBleGNlZWRlZCB0aGUgb2xkZXN0IHRvYXN0IHdpbGwgYmUgcmVtb3ZlZC5cbiAgKiAqL1xuICBsaW1pdD86IG51bWJlciA9IG51bGw7XG4gIC8qKlxuICAgKiBDbGFzcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b2FzdC5cbiAgICovXG4gIHRvYXN0Q2xhc3M6IHN0cmluZyA9ICcnO1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyByZW5kZXIgaWNvbiBvciBub3QuXG4gICAqICovXG4gIGhhc0ljb246IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogSWNvbiBuYW1lIG9yIGljb24gY29uZmlnIG9iamVjdCB0aGF0IGNhbiBiZSBwcm92aWRlZCB0byByZW5kZXIgY3VzdG9tIGljb24uXG4gICAqICovXG4gIGljb246IHN0cmluZyB8IE5iSWNvbkNvbmZpZyA9ICdlbWFpbCc7XG4gIC8qKlxuICAgKiBUb2FzdCBzdGF0dXMgaWNvbi1jbGFzcyBtYXBwaW5nLlxuICAgKiAqL1xuICBwcm90ZWN0ZWQgaWNvbnM6IEljb25Ub0NsYXNzTWFwID0ge1xuICAgIGRhbmdlcjogJ2ZsYXNoLW91dGxpbmUnLFxuICAgIHN1Y2Nlc3M6ICdjaGVja21hcmstb3V0bGluZScsXG4gICAgaW5mbzogJ3F1ZXN0aW9uLW1hcmstb3V0bGluZScsXG4gICAgd2FybmluZzogJ2FsZXJ0LXRyaWFuZ2xlLW91dGxpbmUnLFxuICAgIHByaW1hcnk6ICdlbWFpbC1vdXRsaW5lJyxcbiAgICBjb250cm9sOiAnZW1haWwtb3V0bGluZScsXG4gICAgYmFzaWM6ICdlbWFpbC1vdXRsaW5lJyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBhcnRpYWw8TmJUb2FzdHJDb25maWc+KSB7XG4gICAgdGhpcy5wYXRjaEljb24oY29uZmlnKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGF0Y2hJY29uKGNvbmZpZzogUGFydGlhbDxOYlRvYXN0ckNvbmZpZz4pIHtcbiAgICBpZiAoISgnaWNvbicgaW4gY29uZmlnKSkge1xuICAgICAgY29uZmlnLmljb24gPSB7XG4gICAgICAgIGljb246IHRoaXMuaWNvbnNbY29uZmlnLnN0YXR1c10gfHwgdGhpcy5pY29ucy5iYXNpYyxcbiAgICAgICAgcGFjazogJ25lYnVsYXItZXNzZW50aWFscycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19