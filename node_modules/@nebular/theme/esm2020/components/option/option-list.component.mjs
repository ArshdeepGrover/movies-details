import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';
import { NbPosition } from '../cdk/overlay/overlay-position';
import * as i0 from "@angular/core";
/**
 * The `NbOptionListComponent` is container component for `NbOptionGroupComponent` and`NbOptionComponent` list.
 *
 * @styles
 *
 * option-list-max-height:
 * option-list-shadow:
 * option-list-background-color:
 * option-list-border-style:
 * option-list-border-width:
 * option-list-border-color:
 * option-list-border-radius:
 * option-list-adjacent-border-color:
 * option-list-adjacent-border-style:
 * option-list-adjacent-border-width:
 * */
export class NbOptionListComponent {
    constructor() {
        this.size = 'medium';
    }
    get positionTop() {
        return this.position === NbPosition.TOP;
    }
    get positionBottom() {
        return this.position === NbPosition.BOTTOM;
    }
    get sizeTiny() {
        return this.size === 'tiny';
    }
    get sizeSmall() {
        return this.size === 'small';
    }
    get sizeMedium() {
        return this.size === 'medium';
    }
    get sizeLarge() {
        return this.size === 'large';
    }
    get sizeGiant() {
        return this.size === 'giant';
    }
}
NbOptionListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbOptionListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbOptionListComponent, selector: "nb-option-list", inputs: { size: "size", position: "position" }, host: { properties: { "class.position-top": "this.positionTop", "class.position-bottom": "this.positionBottom", "class.size-tiny": "this.sizeTiny", "class.size-small": "this.sizeSmall", "class.size-medium": "this.sizeMedium", "class.size-large": "this.sizeLarge", "class.size-giant": "this.sizeGiant" } }, ngImport: i0, template: `
    <ul class="option-list">
      <ng-content></ng-content>
    </ul>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-option-list',
                    template: `
    <ul class="option-list">
      <ng-content></ng-content>
    </ul>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], position: [{
                type: Input
            }], positionTop: [{
                type: HostBinding,
                args: ['class.position-top']
            }], positionBottom: [{
                type: HostBinding,
                args: ['class.position-bottom']
            }], sizeTiny: [{
                type: HostBinding,
                args: ['class.size-tiny']
            }], sizeSmall: [{
                type: HostBinding,
                args: ['class.size-small']
            }], sizeMedium: [{
                type: HostBinding,
                args: ['class.size-medium']
            }], sizeLarge: [{
                type: HostBinding,
                args: ['class.size-large']
            }], sizeGiant: [{
                type: HostBinding,
                args: ['class.size-giant']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL29wdGlvbi9vcHRpb24tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7OztLQWVLO0FBVUwsTUFBTSxPQUFPLHFCQUFxQjtJQVRsQztRQVdXLFNBQUksR0FBb0IsUUFBUSxDQUFDO0tBc0MzQztJQWxDQyxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO0lBQy9CLENBQUM7O2tIQXZDVSxxQkFBcUI7c0dBQXJCLHFCQUFxQix3WkFQdEI7Ozs7R0FJVDsyRkFHVSxxQkFBcUI7a0JBVGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUdVLElBQUk7c0JBQVosS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTTdCLGNBQWM7c0JBRGpCLFdBQVc7dUJBQUMsdUJBQXVCO2dCQU1oQyxRQUFRO3NCQURYLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixTQUFTO3NCQURaLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixVQUFVO3NCQURiLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixTQUFTO3NCQURaLFdBQVc7dUJBQUMsa0JBQWtCO2dCQU0zQixTQUFTO3NCQURaLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iQ29tcG9uZW50U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaXplJztcbmltcG9ydCB7IE5iUG9zaXRpb24gfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcblxuLyoqXG4gKiBUaGUgYE5iT3B0aW9uTGlzdENvbXBvbmVudGAgaXMgY29udGFpbmVyIGNvbXBvbmVudCBmb3IgYE5iT3B0aW9uR3JvdXBDb21wb25lbnRgIGFuZGBOYk9wdGlvbkNvbXBvbmVudGAgbGlzdC5cbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogb3B0aW9uLWxpc3QtbWF4LWhlaWdodDpcbiAqIG9wdGlvbi1saXN0LXNoYWRvdzpcbiAqIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6XG4gKiBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6XG4gKiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGg6XG4gKiBvcHRpb24tbGlzdC1ib3JkZXItY29sb3I6XG4gKiBvcHRpb24tbGlzdC1ib3JkZXItcmFkaXVzOlxuICogb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOlxuICogb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXN0eWxlOlxuICogb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOlxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLW9wdGlvbi1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJvcHRpb24tbGlzdFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvdWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYk9wdGlvbkxpc3RDb21wb25lbnQ8VD4ge1xuXG4gIEBJbnB1dCgpIHNpemU6IE5iQ29tcG9uZW50U2l6ZSA9ICdtZWRpdW0nO1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBOYlBvc2l0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tdG9wJylcbiAgZ2V0IHBvc2l0aW9uVG9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLlRPUDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucG9zaXRpb24tYm90dG9tJylcbiAgZ2V0IHBvc2l0aW9uQm90dG9tKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBOYlBvc2l0aW9uLkJPVFRPTTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS10aW55JylcbiAgZ2V0IHNpemVUaW55KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICd0aW55JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1zbWFsbCcpXG4gIGdldCBzaXplU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1tZWRpdW0nKVxuICBnZXQgc2l6ZU1lZGl1bSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbWVkaXVtJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1sYXJnZScpXG4gIGdldCBzaXplTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2l6ZS1naWFudCcpXG4gIGdldCBzaXplR2lhbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2dpYW50JztcbiAgfVxufVxuIl19