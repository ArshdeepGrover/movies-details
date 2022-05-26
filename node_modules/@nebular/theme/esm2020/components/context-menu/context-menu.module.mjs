/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbContextMenuDirective } from './context-menu.directive';
import { NbContextMenuComponent } from './context-menu.component';
import { NbMenuModule } from '../menu/menu.module';
import * as i0 from "@angular/core";
export class NbContextMenuModule {
}
NbContextMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbContextMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuModule, declarations: [NbContextMenuDirective, NbContextMenuComponent], imports: [CommonModule, NbOverlayModule, NbMenuModule], exports: [NbContextMenuDirective] });
NbContextMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuModule, imports: [[CommonModule, NbOverlayModule, NbMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbContextMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NbOverlayModule, NbMenuModule],
                    exports: [NbContextMenuDirective],
                    declarations: [NbContextMenuDirective, NbContextMenuComponent],
                    entryComponents: [NbContextMenuComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFTbkQsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixFQUFFLHNCQUFzQixhQUZuRCxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksYUFDM0Msc0JBQXNCO2lIQUlyQixtQkFBbUIsWUFMckIsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQzsyRkFLM0MsbUJBQW1CO2tCQU4vQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7b0JBQzlELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5iT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iQ29udGV4dE1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRleHQtbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYk1lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L21lbnUubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOYk92ZXJsYXlNb2R1bGUsIE5iTWVudU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOYkNvbnRleHRNZW51RGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmJDb250ZXh0TWVudURpcmVjdGl2ZSwgTmJDb250ZXh0TWVudUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW05iQ29udGV4dE1lbnVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNvbnRleHRNZW51TW9kdWxlIHtcbn1cbiJdfQ==