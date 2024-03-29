/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Provider } from './provider';

/**
 * 
 * @export
 * @interface DocumentByProvider
 */
export interface DocumentByProvider {
    /**
     * 
     * @type {string}
     * @memberof DocumentByProvider
     */
    'caption': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentByProvider
     */
    'filename': string;
    /**
     * 
     * @type {string}
     * @memberof DocumentByProvider
     */
    'link': string;
    /**
     * 
     * @type {Provider}
     * @memberof DocumentByProvider
     */
    'provider': Provider;
}

