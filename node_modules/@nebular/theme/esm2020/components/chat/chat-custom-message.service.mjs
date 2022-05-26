/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
export class NbChatCustomMessageService {
    constructor() {
        this.customMessages = new Map();
    }
    register(type, instance) {
        this.customMessages.set(type, instance);
    }
    unregister(type) {
        return this.customMessages.delete(type);
    }
    getInstance(type) {
        return this.customMessages.get(type);
    }
}
NbChatCustomMessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatCustomMessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbChatCustomMessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatCustomMessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatCustomMessageService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1jdXN0b20tbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2NoYXQvY2hhdC1jdXN0b20tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQzs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sMEJBQTBCO0lBRHZDO1FBRXFCLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQXdDLENBQUM7S0FhckY7SUFYQyxRQUFRLENBQUMsSUFBWSxFQUFFLFFBQXNDO1FBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt1SEFiVSwwQkFBMEI7MkhBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUR0QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2NoYXQtY3VzdG9tLW1lc3NhZ2UuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBgTmJDdXN0b21NZXNzYWdlU2VydmljZWAgaXMgdXNlZCB0byBzdG9yZSBpbnN0YW5jZXMgb2YgYE5iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmVgcyB3aGljaFxuICogd2VyZSBwcm92aWRlZCBpbiB0aGUgY2hhdCBjb21wb25lbnQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkNoYXRDdXN0b21NZXNzYWdlU2VydmljZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSBjdXN0b21NZXNzYWdlcyA9IG5ldyBNYXA8c3RyaW5nLCBOYkNoYXRDdXN0b21NZXNzYWdlRGlyZWN0aXZlPigpO1xuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgaW5zdGFuY2U6IE5iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLmN1c3RvbU1lc3NhZ2VzLnNldCh0eXBlLCBpbnN0YW5jZSk7XG4gIH1cblxuICB1bnJlZ2lzdGVyKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbU1lc3NhZ2VzLmRlbGV0ZSh0eXBlKTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKHR5cGU6IHN0cmluZyk6IE5iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbU1lc3NhZ2VzLmdldCh0eXBlKTtcbiAgfVxufVxuIl19