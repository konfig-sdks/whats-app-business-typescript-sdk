/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Meta } from './meta';

/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * Only returned with a failed request. Contains an array of error objects that are present when there is an error. 
     * @type {Array<Error>}
     * @memberof Response
     */
    'errors'?: Array<Error>;
    /**
     * 
     * @type {Meta}
     * @memberof Response
     */
    'meta'?: Meta;
}

