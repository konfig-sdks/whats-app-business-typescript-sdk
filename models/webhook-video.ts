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
 * @interface WebhookVideo
 */
export interface WebhookVideo {
    /**
     * Optional. Only present if specified.
     * @type {string}
     * @memberof WebhookVideo
     */
    'caption'?: string;
    /**
     * Absolute filename and location on media volume. This parameter is deprecated.
     * @type {string}
     * @memberof WebhookVideo
     * @deprecated
     */
    'file'?: string;
    /**
     * ID of the media. Can be used to delete the media if stored locally on the client.
     * @type {string}
     * @memberof WebhookVideo
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookVideo
     */
    'link'?: string;
    /**
     * Mime type of media
     * @type {string}
     * @memberof WebhookVideo
     */
    'mime_type'?: string;
    /**
     * Checksum
     * @type {string}
     * @memberof WebhookVideo
     */
    'sha256'?: string;
}

