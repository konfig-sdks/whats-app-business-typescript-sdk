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
 * @interface RequestCodeRequestBody
 */
export interface RequestCodeRequestBody {
    /**
     * Numerical country code for the phone number you are registering
     * @type {string}
     * @memberof RequestCodeRequestBody
     */
    'cc': string;
    /**
     * Base64-encoded Verified Name certificate
     * @type {string}
     * @memberof RequestCodeRequestBody
     */
    'cert': string;
    /**
     * Method of receiving your registration code
     * @type {string}
     * @memberof RequestCodeRequestBody
     */
    'method': RequestCodeRequestBodyMethodEnum;
    /**
     * Phone number you are registering, without the country code or plus symbol (+)
     * @type {string}
     * @memberof RequestCodeRequestBody
     */
    'phone_number': string;
    /**
     * Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.
     * @type {string}
     * @memberof RequestCodeRequestBody
     */
    'pin'?: string;
}

type RequestCodeRequestBodyMethodEnum = 'sms' | 'voice'


