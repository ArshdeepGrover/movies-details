import { NbMenuItem } from '../../components/menu/menu.service';
import { NbPositionedContainerComponent, NbRenderableContainer } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
/**
 * Context menu component used as content within NbContextMenuDirective.
 *
 * @styles
 *
 * context-menu-background-color:
 * context-menu-border-color:
 * context-menu-border-style:
 * context-menu-border-width:
 * context-menu-border-radius:
 * context-menu-text-align:
 * context-menu-min-width:
 * context-menu-max-width:
 * context-menu-shadow:
 * */
export declare class NbContextMenuComponent extends NbPositionedContainerComponent implements NbRenderableContainer {
    items: NbMenuItem[];
    tag: string;
    context: {
        items: NbMenuItem[];
        tag?: string;
    };
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbContextMenuComponent, "nb-context-menu", never, { "items": "items"; "tag": "tag"; "context": "context"; }, {}, never, never>;
}
