import { InjectionToken } from '@angular/core';
export var NbWindowState;
(function (NbWindowState) {
    NbWindowState["MINIMIZED"] = "minimized";
    NbWindowState["MAXIMIZED"] = "maximized";
    NbWindowState["FULL_SCREEN"] = "full-screen";
})(NbWindowState || (NbWindowState = {}));
export const NB_WINDOW_DEFAULT_BUTTONS_CONFIG = {
    minimize: true,
    maximize: true,
    fullScreen: true,
    close: true,
};
/**
 * Window configuration options.
 */
export class NbWindowConfig {
    constructor(...configs) {
        /**
         * Window title.
         */
        this.title = '';
        /**
         * Title as template may receive data through `config.titleTemplateContext` property.
         * Window title as Template. You can access context inside template as $implicit.
         */
        this.titleTemplateContext = {};
        /**
         * Initial window state. Full screen by default.
         */
        this.initialState = NbWindowState.FULL_SCREEN;
        /**
         * If true than backdrop will be rendered behind window.
         * By default set to true.
         */
        this.hasBackdrop = true;
        /**
         * If set to true mouse clicks on backdrop will close a window.
         * Default is true.
         */
        this.closeOnBackdropClick = true;
        /**
         * If true then escape press will close a window.
         * Default is true.
         */
        this.closeOnEsc = true;
        /**
         * Class to be applied to the window.
         */
        this.windowClass = '';
        /**
         * Both, template and component may receive data through `config.context` property.
         * For components, this data will be set as component properties.
         * For templates, you can access it inside template as $implicit.
         */
        this.context = {};
        /**
         * Where the attached component should live in Angular's *logical* component tree.
         * This affects what is available for injection and the change detection order for the
         * component instantiated inside of the window. This does not affect where the window
         * content will be rendered.
         */
        this.viewContainerRef = null;
        /**
         * Windows control buttons can be hidden by setting according property to false.
         */
        this.buttons = {};
        Object.assign(this, ...configs);
        this.applyDefaultButtonConfig();
    }
    applyDefaultButtonConfig() {
        Object.assign(this, { buttons: { ...NB_WINDOW_DEFAULT_BUTTONS_CONFIG, ...this.buttons } });
    }
}
export const NB_WINDOW_CONTENT = new InjectionToken('Nebular Window Content');
export const NB_WINDOW_CONFIG = new InjectionToken('Nebular Window Config');
export const NB_WINDOW_CONTEXT = new InjectionToken('Nebular Window Context');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93Lm9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZSxjQUFjLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBTTlFLE1BQU0sQ0FBTixJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsd0NBQXVCLENBQUE7SUFDdkIsd0NBQXVCLENBQUE7SUFDdkIsNENBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBY0QsTUFBTSxDQUFDLE1BQU0sZ0NBQWdDLEdBQWlDO0lBQzVFLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBaUV6QixZQUFZLEdBQUcsT0FBa0M7UUFoRWpEOztXQUVHO1FBQ0gsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQU9uQjs7O1dBR0c7UUFDSCx5QkFBb0IsR0FBWSxFQUFFLENBQUM7UUFFbkM7O1dBRUc7UUFDSCxpQkFBWSxHQUFrQixhQUFhLENBQUMsV0FBVyxDQUFDO1FBRXhEOzs7V0FHRztRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCOzs7V0FHRztRQUNILHlCQUFvQixHQUFZLElBQUksQ0FBQztRQUVyQzs7O1dBR0c7UUFDSCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCOztXQUVHO1FBQ0gsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFFekI7Ozs7V0FJRztRQUNILFlBQU8sR0FBWSxFQUFFLENBQUM7UUFFdEI7Ozs7O1dBS0c7UUFDSCxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDO1FBRTFDOztXQUVHO1FBQ0gsWUFBTyxHQUEwQyxFQUFFLENBQUM7UUFHbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRVMsd0JBQXdCO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxnQ0FBZ0MsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQXFDLHdCQUF3QixDQUFDLENBQUM7QUFDbEgsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWlCLHVCQUF1QixDQUFDLENBQUM7QUFDNUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQVMsd0JBQXdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBJbmplY3Rpb25Ub2tlbiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gRG8gbm90IHJlbW92ZSAoVFM0MDIzKS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE5iQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuXG5leHBvcnQgZW51bSBOYldpbmRvd1N0YXRlIHtcbiAgTUlOSU1JWkVEID0gJ21pbmltaXplZCcsXG4gIE1BWElNSVpFRCA9ICdtYXhpbWl6ZWQnLFxuICBGVUxMX1NDUkVFTiA9ICdmdWxsLXNjcmVlbicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmJXaW5kb3dTdGF0ZUNoYW5nZSB7XG4gIG9sZFN0YXRlOiBOYldpbmRvd1N0YXRlO1xuICBuZXdTdGF0ZTogTmJXaW5kb3dTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYldpbmRvd0NvbnRyb2xCdXR0b25zQ29uZmlnIHtcbiAgbWluaW1pemU6IGJvb2xlYW47XG4gIG1heGltaXplOiBib29sZWFuO1xuICBmdWxsU2NyZWVuOiBib29sZWFuO1xuICBjbG9zZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5CX1dJTkRPV19ERUZBVUxUX0JVVFRPTlNfQ09ORklHOiBOYldpbmRvd0NvbnRyb2xCdXR0b25zQ29uZmlnID0ge1xuICBtaW5pbWl6ZTogdHJ1ZSxcbiAgbWF4aW1pemU6IHRydWUsXG4gIGZ1bGxTY3JlZW46IHRydWUsXG4gIGNsb3NlOiB0cnVlLFxufTtcblxuLyoqXG4gKiBXaW5kb3cgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgTmJXaW5kb3dDb25maWcge1xuICAvKipcbiAgICogV2luZG93IHRpdGxlLlxuICAgKi9cbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBXaW5kb3cgdGl0bGUgYXMgdGVtcGxhdGUuIFVzZSBpdCBpbnN0ZWFkIG9mIGB0aXRsZWAgcHJvcGVydHkuXG4gICAqL1xuICB0aXRsZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVGl0bGUgYXMgdGVtcGxhdGUgbWF5IHJlY2VpdmUgZGF0YSB0aHJvdWdoIGBjb25maWcudGl0bGVUZW1wbGF0ZUNvbnRleHRgIHByb3BlcnR5LlxuICAgKiBXaW5kb3cgdGl0bGUgYXMgVGVtcGxhdGUuIFlvdSBjYW4gYWNjZXNzIGNvbnRleHQgaW5zaWRlIHRlbXBsYXRlIGFzICRpbXBsaWNpdC5cbiAgICovXG4gIHRpdGxlVGVtcGxhdGVDb250ZXh0PzogT2JqZWN0ID0ge307XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgd2luZG93IHN0YXRlLiBGdWxsIHNjcmVlbiBieSBkZWZhdWx0LlxuICAgKi9cbiAgaW5pdGlhbFN0YXRlOiBOYldpbmRvd1N0YXRlID0gTmJXaW5kb3dTdGF0ZS5GVUxMX1NDUkVFTjtcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGFuIGJhY2tkcm9wIHdpbGwgYmUgcmVuZGVyZWQgYmVoaW5kIHdpbmRvdy5cbiAgICogQnkgZGVmYXVsdCBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGhhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUgbW91c2UgY2xpY2tzIG9uIGJhY2tkcm9wIHdpbGwgY2xvc2UgYSB3aW5kb3cuXG4gICAqIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICovXG4gIGNsb3NlT25CYWNrZHJvcENsaWNrOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgdHJ1ZSB0aGVuIGVzY2FwZSBwcmVzcyB3aWxsIGNsb3NlIGEgd2luZG93LlxuICAgKiBEZWZhdWx0IGlzIHRydWUuXG4gICAqL1xuICBjbG9zZU9uRXNjOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ2xhc3MgdG8gYmUgYXBwbGllZCB0byB0aGUgd2luZG93LlxuICAgKi9cbiAgd2luZG93Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBCb3RoLCB0ZW1wbGF0ZSBhbmQgY29tcG9uZW50IG1heSByZWNlaXZlIGRhdGEgdGhyb3VnaCBgY29uZmlnLmNvbnRleHRgIHByb3BlcnR5LlxuICAgKiBGb3IgY29tcG9uZW50cywgdGhpcyBkYXRhIHdpbGwgYmUgc2V0IGFzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgKiBGb3IgdGVtcGxhdGVzLCB5b3UgY2FuIGFjY2VzcyBpdCBpbnNpZGUgdGVtcGxhdGUgYXMgJGltcGxpY2l0LlxuICAgKi9cbiAgY29udGV4dD86IE9iamVjdCA9IHt9O1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgYWZmZWN0cyB3aGF0IGlzIGF2YWlsYWJsZSBmb3IgaW5qZWN0aW9uIGFuZCB0aGUgY2hhbmdlIGRldGVjdGlvbiBvcmRlciBmb3IgdGhlXG4gICAqIGNvbXBvbmVudCBpbnN0YW50aWF0ZWQgaW5zaWRlIG9mIHRoZSB3aW5kb3cuIFRoaXMgZG9lcyBub3QgYWZmZWN0IHdoZXJlIHRoZSB3aW5kb3dcbiAgICogY29udGVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFdpbmRvd3MgY29udHJvbCBidXR0b25zIGNhbiBiZSBoaWRkZW4gYnkgc2V0dGluZyBhY2NvcmRpbmcgcHJvcGVydHkgdG8gZmFsc2UuXG4gICAqL1xuICBidXR0b25zOiBQYXJ0aWFsPE5iV2luZG93Q29udHJvbEJ1dHRvbnNDb25maWc+ID0ge307XG5cbiAgY29uc3RydWN0b3IoLi4uY29uZmlnczogUGFydGlhbDxOYldpbmRvd0NvbmZpZz5bXSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgLi4uY29uZmlncyk7XG4gICAgdGhpcy5hcHBseURlZmF1bHRCdXR0b25Db25maWcoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhcHBseURlZmF1bHRCdXR0b25Db25maWcoKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IGJ1dHRvbnM6IHsgLi4uTkJfV0lORE9XX0RFRkFVTFRfQlVUVE9OU19DT05GSUcsIC4uLnRoaXMuYnV0dG9ucyB9IH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOQl9XSU5ET1dfQ09OVEVOVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUZW1wbGF0ZVJlZjxhbnk+IHwgTmJDb21wb25lbnRUeXBlPignTmVidWxhciBXaW5kb3cgQ29udGVudCcpO1xuZXhwb3J0IGNvbnN0IE5CX1dJTkRPV19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TmJXaW5kb3dDb25maWc+KCdOZWJ1bGFyIFdpbmRvdyBDb25maWcnKTtcbmV4cG9ydCBjb25zdCBOQl9XSU5ET1dfQ09OVEVYVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPYmplY3Q+KCdOZWJ1bGFyIFdpbmRvdyBDb250ZXh0Jyk7XG4iXX0=