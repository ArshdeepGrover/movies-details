import { ComponentRef } from '@angular/core';
import { NbComponentPortal } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent, NbPositionedContainerComponent } from '../cdk/overlay/overlay-container';
import * as i0 from "@angular/core";
export declare class NbDatepickerContainerComponent extends NbPositionedContainerComponent {
    overlayContainer: NbOverlayContainerComponent;
    attach<T>(portal: NbComponentPortal<T>): ComponentRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbDatepickerContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbDatepickerContainerComponent, "nb-datepicker-container", never, {}, {}, never, never>;
}
