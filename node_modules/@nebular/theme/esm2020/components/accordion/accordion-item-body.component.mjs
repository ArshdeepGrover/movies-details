/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectionStrategy, Host, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./accordion-item.component";
const accordionItemBodyTrigger = trigger('accordionItemBody', [
    state('collapsed', style({
        overflow: 'hidden',
        visibility: 'hidden',
        height: 0,
    })),
    state('expanded', style({
        overflow: 'hidden',
        visibility: 'visible',
    })),
    transition('collapsed => expanded', animate('100ms ease-in')),
    transition('expanded => collapsed', animate('100ms ease-out')),
]);
/**
 * Component intended to be used within `<nb-accordion-item>` component
 */
export class NbAccordionItemBodyComponent {
    constructor(accordionItem, cd) {
        this.accordionItem = accordionItem;
        this.cd = cd;
        this.destroy$ = new Subject();
    }
    get state() {
        return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
    }
    ngOnInit() {
        this.accordionItem.accordionItemInvalidate
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAccordionItemBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemBodyComponent, deps: [{ token: i1.NbAccordionItemComponent, host: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbAccordionItemBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAccordionItemBodyComponent, selector: "nb-accordion-item-body", ngImport: i0, template: `
    <div [@accordionItemBody]="{ value: state }">
      <div class="item-body">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, animations: [accordionItemBodyTrigger], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionItemBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-accordion-item-body',
                    template: `
    <div [@accordionItemBody]="{ value: state }">
      <div class="item-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                    animations: [accordionItemBodyTrigger],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.NbAccordionItemComponent, decorators: [{
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0tYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi1pdGVtLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixJQUFJLEdBSUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSS9CLE1BQU0sd0JBQXdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixFQUFFO0lBQzVELEtBQUssQ0FDSCxXQUFXLEVBQ1gsS0FBSyxDQUFDO1FBQ0osUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsTUFBTSxFQUFFLENBQUM7S0FDVixDQUFDLENBQ0g7SUFDRCxLQUFLLENBQ0gsVUFBVSxFQUNWLEtBQUssQ0FBQztRQUNKLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxTQUFTO0tBQ3RCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsVUFBVSxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQy9ELENBQUMsQ0FBQztBQUVIOztHQUVHO0FBYUgsTUFBTSxPQUFPLDRCQUE0QjtJQUd2QyxZQUE0QixhQUF1QyxFQUFVLEVBQXFCO1FBQXRFLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRjFGLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRThELENBQUM7SUFFdEcsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDakUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QjthQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O3lIQWxCVSw0QkFBNEI7NkdBQTVCLDRCQUE0Qiw4REFWN0I7Ozs7OztHQU1ULDhCQUNXLENBQUMsd0JBQXdCLENBQUM7MkZBRzNCLDRCQUE0QjtrQkFaeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7OztHQU1UO29CQUNELFVBQVUsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUljLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEhvc3QsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmJBY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xuXG5jb25zdCBhY2NvcmRpb25JdGVtQm9keVRyaWdnZXIgPSB0cmlnZ2VyKCdhY2NvcmRpb25JdGVtQm9keScsIFtcbiAgc3RhdGUoXG4gICAgJ2NvbGxhcHNlZCcsXG4gICAgc3R5bGUoe1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfSksXG4gICksXG4gIHN0YXRlKFxuICAgICdleHBhbmRlZCcsXG4gICAgc3R5bGUoe1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgIH0pLFxuICApLFxuICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPT4gZXhwYW5kZWQnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxuICB0cmFuc2l0aW9uKCdleHBhbmRlZCA9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKSxcbl0pO1xuXG4vKipcbiAqIENvbXBvbmVudCBpbnRlbmRlZCB0byBiZSB1c2VkIHdpdGhpbiBgPG5iLWFjY29yZGlvbi1pdGVtPmAgY29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWFjY29yZGlvbi1pdGVtLWJvZHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW0BhY2NvcmRpb25JdGVtQm9keV09XCJ7IHZhbHVlOiBzdGF0ZSB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1ib2R5XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbYWNjb3JkaW9uSXRlbUJvZHlUcmlnZ2VyXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iQWNjb3JkaW9uSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBhY2NvcmRpb25JdGVtOiBOYkFjY29yZGlvbkl0ZW1Db21wb25lbnQsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIGdldCBzdGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFjY29yZGlvbkl0ZW0uY29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiAnZXhwYW5kZWQnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb25JdGVtLmFjY29yZGlvbkl0ZW1JbnZhbGlkYXRlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=