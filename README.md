[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/TelegramBot/functions?utm_source=RapidAPIGitHub_TelegramFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Telegram Package
The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.
* Domain: telegram.org
* Credentials: token

## How to get credentials: 
 Just talk to [BotFather](https://telegram.me/botfather) and follow a few simple steps. 

## Telegram.setWebHook
Specify an url to receive incoming updates via an outgoing webHook.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Required: Authentication token.
| url  | String     | HTTPS url to send updates to. Use an empty string to remove webhook integration


## Telegram.getMe
Returns basic information about the bot in form of a `User` object.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Required: Authentication token.


## Telegram.getUpdates
Use this method to receive incoming updates using long polling

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Required: Authentication token.
| offset | Number     | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previouslyreceived updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.
| limit  | Number     | Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.
| timeout| Number     | Timeout in seconds for long polling.


## Telegram.sendMessage
Send text message.

| Field                | Type       | Description
|----------------------|------------|----------
| token                | credentials| Required: Authentication token.
| chatId               | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| text                 | String     | Required: Text of the message to be sent
| parseMode            | String     | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs  in your bot's message.
| disableWebPagePreview| Boolean    | Disables link previews for links in this message
| disableNotification  | Boolean    | Sends the message silently.
| replyToMessageId     | Number     | If the message is a reply, ID of the original message.
| replyMarkup          | JSON       | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```

## Telegram.forwardMessage
Forward messages of any kind.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| fromChatId         | String     | Required: Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
| messageId          | Number     | Required: Unique message identifier
| disableNotification| Boolean    | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)


## Telegram.sendPhoto
Send a photo.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| photo              | String     | Required: Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data.
| caption            | String     | Photo caption (may also be used when resending photos by file_id), 0-200 characters
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendDocument
Send a document.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| file               | String     | Required: File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new file using multipart/form-data.
| caption            | String     | File caption (may also be used when resending files by file_id), 0-200 characters
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```

## Telegram.sendSticker
Send a sticker.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| sticker            | String     | Required: Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new  one using multipart/form-data.
| caption            | String     | sticker caption (may also be used when resending stickers by file_id), 0-200 characters
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendAudio
Send a audio.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| audio              | String     | Required: Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.
| caption            | String     | Audio caption (may also be used when resending audios by file_id), 0-200 characters
| duration           | String     | Duration of the audio in seconds
| performer          | String     | Performer
| title              | String     | Track name
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendVideo
Send a video.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| video              | String     | Required: Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.
| duration           | Number     | Duration of sent video in seconds
| width              | Number     | Video width
| height             | Number     | Video height
| caption            | Number     | Video height
| caption            | String     | Video caption (may also be used when resending videos by file_id), 0-200 characters
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendVoice
Send a voice.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| voice              | String     | Required: Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.
| caption            | String     | Voice caption (may also be used when resending voices by file_id), 0-200 characters
| duration           | String     | Duration of the audio in seconds
| disableNotification| Boolean    | Sends the message silently. 
| replyToMessageId   | Number     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendLocation
Send a location.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| latitude           | Float      | Required: Latitude of location
| longitude          | Float      | Required: Longitude of location
| disableNotification| Boolean    | Sends the message silently.
| replyToMessageId   | String     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendContact
Send a contact.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| phoneNumber        | String     | Required: Contact's phone number
| firstName          | String     | Required: Contact's first name
| lastName           | String     | Contact's last name
| disableNotification| String     | Sends the message silently.
| replyToMessageId   | String     | If the message is a reply, ID of the original message
| replyMarkup        | JSON       | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendChatAction
Send a chat action.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| action| String     | Required: Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or uploadVideo for videos, record_audio or upload_audio for audio files, upload_document for general files, find_location for location data


## Telegram.getUserProfilePhotos
Send a chat action.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| userId| String     | Required: Unique identifier of the target user
| offset| String     | Sequential number of the first photo to be returned. By default, all photos are returned.
| limit | String     | Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.


## Telegram.getFile
Get file. Use this method to get basic info about a file and prepare it for downloading. Attention: link will be valid for 1 hour.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| fileId| String     | Required: File identifier to get info about


## Telegram.kickChatMember
Use this method to kick a user from a group or a supergroup. In the case of supergroups, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the group for this to work. Returns True on success.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String     | Required: Unique identifier of the target user


## Telegram.leaveChat
Use this method for your bot to leave a group, supergroup or channel. Returns True on success.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)


## Telegram.unbanChatMember
Use this method to unban a previously kicked user in a supergroup. The user will not return to the group automatically, but will be able to join via link, etc. The bot must be an administrator in the group for this to work.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String     | Required: Unique identifier of the target user


## Telegram.getChat
Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)


## Telegram.getChatAdministrators
Returns the administrators in a chat in form of an Array of `ChatMember` objects.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)


## Telegram.getChatMembersCount
Use this method to get the number of members in a chat.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)


## Telegram.getChatMember
Use this method to get information about a member of a chat. Returns a ChatMember object on success.

| Field | Type       | Description
|-------|------------|----------
| token | credentials| Required: Authentication token.
| chatId| String     | Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String     | Required: Unique identifier of the target member.


## Telegram.editMessageText
Use this method to edit text and game messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

| Field                | Type       | Description
|----------------------|------------|----------
| token                | credentials| Required: Authentication token.
| chatId               | String     | Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| messageId            | Number     | Required if inline_message_id is not specified. Unique identifier of the sent message
| text                 | String     |  Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message.
| parseMode            | String     | New text of the message.
| parseMode            | String     | New text of the message.
| disableWebPagePreview| JSON       | Disables link previews for links in this message.
| replyMarkup          | JSON       | A JSON-serialized object for an inline keyboard.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.editMessageCaption
Use this method to edit captions of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Required: Authentication token.
| chatId         | String     | Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| messageId      | Number     | Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String     | Required if chat_id and message_id are not specified. Identifier of the inline message
| caption        | String     | New caption of the message
| replyMarkup    | JSON       | A JSON-serialized object for an inline keyboard.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.sendGame
Use this method to send a game. On success, the sent Message is returned.

| Field              | Type       | Description
|--------------------|------------|----------
| token              | credentials| Required: Authentication token.
| chatId             | String     | Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| gameShortName      | String     | Required: Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
| disableNotification| Boolean    | Sends the message silently.
| replyToMessageId   | Number     | If the message is a reply, ID of the original message.
| replyMarkup        | JSON       | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

`replyMarkup` example:
```json
{
	keyboard: [
  		['RapidAPI ❤']]
}
```
## Telegram.getGameHighScores
Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an Array of GameHighScore objects.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Required: Authentication token.
| userId         | String     | Required: Target user id
| chatId         | String     | Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| messageId      | Number     | Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String     | Required if chat_id and message_id are not specified. Identifier of the inline message


## Telegram.getWebhookInfo
Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.

| Field               | Type       | Description
|---------------------|------------|----------
| token               | credentials| Required: Authentication token.
| url                 | String     | Webhook URL, may be empty if webhook is not set up
| hasCustomCertificate| Boolean    | True, if a custom certificate was provided for webhook certificate checks
| pendingUpdateCount  | Number     | Number of updates awaiting delivery
| lastErrorDate       | Number     | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
| lastErrorMessage    | String     | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook

