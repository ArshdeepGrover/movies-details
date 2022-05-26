/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldComponent } from './form-field.component';
import { NbPrefixDirective } from './prefix.directive';
import { NbSuffixDirective } from './suffix.directive';
import * as i0 from "@angular/core";
const COMPONENTS = [
    NbFormFieldComponent,
    NbPrefixDirective,
    NbSuffixDirective,
];
export class NbFormFieldModule {
}
NbFormFieldModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbFormFieldModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldModule, declarations: [NbFormFieldComponent,
        NbPrefixDirective,
        NbSuffixDirective], imports: [CommonModule], exports: [NbFormFieldComponent,
        NbPrefixDirective,
        NbSuffixDirective] });
NbFormFieldModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [...COMPONENTS],
                    exports: [...COMPONENTS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCLENBQUM7QUFPRixNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBVjVCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsaUJBQWlCLGFBSU4sWUFBWSxhQU52QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjsrR0FRTixpQkFBaUIsWUFKbkIsQ0FBRSxZQUFZLENBQUU7MkZBSWQsaUJBQWlCO2tCQUw3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFLENBQUUsR0FBRyxVQUFVLENBQUU7b0JBQy9CLE9BQU8sRUFBRSxDQUFFLEdBQUcsVUFBVSxDQUFFO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5iRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYlByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4vcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOYlN1ZmZpeERpcmVjdGl2ZSB9IGZyb20gJy4vc3VmZml4LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIE5iRm9ybUZpZWxkQ29tcG9uZW50LFxuICBOYlByZWZpeERpcmVjdGl2ZSxcbiAgTmJTdWZmaXhEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uQ09NUE9ORU5UUyBdLFxuICBleHBvcnRzOiBbIC4uLkNPTVBPTkVOVFMgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJGb3JtRmllbGRNb2R1bGUge1xufVxuIl19