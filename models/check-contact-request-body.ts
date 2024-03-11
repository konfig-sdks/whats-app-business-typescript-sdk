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
 * @interface CheckContactRequestBody
 */
export interface CheckContactRequestBody {
    /**
     * Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).
     * @type {string}
     * @memberof CheckContactRequestBody
     */
    'blocking'?: CheckContactRequestBodyBlockingEnum;
    /**
     * Array of contact phone numbers. The numbers can be in any standard telephone number format.
     * @type {Array<string>}
     * @memberof CheckContactRequestBody
     */
    'contacts': Array<string>;
}

type CheckContactRequestBodyBlockingEnum = 'no_wait' | 'wait'


