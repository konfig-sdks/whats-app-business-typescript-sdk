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
 * @interface WebhookVoice
 */
export interface WebhookVoice {
    /**
     * Optional. Only present if specified.
     * @type {string}
     * @memberof WebhookVoice
     */
    'caption'?: string;
    /**
     * Absolute filename and location on media volume. This parameter is deprecated.
     * @type {string}
     * @memberof WebhookVoice
     * @deprecated
     */
    'file'?: string;
    /**
     * ID of the media. Can be used to delete the media if stored locally on the client.
     * @type {string}
     * @memberof WebhookVoice
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookVoice
     */
    'link'?: string;
    /**
     * Mime type of media
     * @type {string}
     * @memberof WebhookVoice
     */
    'mime_type'?: string;
    /**
     * Checksum
     * @type {string}
     * @memberof WebhookVoice
     */
    'sha256'?: string;
}
