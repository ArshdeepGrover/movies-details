import { NbComponentOrCustomStatus, NbComponentStatus } from '../components/component-status';
import * as i0 from "@angular/core";
export declare class NbStatusService {
    readonly coreStatuses: NbComponentStatus[];
    isCoreStatus(status: NbComponentOrCustomStatus): boolean;
    isCustomStatus(status: NbComponentOrCustomStatus): boolean;
    getStatusClass(status: NbComponentOrCustomStatus): string | undefined;
    protected isValidStatusString(status: NbComponentOrCustomStatus): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbStatusService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbStatusService>;
}
