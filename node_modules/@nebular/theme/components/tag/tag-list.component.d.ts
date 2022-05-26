/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbStatusService } from '../../services/status.service';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { NbActiveDescendantKeyManager, NbActiveDescendantKeyManagerFactoryService } from '../cdk/a11y/descendant-key-manager';
import { NbBooleanInput } from '../helpers';
import { NbComponentSize } from '../component-size';
import { NbAutocompleteDirective } from '../autocomplete/autocomplete.directive';
import { NbTagComponent } from './tag.component';
import { NbTagInputDirective } from './tag-input.directive';
import * as i0 from "@angular/core";
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
export declare class NbTagListComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected focusMonitor: NbFocusMonitor;
    protected activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbTagComponent>;
    protected directionService: NbLayoutDirectionService;
    protected statusService: NbStatusService;
    protected readonly destroy$: Subject<void>;
    protected readonly keyDown$: Subject<KeyboardEvent>;
    protected readonly tagClick$: Subject<NbTagComponent>;
    protected focused: boolean;
    protected keyManager: NbActiveDescendantKeyManager<NbTagComponent>;
    tags: QueryList<NbTagComponent>;
    tagInput: NbTagInputDirective;
    autocompleteDirective: NbAutocompleteDirective<any>;
    /**
     * Controls tags offset.
     */
    size: NbComponentSize;
    tabIndex: number;
    role: string;
    get multiple(): boolean;
    set multiple(value: boolean);
    protected _multiple: boolean;
    static ngAcceptInputType_multiple: NbBooleanInput;
    activeTagId: string | null;
    /**
     * Emits when tag need to be removed (whether because of click on the remove button
     * or when `delete` or `backspace` key pressed).
     */
    readonly tagRemove: EventEmitter<NbTagComponent>;
    get _hasInput(): boolean;
    get _isFocused(): boolean;
    get _isFullWidth(): boolean;
    get _inputClasses(): string[];
    _onKeydown(event: KeyboardEvent): void;
    _onClick({ target }: MouseEvent): void;
    constructor(hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, renderer: Renderer2, zone: NgZone, focusMonitor: NbFocusMonitor, activeDescendantKeyManagerFactory: NbActiveDescendantKeyManagerFactoryService<NbTagComponent>, directionService: NbLayoutDirectionService, statusService: NbStatusService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected initKeyManager(): void;
    protected listenToLayoutDirectionChange(): void;
    protected listenListKeyDown(): void;
    protected listenInputKeyDown(): void;
    protected listenTagClick(): void;
    protected listenTagRemove(): void;
    protected listenTagDestroy(): void;
    protected listenNoTags(): void;
    protected listenActiveTagChange(): void;
    protected onFocusChange(isFocused: boolean): void;
    protected isBackspaceOrDelete(keyCode: number): boolean;
    protected setAutocompleteCustomHost(): void;
    protected toggleTag(tagToToggle: NbTagComponent): void;
    protected focusInput(): void;
    protected focusInputIfActive(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbTagListComponent, "nb-tag-list", ["nbTagList"], { "size": "size"; "tabIndex": "tabIndex"; "role": "role"; "multiple": "multiple"; }, { "tagRemove": "tagRemove"; }, ["tagInput", "autocompleteDirective", "tags"], ["nb-tag, input[nbTagInput]"]>;
}
