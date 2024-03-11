/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserRole } from './user-role';

/**
 * 
 * @export
 * @interface DetailedUserResponseItem
 */
export interface DetailedUserResponseItem {
    /**
     * 
     * @type {UserRole}
     * @memberof DetailedUserResponseItem
     */
    'ROLES'?: UserRole;
    /**
     * 
     * @type {string}
     * @memberof DetailedUserResponseItem
     */
    'username'?: string;
}
