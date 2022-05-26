/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '../icon/icon.module';
import { NbAccordionComponent } from './accordion.component';
import { NbAccordionItemComponent } from './accordion-item.component';
import { NbAccordionItemHeaderComponent } from './accordion-item-header.component';
import { NbAccordionItemBodyComponent } from './accordion-item-body.component';
import * as i0 from "@angular/core";
const NB_ACCORDION_COMPONENTS = [
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
];
export class NbAccordionModule {
}
NbAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionModule, declarations: [NbAccordionComponent,
        NbAccordionItemComponent,
        NbAccordionItemHeaderComponent,
        NbAccordionItemBodyComponent], imports: [CommonModule, NbIconModule], exports: [NbAccordionComponent,
        NbAccordionItemComponent,
        NbAccordionItemHeaderComponent,
        NbAccordionItemBodyComponent] });
NbAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionModule, providers: [], imports: [[CommonModule, NbIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NbIconModule],
                    exports: [...NB_ACCORDION_COMPONENTS],
                    declarations: [...NB_ACCORDION_COMPONENTS],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUUvRSxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDRCQUE0QjtDQUM3QixDQUFDO0FBUUYsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQVo1QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw0QkFBNEIsYUFJbEIsWUFBWSxFQUFFLFlBQVksYUFQcEMsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNEJBQTRCOytHQVNqQixpQkFBaUIsYUFGakIsRUFBRSxZQUhKLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzsyRkFLMUIsaUJBQWlCO2tCQU43QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEdBQUcsdUJBQXVCLENBQUM7b0JBQ3JDLFlBQVksRUFBRSxDQUFDLEdBQUcsdUJBQXVCLENBQUM7b0JBQzFDLFNBQVMsRUFBRSxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkFjY29yZGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkFjY29yZGlvbkl0ZW1IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJBY2NvcmRpb25JdGVtQm9keUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0tYm9keS5jb21wb25lbnQnO1xuXG5jb25zdCBOQl9BQ0NPUkRJT05fQ09NUE9ORU5UUyA9IFtcbiAgTmJBY2NvcmRpb25Db21wb25lbnQsXG4gIE5iQWNjb3JkaW9uSXRlbUNvbXBvbmVudCxcbiAgTmJBY2NvcmRpb25JdGVtSGVhZGVyQ29tcG9uZW50LFxuICBOYkFjY29yZGlvbkl0ZW1Cb2R5Q29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmJJY29uTW9kdWxlXSxcbiAgZXhwb3J0czogWy4uLk5CX0FDQ09SRElPTl9DT01QT05FTlRTXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uTkJfQUNDT1JESU9OX0NPTVBPTkVOVFNdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkFjY29yZGlvbk1vZHVsZSB7fVxuIl19