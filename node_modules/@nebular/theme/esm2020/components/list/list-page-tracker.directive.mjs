import { Directive, ContentChildren, Input, ElementRef, Output, EventEmitter, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbListItemComponent } from './list.component';
import * as i0 from "@angular/core";
/**
 * List pager directive
 *
 * Directive allows you to determine page of currently viewing items.
 *
 */
export class NbListPageTrackerDirective {
    constructor() {
        this.destroy$ = new Subject();
        /**
         * Page to start counting with.
         */
        this.startPage = 1;
        /**
         * Emits when another page become visible.
         */
        this.pageChange = new EventEmitter();
        this.observer = new IntersectionObserver((entries) => this.checkForPageChange(entries), { threshold: 0.5 });
    }
    ngAfterViewInit() {
        if (this.listItems && this.listItems.length) {
            this.observeItems();
        }
        this.listItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.observeItems());
    }
    ngOnDestroy() {
        this.observer.disconnect && this.observer.disconnect();
    }
    observeItems() {
        this.listItems.forEach((i) => this.observer.observe(i.nativeElement));
    }
    checkForPageChange(entries) {
        const mostVisiblePage = this.findMostVisiblePage(entries);
        if (mostVisiblePage && this.currentPage !== mostVisiblePage) {
            this.currentPage = mostVisiblePage;
            this.pageChange.emit(this.currentPage);
        }
    }
    findMostVisiblePage(entries) {
        const intersectionRatioByPage = new Map();
        for (const entry of entries) {
            if (entry.intersectionRatio < 0.5) {
                continue;
            }
            const elementIndex = this.elementIndex(entry.target);
            if (elementIndex === -1) {
                continue;
            }
            const page = this.startPage + Math.floor(elementIndex / this.pageSize);
            let ratio = entry.intersectionRatio;
            if (intersectionRatioByPage.has(page)) {
                ratio += intersectionRatioByPage.get(page);
            }
            intersectionRatioByPage.set(page, ratio);
        }
        let maxRatio = 0;
        let mostVisiblePage;
        intersectionRatioByPage.forEach((ratio, page) => {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisiblePage = page;
            }
        });
        return mostVisiblePage;
    }
    elementIndex(element) {
        return element.parentElement && element.parentElement.children
            ? Array.from(element.parentElement.children).indexOf(element)
            : -1;
    }
}
NbListPageTrackerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListPageTrackerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NbListPageTrackerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbListPageTrackerDirective, selector: "[nbListPageTracker]", inputs: { pageSize: "pageSize", startPage: "startPage" }, outputs: { pageChange: "pageChange" }, queries: [{ propertyName: "listItems", predicate: NbListItemComponent, read: ElementRef }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbListPageTrackerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbListPageTracker]',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { pageSize: [{
                type: Input
            }], startPage: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], listItems: [{
                type: ContentChildren,
                args: [NbListItemComponent, { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1wYWdlLXRyYWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2xpc3QvbGlzdC1wYWdlLXRyYWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssRUFDTCxVQUFVLEVBR1YsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFdkQ7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQztRQTFCUSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVd2Qzs7V0FFRztRQUVILGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEI7O1dBRUc7UUFFSCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU10QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEs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QURSLGVBQWU7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG4vKipcbiAqIExpc3QgcGFnZXIgZGlyZWN0aXZlXG4gKlxuICogRGlyZWN0aXZlIGFsbG93cyB5b3UgdG8gZGV0ZXJtaW5lIHBhZ2Ugb2YgY3VycmVudGx5IHZpZXdpbmcgaXRlbXMuXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJMaXN0UGFnZVRyYWNrZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmJMaXN0UGFnZVRyYWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdGVtcyBwZXIgcGFnZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHBhZ2VTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBhZ2UgdG8gc3RhcnQgY291bnRpbmcgd2l0aC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHN0YXJ0UGFnZTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBhbm90aGVyIHBhZ2UgYmVjb21lIHZpc2libGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJMaXN0SXRlbUNvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGxpc3RJdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHRoaXMuY2hlY2tGb3JQYWdlQ2hhbmdlKGVudHJpZXMpLCB7IHRocmVzaG9sZDogMC41IH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmxpc3RJdGVtcyAmJiB0aGlzLmxpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0SXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMub2JzZXJ2ZUl0ZW1zKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0ICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvYnNlcnZlSXRlbXMoKSB7XG4gICAgdGhpcy5saXN0SXRlbXMuZm9yRWFjaCgoaSkgPT4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGkubmF0aXZlRWxlbWVudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0ZvclBhZ2VDaGFuZ2UoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSB7XG4gICAgY29uc3QgbW9zdFZpc2libGVQYWdlID0gdGhpcy5maW5kTW9zdFZpc2libGVQYWdlKGVudHJpZXMpO1xuXG4gICAgaWYgKG1vc3RWaXNpYmxlUGFnZSAmJiB0aGlzLmN1cnJlbnRQYWdlICE9PSBtb3N0VmlzaWJsZVBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBtb3N0VmlzaWJsZVBhZ2U7XG4gICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRNb3N0VmlzaWJsZVBhZ2UoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uUmF0aW9CeVBhZ2UgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPCAwLjUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IHRoaXMuZWxlbWVudEluZGV4KGVudHJ5LnRhcmdldCk7XG4gICAgICBpZiAoZWxlbWVudEluZGV4ID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnN0YXJ0UGFnZSArIE1hdGguZmxvb3IoZWxlbWVudEluZGV4IC8gdGhpcy5wYWdlU2l6ZSk7XG5cbiAgICAgIGxldCByYXRpbyA9IGVudHJ5LmludGVyc2VjdGlvblJhdGlvO1xuICAgICAgaWYgKGludGVyc2VjdGlvblJhdGlvQnlQYWdlLmhhcyhwYWdlKSkge1xuICAgICAgICByYXRpbyArPSBpbnRlcnNlY3Rpb25SYXRpb0J5UGFnZS5nZXQocGFnZSk7XG4gICAgICB9XG4gICAgICBpbnRlcnNlY3Rpb25SYXRpb0J5UGFnZS5zZXQocGFnZSwgcmF0aW8pO1xuICAgIH1cblxuICAgIGxldCBtYXhSYXRpbyA9IDA7XG4gICAgbGV0IG1vc3RWaXNpYmxlUGFnZTtcbiAgICBpbnRlcnNlY3Rpb25SYXRpb0J5UGFnZS5mb3JFYWNoKChyYXRpbywgcGFnZSkgPT4ge1xuICAgICAgaWYgKHJhdGlvID4gbWF4UmF0aW8pIHtcbiAgICAgICAgbWF4UmF0aW8gPSByYXRpbztcbiAgICAgICAgbW9zdFZpc2libGVQYWdlID0gcGFnZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtb3N0VmlzaWJsZVBhZ2U7XG4gIH1cblxuICBwcml2YXRlIGVsZW1lbnRJbmRleChlbGVtZW50OiBFbGVtZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihlbGVtZW50KVxuICAgICAgOiAtMTtcbiAgfVxufVxuIl19