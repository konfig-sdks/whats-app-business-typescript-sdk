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
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    'phone'?: string;
    /**
     * Standard Values: CELL, MAIN, IPHONE, HOME, WORK
     * @type {string}
     * @memberof Phone
     */
    'type'?: string;
    /**
     * WhatsApp ID
     * @type {string}
     * @memberof Phone
     */
    'wa_id'?: string;
}
