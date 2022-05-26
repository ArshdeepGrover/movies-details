/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbButtonModule } from '../button/button.module';
import { NbInputModule } from '../input/input.module';
import { NbIconModule } from '../icon/icon.module';
import { NbChatComponent } from './chat.component';
import { NbChatMessageComponent } from './chat-message.component';
import { NbChatFormComponent } from './chat-form.component';
import { NbChatMessageTextComponent } from './chat-message-text.component';
import { NbChatMessageFileComponent } from './chat-message-file.component';
import { NbChatMessageQuoteComponent } from './chat-message-quote.component';
import { NbChatMessageMapComponent } from './chat-message-map.component';
import { NbChatOptions } from './chat.options';
import { NbChatAvatarComponent } from './chat-avatar.component';
import { NbChatCustomMessageDirective } from './chat-custom-message.directive';
import { NbChatTitleDirective } from './chat-title.directive';
import * as i0 from "@angular/core";
const NB_CHAT_COMPONENTS = [
    NbChatComponent,
    NbChatMessageComponent,
    NbChatFormComponent,
    NbChatMessageTextComponent,
    NbChatMessageFileComponent,
    NbChatMessageQuoteComponent,
    NbChatMessageMapComponent,
    NbChatAvatarComponent,
];
const NB_CHAT_DIRECTIVES = [NbChatCustomMessageDirective, NbChatTitleDirective];
export class NbChatModule {
    static forRoot(options) {
        return {
            ngModule: NbChatModule,
            providers: [{ provide: NbChatOptions, useValue: options || {} }],
        };
    }
    static forChild(options) {
        return {
            ngModule: NbChatModule,
            providers: [{ provide: NbChatOptions, useValue: options || {} }],
        };
    }
}
NbChatModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbChatModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatModule, declarations: [NbChatComponent,
        NbChatMessageComponent,
        NbChatFormComponent,
        NbChatMessageTextComponent,
        NbChatMessageFileComponent,
        NbChatMessageQuoteComponent,
        NbChatMessageMapComponent,
        NbChatAvatarComponent, NbChatCustomMessageDirective, NbChatTitleDirective], imports: [NbSharedModule, NbIconModule, NbInputModule, NbButtonModule], exports: [NbChatComponent,
        NbChatMessageComponent,
        NbChatFormComponent,
        NbChatMessageTextComponent,
        NbChatMessageFileComponent,
        NbChatMessageQuoteComponent,
        NbChatMessageMapComponent,
        NbChatAvatarComponent, NbChatCustomMessageDirective, NbChatTitleDirective] });
NbChatModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatModule, imports: [[NbSharedModule, NbIconModule, NbInputModule, NbButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbChatModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NbSharedModule, NbIconModule, NbInputModule, NbButtonModule],
                    declarations: [...NB_CHAT_COMPONENTS, ...NB_CHAT_DIRECTIVES],
                    exports: [...NB_CHAT_COMPONENTS, ...NB_CHAT_DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2hhdC9jaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTlELE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLDRCQUE0QixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPaEYsTUFBTSxPQUFPLFlBQVk7SUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUF1QjtRQUNwQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFLENBQUM7U0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQXVCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7eUdBYlUsWUFBWTswR0FBWixZQUFZLGlCQWpCdkIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLHFCQUFxQixFQUdLLDRCQUE0QixFQUFFLG9CQUFvQixhQUdsRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLGFBYnJFLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6QixxQkFBcUIsRUFHSyw0QkFBNEIsRUFBRSxvQkFBb0I7MEdBT2pFLFlBQVksWUFKZCxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQzsyRkFJM0QsWUFBWTtrQkFMeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7b0JBQ3RFLFlBQVksRUFBRSxDQUFDLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQztvQkFDNUQsT0FBTyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLGtCQUFrQixDQUFDO2lCQUN4RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5iSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgTmJJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5iQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdE1lc3NhZ2VUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LW1lc3NhZ2UtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0TWVzc2FnZUZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbWVzc2FnZS1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYkNoYXRNZXNzYWdlUXVvdGVDb21wb25lbnQgfSBmcm9tICcuL2NoYXQtbWVzc2FnZS1xdW90ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0TWVzc2FnZU1hcENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1tZXNzYWdlLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJDaGF0T3B0aW9ucyB9IGZyb20gJy4vY2hhdC5vcHRpb25zJztcbmltcG9ydCB7IE5iQ2hhdEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vY2hhdC1hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2NoYXQtY3VzdG9tLW1lc3NhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5iQ2hhdFRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9jaGF0LXRpdGxlLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IE5CX0NIQVRfQ09NUE9ORU5UUyA9IFtcbiAgTmJDaGF0Q29tcG9uZW50LFxuICBOYkNoYXRNZXNzYWdlQ29tcG9uZW50LFxuICBOYkNoYXRGb3JtQ29tcG9uZW50LFxuICBOYkNoYXRNZXNzYWdlVGV4dENvbXBvbmVudCxcbiAgTmJDaGF0TWVzc2FnZUZpbGVDb21wb25lbnQsXG4gIE5iQ2hhdE1lc3NhZ2VRdW90ZUNvbXBvbmVudCxcbiAgTmJDaGF0TWVzc2FnZU1hcENvbXBvbmVudCxcbiAgTmJDaGF0QXZhdGFyQ29tcG9uZW50LFxuXTtcblxuY29uc3QgTkJfQ0hBVF9ESVJFQ1RJVkVTID0gW05iQ2hhdEN1c3RvbU1lc3NhZ2VEaXJlY3RpdmUsIE5iQ2hhdFRpdGxlRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05iU2hhcmVkTW9kdWxlLCBOYkljb25Nb2R1bGUsIE5iSW5wdXRNb2R1bGUsIE5iQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uTkJfQ0hBVF9DT01QT05FTlRTLCAuLi5OQl9DSEFUX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbLi4uTkJfQ0hBVF9DT01QT05FTlRTLCAuLi5OQl9DSEFUX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBOYkNoYXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogTmJDaGF0T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmJDaGF0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOYkNoYXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5iQ2hhdE9wdGlvbnMsIHVzZVZhbHVlOiBvcHRpb25zIHx8IHt9IH1dLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQob3B0aW9ucz86IE5iQ2hhdE9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5iQ2hhdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmJDaGF0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOYkNoYXRPcHRpb25zLCB1c2VWYWx1ZTogb3B0aW9ucyB8fCB7fSB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=