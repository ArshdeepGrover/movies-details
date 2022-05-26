/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NbTreeGridService {
    expand(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = true;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.expand(data, n.data, options));
        }
    }
    collapse(data, row, options = {}) {
        const node = this.find(data, row);
        node.expanded = false;
        if (options.deep && node.hasChildren()) {
            node.children.forEach((n) => this.collapse(data, n.data, options));
        }
    }
    toggle(data, row, options = {}) {
        const node = this.find(data, row);
        if (node.expanded) {
            this.collapse(data, row, options);
        }
        else {
            this.expand(data, row, options);
        }
    }
    find(data, row) {
        const toCheck = [...data];
        for (const node of toCheck) {
            if (node.data === row) {
                return node;
            }
            if (node.hasChildren()) {
                toCheck.push(...node.children);
            }
        }
        return undefined;
    }
}
NbTreeGridService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbTreeGridService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvdHJlZS1ncmlkL2RhdGEtc291cmNlL3RyZWUtZ3JpZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLE1BQU0sQ0FBQyxJQUFxQyxFQUFFLEdBQU0sRUFBRSxVQUEyQixFQUFFO1FBQ2pGLE1BQU0sSUFBSSxHQUFrQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pHO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFxQyxFQUFFLEdBQU0sRUFBRSxVQUEyQixFQUFFO1FBQ25GLE1BQU0sSUFBSSxHQUFrQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZ0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ25HO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFxQyxFQUFFLEdBQU0sRUFBRSxVQUEyQixFQUFFO1FBQ2pGLE1BQU0sSUFBSSxHQUFrQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRU8sSUFBSSxDQUFDLElBQXFDLEVBQUUsR0FBTTtRQUN4RCxNQUFNLE9BQU8sR0FBb0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTNELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OEdBMUNVLGlCQUFpQjtrSEFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlIH0gZnJvbSAnLi90cmVlLWdyaWQubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iVG9nZ2xlT3B0aW9ucyB7XG4gIGRlZXA/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZFNlcnZpY2U8VD4ge1xuICBleHBhbmQoZGF0YTogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD5bXSwgcm93OiBULCBvcHRpb25zOiBOYlRvZ2dsZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IG5vZGU6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+ID0gdGhpcy5maW5kKGRhdGEsIHJvdyk7XG4gICAgbm9kZS5leHBhbmRlZCA9IHRydWU7XG5cbiAgICBpZiAob3B0aW9ucy5kZWVwICYmIG5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChuOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPikgPT4gdGhpcy5leHBhbmQoZGF0YSwgbi5kYXRhLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgY29sbGFwc2UoZGF0YTogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD5bXSwgcm93OiBULCBvcHRpb25zOiBOYlRvZ2dsZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IG5vZGU6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+ID0gdGhpcy5maW5kKGRhdGEsIHJvdyk7XG4gICAgbm9kZS5leHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVlcCAmJiBub2RlLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgobjogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD4pID0+IHRoaXMuY29sbGFwc2UoZGF0YSwgbi5kYXRhLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGRhdGE6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W10sIHJvdzogVCwgb3B0aW9uczogTmJUb2dnbGVPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBub2RlOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPiA9IHRoaXMuZmluZChkYXRhLCByb3cpO1xuICAgIGlmIChub2RlLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlKGRhdGEsIHJvdywgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kKGRhdGEsIHJvdywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kKGRhdGE6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W10sIHJvdzogVCk6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+IHtcbiAgICBjb25zdCB0b0NoZWNrOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdID0gWy4uLmRhdGFdO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHRvQ2hlY2spIHtcbiAgICAgIGlmIChub2RlLmRhdGEgPT09IHJvdykge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICB0b0NoZWNrLnB1c2goLi4ubm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19