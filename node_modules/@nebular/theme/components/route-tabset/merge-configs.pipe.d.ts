import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NbMergeConfigsPipe implements PipeTransform {
    transform<Config>(...configs: Config[]): Config;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbMergeConfigsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NbMergeConfigsPipe, "nbMergeConfigs">;
}
