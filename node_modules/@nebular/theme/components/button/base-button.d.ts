import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, QueryList, Renderer2 } from '@angular/core';
import { NbStatusService } from '../../services/status.service';
import { NbBooleanInput } from '../helpers';
import { NbComponentSize } from '../component-size';
import { NbComponentOrCustomStatus } from '../component-status';
import { NbComponentShape } from '../component-shape';
import * as i0 from "@angular/core";
export declare type NbButtonAppearance = 'filled' | 'outline' | 'ghost' | 'hero';
export declare type NbButtonProperties = Pick<NbButton, 'appearance' | 'size' | 'shape' | 'status' | 'disabled'> & Object;
export declare abstract class NbButton implements AfterContentChecked, AfterViewInit {
    protected renderer: Renderer2;
    protected hostElement: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected zone: NgZone;
    protected statusService: NbStatusService;
    /**
     * Button size, available sizes:
     * `tiny`, `small`, `medium`, `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Button status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     */
    status: NbComponentOrCustomStatus;
    /**
     * Button shapes: `rectangle`, `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Button appearance: `filled`, `outline`, `ghost`, `hero`
     */
    appearance: NbButtonAppearance;
    /**
     * Sets `filled` appearance
     */
    get filled(): boolean;
    set filled(value: boolean);
    static ngAcceptInputType_filled: NbBooleanInput;
    /**
     * Sets `outline` appearance
     */
    get outline(): boolean;
    set outline(value: boolean);
    static ngAcceptInputType_outline: NbBooleanInput;
    /**
     * Sets `ghost` appearance
     */
    get ghost(): boolean;
    set ghost(value: boolean);
    static ngAcceptInputType_ghost: NbBooleanInput;
    /**
     * If set element will fill its container
     */
    get fullWidth(): boolean;
    set fullWidth(value: boolean);
    private _fullWidth;
    static ngAcceptInputType_fullWidth: NbBooleanInput;
    /**
     * Disables the button
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    static ngAcceptInputType_disabled: NbBooleanInput;
    /**
     * Tabindex of the button.
     */
    tabIndex: number;
    get tabbable(): string;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    get rectangle(): boolean;
    get round(): boolean;
    get semiRound(): boolean;
    iconLeft: boolean;
    iconRight: boolean;
    get additionalClasses(): string[];
    icons: QueryList<ElementRef>;
    protected constructor(renderer: Renderer2, hostElement: ElementRef<HTMLElement>, cd: ChangeDetectorRef, zone: NgZone, statusService: NbStatusService);
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    /**
     * @docs-private
     **/
    updateProperties(config: Partial<NbButtonProperties>): void;
    get iconElement(): Element;
    protected get nodes(): Node[];
    protected isIconExist(node: Node): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbButton, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NbButton, never, never, { "size": "size"; "status": "status"; "shape": "shape"; "appearance": "appearance"; "filled": "filled"; "outline": "outline"; "ghost": "ghost"; "fullWidth": "fullWidth"; "disabled": "disabled"; "tabIndex": "tabIndex"; }, {}, ["icons"]>;
}
