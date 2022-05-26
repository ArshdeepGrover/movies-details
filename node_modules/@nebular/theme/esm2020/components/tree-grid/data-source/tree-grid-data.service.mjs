/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NB_DEFAULT_ROW_LEVEL, NbTreeGridPresentationNode } from './tree-grid.model';
import * as i0 from "@angular/core";
export class NbTreeGridDataService {
    constructor() {
        this.defaultGetters = {
            dataGetter: node => node.data,
            childrenGetter: d => d.children || undefined,
            expandedGetter: d => !!d.expanded,
        };
    }
    toPresentationNodes(nodes, customGetters, level = NB_DEFAULT_ROW_LEVEL) {
        const getters = { ...this.defaultGetters, ...customGetters };
        return this.mapNodes(nodes, getters, level);
    }
    mapNodes(nodes, getters, level) {
        const { dataGetter, childrenGetter, expandedGetter } = getters;
        return nodes.map(node => {
            const childrenNodes = childrenGetter(node);
            let children;
            if (childrenNodes) {
                children = this.toPresentationNodes(childrenNodes, getters, level + 1);
            }
            return new NbTreeGridPresentationNode(dataGetter(node), children, expandedGetter(node), level);
        });
    }
    flattenExpanded(nodes) {
        return nodes.reduce((res, node) => {
            res.push(node);
            if (node.expanded && node.hasChildren()) {
                res.push(...this.flattenExpanded(node.children));
            }
            return res;
        }, []);
    }
    copy(nodes) {
        return nodes.map((node) => {
            let children;
            if (node.hasChildren()) {
                children = this.copy(node.children);
            }
            return new NbTreeGridPresentationNode(node.data, children, node.expanded, node.level);
        });
    }
}
NbTreeGridDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbTreeGridDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridDataService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridDataService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvZGF0YS1zb3VyY2UvdHJlZS1ncmlkLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWEsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHaEcsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUdVLG1CQUFjLEdBQXNCO1lBQzFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQzdCLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksU0FBUztZQUM1QyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7U0FDbEMsQ0FBQztLQStDSDtJQTdDQyxtQkFBbUIsQ0FDakIsS0FBVSxFQUNWLGFBQStCLEVBQy9CLFFBQWdCLG9CQUFvQjtRQUVwQyxNQUFNLE9BQU8sR0FBb0IsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUU5RSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sUUFBUSxDQUFJLEtBQVUsRUFBRSxPQUF3QixFQUFFLEtBQWE7UUFDckUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRS9ELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxRQUF5QyxDQUFDO1lBQzlDLElBQUksYUFBYSxFQUFFO2dCQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsT0FBTyxJQUFJLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFzQztRQUNwRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFvQyxFQUFFLElBQW1DLEVBQUUsRUFBRTtZQUNoRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWYsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7WUFFRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLENBQUMsS0FBc0M7UUFDekMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBbUMsRUFBRSxFQUFFO1lBQ3ZELElBQUksUUFBeUMsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0hBcERVLHFCQUFxQjtzSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkdldHRlcnMsIE5CX0RFRkFVTFRfUk9XX0xFVkVMLCBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZSB9IGZyb20gJy4vdHJlZS1ncmlkLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iVHJlZUdyaWREYXRhU2VydmljZTxUPiB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0R2V0dGVyczogTmJHZXR0ZXJzPGFueSwgVD4gPSB7XG4gICAgZGF0YUdldHRlcjogbm9kZSA9PiBub2RlLmRhdGEsXG4gICAgY2hpbGRyZW5HZXR0ZXI6IGQgPT4gZC5jaGlsZHJlbiB8fCB1bmRlZmluZWQsXG4gICAgZXhwYW5kZWRHZXR0ZXI6IGQgPT4gISFkLmV4cGFuZGVkLFxuICB9O1xuXG4gIHRvUHJlc2VudGF0aW9uTm9kZXM8Tj4oXG4gICAgbm9kZXM6IE5bXSxcbiAgICBjdXN0b21HZXR0ZXJzPzogTmJHZXR0ZXJzPE4sIFQ+LFxuICAgIGxldmVsOiBudW1iZXIgPSBOQl9ERUZBVUxUX1JPV19MRVZFTCxcbiAgKTogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD5bXSB7XG4gICAgY29uc3QgZ2V0dGVyczogTmJHZXR0ZXJzPE4sIFQ+ID0geyAuLi50aGlzLmRlZmF1bHRHZXR0ZXJzLCAuLi5jdXN0b21HZXR0ZXJzIH07XG5cbiAgICByZXR1cm4gdGhpcy5tYXBOb2Rlcyhub2RlcywgZ2V0dGVycywgbGV2ZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBOb2RlczxOPihub2RlczogTltdLCBnZXR0ZXJzOiBOYkdldHRlcnM8TiwgVD4sIGxldmVsOiBudW1iZXIpOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdIHtcbiAgICBjb25zdCB7IGRhdGFHZXR0ZXIsIGNoaWxkcmVuR2V0dGVyLCBleHBhbmRlZEdldHRlciB9ID0gZ2V0dGVycztcblxuICAgIHJldHVybiBub2Rlcy5tYXAobm9kZSA9PiB7XG4gICAgICBjb25zdCBjaGlsZHJlbk5vZGVzID0gY2hpbGRyZW5HZXR0ZXIobm9kZSk7XG4gICAgICBsZXQgY2hpbGRyZW46IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W107XG4gICAgICBpZiAoY2hpbGRyZW5Ob2Rlcykge1xuICAgICAgICBjaGlsZHJlbiA9IHRoaXMudG9QcmVzZW50YXRpb25Ob2RlcyhjaGlsZHJlbk5vZGVzLCBnZXR0ZXJzLCBsZXZlbCArIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlKGRhdGFHZXR0ZXIobm9kZSksIGNoaWxkcmVuLCBleHBhbmRlZEdldHRlcihub2RlKSwgbGV2ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgZmxhdHRlbkV4cGFuZGVkKG5vZGVzOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdKTogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD5bXSB7XG4gICAgcmV0dXJuIG5vZGVzLnJlZHVjZSgocmVzOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdLCBub2RlOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPikgPT4ge1xuICAgICAgcmVzLnB1c2gobm9kZSk7XG5cbiAgICAgIGlmIChub2RlLmV4cGFuZGVkICYmIG5vZGUuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgICByZXMucHVzaCguLi50aGlzLmZsYXR0ZW5FeHBhbmRlZChub2RlLmNoaWxkcmVuKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY29weShub2RlczogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD5bXSk6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W10ge1xuICAgIHJldHVybiBub2Rlcy5tYXAoKG5vZGU6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+KSA9PiB7XG4gICAgICBsZXQgY2hpbGRyZW46IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W107XG4gICAgICBpZiAobm9kZS5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5jb3B5KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZShub2RlLmRhdGEsIGNoaWxkcmVuLCBub2RlLmV4cGFuZGVkLCBub2RlLmxldmVsKTtcbiAgICB9KTtcbiAgfVxufVxuIl19