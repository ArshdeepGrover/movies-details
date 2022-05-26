import { NbDateService } from './date.service';
import * as i0 from "@angular/core";
export declare class NbCalendarMonthModelService<D> {
    protected dateService: NbDateService<D>;
    constructor(dateService: NbDateService<D>);
    createDaysGrid(activeMonth: D, boundingMonth?: boolean): D[][];
    private createDates;
    private withBoundingMonths;
    private addPrevBoundingMonth;
    private addNextBoundingMonth;
    private createPrevBoundingDays;
    private createNextBoundingDays;
    private getStartOfWeekDayDiff;
    private getWeekStartDiff;
    private isShouldAddPrevBoundingMonth;
    private isShouldAddNextBoundingMonth;
    private createDateRangeForMonth;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbCalendarMonthModelService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbCalendarMonthModelService<any>>;
}
