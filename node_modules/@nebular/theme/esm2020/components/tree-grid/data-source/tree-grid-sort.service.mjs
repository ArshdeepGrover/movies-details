/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { NbSortDirection } from '../tree-grid-sort.component';
import * as i0 from "@angular/core";
/**
 * Service used to sort tree grid data. Uses Array.prototype.sort method.
 * If you need custom sorting, you can extend this service and override comparator or whole sort method.
 */
export class NbTreeGridSortService {
    sort(request, data) {
        if (!request) {
            return data;
        }
        const sorted = data.sort((na, nb) => this.comparator(request, na, nb));
        for (const node of data) {
            if (node.children) {
                node.children = this.sort(request, node.children);
            }
        }
        return sorted;
    }
    comparator(request, na, nb) {
        const key = request.column;
        const dir = request.direction;
        const a = na.data[key];
        const b = nb.data[key];
        let res = 0;
        if (a > b) {
            res = 1;
        }
        if (a < b) {
            res = -1;
        }
        return dir === NbSortDirection.ASCENDING ? res : res * -1;
    }
}
NbTreeGridSortService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridSortService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NbTreeGridSortService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridSortService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTreeGridSortService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLXNvcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvZGF0YS1zb3VyY2UvdHJlZS1ncmlkLXNvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLDZCQUE2QixDQUFDOztBQUc3RTs7O0dBR0c7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLElBQUksQ0FBQyxPQUFzQixFQUFFLElBQXFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkQ7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxVQUFVLENBQ2xCLE9BQXNCLEVBQ3RCLEVBQWlDLEVBQ2pDLEVBQWlDO1FBRWpDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsR0FBRyxHQUFHLENBQUMsQ0FBQTtTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ1Q7UUFFRCxPQUFPLEdBQUcsS0FBSyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztrSEFwQ1UscUJBQXFCO3NIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCB9IGZyb20gJy4uL3RyZWUtZ3JpZC1zb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZSB9IGZyb20gJy4vdHJlZS1ncmlkLm1vZGVsJztcblxuLyoqXG4gKiBTZXJ2aWNlIHVzZWQgdG8gc29ydCB0cmVlIGdyaWQgZGF0YS4gVXNlcyBBcnJheS5wcm90b3R5cGUuc29ydCBtZXRob2QuXG4gKiBJZiB5b3UgbmVlZCBjdXN0b20gc29ydGluZywgeW91IGNhbiBleHRlbmQgdGhpcyBzZXJ2aWNlIGFuZCBvdmVycmlkZSBjb21wYXJhdG9yIG9yIHdob2xlIHNvcnQgbWV0aG9kLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJUcmVlR3JpZFNvcnRTZXJ2aWNlPFQ+IHtcblxuICBzb3J0KHJlcXVlc3Q6IE5iU29ydFJlcXVlc3QsIGRhdGE6IE5iVHJlZUdyaWRQcmVzZW50YXRpb25Ob2RlPFQ+W10pOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPltdIHtcbiAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZCA9IGRhdGEuc29ydCgobmEsIG5iKSA9PiB0aGlzLmNvbXBhcmF0b3IocmVxdWVzdCwgbmEsIG5iKSk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGRhdGEpIHtcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4gPSB0aGlzLnNvcnQocmVxdWVzdCwgbm9kZS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyYXRvcihcbiAgICByZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0LFxuICAgIG5hOiBOYlRyZWVHcmlkUHJlc2VudGF0aW9uTm9kZTxUPixcbiAgICBuYjogTmJUcmVlR3JpZFByZXNlbnRhdGlvbk5vZGU8VD4sXG4gICk6IG51bWJlciB7XG4gICAgY29uc3Qga2V5ID0gcmVxdWVzdC5jb2x1bW47XG4gICAgY29uc3QgZGlyID0gcmVxdWVzdC5kaXJlY3Rpb247XG4gICAgY29uc3QgYSA9IG5hLmRhdGFba2V5XTtcbiAgICBjb25zdCBiID0gbmIuZGF0YVtrZXldO1xuXG4gICAgbGV0IHJlcyA9IDA7XG5cbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJlcyA9IDFcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXMgPSAtMVxuICAgIH1cblxuICAgIHJldHVybiBkaXIgPT09IE5iU29ydERpcmVjdGlvbi5BU0NFTkRJTkcgPyByZXMgOiByZXMgKiAtMTtcbiAgfVxufVxuIl19