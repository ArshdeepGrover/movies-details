/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { filter, finalize, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { BACKSPACE, DELETE, SPACE } from '../cdk/keycodes/keycodes';
import { convertToBoolProperty } from '../helpers';
import { NbAutocompleteDirective } from '../autocomplete/autocomplete.directive';
import { NbTagComponent } from './tag.component';
import { NbTagInputDirective } from './tag-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "../cdk/a11y/a11y.module";
import * as i2 from "../cdk/a11y/descendant-key-manager";
import * as i3 from "../../services/direction.service";
import * as i4 from "../../services/status.service";
/**
 *
 * `nb-tag-list` component displays a list of `nb-tag` components.
 *
 * @stacked-example(Tag List Showcase, tag/tag-showcase.component)
 *
 * @styles
 *
 * tag-list-tiny-tag-offset:
 * tag-list-small-tag-offset:
 * tag-list-medium-tag-offset:
 * tag-list-large-tag-offset:
 * tag-list-giant-tag-offset:
 * tag-list-with-input-tiny-padding:
 * tag-list-with-input-small-padding:
 * tag-list-with-input-medium-padding:
 * tag-list-with-input-large-padding:
 * tag-list-with-input-giant-padding:
 * tag-list-with-input-rectangle-border-radius:
 * tag-list-with-input-semi-round-border-radius:
 * tag-list-with-input-round-border-radius:
 */
export class NbTagListComponent {
    constructor(hostElement, cd, renderer, zone, focusMonitor, activeDescendantKeyManagerFactory, directionService, statusService) {
        this.hostElement = hostElement;
        this.cd = cd;
        this.renderer = renderer;
        this.zone = zone;
        this.focusMonitor = focusMonitor;
        this.activeDescendantKeyManagerFactory = activeDescendantKeyManagerFactory;
        this.directionService = directionService;
        this.statusService = statusService;
        this.destroy$ = new Subject();
        this.keyDown$ = new Subject();
        this.tagClick$ = new Subject();
        this.focused = false;
        /**
         * Controls tags offset.
         */
        this.size = 'medium';
        this.tabIndex = 0;
        this.role = 'listbox';
        this._multiple = false;
        this.activeTagId = null;
        /**
         * Emits when tag need to be removed (whether because of click on the remove button
         * or when `delete` or `backspace` key pressed).
         */
        this.tagRemove = new EventEmitter();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = convertToBoolProperty(value);
    }
    get _hasInput() {
        return !!this.tagInput;
    }
    get _isFocused() {
        return this.focused;
    }
    get _isFullWidth() {
        return !!this.tagInput?.fullWidth;
    }
    get _inputClasses() {
        if (this._hasInput) {
            return [
                `shape-${this.tagInput.shape}`,
                `size-${this.tagInput.fieldSize}`,
                this.statusService.getStatusClass(this.tagInput.status),
            ];
        }
        return [`size-${this.size}`];
    }
    _onKeydown(event) {
        this.keyDown$.next(event);
    }
    _onClick({ target }) {
        const clickedTag = this.tags.find((tag) => tag._hostElement.nativeElement === target);
        if (clickedTag) {
            this.tagClick$.next(clickedTag);
        }
    }
    ngOnInit() {
        this.focusMonitor
            .monitor(this.hostElement, true)
            .pipe(map((origin) => !!origin), finalize(() => this.focusMonitor.stopMonitoring(this.hostElement)), takeUntil(this.destroy$))
            .subscribe((isFocused) => this.onFocusChange(isFocused));
    }
    ngAfterContentInit() {
        this.initKeyManager();
        this.setAutocompleteCustomHost();
    }
    ngAfterViewInit() {
        this.listenToLayoutDirectionChange();
        this.listenListKeyDown();
        this.listenInputKeyDown();
        this.listenTagClick();
        this.listenTagRemove();
        this.listenTagDestroy();
        this.listenActiveTagChange();
        this.listenNoTags();
        // TODO: #2254
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.renderer.addClass(this.hostElement.nativeElement, 'nb-transition');
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    initKeyManager() {
        this.keyManager = this.activeDescendantKeyManagerFactory
            .create(this.tags)
            .withHorizontalOrientation(this.directionService.getDirection())
            .withWrap();
    }
    listenToLayoutDirectionChange() {
        this.directionService
            .onDirectionChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((direction) => this.keyManager.withHorizontalOrientation(direction));
    }
    listenListKeyDown() {
        const tagListKeyDown$ = this.keyDown$.pipe(filter(({ target }) => target === this.hostElement.nativeElement));
        const activeTagKeyDown$ = tagListKeyDown$.pipe(filter(() => !!this.keyManager.activeItem));
        tagListKeyDown$
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => this.keyManager.onKeydown(event));
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => keyCode === SPACE), takeUntil(this.destroy$))
            .subscribe((event) => {
            this.toggleTag(this.keyManager.activeItem);
            // Prevents page scroll.
            event.preventDefault();
        });
        activeTagKeyDown$
            .pipe(filter(({ keyCode }) => this.isBackspaceOrDelete(keyCode)), map(() => this.keyManager.activeItem), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => tagToRemove._remove());
    }
    listenInputKeyDown() {
        const inputKeyDown$ = this.keyDown$.pipe(filter(({ target }) => target === this.tagInput?._hostElement.nativeElement));
        inputKeyDown$
            .pipe(filter(({ keyCode }) => {
            return this.tagInput._value === '' && this.isBackspaceOrDelete(keyCode) && this.tags.length > 0;
        }), takeUntil(this.destroy$))
            .subscribe(() => {
            this.hostElement.nativeElement.focus();
            this.keyManager.setLastItemActive();
            this.cd.markForCheck();
        });
    }
    listenTagClick() {
        this.tagClick$.pipe(takeUntil(this.destroy$)).subscribe((clickedTag) => {
            this.toggleTag(clickedTag);
            this.keyManager.setActiveItem(clickedTag);
        });
    }
    listenTagRemove() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.remove))), takeUntil(this.destroy$))
            .subscribe((tagToRemove) => this.tagRemove.emit(tagToRemove));
    }
    listenTagDestroy() {
        this.tags.changes
            .pipe(startWith(this.tags), switchMap((tags) => merge(...tags.map((tag) => tag.destroy$))), filter((destroyedTag) => destroyedTag === this.keyManager.activeItem), map((destroyedTag) => destroyedTag === this.tags.last), takeUntil(this.destroy$))
            .subscribe((isLastTagDestroyed) => {
            if (isLastTagDestroyed) {
                this.keyManager.setPreviousItemActive();
            }
            else {
                this.keyManager.setNextItemActive();
            }
        });
    }
    listenNoTags() {
        this.tags.changes
            .pipe(startWith(this.tags), filter((tags) => tags.length === 0), takeUntil(this.destroy$))
            .subscribe(() => this.focusInputIfActive());
    }
    listenActiveTagChange() {
        this.keyManager.change
            .pipe(map(() => this.keyManager.activeItem?._id), takeUntil(this.destroy$))
            .subscribe((activeTagId) => {
            this.activeTagId = activeTagId;
            this.cd.markForCheck();
        });
    }
    onFocusChange(isFocused) {
        this.focused = isFocused;
        this.cd.markForCheck();
        if (!isFocused || this.tagInput?.focused$.value) {
            this.keyManager?.setActiveItem(-1);
            return;
        }
        // Focus input when focusing tag list without tags. Otherwise select first tag.
        if (this.tags.length === 0 && this._hasInput) {
            this.focusInput();
        }
        else {
            this.keyManager.setFirstItemActive();
        }
    }
    isBackspaceOrDelete(keyCode) {
        return keyCode === BACKSPACE || keyCode === DELETE;
    }
    setAutocompleteCustomHost() {
        if (this.autocompleteDirective) {
            this.autocompleteDirective.customOverlayHost = this.hostElement;
        }
    }
    toggleTag(tagToToggle) {
        tagToToggle._toggleSelection();
        if (tagToToggle.selected && !this.multiple) {
            this.tags.forEach((tag) => {
                if (tag !== tagToToggle) {
                    tag.selected = false;
                }
            });
        }
    }
    focusInput() {
        if (this._hasInput) {
            this.tagInput._hostElement.nativeElement.focus();
        }
    }
    focusInputIfActive() {
        if (this._isFocused) {
            this.focusInput();
        }
    }
}
NbTagListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagListComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i1.NbFocusMonitor }, { token: i2.NbActiveDescendantKeyManagerFactoryService }, { token: i3.NbLayoutDirectionService }, { token: i4.NbStatusService }], target: i0.ɵɵFactoryTarget.Component });
NbTagListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbTagListComponent, selector: "nb-tag-list", inputs: { size: "size", tabIndex: "tabIndex", role: "role", multiple: "multiple" }, outputs: { tagRemove: "tagRemove" }, host: { listeners: { "keydown": "_onKeydown($event)", "click": "_onClick($event)" }, properties: { "attr.tabindex": "this.tabIndex", "attr.role": "this.role", "attr.aria-multiselectable": "this.multiple", "attr.aria-activedescendant": "this.activeTagId", "class.nb-tag-list-with-input": "this._hasInput", "class.focus": "this._isFocused", "class.input-full-width": "this._isFullWidth", "class": "this._inputClasses" } }, queries: [{ propertyName: "tagInput", first: true, predicate: NbTagInputDirective, descendants: true }, { propertyName: "autocompleteDirective", first: true, predicate: NbAutocompleteDirective, descendants: true }, { propertyName: "tags", predicate: NbTagComponent }], exportAs: ["nbTagList"], ngImport: i0, template: `
    <div class="nb-tag-list-tags-wrapper">
      <ng-content select="nb-tag, input[nbTagInput]"></ng-content>
    </div>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbTagListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nb-tag-list',
                    template: `
    <div class="nb-tag-list-tags-wrapper">
      <ng-content select="nb-tag, input[nbTagInput]"></ng-content>
    </div>
  `,
                    exportAs: 'nbTagList',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i1.NbFocusMonitor }, { type: i2.NbActiveDescendantKeyManagerFactoryService }, { type: i3.NbLayoutDirectionService }, { type: i4.NbStatusService }]; }, propDecorators: { tags: [{
                type: ContentChildren,
                args: [NbTagComponent]
            }], tagInput: [{
                type: ContentChild,
                args: [NbTagInputDirective]
            }], autocompleteDirective: [{
                type: ContentChild,
                args: [NbAutocompleteDirective]
            }], size: [{
                type: Input
            }], tabIndex: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.tabindex']
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], multiple: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-multiselectable']
            }], activeTagId: [{
                type: HostBinding,
                args: ['attr.aria-activedescendant']
            }], tagRemove: [{
                type: Output
            }], _hasInput: [{
                type: HostBinding,
                args: ['class.nb-tag-list-with-input']
            }], _isFocused: [{
                type: HostBinding,
                args: ['class.focus']
            }], _isFullWidth: [{
                type: HostBinding,
                args: ['class.input-full-width']
            }], _inputClasses: [{
                type: HostBinding,
                args: ['class']
            }], _onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], _onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL3RhZy90YWctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBRW5FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFXSCxNQUFNLE9BQU8sa0JBQWtCO0lBc0Y3QixZQUNZLFdBQW9DLEVBQ3BDLEVBQXFCLEVBQ3JCLFFBQW1CLEVBQ25CLElBQVksRUFDWixZQUE0QixFQUM1QixpQ0FBNkYsRUFDN0YsZ0JBQTBDLEVBQzFDLGFBQThCO1FBUDlCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxPQUFFLEdBQUYsRUFBRSxD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RFQsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBTW5DLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5hbGl6ZSwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOYkxheW91dERpcmVjdGlvbiwgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGlyZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJTdGF0dXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RhdHVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJGb2N1c01vbml0b3IgfSBmcm9tICcuLi9jZGsvYTExeS9hMTF5Lm1vZHVsZSc7XG5pbXBvcnQge1xuICBOYkFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyLFxuICBOYkFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyRmFjdG9yeVNlcnZpY2UsXG59IGZyb20gJy4uL2Nkay9hMTF5L2Rlc2NlbmRhbnQta2V5LW1hbmFnZXInO1xuaW1wb3J0IHsgQkFDS1NQQUNFLCBERUxFVEUsIFNQQUNFIH0gZnJvbSAnLi4vY2RrL2tleWNvZGVzL2tleWNvZGVzJztcbmltcG9ydCB7IGNvbnZlcnRUb0Jvb2xQcm9wZXJ0eSwgTmJCb29sZWFuSW5wdXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5iQ29tcG9uZW50U2l6ZSB9IGZyb20gJy4uL2NvbXBvbmVudC1zaXplJztcbmltcG9ydCB7IE5iQXV0b2NvbXBsZXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmJUYWdDb21wb25lbnQgfSBmcm9tICcuL3RhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmJUYWdJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vdGFnLWlucHV0LmRpcmVjdGl2ZSc7XG5cbi8qKlxuICpcbiAqIGBuYi10YWctbGlzdGAgY29tcG9uZW50IGRpc3BsYXlzIGEgbGlzdCBvZiBgbmItdGFnYCBjb21wb25lbnRzLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoVGFnIExpc3QgU2hvd2Nhc2UsIHRhZy90YWctc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIEBzdHlsZXNcbiAqXG4gKiB0YWctbGlzdC10aW55LXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1zbWFsbC10YWctb2Zmc2V0OlxuICogdGFnLWxpc3QtbWVkaXVtLXRhZy1vZmZzZXQ6XG4gKiB0YWctbGlzdC1sYXJnZS10YWctb2Zmc2V0OlxuICogdGFnLWxpc3QtZ2lhbnQtdGFnLW9mZnNldDpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtdGlueS1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1zbWFsbC1wYWRkaW5nOlxuICogdGFnLWxpc3Qtd2l0aC1pbnB1dC1tZWRpdW0tcGFkZGluZzpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtbGFyZ2UtcGFkZGluZzpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtZ2lhbnQtcGFkZGluZzpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6XG4gKiB0YWctbGlzdC13aXRoLWlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czpcbiAqIHRhZy1saXN0LXdpdGgtaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmItdGFnLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuYi10YWctbGlzdC10YWdzLXdyYXBwZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLXRhZywgaW5wdXRbbmJUYWdJbnB1dF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGV4cG9ydEFzOiAnbmJUYWdMaXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5iVGFnTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGtleURvd24kOiBTdWJqZWN0PEtleWJvYXJkRXZlbnQ+ID0gbmV3IFN1YmplY3Q8S2V5Ym9hcmRFdmVudD4oKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRhZ0NsaWNrJDogU3ViamVjdDxOYlRhZ0NvbXBvbmVudD4gPSBuZXcgU3ViamVjdDxOYlRhZ0NvbXBvbmVudD4oKTtcbiAgcHJvdGVjdGVkIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIGtleU1hbmFnZXI6IE5iQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8TmJUYWdDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmJUYWdDb21wb25lbnQpIHRhZ3M6IFF1ZXJ5TGlzdDxOYlRhZ0NvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoTmJUYWdJbnB1dERpcmVjdGl2ZSkgdGFnSW5wdXQ6IE5iVGFnSW5wdXREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoTmJBdXRvY29tcGxldGVEaXJlY3RpdmUpIGF1dG9jb21wbGV0ZURpcmVjdGl2ZTogTmJBdXRvY29tcGxldGVEaXJlY3RpdmU8YW55PjtcblxuICAvKipcbiAgICogQ29udHJvbHMgdGFncyBvZmZzZXQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplOiBOYkNvbXBvbmVudFNpemUgPSAnbWVkaXVtJztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICB0YWJJbmRleDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGU6IHN0cmluZyA9ICdsaXN0Ym94JztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGUnKVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29udmVydFRvQm9vbFByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcm90ZWN0ZWQgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9tdWx0aXBsZTogTmJCb29sZWFuSW5wdXQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudCcpXG4gIGFjdGl2ZVRhZ0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0YWcgbmVlZCB0byBiZSByZW1vdmVkICh3aGV0aGVyIGJlY2F1c2Ugb2YgY2xpY2sgb24gdGhlIHJlbW92ZSBidXR0b25cbiAgICogb3Igd2hlbiBgZGVsZXRlYCBvciBgYmFja3NwYWNlYCBrZXkgcHJlc3NlZCkuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGFnUmVtb3ZlOiBFdmVudEVtaXR0ZXI8TmJUYWdDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRhZ0NvbXBvbmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLXRhZy1saXN0LXdpdGgtaW5wdXQnKVxuICBnZXQgX2hhc0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudGFnSW5wdXQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzJylcbiAgZ2V0IF9pc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW5wdXQtZnVsbC13aWR0aCcpXG4gIGdldCBfaXNGdWxsV2lkdGgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50YWdJbnB1dD8uZnVsbFdpZHRoO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBfaW5wdXRDbGFzc2VzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5faGFzSW5wdXQpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGBzaGFwZS0ke3RoaXMudGFnSW5wdXQuc2hhcGV9YCxcbiAgICAgICAgYHNpemUtJHt0aGlzLnRhZ0lucHV0LmZpZWxkU2l6ZX1gLFxuICAgICAgICB0aGlzLnN0YXR1c1NlcnZpY2UuZ2V0U3RhdHVzQ2xhc3ModGhpcy50YWdJbnB1dC5zdGF0dXMpLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2BzaXplLSR7dGhpcy5zaXplfWBdO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIF9vbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmtleURvd24kLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBfb25DbGljayh7IHRhcmdldCB9OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2xpY2tlZFRhZyA9IHRoaXMudGFncy5maW5kKCh0YWc6IE5iVGFnQ29tcG9uZW50KSA9PiB0YWcuX2hvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPT09IHRhcmdldCk7XG4gICAgaWYgKGNsaWNrZWRUYWcpIHtcbiAgICAgIHRoaXMudGFnQ2xpY2skLm5leHQoY2xpY2tlZFRhZyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIGZvY3VzTW9uaXRvcjogTmJGb2N1c01vbml0b3IsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyRmFjdG9yeTogTmJBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlckZhY3RvcnlTZXJ2aWNlPE5iVGFnQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgZGlyZWN0aW9uU2VydmljZTogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdGF0dXNTZXJ2aWNlOiBOYlN0YXR1c1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxuICAgICAgLm1vbml0b3IodGhpcy5ob3N0RWxlbWVudCwgdHJ1ZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKG9yaWdpbikgPT4gISFvcmlnaW4pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmhvc3RFbGVtZW50KSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4gdGhpcy5vbkZvY3VzQ2hhbmdlKGlzRm9jdXNlZCkpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaW5pdEtleU1hbmFnZXIoKTtcbiAgICB0aGlzLnNldEF1dG9jb21wbGV0ZUN1c3RvbUhvc3QoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmxpc3RlblRvTGF5b3V0RGlyZWN0aW9uQ2hhbmdlKCk7XG4gICAgdGhpcy5saXN0ZW5MaXN0S2V5RG93bigpO1xuICAgIHRoaXMubGlzdGVuSW5wdXRLZXlEb3duKCk7XG4gICAgdGhpcy5saXN0ZW5UYWdDbGljaygpO1xuICAgIHRoaXMubGlzdGVuVGFnUmVtb3ZlKCk7XG4gICAgdGhpcy5saXN0ZW5UYWdEZXN0cm95KCk7XG4gICAgdGhpcy5saXN0ZW5BY3RpdmVUYWdDaGFuZ2UoKTtcbiAgICB0aGlzLmxpc3Rlbk5vVGFncygpO1xuXG4gICAgLy8gVE9ETzogIzIyNTRcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ25iLXRyYW5zaXRpb24nKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0S2V5TWFuYWdlcigpOiB2b2lkIHtcbiAgICB0aGlzLmtleU1hbmFnZXIgPSB0aGlzLmFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyRmFjdG9yeVxuICAgICAgLmNyZWF0ZSh0aGlzLnRhZ3MpXG4gICAgICAud2l0aEhvcml6b250YWxPcmllbnRhdGlvbih0aGlzLmRpcmVjdGlvblNlcnZpY2UuZ2V0RGlyZWN0aW9uKCkpXG4gICAgICAud2l0aFdyYXAoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsaXN0ZW5Ub0xheW91dERpcmVjdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvblNlcnZpY2VcbiAgICAgIC5vbkRpcmVjdGlvbkNoYW5nZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChkaXJlY3Rpb246IE5iTGF5b3V0RGlyZWN0aW9uKSA9PiB0aGlzLmtleU1hbmFnZXIud2l0aEhvcml6b250YWxPcmllbnRhdGlvbihkaXJlY3Rpb24pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsaXN0ZW5MaXN0S2V5RG93bigpOiB2b2lkIHtcbiAgICBjb25zdCB0YWdMaXN0S2V5RG93biQgPSB0aGlzLmtleURvd24kLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgdGFyZ2V0IH06IEtleWJvYXJkRXZlbnQpID0+IHRhcmdldCA9PT0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KSxcbiAgICApO1xuICAgIGNvbnN0IGFjdGl2ZVRhZ0tleURvd24kID0gdGFnTGlzdEtleURvd24kLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pKTtcblxuICAgIHRhZ0xpc3RLZXlEb3duJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMua2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpKTtcblxuICAgIGFjdGl2ZVRhZ0tleURvd24kXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IGtleUNvZGUgfTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5Q29kZSA9PT0gU1BBQ0UpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVRhZyh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICAgIC8vIFByZXZlbnRzIHBhZ2Ugc2Nyb2xsLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICBhY3RpdmVUYWdLZXlEb3duJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyBrZXlDb2RlIH06IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuaXNCYWNrc3BhY2VPckRlbGV0ZShrZXlDb2RlKSksXG4gICAgICAgIG1hcCgoKSA9PiB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCkgPT4gdGFnVG9SZW1vdmUuX3JlbW92ZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBsaXN0ZW5JbnB1dEtleURvd24oKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRLZXlEb3duJCA9IHRoaXMua2V5RG93biQucGlwZShcbiAgICAgIGZpbHRlcigoeyB0YXJnZXQgfTogS2V5Ym9hcmRFdmVudCkgPT4gdGFyZ2V0ID09PSB0aGlzLnRhZ0lucHV0Py5faG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCksXG4gICAgKTtcblxuICAgIGlucHV0S2V5RG93biRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsga2V5Q29kZSB9OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFnSW5wdXQuX3ZhbHVlID09PSAnJyAmJiB0aGlzLmlzQmFja3NwYWNlT3JEZWxldGUoa2V5Q29kZSkgJiYgdGhpcy50YWdzLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMua2V5TWFuYWdlci5zZXRMYXN0SXRlbUFjdGl2ZSgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbGlzdGVuVGFnQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy50YWdDbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoY2xpY2tlZFRhZzogTmJUYWdDb21wb25lbnQpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlVGFnKGNsaWNrZWRUYWcpO1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oY2xpY2tlZFRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbGlzdGVuVGFnUmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMudGFncy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMudGFncyksXG4gICAgICAgIHN3aXRjaE1hcCgodGFnczogUXVlcnlMaXN0PE5iVGFnQ29tcG9uZW50PikgPT4gbWVyZ2UoLi4udGFncy5tYXAoKHRhZzogTmJUYWdDb21wb25lbnQpID0+IHRhZy5yZW1vdmUpKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCkgPT4gdGhpcy50YWdSZW1vdmUuZW1pdCh0YWdUb1JlbW92ZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxpc3RlblRhZ0Rlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50YWdzLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy50YWdzKSxcbiAgICAgICAgc3dpdGNoTWFwKCh0YWdzOiBRdWVyeUxpc3Q8TmJUYWdDb21wb25lbnQ+KSA9PiBtZXJnZSguLi50YWdzLm1hcCgodGFnOiBOYlRhZ0NvbXBvbmVudCkgPT4gdGFnLmRlc3Ryb3kkKSkpLFxuICAgICAgICBmaWx0ZXIoKGRlc3Ryb3llZFRhZzogTmJUYWdDb21wb25lbnQpID0+IGRlc3Ryb3llZFRhZyA9PT0gdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pLFxuICAgICAgICBtYXAoKGRlc3Ryb3llZFRhZzogTmJUYWdDb21wb25lbnQpID0+IGRlc3Ryb3llZFRhZyA9PT0gdGhpcy50YWdzLmxhc3QpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChpc0xhc3RUYWdEZXN0cm95ZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGlzTGFzdFRhZ0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHRoaXMua2V5TWFuYWdlci5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmtleU1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbGlzdGVuTm9UYWdzKCk6IHZvaWQge1xuICAgIHRoaXMudGFncy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMudGFncyksXG4gICAgICAgIGZpbHRlcigodGFnczogUXVlcnlMaXN0PE5iVGFnQ29tcG9uZW50PikgPT4gdGFncy5sZW5ndGggPT09IDApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9jdXNJbnB1dElmQWN0aXZlKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxpc3RlbkFjdGl2ZVRhZ0NoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmtleU1hbmFnZXIuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtPy5faWQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVUYWdJZDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhZ0lkID0gYWN0aXZlVGFnSWQ7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkZvY3VzQ2hhbmdlKGlzRm9jdXNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGlzRm9jdXNlZDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKCFpc0ZvY3VzZWQgfHwgdGhpcy50YWdJbnB1dD8uZm9jdXNlZCQudmFsdWUpIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlcj8uc2V0QWN0aXZlSXRlbSgtMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9jdXMgaW5wdXQgd2hlbiBmb2N1c2luZyB0YWcgbGlzdCB3aXRob3V0IHRhZ3MuIE90aGVyd2lzZSBzZWxlY3QgZmlyc3QgdGFnLlxuICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwICYmIHRoaXMuX2hhc0lucHV0KSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpc0JhY2tzcGFjZU9yRGVsZXRlKGtleUNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXlDb2RlID09PSBCQUNLU1BBQ0UgfHwga2V5Q29kZSA9PT0gREVMRVRFO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEF1dG9jb21wbGV0ZUN1c3RvbUhvc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZURpcmVjdGl2ZS5jdXN0b21PdmVybGF5SG9zdCA9IHRoaXMuaG9zdEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRvZ2dsZVRhZyh0YWdUb1RvZ2dsZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0YWdUb1RvZ2dsZS5fdG9nZ2xlU2VsZWN0aW9uKCk7XG5cbiAgICBpZiAodGFnVG9Ub2dnbGUuc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMudGFncy5mb3JFYWNoKCh0YWc6IE5iVGFnQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmICh0YWcgIT09IHRhZ1RvVG9nZ2xlKSB7XG4gICAgICAgICAgdGFnLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9oYXNJbnB1dCkge1xuICAgICAgdGhpcy50YWdJbnB1dC5faG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmb2N1c0lucHV0SWZBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzRm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=