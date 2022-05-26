/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ComponentFactoryResolver } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainerComponent, NbRenderableContainer } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
/**
 * Overlay container.
 * Renders provided content inside.
 *
 * @styles
 *
 * popover-text-color:
 * popover-text-font-family:
 * popover-text-font-size:
 * popover-text-font-weight:
 * popover-text-line-height:
 * popover-background-color:
 * popover-border-width:
 * popover-border-color:
 * popover-border-radius:
 * popover-shadow:
 * popover-arrow-size:
 * popover-padding:
 * */
export declare class NbPopoverComponent extends NbPositionedContainerComponent implements NbRenderableContainer {
    overlayContainer: NbOverlayContainerComponent;
    content: any;
    context: Object;
    cfr: ComponentFactoryResolver;
    renderContent(): void;
    protected detachContent(): void;
    protected attachContent(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    protected attachString(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbPopoverComponent, "nb-popover", never, { "content": "content"; "context": "context"; "cfr": "cfr"; }, {}, never, never>;
}
