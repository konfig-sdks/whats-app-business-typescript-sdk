/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * City name
     * @type {string}
     * @memberof Address
     */
    'city': string;
    /**
     * Full country name
     * @type {string}
     * @memberof Address
     */
    'country': string;
    /**
     * Two-letter country abbreviation
     * @type {string}
     * @memberof Address
     */
    'country_code': string;
    /**
     * State abbreviation
     * @type {string}
     * @memberof Address
     */
    'state': string;
    /**
     * Street number and name
     * @type {string}
     * @memberof Address
     */
    'street': string;
    /**
     * Standard Values: HOME, WORK
     * @type {string}
     * @memberof Address
     */
    'type': string;
    /**
     * ZIP code
     * @type {string}
     * @memberof Address
     */
    'zip': string;
}

