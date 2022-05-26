/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { from, Subject } from 'rxjs';
import { convertToBoolProperty } from '../helpers';
import { NbOptionComponent } from './option.component';
import * as i0 from "@angular/core";
/**
 * NbOptionGroupComponent
 *
 * @styles
 *
 * option-group-text-color:
 * option-group-tiny-start-padding:
 * option-group-small-start-padding:
 * option-group-medium-start-padding:
 * option-group-large-start-padding:
 * option-group-giant-start-padding:
 **/
export class NbOptionGroupComponent {
    constructor() {
        this.destroy$ = new Subject();
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
        if (this.options) {
            this.updateOptionsDisabledState();
        }
    }
    get disabledAttribute() {
        return this.disabled ? '' : null;
    }
    ngAfterContentInit() {
        if (this.options.length) {
            this.asyncUpdateOptionsDisabledState();
        }
        this.options.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.asyncUpdateOptionsDisabledState());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Sets disabled state for each option to current group disabled state.
     */
    updateOptionsDisabledState() {
        this.options.forEach((option) => option.setDisabledByGroupState(this.disabled));
    }
    /**
     * Updates options disabled state after promise resolution.
     * This way change detection will be triggered after options state updated.
     * Use this method when updating options during change detection run (e.g. QueryList.changes, lifecycle hooks).
     */
    asyncUpdateOptionsDisabledState() {
        // Wrap Promise into Observable with `takeUntil(this.destroy$)` to prevent update if component destroyed.
        from(Promise.resolve())
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.updateOptionsDisabledState());
    }
}
NbOptionGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbOptionGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbOptionGroupComponent, selector: "nb-option-group", inputs: { title: "title", disabled: "disabled" }, host: { properties: { "attr.disabled": "this.disabledAttribute" } }, queries: [{ propertyName: "options", predicate: NbOptionComponent, descendants: true }], ngImport: i0, template: `
    <span class="option-group-title">{{ title }}</span>
    <ng-content select="nb-option, ng-container"></ng-content>
  `, isInline: true, styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host,.option-group-title{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbOptionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-option-group', changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span class="option-group-title">{{ title }}</span>
    <ng-content select="nb-option, ng-container"></ng-content>
  `, styles: ["/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host,.option-group-title{display:block}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledAttribute: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], options: [{
                type: ContentChildren,
                args: [NbOptionComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9vcHRpb24vb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFDWCxLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXZEOzs7Ozs7Ozs7OztJQVdJO0FBVUosTUFBTSxPQUFPLHNCQUFzQjtJQVRuQztRQVdZLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBZS9CLGNBQVMsR0FBWSxLQUFLLENBQUM7S0EyQ3RDO0lBdERDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFJRCxJQUNJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzthQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDTywwQkFBMEI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUF5QixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQkFBK0I7UUFDdkMseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7bUhBM0RVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHNNQXlCaEIsaUJBQWlCLGdEQTlCeEI7OztHQUdUOzJGQUVVLHNCQUFzQjtrQkFUbEMsU0FBUzsrQkFDRSxpQkFBaUIsbUJBRVYsdUJBQXVCLENBQUMsTUFBTSxZQUNyQzs7O0dBR1Q7OEJBTVEsS0FBSztzQkFBYixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsS0FBSztnQkFlRixpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsZUFBZTtnQkFLK0IsT0FBTztzQkFBakUsZUFBZTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGZyb20sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgY29udmVydFRvQm9vbFByb3BlcnR5LCBOYkJvb2xlYW5JbnB1dCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTmJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL29wdGlvbi5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5iT3B0aW9uR3JvdXBDb21wb25lbnRcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogb3B0aW9uLWdyb3VwLXRleHQtY29sb3I6XG4gKiBvcHRpb24tZ3JvdXAtdGlueS1zdGFydC1wYWRkaW5nOlxuICogb3B0aW9uLWdyb3VwLXNtYWxsLXN0YXJ0LXBhZGRpbmc6XG4gKiBvcHRpb24tZ3JvdXAtbWVkaXVtLXN0YXJ0LXBhZGRpbmc6XG4gKiBvcHRpb24tZ3JvdXAtbGFyZ2Utc3RhcnQtcGFkZGluZzpcbiAqIG9wdGlvbi1ncm91cC1naWFudC1zdGFydC1wYWRkaW5nOlxuICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItb3B0aW9uLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwib3B0aW9uLWdyb3VwLXRpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItb3B0aW9uLCBuZy1jb250YWluZXJcIj48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iT3B0aW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlT3B0aW9uc0Rpc2FibGVkU3RhdGUoKTtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IE5iQm9vbGVhbklucHV0O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZEF0dHJpYnV0ZSgpOiAnJyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOYk9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8TmJPcHRpb25Db21wb25lbnQ8YW55Pj47XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmFzeW5jVXBkYXRlT3B0aW9uc0Rpc2FibGVkU3RhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFzeW5jVXBkYXRlT3B0aW9uc0Rpc2FibGVkU3RhdGUoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBkaXNhYmxlZCBzdGF0ZSBmb3IgZWFjaCBvcHRpb24gdG8gY3VycmVudCBncm91cCBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVPcHRpb25zRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOYk9wdGlvbkNvbXBvbmVudCkgPT4gb3B0aW9uLnNldERpc2FibGVkQnlHcm91cFN0YXRlKHRoaXMuZGlzYWJsZWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIG9wdGlvbnMgZGlzYWJsZWQgc3RhdGUgYWZ0ZXIgcHJvbWlzZSByZXNvbHV0aW9uLlxuICAgKiBUaGlzIHdheSBjaGFuZ2UgZGV0ZWN0aW9uIHdpbGwgYmUgdHJpZ2dlcmVkIGFmdGVyIG9wdGlvbnMgc3RhdGUgdXBkYXRlZC5cbiAgICogVXNlIHRoaXMgbWV0aG9kIHdoZW4gdXBkYXRpbmcgb3B0aW9ucyBkdXJpbmcgY2hhbmdlIGRldGVjdGlvbiBydW4gKGUuZy4gUXVlcnlMaXN0LmNoYW5nZXMsIGxpZmVjeWNsZSBob29rcykuXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmNVcGRhdGVPcHRpb25zRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBXcmFwIFByb21pc2UgaW50byBPYnNlcnZhYmxlIHdpdGggYHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKWAgdG8gcHJldmVudCB1cGRhdGUgaWYgY29tcG9uZW50IGRlc3Ryb3llZC5cbiAgICBmcm9tKFByb21pc2UucmVzb2x2ZSgpKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZU9wdGlvbnNEaXNhYmxlZFN0YXRlKCkpO1xuICB9XG59XG5cblxuIl19