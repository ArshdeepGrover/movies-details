/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NbStatusService {
    constructor() {
        this.coreStatuses = ['basic', 'primary', 'info', 'warning', 'danger', 'control'];
    }
    isCoreStatus(status) {
        return this.coreStatuses.includes(status);
    }
    isCustomStatus(status) {
        if (this.isValidStatusString(status)) {
            return !this.isCoreStatus(status);
        }
        return false;
    }
    getStatusClass(status) {
        if (this.isValidStatusString(status)) {
            return `status-${status}`;
        }
        return undefined;
    }
    isValidStatusString(status) {
        return typeof status === 'string' && status.length > 0;
    }
}
NbStatusService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStatusService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbStatusService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStatusService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbStatusService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL3NlcnZpY2VzL3N0YXR1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVXLGlCQUFZLEdBQXdCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztLQXlCM0c7SUF2QkMsWUFBWSxDQUFDLE1BQWlDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBMkIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBaUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBaUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxVQUFVLE1BQU0sRUFBRSxDQUFDO1NBQzNCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVTLG1CQUFtQixDQUFDLE1BQWlDO1FBQzdELE9BQU8sT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OzRHQXpCVSxlQUFlO2dIQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzLCBOYkNvbXBvbmVudFN0YXR1cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcG9uZW50LXN0YXR1cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlN0YXR1c1NlcnZpY2Uge1xuICByZWFkb25seSBjb3JlU3RhdHVzZXM6IE5iQ29tcG9uZW50U3RhdHVzW10gPSBbJ2Jhc2ljJywgJ3ByaW1hcnknLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdjb250cm9sJ107XG5cbiAgaXNDb3JlU3RhdHVzKHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvcmVTdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMgYXMgTmJDb21wb25lbnRTdGF0dXMpO1xuICB9XG5cbiAgaXNDdXN0b21TdGF0dXMoc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZFN0YXR1c1N0cmluZyhzdGF0dXMpKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaXNDb3JlU3RhdHVzKHN0YXR1cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0U3RhdHVzQ2xhc3Moc3RhdHVzOiBOYkNvbXBvbmVudE9yQ3VzdG9tU3RhdHVzKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkU3RhdHVzU3RyaW5nKHN0YXR1cykpIHtcbiAgICAgIHJldHVybiBgc3RhdHVzLSR7c3RhdHVzfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc1ZhbGlkU3RhdHVzU3RyaW5nKHN0YXR1czogTmJDb21wb25lbnRPckN1c3RvbVN0YXR1cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2Ygc3RhdHVzID09PSAnc3RyaW5nJyAmJiBzdGF0dXMubGVuZ3RoID4gMDtcbiAgfVxufVxuIl19