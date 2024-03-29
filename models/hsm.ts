/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Language } from './language';
import { LocalizableParam } from './localizable-param';

/**
 * The containing element for the message content — Indicates that the message is highly structured. Parameters contained within provide the structure.
 * @export
 * @interface Hsm
 */
export interface Hsm {
    /**
     * The element name that indicates which template to use within the namespace
     * @type {string}
     * @memberof Hsm
     */
    'element_name': string;
    /**
     * 
     * @type {Language}
     * @memberof Hsm
     */
    'language': Language;
    /**
     * This field is an array of values to apply to variables in the template
     * @type {Array<LocalizableParam>}
     * @memberof Hsm
     */
    'localizable_params': Array<LocalizableParam>;
    /**
     * The namespace that will be used
     * @type {string}
     * @memberof Hsm
     */
    'namespace': string;
}

