/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NbFilterDirective {
    filter(filterRequest) {
        this.filterable.filter(filterRequest);
    }
}
NbFilterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFilterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NbFilterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFilterDirective, selector: "[nbFilter]", inputs: { filterable: ["nbFilter", "filterable"] }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFilterDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[nbFilter]' }]
        }], propDecorators: { filterable: [{
                type: Input,
                args: ['nbFilter']
            }] } });
/**
 * Helper directive to trigger data source's filter method when user types in input
 */
export class NbFilterInputDirective extends NbFilterDirective {
    constructor() {
        super(...arguments);
        this.search$ = new Subject();
        this.destroy$ = new Subject();
        /**
         * Debounce time before triggering filter method. Set in milliseconds.
         * Default 200.
         */
        this.debounceTime = 200;
    }
    ngOnInit() {
        this.search$
            .pipe(debounceTime(this.debounceTime), takeUntil(this.destroy$))
            .subscribe((query) => {
            super.filter(query);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.search$.complete();
    }
    filter(event) {
        this.search$.next(event.target.value);
    }
}
NbFilterInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFilterInputDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NbFilterInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NbFilterInputDirective, selector: "[nbFilterInput]", inputs: { filterable: ["nbFilterInput", "filterable"], debounceTime: "debounceTime" }, host: { listeners: { "input": "filter($event)" } }, providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFilterInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nbFilterInput]',
                    providers: [{ provide: NbFilterDirective, useExisting: NbFilterInputDirective }],
                }]
        }], propDecorators: { filterable: [{
                type: Input,
                args: ['nbFilterInput']
            }], debounceTime: [{
                type: Input
            }], filter: [{
                type: HostListener,
                args: ['input', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsTUFBTSxDQUFDLGFBQXFCO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzhHQUxVLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzhCQUVoQixVQUFVO3NCQUE1QixLQUFLO3VCQUFDLFVBQVU7O0FBT25COztHQUVHO0FBS0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUo3RDs7UUFLVSxZQUFPLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDakQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJdkM7OztXQUdHO1FBQ00saUJBQVksR0FBVyxHQUFHLENBQUM7S0F1QnJDO0lBckJDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTzthQUNULElBQUksQ0FDSCxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUMvQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7bUhBaENVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHFMQUZ0QixDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxDQUFDOzJGQUVyRSxzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyx3QkFBd0IsRUFBRSxDQUFDO2lCQUNqRjs4QkFLeUIsVUFBVTtzQkFBakMsS0FBSzt1QkFBQyxlQUFlO2dCQU1iLFlBQVk7c0JBQXBCLEtBQUs7Z0JBb0JOLE1BQU07c0JBREwsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iRmlsdGVyYWJsZSB9IGZyb20gJy4vZGF0YS1zb3VyY2UvdHJlZS1ncmlkLWRhdGEtc291cmNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25iRmlsdGVyXScgfSlcbmV4cG9ydCBjbGFzcyBOYkZpbHRlckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnbmJGaWx0ZXInKSBmaWx0ZXJhYmxlOiBOYkZpbHRlcmFibGU7XG5cbiAgZmlsdGVyKGZpbHRlclJlcXVlc3Q6IHN0cmluZykge1xuICAgIHRoaXMuZmlsdGVyYWJsZS5maWx0ZXIoZmlsdGVyUmVxdWVzdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZGlyZWN0aXZlIHRvIHRyaWdnZXIgZGF0YSBzb3VyY2UncyBmaWx0ZXIgbWV0aG9kIHdoZW4gdXNlciB0eXBlcyBpbiBpbnB1dFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmJGaWx0ZXJJbnB1dF0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iRmlsdGVyRGlyZWN0aXZlLCB1c2VFeGlzdGluZzogTmJGaWx0ZXJJbnB1dERpcmVjdGl2ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmJGaWx0ZXJJbnB1dERpcmVjdGl2ZSBleHRlbmRzIE5iRmlsdGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHNlYXJjaCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KCduYkZpbHRlcklucHV0JykgZmlsdGVyYWJsZTogTmJGaWx0ZXJhYmxlO1xuXG4gIC8qKlxuICAgKiBEZWJvdW5jZSB0aW1lIGJlZm9yZSB0cmlnZ2VyaW5nIGZpbHRlciBtZXRob2QuIFNldCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIERlZmF1bHQgMjAwLlxuICAgKi9cbiAgQElucHV0KCkgZGVib3VuY2VUaW1lOiBudW1iZXIgPSAyMDA7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZWFyY2gkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgocXVlcnk6IHN0cmluZykgPT4ge1xuICAgICAgICBzdXBlci5maWx0ZXIocXVlcnkpXG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnNlYXJjaCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgZmlsdGVyKGV2ZW50KSB7XG4gICAgdGhpcy5zZWFyY2gkLm5leHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuIl19