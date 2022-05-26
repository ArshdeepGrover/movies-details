import { NbComponentOrCustomStatus } from '../component-status';
import { NbComponentSize } from '../component-size';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class NbFormFieldControl {
    status$: Observable<NbComponentOrCustomStatus>;
    size$: Observable<NbComponentSize>;
    focused$: Observable<boolean>;
    disabled$: Observable<boolean>;
    fullWidth$: Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldControl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFormFieldControl>;
}
export declare class NbFormFieldControlConfig {
    supportsPrefix: boolean;
    supportsSuffix: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFormFieldControlConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFormFieldControlConfig>;
}
export interface NbFormControlState {
    status: NbComponentOrCustomStatus;
    size: NbComponentSize;
    fullWidth: boolean;
    focused: boolean;
    disabled: boolean;
}
