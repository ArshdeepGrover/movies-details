import { Injectable } from '@angular/core';
import { merge, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NbColumnsService {
    constructor(differs) {
        this.differs = differs;
        this.columnHide$ = new Subject();
        this.columnShow$ = new Subject();
    }
    setColumns(columns) {
        if (!this.changesDiffer) {
            this.changesDiffer = this.differs.find(columns || []).create();
        }
        if (this.changesDiffer.diff(columns)) {
            this.allColumns = Array.from(columns);
            this.visibleColumns = Array.from(columns);
        }
    }
    getVisibleColumns() {
        return this.visibleColumns;
    }
    hideColumn(column) {
        const toRemove = this.visibleColumns.indexOf(column);
        if (toRemove > -1) {
            this.visibleColumns.splice(toRemove, 1);
            this.columnHide$.next();
        }
    }
    showColumn(column) {
        if (this.visibleColumns.includes(column)) {
            return;
        }
        this.visibleColumns.splice(this.findInsertIndex(column), 0, column);
        this.columnShow$.next();
    }
    onColumnsChange() {
        return merge(this.columnShow$, this.columnHide$);
    }
    findInsertIndex(column) {
        const initialIndex = this.allColumns.indexOf(column);
        if (initialIndex === 0 || !this.visibleColumns.length) {
            return 0;
        }
        if (initialIndex === this.allColumns.length - 1) {
            return this.visibleColumns.length;
        }
        const leftSiblingIndex = initialIndex - 1;
        for (let i = leftSiblingIndex; i >= 0; i--) {
            const leftSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(leftSibling);
            if (index !== -1) {
                return index + 1;
            }
        }
        const rightSiblingIndex = initialIndex + 1;
        for (let i = rightSiblingIndex; i < this.allColumns.length; i++) {
            const rightSibling = this.allColumns[i];
            const index = this.visibleColumns.indexOf(rightSibling);
            if (index !== -1) {
                return index;
            }
        }
        throw new Error(`Can't restore column position.`);
    }
}
NbColumnsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbColumnsService, deps: [{ token: i0.IterableDiffers }], target: i0.ɵɵFactoryTarget.Injectable });
NbColumnsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbColumnsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbColumnsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.IterableDiffers }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWNvbHVtbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLWNvbHVtbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJbEQsTUFBTSxPQUFPLGdCQUFnQjtJQU8zQixZQUFvQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUhwQyxnQkFBVyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2pELGdCQUFXLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFFVixDQUFDO0lBRWhELFVBQVUsQ0FBQyxPQUF5QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNoRTtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxlQUFlLENBQUMsTUFBYztRQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFFRCxNQUFNLGdCQUFnQixHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkQsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9ELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs2R0F6RVUsZ0JBQWdCO2lIQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iQ29sdW1uc1NlcnZpY2Uge1xuICBwcml2YXRlIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIHZpc2libGVDb2x1bW5zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBjaGFuZ2VzRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxhbnk+O1xuICBwcml2YXRlIGNvbHVtbkhpZGUkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBjb2x1bW5TaG93JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHt9XG5cbiAgc2V0Q29sdW1ucyhjb2x1bW5zOiBJdGVyYWJsZTxzdHJpbmc+KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNoYW5nZXNEaWZmZXIpIHtcbiAgICAgIHRoaXMuY2hhbmdlc0RpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKGNvbHVtbnMgfHwgW10pLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYW5nZXNEaWZmZXIuZGlmZihjb2x1bW5zKSkge1xuICAgICAgdGhpcy5hbGxDb2x1bW5zID0gQXJyYXkuZnJvbShjb2x1bW5zKTtcbiAgICAgIHRoaXMudmlzaWJsZUNvbHVtbnMgPSBBcnJheS5mcm9tKGNvbHVtbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZpc2libGVDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlQ29sdW1ucztcbiAgfVxuXG4gIGhpZGVDb2x1bW4oY29sdW1uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB0b1JlbW92ZSA9IHRoaXMudmlzaWJsZUNvbHVtbnMuaW5kZXhPZihjb2x1bW4pO1xuICAgIGlmICh0b1JlbW92ZSA+IC0xKSB7XG4gICAgICB0aGlzLnZpc2libGVDb2x1bW5zLnNwbGljZSh0b1JlbW92ZSwgMSk7XG4gICAgICB0aGlzLmNvbHVtbkhpZGUkLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBzaG93Q29sdW1uKGNvbHVtbjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sdW1uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZpc2libGVDb2x1bW5zLnNwbGljZSh0aGlzLmZpbmRJbnNlcnRJbmRleChjb2x1bW4pLCAwLCBjb2x1bW4pO1xuICAgIHRoaXMuY29sdW1uU2hvdyQubmV4dCgpO1xuICB9XG5cbiAgb25Db2x1bW5zQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiBtZXJnZSh0aGlzLmNvbHVtblNob3ckLCB0aGlzLmNvbHVtbkhpZGUkKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEluc2VydEluZGV4KGNvbHVtbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbml0aWFsSW5kZXggPSB0aGlzLmFsbENvbHVtbnMuaW5kZXhPZihjb2x1bW4pO1xuXG4gICAgaWYgKGluaXRpYWxJbmRleCA9PT0gMCB8fCAhdGhpcy52aXNpYmxlQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoaW5pdGlhbEluZGV4ID09PSB0aGlzLmFsbENvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZUNvbHVtbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRTaWJsaW5nSW5kZXggPSBpbml0aWFsSW5kZXggLSAxO1xuICAgIGZvciAobGV0IGkgPSBsZWZ0U2libGluZ0luZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgbGVmdFNpYmxpbmcgPSB0aGlzLmFsbENvbHVtbnNbaV07XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMudmlzaWJsZUNvbHVtbnMuaW5kZXhPZihsZWZ0U2libGluZyk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRTaWJsaW5nSW5kZXggPSBpbml0aWFsSW5kZXggKyAxO1xuICAgIGZvciAobGV0IGkgPSByaWdodFNpYmxpbmdJbmRleDsgaSA8IHRoaXMuYWxsQ29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmlnaHRTaWJsaW5nID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnZpc2libGVDb2x1bW5zLmluZGV4T2YocmlnaHRTaWJsaW5nKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVzdG9yZSBjb2x1bW4gcG9zaXRpb24uYCk7XG4gIH1cbn1cbiJdfQ==