import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOptionComponent } from './option.component';
import { NbOptionGroupComponent } from './option-group.component';
import { NbOptionListComponent } from './option-list.component';
import { NbCheckboxModule } from '../checkbox/checkbox.module';
import * as i0 from "@angular/core";
const NB_OPTION_LIST_COMPONENTS = [
    NbOptionListComponent,
    NbOptionComponent,
    NbOptionGroupComponent,
];
export class NbOptionModule {
}
NbOptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbOptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionModule, declarations: [NbOptionListComponent,
        NbOptionComponent,
        NbOptionGroupComponent], imports: [CommonModule,
        NbCheckboxModule], exports: [NbOptionListComponent,
        NbOptionComponent,
        NbOptionGroupComponent] });
NbOptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionModule, imports: [[
            CommonModule,
            NbCheckboxModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...NB_OPTION_LIST_COMPONENTS,
                    ],
                    imports: [
                        CommonModule,
                        NbCheckboxModule,
                    ],
                    exports: [
                        ...NB_OPTION_LIST_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL29wdGlvbi9vcHRpb24tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRS9ELE1BQU0seUJBQXlCLEdBQUc7SUFDaEMscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDdkIsQ0FBQztBQWNGLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBakJ6QixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLHNCQUFzQixhQVFwQixZQUFZO1FBQ1osZ0JBQWdCLGFBWGxCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsc0JBQXNCOzRHQWVYLGNBQWMsWUFSaEI7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1NBQ2pCOzJGQUtVLGNBQWM7a0JBWjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLEdBQUcseUJBQXlCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLHlCQUF5QjtxQkFDN0I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5iT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5iT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJPcHRpb25MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5cbmNvbnN0IE5CX09QVElPTl9MSVNUX0NPTVBPTkVOVFMgPSBbXG4gIE5iT3B0aW9uTGlzdENvbXBvbmVudCxcbiAgTmJPcHRpb25Db21wb25lbnQsXG4gIE5iT3B0aW9uR3JvdXBDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5OQl9PUFRJT05fTElTVF9DT01QT05FTlRTLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5OQl9PUFRJT05fTElTVF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYk9wdGlvbk1vZHVsZSB7IH1cbiJdfQ==