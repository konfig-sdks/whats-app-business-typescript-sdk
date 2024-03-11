/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Date/time by component
 * @export
 * @interface DateTimeComponent
 */
export interface DateTimeComponent {
    /**
     * The day of month
     * @type {number}
     * @memberof DateTimeComponent
     */
    'day_of_month'?: number;
    /**
     * Both strings and numbers are accepted. If different from the value derived from the date (if specified), use the derived value.
     * @type {number}
     * @memberof DateTimeComponent
     */
    'day_of_week'?: DateTimeComponentDayOfWeekEnum;
    /**
     * The hour
     * @type {number}
     * @memberof DateTimeComponent
     */
    'hour'?: number;
    /**
     * The minute
     * @type {number}
     * @memberof DateTimeComponent
     */
    'minute'?: number;
    /**
     * The month
     * @type {number}
     * @memberof DateTimeComponent
     */
    'month'?: number;
    /**
     * The year
     * @type {number}
     * @memberof DateTimeComponent
     */
    'year'?: number;
}

type DateTimeComponentDayOfWeekEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7


