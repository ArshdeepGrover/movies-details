/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NB_BUILT_IN_JS_THEMES, NB_MEDIA_BREAKPOINTS, NB_THEME_OPTIONS, NB_JS_THEMES, NB_DOCUMENT, NB_WINDOW, } from './theme.options';
import { NbThemeService } from './services/theme.service';
import { NbSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './services/js-themes-registry.service';
import { DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, } from './services/breakpoints.service';
import { NbLayoutDirectionService, NbLayoutDirection, NB_LAYOUT_DIRECTION } from './services/direction.service';
import { NbLayoutScrollService } from './services/scroll.service';
import { NbLayoutRulerService } from './services/ruler.service';
import { NbOverlayModule } from './components/cdk/overlay/overlay.module';
import { NbStatusService } from './services/status.service';
import * as i0 from "@angular/core";
export function windowFactory(platformId) {
    if (isPlatformBrowser(platformId)) {
        return window;
    }
    // Provide undefined to get the error when trying to access the window as it
    // shouldn't be used outside the browser. Those who need to provide something
    // instead of window (e.g. domino window when running in node) could override
    // NB_WINDOW token.
    return undefined;
}
export class NbThemeModule {
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     * @param layoutDirection {NbLayoutDirection} Layout direction
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions = { name: 'default' }, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: NB_THEME_OPTIONS, useValue: nbThemeOptions || {} },
                { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
                { provide: NB_JS_THEMES, useValue: nbJSThemes || [] },
                { provide: NB_MEDIA_BREAKPOINTS, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                { provide: NB_DOCUMENT, useExisting: DOCUMENT },
                { provide: NB_WINDOW, useFactory: windowFactory, deps: [PLATFORM_ID] },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
                { provide: NB_LAYOUT_DIRECTION, useValue: layoutDirection || NbLayoutDirection.LTR },
                NbLayoutDirectionService,
                NbLayoutScrollService,
                NbLayoutRulerService,
                ...NbOverlayModule.forRoot().providers,
                NbStatusService,
            ],
        };
    }
}
NbThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeModule, imports: [CommonModule] });
NbThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS90aGVtZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQXVCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsb0JBQW9CLEVBRXBCLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUNMLHlCQUF5QixFQUV6Qix5QkFBeUIsR0FDMUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUU1RCxNQUFNLFVBQVUsYUFBYSxDQUFDLFVBQWtCO0lBQzlDLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDakMsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELDRFQUE0RTtJQUM1RSw2RUFBNkU7SUFDN0UsNkVBQTZFO0lBQzdFLG1CQUFtQjtJQUNuQixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBU0QsTUFBTSxPQUFPLGFBQWE7SUFFeEIsNkNBQTZDO0lBQzdDOzs7Ozs7Ozs7T0FTRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUNwRCxVQUErQixFQUMvQixrQkFBd0MsRUFDeEMsZUFBbUM7UUFFaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTtnQkFDN0QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLElBQUksRUFBRSxFQUFFO2dCQUNyRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLElBQUkseUJBQXlCLEVBQUU7Z0JBQzVGLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO2dCQUMvQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBRSxXQUFXLENBQUUsRUFBRTtnQkFDeEUsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLHlCQUF5QjtnQkFDekIsZ0JBQWdCO2dCQUNoQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxJQUFJLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtnQkFDcEYsd0JBQXdCO2dCQUN4QixxQkFBcUI7Z0JBQ3JCLG9CQUFvQjtnQkFDcEIsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDdEMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzswR0F2Q1UsYUFBYTsyR0FBYixhQUFhLFlBTHRCLFlBQVk7MkdBS0gsYUFBYSxZQU5mO1lBQ1AsWUFBWTtTQUNiOzJGQUlVLGFBQWE7a0JBUHpCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBOQl9CVUlMVF9JTl9KU19USEVNRVMsXG4gIE5CX01FRElBX0JSRUFLUE9JTlRTLFxuICBOYlRoZW1lT3B0aW9ucyxcbiAgTkJfVEhFTUVfT1BUSU9OUyxcbiAgTkJfSlNfVEhFTUVTLFxuICBOQl9ET0NVTUVOVCxcbiAgTkJfV0lORE9XLFxufSBmcm9tICcuL3RoZW1lLm9wdGlvbnMnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJTcGlubmVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3Bpbm5lci5zZXJ2aWNlJztcbmltcG9ydCB7IE5iSlNUaGVtZU9wdGlvbnMgfSBmcm9tICcuL3NlcnZpY2VzL2pzLXRoZW1lcy90aGVtZS5vcHRpb25zJztcbmltcG9ydCB7IEJVSUxUX0lOX1RIRU1FUywgTmJKU1RoZW1lc1JlZ2lzdHJ5IH0gZnJvbSAnLi9zZXJ2aWNlcy9qcy10aGVtZXMtcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQge1xuICBERUZBVUxUX01FRElBX0JSRUFLUE9JTlRTLFxuICBOYk1lZGlhQnJlYWtwb2ludCxcbiAgTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSxcbn0gZnJvbSAnLi9zZXJ2aWNlcy9icmVha3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24sIE5CX0xBWU9VVF9ESVJFQ1RJT04gfSBmcm9tICcuL3NlcnZpY2VzL2RpcmVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5iTGF5b3V0U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJMYXlvdXRSdWxlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3J1bGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nkay9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IE5iU3RhdHVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2luZG93RmFjdG9yeShwbGF0Zm9ybUlkOiBPYmplY3QpOiBXaW5kb3cgfCB1bmRlZmluZWQge1xuICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgLy8gUHJvdmlkZSB1bmRlZmluZWQgdG8gZ2V0IHRoZSBlcnJvciB3aGVuIHRyeWluZyB0byBhY2Nlc3MgdGhlIHdpbmRvdyBhcyBpdFxuICAvLyBzaG91bGRuJ3QgYmUgdXNlZCBvdXRzaWRlIHRoZSBicm93c2VyLiBUaG9zZSB3aG8gbmVlZCB0byBwcm92aWRlIHNvbWV0aGluZ1xuICAvLyBpbnN0ZWFkIG9mIHdpbmRvdyAoZS5nLiBkb21pbm8gd2luZG93IHdoZW4gcnVubmluZyBpbiBub2RlKSBjb3VsZCBvdmVycmlkZVxuICAvLyBOQl9XSU5ET1cgdG9rZW4uXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJUaGVtZU1vZHVsZSB7XG5cbiAgLy8gVE9ETzogY2hlY2sgdGhlIG9wdGlvbnMgKHRocm93IGV4Y2VwdGlvbj8pXG4gIC8qKlxuICAgKiBNYWluIFRoZW1lIE1vZHVsZVxuICAgKlxuICAgKiBAcGFyYW0gbmJUaGVtZU9wdGlvbnMge05iVGhlbWVPcHRpb25zfSBNYWluIHRoZW1lIG9wdGlvbnNcbiAgICogQHBhcmFtIG5iSlNUaGVtZXMge05iSlNUaGVtZU9wdGlvbnNbXX0gTGlzdCBvZiBKUyBUaGVtZXMsIHdpbGwgYmUgbWVyZ2VkIHdpdGggZGVmYXVsdCB0aGVtZXNcbiAgICogQHBhcmFtIG5iTWVkaWFCcmVha3BvaW50cyB7TmJNZWRpYUJyZWFrcG9pbnR9IEF2YWlsYWJsZSBtZWRpYSBicmVha3BvaW50c1xuICAgKiBAcGFyYW0gbGF5b3V0RGlyZWN0aW9uIHtOYkxheW91dERpcmVjdGlvbn0gTGF5b3V0IGRpcmVjdGlvblxuICAgKlxuICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KG5iVGhlbWVPcHRpb25zOiBOYlRoZW1lT3B0aW9ucyA9IHsgbmFtZTogJ2RlZmF1bHQnIH0sXG4gICAgICAgICAgICAgICAgIG5iSlNUaGVtZXM/OiBOYkpTVGhlbWVPcHRpb25zW10sXG4gICAgICAgICAgICAgICAgIG5iTWVkaWFCcmVha3BvaW50cz86IE5iTWVkaWFCcmVha3BvaW50W10sXG4gICAgICAgICAgICAgICAgIGxheW91dERpcmVjdGlvbj86IE5iTGF5b3V0RGlyZWN0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOYlRoZW1lTW9kdWxlPiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5iVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOQl9USEVNRV9PUFRJT05TLCB1c2VWYWx1ZTogbmJUaGVtZU9wdGlvbnMgfHwge30gfSxcbiAgICAgICAgeyBwcm92aWRlOiBOQl9CVUlMVF9JTl9KU19USEVNRVMsIHVzZVZhbHVlOiBCVUlMVF9JTl9USEVNRVMgfSxcbiAgICAgICAgeyBwcm92aWRlOiBOQl9KU19USEVNRVMsIHVzZVZhbHVlOiBuYkpTVGhlbWVzIHx8IFtdIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTkJfTUVESUFfQlJFQUtQT0lOVFMsIHVzZVZhbHVlOiBuYk1lZGlhQnJlYWtwb2ludHMgfHwgREVGQVVMVF9NRURJQV9CUkVBS1BPSU5UUyB9LFxuICAgICAgICB7IHByb3ZpZGU6IE5CX0RPQ1VNRU5ULCB1c2VFeGlzdGluZzogRE9DVU1FTlQgfSxcbiAgICAgICAgeyBwcm92aWRlOiBOQl9XSU5ET1csIHVzZUZhY3Rvcnk6IHdpbmRvd0ZhY3RvcnksIGRlcHM6IFsgUExBVEZPUk1fSUQgXSB9LFxuICAgICAgICBOYkpTVGhlbWVzUmVnaXN0cnksXG4gICAgICAgIE5iVGhlbWVTZXJ2aWNlLFxuICAgICAgICBOYk1lZGlhQnJlYWtwb2ludHNTZXJ2aWNlLFxuICAgICAgICBOYlNwaW5uZXJTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IE5CX0xBWU9VVF9ESVJFQ1RJT04sIHVzZVZhbHVlOiBsYXlvdXREaXJlY3Rpb24gfHwgTmJMYXlvdXREaXJlY3Rpb24uTFRSIH0sXG4gICAgICAgIE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSxcbiAgICAgICAgTmJMYXlvdXRTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBOYkxheW91dFJ1bGVyU2VydmljZSxcbiAgICAgICAgLi4uTmJPdmVybGF5TW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICAgIE5iU3RhdHVzU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19