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
 * @interface Language
 */
export interface Language {
    /**
     * The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
     * @type {string}
     * @memberof Language
     */
    'code': string;
    /**
     * The language policy the message should follow
     * @type {string}
     * @memberof Language
     */
    'policy': LanguagePolicyEnum;
}

type LanguagePolicyEnum = 'fallback' | 'deterministic'


