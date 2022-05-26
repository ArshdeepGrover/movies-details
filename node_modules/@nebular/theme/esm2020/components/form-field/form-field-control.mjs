/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/*
 * Class used as injection token to provide form element.
 **/
export class NbFormFieldControl {
}
NbFormFieldControl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControl, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbFormFieldControl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControl, decorators: [{
            type: Injectable
        }] });
/*
 * Optional config to be provided on NbFormFieldControl to alter default settings.
 **/
export class NbFormFieldControlConfig {
    constructor() {
        this.supportsPrefix = true;
        this.supportsSuffix = true;
    }
}
NbFormFieldControlConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControlConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbFormFieldControlConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControlConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldControlConfig, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQzs7SUFFSTtBQUVKLE1BQU0sT0FBZ0Isa0JBQWtCOzsrR0FBbEIsa0JBQWtCO21IQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFEdkMsVUFBVTs7QUFTWDs7SUFFSTtBQUVKLE1BQU0sT0FBTyx3QkFBd0I7SUFEckM7UUFFRSxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFHLElBQUksQ0FBQztLQUN2Qjs7cUhBSFksd0JBQXdCO3lIQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudC1zdGF0dXMnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTaXplIH0gZnJvbSAnLi4vY29tcG9uZW50LXNpemUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKlxuICogQ2xhc3MgdXNlZCBhcyBpbmplY3Rpb24gdG9rZW4gdG8gcHJvdmlkZSBmb3JtIGVsZW1lbnQuXG4gKiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmJGb3JtRmllbGRDb250cm9sIHtcbiAgc3RhdHVzJDogT2JzZXJ2YWJsZTxOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzPjtcbiAgc2l6ZSQ6IE9ic2VydmFibGU8TmJDb21wb25lbnRTaXplPjtcbiAgZm9jdXNlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGRpc2FibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgZnVsbFdpZHRoJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cblxuLypcbiAqIE9wdGlvbmFsIGNvbmZpZyB0byBiZSBwcm92aWRlZCBvbiBOYkZvcm1GaWVsZENvbnRyb2wgdG8gYWx0ZXIgZGVmYXVsdCBzZXR0aW5ncy5cbiAqKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkZvcm1GaWVsZENvbnRyb2xDb25maWcge1xuICBzdXBwb3J0c1ByZWZpeCA9IHRydWU7XG4gIHN1cHBvcnRzU3VmZml4ID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYkZvcm1Db250cm9sU3RhdGUge1xuICBzdGF0dXM6IE5iQ29tcG9uZW50T3JDdXN0b21TdGF0dXM7XG4gIHNpemU6IE5iQ29tcG9uZW50U2l6ZTtcbiAgZnVsbFdpZHRoOiBib29sZWFuO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cbiJdfQ==