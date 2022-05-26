/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '../icon/icon.module';
import { NbTagComponent } from './tag.component';
import { NbTagListComponent } from './tag-list.component';
import { NbTagInputDirective } from './tag-input.directive';
import * as i0 from "@angular/core";
export class NbTagModule {
}
NbTagModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbTagModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagModule, declarations: [NbTagComponent,
        NbTagListComponent,
        NbTagInputDirective], imports: [CommonModule,
        NbIconModule], exports: [NbTagComponent,
        NbTagListComponent,
        NbTagInputDirective] });
NbTagModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagModule, imports: [[
            CommonModule,
            NbIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NbIconModule,
                    ],
                    declarations: [
                        NbTagComponent,
                        NbTagListComponent,
                        NbTagInputDirective,
                    ],
                    exports: [
                        NbTagComponent,
                        NbTagListComponent,
                        NbTagInputDirective,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy90YWcvdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFrQjVELE1BQU0sT0FBTyxXQUFXOzt3R0FBWCxXQUFXO3lHQUFYLFdBQVcsaUJBVnBCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsbUJBQW1CLGFBTm5CLFlBQVk7UUFDWixZQUFZLGFBUVosY0FBYztRQUNkLGtCQUFrQjtRQUNsQixtQkFBbUI7eUdBR1YsV0FBVyxZQWZiO1lBQ1AsWUFBWTtZQUNaLFlBQVk7U0FDYjsyRkFZVSxXQUFXO2tCQWhCdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOYkljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IE5iVGFnQ29tcG9uZW50IH0gZnJvbSAnLi90YWcuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVGFnTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdGFnLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5iVGFnSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL3RhZy1pbnB1dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmJUYWdDb21wb25lbnQsXG4gICAgTmJUYWdMaXN0Q29tcG9uZW50LFxuICAgIE5iVGFnSW5wdXREaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYlRhZ0NvbXBvbmVudCxcbiAgICBOYlRhZ0xpc3RDb21wb25lbnQsXG4gICAgTmJUYWdJbnB1dERpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUYWdNb2R1bGUgeyB9XG4iXX0=