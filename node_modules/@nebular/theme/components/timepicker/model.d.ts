/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken } from '@angular/core';
export declare const NB_TIME_PICKER_CONFIG: InjectionToken<unknown>;
export interface NbTimepickerLocalizationConfig {
    hoursText: string;
    minutesText: string;
    secondsText: string;
    ampmText: string;
}
export declare const NB_DEFAULT_TIMEPICKER_LOCALIZATION_CONFIG: NbTimepickerLocalizationConfig;
export interface NbTimePickerConfig {
    twelveHoursFormat?: boolean;
    format?: string;
    localization?: NbTimepickerLocalizationConfig;
}
export interface NbSelectedTimeModel {
    value: string;
}
export interface NbSelectedTimePayload<D> {
    time: D;
    save?: boolean;
}
