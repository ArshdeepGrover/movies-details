import { NbDateService } from './date.service';
import * as i0 from "@angular/core";
export declare class NbCalendarYearModelService<D> {
    protected dateService: NbDateService<D>;
    protected yearsInView: number;
    protected yearsInRow: number;
    constructor(dateService: NbDateService<D>);
    getYearsInView(): number;
    getYearsInRow(): number;
    getViewYears(viewYear: D): D[][];
    protected copyWithYear(year: number, date: D): D;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarYearModelService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbCalendarYearModelService<any>>;
}
