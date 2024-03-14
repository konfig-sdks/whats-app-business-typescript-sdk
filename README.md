<div align="center">

[![Visit Whatsapp](./header.png)](https://developers.facebook.com&#x2F;docs&#x2F;whatsapp)

# [Whatsapp](https://developers.facebook.com&#x2F;docs&#x2F;whatsapp)<a id="whatsapp"></a>

See https://developers.facebook.com/docs/whatsapp

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`whatsappbusiness.application.getSettings`](#whatsappbusinessapplicationgetsettings)
  * [`whatsappbusiness.application.listMediaProviders`](#whatsappbusinessapplicationlistmediaproviders)
  * [`whatsappbusiness.application.removeProvider`](#whatsappbusinessapplicationremoveprovider)
  * [`whatsappbusiness.application.resetSettings`](#whatsappbusinessapplicationresetsettings)
  * [`whatsappbusiness.application.setShards`](#whatsappbusinessapplicationsetshards)
  * [`whatsappbusiness.application.updateMediaProviders`](#whatsappbusinessapplicationupdatemediaproviders)
  * [`whatsappbusiness.application.updateSettings`](#whatsappbusinessapplicationupdatesettings)
  * [`whatsappbusiness.backupRestore.settingsPost`](#whatsappbusinessbackuprestoresettingspost)
  * [`whatsappbusiness.backupRestore.settingsPost_0`](#whatsappbusinessbackuprestoresettingspost_0)
  * [`whatsappbusiness.businessProfile.get`](#whatsappbusinessbusinessprofileget)
  * [`whatsappbusiness.businessProfile.update`](#whatsappbusinessbusinessprofileupdate)
  * [`whatsappbusiness.certificates.deleteWebhookCa`](#whatsappbusinesscertificatesdeletewebhookca)
  * [`whatsappbusiness.certificates.downloadCaCertificate`](#whatsappbusinesscertificatesdownloadcacertificate)
  * [`whatsappbusiness.certificates.downloadWebhookCaCertificate`](#whatsappbusinesscertificatesdownloadwebhookcacertificate)
  * [`whatsappbusiness.certificates.uploadExternalCertificate`](#whatsappbusinesscertificatesuploadexternalcertificate)
  * [`whatsappbusiness.certificates.uploadWebhookCaCertificate`](#whatsappbusinesscertificatesuploadwebhookcacertificate)
  * [`whatsappbusiness.contacts.createContact`](#whatsappbusinesscontactscreatecontact)
  * [`whatsappbusiness.groups.createGroup`](#whatsappbusinessgroupscreategroup)
  * [`whatsappbusiness.groups.deleteGroupIcon`](#whatsappbusinessgroupsdeletegroupicon)
  * [`whatsappbusiness.groups.deleteInvite`](#whatsappbusinessgroupsdeleteinvite)
  * [`whatsappbusiness.groups.demoteAdmin`](#whatsappbusinessgroupsdemoteadmin)
  * [`whatsappbusiness.groups.getAll`](#whatsappbusinessgroupsgetall)
  * [`whatsappbusiness.groups.getIconBinary`](#whatsappbusinessgroupsgeticonbinary)
  * [`whatsappbusiness.groups.getInfo`](#whatsappbusinessgroupsgetinfo)
  * [`whatsappbusiness.groups.getInviteDetails`](#whatsappbusinessgroupsgetinvitedetails)
  * [`whatsappbusiness.groups.leaveGroup`](#whatsappbusinessgroupsleavegroup)
  * [`whatsappbusiness.groups.promoteToAdmin`](#whatsappbusinessgroupspromotetoadmin)
  * [`whatsappbusiness.groups.removeParticipant`](#whatsappbusinessgroupsremoveparticipant)
  * [`whatsappbusiness.groups.setGroupIcon`](#whatsappbusinessgroupssetgroupicon)
  * [`whatsappbusiness.groups.updateInfo`](#whatsappbusinessgroupsupdateinfo)
  * [`whatsappbusiness.health.checkStatus`](#whatsappbusinesshealthcheckstatus)
  * [`whatsappbusiness.health.getAppStats`](#whatsappbusinesshealthgetappstats)
  * [`whatsappbusiness.health.getDbStats`](#whatsappbusinesshealthgetdbstats)
  * [`whatsappbusiness.health.getMetricsData`](#whatsappbusinesshealthgetmetricsdata)
  * [`whatsappbusiness.health.getSupportInfo`](#whatsappbusinesshealthgetsupportinfo)
  * [`whatsappbusiness.media.download`](#whatsappbusinessmediadownload)
  * [`whatsappbusiness.media.removeMedia`](#whatsappbusinessmediaremovemedia)
  * [`whatsappbusiness.media.uploadMedia`](#whatsappbusinessmediauploadmedia)
  * [`whatsappbusiness.messages.markAsRead`](#whatsappbusinessmessagesmarkasread)
  * [`whatsappbusiness.messages.sendMessage`](#whatsappbusinessmessagessendmessage)
  * [`whatsappbusiness.profile.getAbout`](#whatsappbusinessprofilegetabout)
  * [`whatsappbusiness.profile.getPhoto`](#whatsappbusinessprofilegetphoto)
  * [`whatsappbusiness.profile.removePhoto`](#whatsappbusinessprofileremovephoto)
  * [`whatsappbusiness.profile.updateAbout`](#whatsappbusinessprofileupdateabout)
  * [`whatsappbusiness.profile.updatePhoto`](#whatsappbusinessprofileupdatephoto)
  * [`whatsappbusiness.registration.requestCode`](#whatsappbusinessregistrationrequestcode)
  * [`whatsappbusiness.registration.verifyAccount`](#whatsappbusinessregistrationverifyaccount)
  * [`whatsappbusiness.twoStepVerification.disable`](#whatsappbusinesstwostepverificationdisable)
  * [`whatsappbusiness.twoStepVerification.enableAccount`](#whatsappbusinesstwostepverificationenableaccount)
  * [`whatsappbusiness.users.createUser`](#whatsappbusinessuserscreateuser)
  * [`whatsappbusiness.users.getByUsername`](#whatsappbusinessusersgetbyusername)
  * [`whatsappbusiness.users.performLogin`](#whatsappbusinessusersperformlogin)
  * [`whatsappbusiness.users.performLogout`](#whatsappbusinessusersperformlogout)
  * [`whatsappbusiness.users.removeUser`](#whatsappbusinessusersremoveuser)
  * [`whatsappbusiness.users.updateUser`](#whatsappbusinessusersupdateuser)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=WhatsApp&%20serviceName=Business%20&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { WhatsAppBusiness } from "whats-app-business-typescript-sdk";

const whatsappbusiness = new WhatsAppBusiness({
  // Defining the base path is optional and defaults to http://whatsapp.local
  // basePath: "http://whatsapp.local",
  accessToken: "ACCESS_TOKEN",
});

const getSettingsResponse = await whatsappbusiness.application.getSettings();

console.log(getSettingsResponse);
```

## Reference<a id="reference"></a>


### `whatsappbusiness.application.getSettings`<a id="whatsappbusinessapplicationgetsettings"></a>

Get-Application-Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await whatsappbusiness.application.getSettings();
```

#### 🔄 Return<a id="🔄-return"></a>

[ApplicationSettings](./models/application-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.listMediaProviders`<a id="whatsappbusinessapplicationlistmediaproviders"></a>

Get-Media-Providers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMediaProvidersResponse =
  await whatsappbusiness.application.listMediaProviders();
```

#### 🔄 Return<a id="🔄-return"></a>

[GetMediaProvidersResponse](./models/get-media-providers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application/media/providers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.removeProvider`<a id="whatsappbusinessapplicationremoveprovider"></a>

Delete-Media-Providers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeProviderResponse =
  await whatsappbusiness.application.removeProvider({
    providerName: "providerName_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerName: `string`<a id="providername-string"></a>

Provider Name

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application/media/providers/{ProviderName}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.resetSettings`<a id="whatsappbusinessapplicationresetsettings"></a>

Reset-Application-Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetSettingsResponse =
  await whatsappbusiness.application.resetSettings();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.setShards`<a id="whatsappbusinessapplicationsetshards"></a>

Set-Shards

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setShardsResponse = await whatsappbusiness.application.setShards({
  cc: "<Country Code>",
  phone_number: "<Phone Number>",
  pin: "<Two-Step PIN>",
  shards: 32,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cc: `string`<a id="cc-string"></a>

##### phone_number: `string`<a id="phone_number-string"></a>

##### pin: `string`<a id="pin-string"></a>

##### shards: `number`<a id="shards-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/shards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.updateMediaProviders`<a id="whatsappbusinessapplicationupdatemediaproviders"></a>

Update-Media-Providers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMediaProvidersResponse =
  await whatsappbusiness.application.updateMediaProviders([
    {
      config: { bearer: "<Bearer Auth Token>" },
      name: "<Provider Name>",
      type: "www",
    },
  ]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`MediaProvider`](./models/media-provider.ts)[]



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application/media/providers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.application.updateSettings`<a id="whatsappbusinessapplicationupdatesettings"></a>

If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSettingsResponse =
  await whatsappbusiness.application.updateSettings({
    callback_backoff_delay_ms: "3000",
    callback_persist: true,
    heartbeat_interval: 5,
    max_callback_backoff_delay_ms: "900000",
    on_call_pager: "<WA_ID of valid WhatsApp contact>",
    pass_through: true,
    sent_status: false,
    unhealthy_interval: 30,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callback_backoff_delay_ms: `string`<a id="callback_backoff_delay_ms-string"></a>

Backoff delay for a failed callback in milliseconds This setting is used to configure the amount of time the backoff delays before retrying a failed callback. The backoff delay increases linearly by this value each time a callback fails to get a HTTPS 200 OK response. The backoff delay is capped by the max_callback_backoff_delay_ms setting.

##### callback_persist: `boolean`<a id="callback_persist-boolean"></a>

Stores callbacks on disk until they are successfully acknowledged by the Webhook or not. Restart required.

##### heartbeat_interval: `number`<a id="heartbeat_interval-number"></a>

Multiconnect: Interval of the Master node monitoring of Coreapp nodes in seconds

##### max_callback_backoff_delay_ms: `string`<a id="max_callback_backoff_delay_ms-string"></a>

Maximum delay for a failed callback in milliseconds

##### media: [`Media`](./models/media.ts)<a id="media-mediamodelsmediats"></a>

##### on_call_pager: `string`<a id="on_call_pager-string"></a>

Set to valid WhatsApp Group with users who wish to see alerts for critical errors and messages.

##### pass_through: `boolean`<a id="pass_through-boolean"></a>

When true, removes messages from the local database after they are delivered to or read by the recipient. When false, saves all messages on local storage until they are explicitly deleted. When messages are sent, they are stored in a local database. This database is used as the application\\\'s history. Since the business keeps its own history, you can specify whether you want message pass_through or not. Restart required.

##### sent_status: `boolean`<a id="sent_status-boolean"></a>

Receive a notification that a message is sent to server. When true, you will receive a message indicating that a message has been sent. If false (default), you will not receive notification.

##### unhealthy_interval: `number`<a id="unhealthy_interval-number"></a>

Multiconnect: Maximum amount of seconds a Master node waits for a Coreapp node to respond to a heartbeat before considering it unhealthy and starting the failover process.

##### webhooks: [`Webhooks`](./models/webhooks.ts)<a id="webhooks-webhooksmodelswebhooksts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Response](./models/response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/application` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.backupRestore.settingsPost`<a id="whatsappbusinessbackuprestoresettingspost"></a>

Backup-Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const settingsPostResponse = await whatsappbusiness.backupRestore.settingsPost({
  password: "<Password for Backup>",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

Used to encrypt backup data for security

#### 🔄 Return<a id="🔄-return"></a>

[BackupSettingsResponse](./models/backup-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/backup` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.backupRestore.settingsPost_0`<a id="whatsappbusinessbackuprestoresettingspost_0"></a>

Restore-Settings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const settingsPost_0Response =
  await whatsappbusiness.backupRestore.settingsPost_0({
    data: "<Data to Restore, from Backup API>",
    password: "<Password for Backup>",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: `string`<a id="data-string"></a>

The data that was returned by the /v1/settings/backup API call

##### password: `string`<a id="password-string"></a>

The password you used in the /v1/settings/backup API call to encrypt the backup data

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/restore` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.businessProfile.get`<a id="whatsappbusinessbusinessprofileget"></a>

Get-Business-Profile

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await whatsappbusiness.businessProfile.get();
```

#### 🔄 Return<a id="🔄-return"></a>

[GetBusinessProfileResponse](./models/get-business-profile-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/business/profile` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.businessProfile.update`<a id="whatsappbusinessbusinessprofileupdate"></a>

Update-Business-Profile

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateResponse = await whatsappbusiness.businessProfile.update({
  description: "<Business Profile Description>",
  address: "<Business Profile Address>",
  email: "<Business Profile Email>",
  vertical: "<Business Profile Vertical>",
  websites: ["websites_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Description of the business Maximum of 256 characters

##### address: `string`<a id="address-string"></a>

Address of the business Maximum of 256 characters

##### email: `string`<a id="email-string"></a>

Email address to contact the business Maximum of 128 characters

##### vertical: `string`<a id="vertical-string"></a>

Industry of the business Maximum of 128 characters

##### websites: `string`[]<a id="websites-string"></a>

URLs associated with business (e.g., website, Facebook page, Instagram) Maximum of 2 websites with a maximum of 256 characters each

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/business/profile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.certificates.deleteWebhookCa`<a id="whatsappbusinesscertificatesdeletewebhookca"></a>

Delete Webhook CA Certificate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookCaResponse =
  await whatsappbusiness.certificates.deleteWebhookCa();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/certificates/webhooks/ca` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.certificates.downloadCaCertificate`<a id="whatsappbusinesscertificatesdownloadcacertificate"></a>

Download-CA-Certificate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadCaCertificateResponse =
  await whatsappbusiness.certificates.downloadCaCertificate();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/certificates/external/ca` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.certificates.downloadWebhookCaCertificate`<a id="whatsappbusinesscertificatesdownloadwebhookcacertificate"></a>

Download Webhook CA Certificate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadWebhookCaCertificateResponse =
  await whatsappbusiness.certificates.downloadWebhookCaCertificate();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/certificates/webhooks/ca` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.certificates.uploadExternalCertificate`<a id="whatsappbusinesscertificatesuploadexternalcertificate"></a>

Upload-Certificate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadExternalCertificateResponse =
  await whatsappbusiness.certificates.uploadExternalCertificate();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/certificates/external` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.certificates.uploadWebhookCaCertificate`<a id="whatsappbusinesscertificatesuploadwebhookcacertificate"></a>

Upload Webhook CA Certificate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadWebhookCaCertificateResponse =
  await whatsappbusiness.certificates.uploadWebhookCaCertificate();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/certificates/webhooks/ca` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.contacts.createContact`<a id="whatsappbusinesscontactscreatecontact"></a>

Check-Contact

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createContactResponse = await whatsappbusiness.contacts.createContact({
  blocking: "no_wait",
  contacts: ["contacts_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contacts: `string`[]<a id="contacts-string"></a>

Array of contact phone numbers. The numbers can be in any standard telephone number format.

##### blocking: `string`<a id="blocking-string"></a>

Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).

#### 🔄 Return<a id="🔄-return"></a>

[CheckContactResponse](./models/check-contact-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.createGroup`<a id="whatsappbusinessgroupscreategroup"></a>

Create-Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createGroupResponse = await whatsappbusiness.groups.createGroup({
  subject: "<Group Subject>",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subject: `string`<a id="subject-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GroupsResponse](./models/groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.deleteGroupIcon`<a id="whatsappbusinessgroupsdeletegroupicon"></a>

Delete-Group-Icon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteGroupIconResponse = await whatsappbusiness.groups.deleteGroupIcon({
  groupId: "groupId_example",
  File: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/icon` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.deleteInvite`<a id="whatsappbusinessgroupsdeleteinvite"></a>

Delete-Group-Invite

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteInviteResponse = await whatsappbusiness.groups.deleteInvite({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/invite` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.demoteAdmin`<a id="whatsappbusinessgroupsdemoteadmin"></a>

Demote-Group-Admin

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const demoteAdminResponse = await whatsappbusiness.groups.demoteAdmin({
  groupId: "groupId_example",
  wa_ids: ["wa_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### wa_ids: `string`[]<a id="wa_ids-string"></a>

The WhatsApp IDs of the people to be added or removed as group admins

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/admins` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.getAll`<a id="whatsappbusinessgroupsgetall"></a>

Get-All-Groups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await whatsappbusiness.groups.getAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[GroupsResponse](./models/groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.getIconBinary`<a id="whatsappbusinessgroupsgeticonbinary"></a>

Get-Group-Icon-Binary

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIconBinaryResponse = await whatsappbusiness.groups.getIconBinary({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/icon` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.getInfo`<a id="whatsappbusinessgroupsgetinfo"></a>

Get-Group-Info

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await whatsappbusiness.groups.getInfo({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[GroupResponse](./models/group-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.getInviteDetails`<a id="whatsappbusinessgroupsgetinvitedetails"></a>

Get-Group-Invite

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInviteDetailsResponse = await whatsappbusiness.groups.getInviteDetails(
  {
    groupId: "groupId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[GroupInviteResponse](./models/group-invite-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/invite` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.leaveGroup`<a id="whatsappbusinessgroupsleavegroup"></a>

Leave-Group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const leaveGroupResponse = await whatsappbusiness.groups.leaveGroup({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/leave` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.promoteToAdmin`<a id="whatsappbusinessgroupspromotetoadmin"></a>

Promote-To-Group-Admin

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const promoteToAdminResponse = await whatsappbusiness.groups.promoteToAdmin({
  groupId: "groupId_example",
  wa_ids: ["wa_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### wa_ids: `string`[]<a id="wa_ids-string"></a>

The WhatsApp IDs of the people to be added or removed as group admins

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/admins` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.removeParticipant`<a id="whatsappbusinessgroupsremoveparticipant"></a>

Remove-Group-Participant

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeParticipantResponse =
  await whatsappbusiness.groups.removeParticipant({
    groupId: "groupId_example",
    wa_ids: ["wa_ids_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### wa_ids: `string`[]<a id="wa_ids-string"></a>



##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/participants` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.setGroupIcon`<a id="whatsappbusinessgroupssetgroupicon"></a>

Set-Group-Icon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setGroupIconResponse = await whatsappbusiness.groups.setGroupIcon({
  groupId: "groupId_example",
  File: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>



##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}/icon` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.groups.updateInfo`<a id="whatsappbusinessgroupsupdateinfo"></a>

Update-Group-Info

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInfoResponse = await whatsappbusiness.groups.updateInfo({
  groupId: "groupId_example",
  subject: "<New Group Subject>",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subject: `string`<a id="subject-string"></a>

##### groupId: `string`<a id="groupid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{GroupId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.health.checkStatus`<a id="whatsappbusinesshealthcheckstatus"></a>

Check-Health

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStatusResponse = await whatsappbusiness.health.checkStatus();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.health.getAppStats`<a id="whatsappbusinesshealthgetappstats"></a>

Get-App-Stats

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAppStatsResponse = await whatsappbusiness.health.getAppStats({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### format: `string`<a id="format-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/app` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.health.getDbStats`<a id="whatsappbusinesshealthgetdbstats"></a>

Get-DB-Stats

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDbStatsResponse = await whatsappbusiness.health.getDbStats({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### format: `string`<a id="format-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/db` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.health.getMetricsData`<a id="whatsappbusinesshealthgetmetricsdata"></a>

Get-Metrics (since v2.21.3)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetricsDataResponse = await whatsappbusiness.health.getMetricsData({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### format: `string`<a id="format-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.health.getSupportInfo`<a id="whatsappbusinesshealthgetsupportinfo"></a>

Get-Support-Info

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSupportInfoResponse = await whatsappbusiness.health.getSupportInfo();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/support` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.media.download`<a id="whatsappbusinessmediadownload"></a>

Download-Media

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadResponse = await whatsappbusiness.media.download({
  mediaId: "mediaId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mediaId: `string`<a id="mediaid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media/{MediaId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.media.removeMedia`<a id="whatsappbusinessmediaremovemedia"></a>

Delete-Media

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMediaResponse = await whatsappbusiness.media.removeMedia({
  mediaId: "mediaId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mediaId: `string`<a id="mediaid-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media/{MediaId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.media.uploadMedia`<a id="whatsappbusinessmediauploadmedia"></a>

Upload-Media

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadMediaResponse = await whatsappbusiness.media.uploadMedia();
```

#### 🔄 Return<a id="🔄-return"></a>

[UploadMediaResponse](./models/upload-media-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.messages.markAsRead`<a id="whatsappbusinessmessagesmarkasread"></a>

Mark-Message-As-Read

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markAsReadResponse = await whatsappbusiness.messages.markAsRead({
  messageID: "messageID_example",
  status: "read",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

##### messageID: `string`<a id="messageid-string"></a>

Message ID from Webhook

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{MessageID}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.messages.sendMessage`<a id="whatsappbusinessmessagessendmessage"></a>

Send-Message

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendMessageResponse = await whatsappbusiness.messages.sendMessage({
  preview_url: true,
  recipient_type: "individual",
  to: "{whatsapp-id}",
  type: "text",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### to: `string`<a id="to-string"></a>

When recipient_type is individual, this field is the WhatsApp ID (phone number) returned from contacts endpoint. When recipient_type is group, this field is the WhatsApp group ID.

##### audio: [`Audio`](./models/audio.ts)<a id="audio-audiomodelsaudiots"></a>

##### contacts: [`Contact`](./models/contact.ts)[]<a id="contacts-contactmodelscontactts"></a>



##### document: [`Document`](./models/document.ts)<a id="document-documentmodelsdocumentts"></a>

##### hsm: [`Hsm`](./models/hsm.ts)<a id="hsm-hsmmodelshsmts"></a>

##### image: [`Image`](./models/image.ts)<a id="image-imagemodelsimagets"></a>

##### location: [`Location`](./models/location.ts)<a id="location-locationmodelslocationts"></a>

##### preview_url: `boolean`<a id="preview_url-boolean"></a>

Specifying preview_url in the request is optional when not including a URL in your message. To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://. For more information, see the Sending URLs in Text Messages section.

##### recipient_type: `string`<a id="recipient_type-string"></a>

Determines whether the recipient is an individual or a group Specifying recipient_type in the request is optional when the value is individual. However, recipient_type is required when using group. If sending a text message to a group, see the Sending Group Messages documentation.

##### text: [`Text`](./models/text.ts)<a id="text-textmodelstextts"></a>

##### ttl: `object`<a id="ttl-object"></a>

##### type: [`MessageType`](./models/message-type.ts)<a id="type-messagetypemodelsmessage-typets"></a>

type of the message

##### video: [`Video`](./models/video.ts)<a id="video-videomodelsvideots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MessageResponse](./models/message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.profile.getAbout`<a id="whatsappbusinessprofilegetabout"></a>

Get-Profile-About

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAboutResponse = await whatsappbusiness.profile.getAbout();
```

#### 🔄 Return<a id="🔄-return"></a>

[GetProfileAboutResponse](./models/get-profile-about-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/profile/about` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.profile.getPhoto`<a id="whatsappbusinessprofilegetphoto"></a>

Get-Profile-Photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhotoResponse = await whatsappbusiness.profile.getPhoto({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### format: `string`<a id="format-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[GetProfilePhotoResponse](./models/get-profile-photo-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/profile/photo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.profile.removePhoto`<a id="whatsappbusinessprofileremovephoto"></a>

Delete-Profile-Photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePhotoResponse = await whatsappbusiness.profile.removePhoto();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/profile/photo` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.profile.updateAbout`<a id="whatsappbusinessprofileupdateabout"></a>

Update-Profile-About

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAboutResponse = await whatsappbusiness.profile.updateAbout({
  text: "your-profile-about-text",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Text to display in your profile\\\'s About section The max length for the string is 139 characters.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/profile/about` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.profile.updatePhoto`<a id="whatsappbusinessprofileupdatephoto"></a>

Update-Profile-Photo

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhotoResponse = await whatsappbusiness.profile.updatePhoto({
  File: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/profile/photo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.registration.requestCode`<a id="whatsappbusinessregistrationrequestcode"></a>

Request-Code

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestCodeResponse = await whatsappbusiness.registration.requestCode({
  cc: "<Country Code>",
  cert: "<Valid Cert from Business Manager>",
  method: "< sms | voice >",
  phone_number: "<Phone Number>",
  pin: "<Two-Step Verification PIN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cc: `string`<a id="cc-string"></a>

Numerical country code for the phone number you are registering

##### cert: `string`<a id="cert-string"></a>

Base64-encoded Verified Name certificate

##### method: `string`<a id="method-string"></a>

Method of receiving your registration code

##### phone_number: `string`<a id="phone_number-string"></a>

Phone number you are registering, without the country code or plus symbol (+)

##### pin: `string`<a id="pin-string"></a>

Existing 6-digit PIN — This is only required when two-factor verification is enabled on this account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.registration.verifyAccount`<a id="whatsappbusinessregistrationverifyaccount"></a>

Register-Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAccountResponse = await whatsappbusiness.registration.verifyAccount(
  {
    code: "your-registration-code-received-by-sms-or-voice-call",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.twoStepVerification.disable`<a id="whatsappbusinesstwostepverificationdisable"></a>

Disable-Two-Step

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disableResponse = await whatsappbusiness.twoStepVerification.disable();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/account/two-step` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.twoStepVerification.enableAccount`<a id="whatsappbusinesstwostepverificationenableaccount"></a>

Enable-Two-Step

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enableAccountResponse =
  await whatsappbusiness.twoStepVerification.enableAccount({
    pin: "your-6-digit-pin",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pin: `string`<a id="pin-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/settings/account/two-step` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.createUser`<a id="whatsappbusinessuserscreateuser"></a>

Create-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserResponse = await whatsappbusiness.users.createUser({
  password: "password",
  username: "username",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

username

##### username: `string`<a id="username-string"></a>

password

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.getByUsername`<a id="whatsappbusinessusersgetbyusername"></a>

Get-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUsernameResponse = await whatsappbusiness.users.getByUsername({
  userUsername: "userUsername_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userUsername: `string`<a id="userusername-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[DetailedUserResponse](./models/detailed-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{UserUsername}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.performLogin`<a id="whatsappbusinessusersperformlogin"></a>

Login-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const performLoginResponse = await whatsappbusiness.users.performLogin({
  new_password: "<New Admin Password>",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### new_password: `string`<a id="new_password-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserLoginResponse](./models/user-login-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.performLogout`<a id="whatsappbusinessusersperformlogout"></a>

Logout-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const performLogoutResponse = await whatsappbusiness.users.performLogout();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/logout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.removeUser`<a id="whatsappbusinessusersremoveuser"></a>

Delete-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserResponse = await whatsappbusiness.users.removeUser({
  userUsername: "userUsername_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userUsername: `string`<a id="userusername-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{UserUsername}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `whatsappbusiness.users.updateUser`<a id="whatsappbusinessusersupdateuser"></a>

Update-User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserResponse = await whatsappbusiness.users.updateUser({
  userUsername: "userUsername_example",
  password: "New Password",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

password

##### userUsername: `string`<a id="userusername-string"></a>



#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{UserUsername}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
