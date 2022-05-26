import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injector, ViewContainerRef } from '@angular/core';
import { NbPosition } from './overlay-position';
import { NbComponentPortal, NbPortalInjector, NbPortalOutletDirective, NbTemplatePortal } from './mapping';
import * as i0 from "@angular/core";
export interface NbRenderableContainer {
    /**
     * A renderContent method renders content with provided context.
     * Naturally, this job has to be done by ngOnChanges lifecycle hook, but
     * ngOnChanges hook will be triggered only if we update content or context properties
     * through template property binding syntax. But in our case we're updating these properties programmatically.
     * */
    renderContent(): any;
}
export declare class NbPositionedContainerComponent {
    position: NbPosition;
    get top(): boolean;
    get topStart(): boolean;
    get topEnd(): boolean;
    get right(): boolean;
    get endTop(): boolean;
    get endBottom(): boolean;
    get bottom(): boolean;
    get bottomStart(): boolean;
    get bottomEnd(): boolean;
    get left(): boolean;
    get startTop(): boolean;
    get startBottom(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPositionedContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbPositionedContainerComponent, "ng-component", never, { "position": "position"; }, {}, never, never>;
}
export declare class NbOverlayContainerComponent {
    protected vcr: ViewContainerRef;
    protected injector: Injector;
    private changeDetectorRef;
    portalOutlet: NbPortalOutletDirective;
    isAttached: boolean;
    content: string;
    constructor(vcr: ViewContainerRef, injector: Injector, changeDetectorRef: ChangeDetectorRef);
    get isStringContent(): boolean;
    attachComponentPortal<T>(portal: NbComponentPortal<T>, context?: Object): ComponentRef<T>;
    attachTemplatePortal<C>(portal: NbTemplatePortal<C>): EmbeddedViewRef<C>;
    attachStringContent(content: string): void;
    detach(): void;
    protected createChildInjector(cfr: ComponentFactoryResolver): NbPortalInjector;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbOverlayContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbOverlayContainerComponent, "nb-overlay-container", never, {}, {}, never, never>;
}
