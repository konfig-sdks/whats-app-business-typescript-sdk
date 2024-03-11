/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Audio } from './audio';
import { Contact } from './contact';
import { Document } from './document';
import { Hsm } from './hsm';
import { Image } from './image';
import { Location } from './location';
import { MessageType } from './message-type';
import { Text } from './text';
import { Video } from './video';

/**
 * 
 * @export
 * @interface SendMessageRequestBody
 */
export interface SendMessageRequestBody {
    /**
     * 
     * @type {Audio}
     * @memberof SendMessageRequestBody
     */
    'audio'?: Audio;
    /**
     * 
     * @type {Array<Contact>}
     * @memberof SendMessageRequestBody
     */
    'contacts'?: Array<Contact>;
    /**
     * 
     * @type {Document}
     * @memberof SendMessageRequestBody
     */
    'document'?: Document;
    /**
     * 
     * @type {Hsm}
     * @memberof SendMessageRequestBody
     */
    'hsm'?: Hsm;
    /**
     * 
     * @type {Image}
     * @memberof SendMessageRequestBody
     */
    'image'?: Image;
    /**
     * 
     * @type {Location}
     * @memberof SendMessageRequestBody
     */
    'location'?: Location;
    /**
     * Specifying preview_url in the request is optional when not including a URL in your message. To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.
     * @type {boolean}
     * @memberof SendMessageRequestBody
     */
    'preview_url'?: boolean;
    /**
     * Determines whether the recipient is an individual or a group Specifying recipient_type in the request is optional when the value is individual. However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.
     * @type {string}
     * @memberof SendMessageRequestBody
     */
    'recipient_type'?: SendMessageRequestBodyRecipientTypeEnum;
    /**
     * 
     * @type {Text}
     * @memberof SendMessageRequestBody
     */
    'text'?: Text;
    /**
     * When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.
     * @type {string}
     * @memberof SendMessageRequestBody
     */
    'to': string;
    /**
     * 
     * @type {object}
     * @memberof SendMessageRequestBody
     */
    'ttl'?: object;
    /**
     * type of the message
     * @type {MessageType}
     * @memberof SendMessageRequestBody
     */
    'type'?: MessageType;
    /**
     * 
     * @type {Video}
     * @memberof SendMessageRequestBody
     */
    'video'?: Video;
}

type SendMessageRequestBodyRecipientTypeEnum = 'individual' | 'group'

