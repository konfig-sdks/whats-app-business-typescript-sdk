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
 * @interface GroupInfo
 */
export interface GroupInfo {
    /**
     * Group administrators Lists IDs of the creator of the group and any administrators added
     * @type {Array<string>}
     * @memberof GroupInfo
     */
    'admins'?: Array<string>;
    /**
     * Group creation time
     * @type {number}
     * @memberof GroupInfo
     */
    'creation_time'?: number;
    /**
     * ID of the creator of this group
     * @type {string}
     * @memberof GroupInfo
     */
    'creator'?: string;
    /**
     * Participants of the group This is an array of all the IDs of the participants in the group. Initially, this will be the creator of the group.
     * @type {Array<string>}
     * @memberof GroupInfo
     */
    'participants'?: Array<string>;
    /**
     * Subject of the group
     * @type {string}
     * @memberof GroupInfo
     */
    'subject'?: string;
}
