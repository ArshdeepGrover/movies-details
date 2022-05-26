/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { AfterViewInit, ElementRef, EventEmitter, NgZone, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { NbStatusService } from '../../services/status.service';
import { NbFocusMonitor } from '../cdk/a11y/a11y.module';
import { NbInputDirective } from '../input/input.directive';
import * as i0 from "@angular/core";
export interface NbTagInputAddEvent {
    input: ElementRef<HTMLInputElement>;
    value: string;
}
/**
 *
 * `[nbTagInput]` directive connects input with a `nb-tag-list` component.
 *
 * @stacked-example(Tag Input, tag/tag-input.component)
 *
 * @additional-example(Tag Input with Autocomplete, tag/tag-input-with-autocomplete.component)
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
 */
export declare class NbTagInputDirective extends NbInputDirective implements AfterViewInit {
    _hostElement: ElementRef<HTMLInputElement>;
    protected focusMonitor: NbFocusMonitor;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    protected readonly keyDown$: Subject<KeyboardEvent>;
    get _value(): string;
    /**
     * Controls which keys should trigger tag add event.
     */
    separatorKeys: number[];
    /**
     * Emits when a tag need to be added.
     */
    tagAdd: EventEmitter<NbTagInputAddEvent>;
    readonly nbTagInputClass = true;
    _onKeydown(event: KeyboardEvent): void;
    constructor(_hostElement: ElementRef<HTMLInputElement>, focusMonitor: NbFocusMonitor, renderer: Renderer2, zone: NgZone, statusService: NbStatusService);
    ngAfterViewInit(): void;
    protected isSeparatorKey(keyCode: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbTagInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbTagInputDirective, "input[nbTagInput]", ["nbTagInput"], { "separatorKeys": "separatorKeys"; }, { "tagAdd": "tagAdd"; }, never>;
}
