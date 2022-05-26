/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service used to filter tree grid data. Searched searchString in all object values.
 * If you need custom filter, you can extend this service and override filterPredicate or whole filter method.
 */
export class NbTreeGridFilterService {
    filter(query, data) {
        if (!query) {
            return data;
        }
        return data.reduce((filtered, node) => {
            let filteredChildren;
            if (node.children) {
                filteredChildren = this.filter(query, node.children);
                node.children = filteredChildren;
            }
            node.expanded = false;
            if (filteredChildren && filteredChildren.length) {
                node.expanded = true;
                filtered.push(node);
            }
            else if (this.filterPredicate(node.data, query)) {
                filtered.push(node);
            }
            return filtered;
        }, []);
    }
    filterPredicate(data, searchQuery) {
        const preparedQuery = searchQuery.trim().toLocaleLowerCase();
        for (const val of Object.values(data)) {
            const preparedVal = `${val}`.trim().toLocaleLowerCase();
            if (preparedVal.includes(preparedQuery)) {
                return true;
            }
        }
        return false;
    }
}
NbTreeGridFilterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFilterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbTreeGridFilterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFilterService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridFilterService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWZpbHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RyZWUtZ3JpZC9kYXRhLXNvdXJjZS90cmVlLWdyaWQtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDOzs7R0FHRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFxQztRQUN6RCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQXlDLEVBQUUsSUFBbUMsRUFBRSxFQUFFO1lBQ3BHLElBQUksZ0JBQWlELENBQUM7WUFFdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7YUFDbEM7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRVMsZUFBZSxDQUFDLElBQU8sRUFBRSxXQUFtQjtRQUNwRCxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3RCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3hELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztvSEFyQ1UsdUJBQXVCO3dIQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFEbkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGUgfSBmcm9tICcuL3RyZWUtZ3JpZC5tb2RlbCc7XG5cbi8qKlxuICogU2VydmljZSB1c2VkIHRvIGZpbHRlciB0cmVlIGdyaWQgZGF0YS4gU2VhcmNoZWQgc2VhcmNoU3RyaW5nIGluIGFsbCBvYmplY3QgdmFsdWVzLlxuICogSWYgeW91IG5lZWQgY3VzdG9tIGZpbHRlciwgeW91IGNhbiBleHRlbmQgdGhpcyBzZXJ2aWNlIGFuZCBvdmVycmlkZSBmaWx0ZXJQcmVkaWNhdGUgb3Igd2hvbGUgZmlsdGVyIG1ldGhvZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWRGaWx0ZXJTZXJ2aWNlPFQ+IHtcbiAgZmlsdGVyKHF1ZXJ5OiBzdHJpbmcsIGRhdGE6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W10pOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdIHtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5yZWR1Y2UoKGZpbHRlcmVkOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdLCBub2RlOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPikgPT4ge1xuICAgICAgbGV0IGZpbHRlcmVkQ2hpbGRyZW46IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W107XG5cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGZpbHRlcmVkQ2hpbGRyZW4gPSB0aGlzLmZpbHRlcihxdWVyeSwgbm9kZS5jaGlsZHJlbik7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSBmaWx0ZXJlZENoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICBub2RlLmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChmaWx0ZXJlZENoaWxkcmVuICYmIGZpbHRlcmVkQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIG5vZGUuZXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclByZWRpY2F0ZShub2RlLmRhdGEsIHF1ZXJ5KSkge1xuICAgICAgICBmaWx0ZXJlZC5wdXNoKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbHRlclByZWRpY2F0ZShkYXRhOiBULCBzZWFyY2hRdWVyeTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcHJlcGFyZWRRdWVyeSA9IHNlYXJjaFF1ZXJ5LnRyaW0oKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGZvciAoY29uc3QgdmFsIG9mIE9iamVjdC52YWx1ZXMoZGF0YSkpIHtcbiAgICAgIGNvbnN0IHByZXBhcmVkVmFsID0gYCR7dmFsfWAudHJpbSgpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICBpZiAocHJlcGFyZWRWYWwuaW5jbHVkZXMocHJlcGFyZWRRdWVyeSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=