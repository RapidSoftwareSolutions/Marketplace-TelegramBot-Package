# Telegram Package
The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.
* Domain: telegram.org
* Credentials: token

## How to get credentials: 
 Just talk to [BotFather](https://telegram.me/botfather) and follow a few simple steps. 

## TOC: 
* [setWebHook](#setWebHook)
* [getMe](#getMe)
* [getUpdates](#getUpdates)
* [sendMessage](#sendMessage)
* [forwardMessage](#forwardMessage)
* [sendPhoto](#sendPhoto)
* [sendDocument](#sendDocument)
* [sendSticker](#sendSticker)
* [sendAudio](#sendAudio)
* [sendVideo](#sendVideo)
* [sendVoice](#sendVoice)
* [sendLocation](#sendLocation)
* [sendContact](#sendContact)
* [sendChatAction](#sendChatAction)
* [getUserProfilePhotos](#getUserProfilePhotos)
* [getFile](#getFile)
* [kickChatMember](#kickChatMember)
* [leaveChat](#leaveChat)
* [unbanChatMember](#unbanChatMember)
* [unbanChatMember](#unbanChatMember)
* [getChat](#getChat)
* [getChatAdministrators](#getChatAdministrators)
* [getChatMembersCount](#getChatMembersCount)
* [getChatMember](#getChatMember)
* [answerCallbackQuery](#answerCallbackQuery)
* [editMessageText](#editMessageText)
* [editMessageCaption](#editMessageCaption)
* [editMessageReplyMarkup](#editMessageReplyMarkup)
* [answerInlineQuery](#answerInlineQuery)
* [sendGame](#sendGame)
* [setGameScore](#setGameScore)
* [getGameHighScores](#getGameHighScores)
* [getGameHighScores](#getGameHighScores)
* [getWebhookInfo](#getWebhookInfo)
 
<a name="setWebHook"/>
## Telegram.setWebHook
Specify an url to receive incoming updates via an outgoing webHook.

| Field| Type  | Description
|------|-------|----------
| token| String| Authentication token.
| url  | String| HTTPS url to send updates to. Use an empty string to remove webhook integration

<a name="getMe"/>
## Telegram.getMe
Returns basic information about the bot in form of a `User` object.

| Field| Type  | Description
|------|-------|----------
| token| String| Authentication token

<a name="getUpdates"/>
## Telegram.getUpdates
Use this method to receive incoming updates using long polling

| Field  | Type  | Description
|--------|-------|----------
| token  | String| Authentication token
| offset | Number| Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previouslyreceived updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.
| limit  | Number| Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.
| timeout| Number| Timeout in seconds for long polling.

<a name="sendMessage"/>
## Telegram.sendMessage
Send text message.

| Field                | Type  | Description
|----------------------|-------|----------
| token                | String| Authentication token
| chatId               | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| text                 | String| Text of the message to be sent
| parseMode            | String| Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs  in your bot's message.
| disableWebPagePreview| String| Disables link previews for links in this message
| disableNotification  | String| Sends the message silently.
| replyToMessageId     | Number| If the message is a reply, ID of the original message.
| replyMarkup          | JSON  | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="forwardMessage"/>
## Telegram.forwardMessage
Forward messages of any kind.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| fromChatId         | String| Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
| disableNotification| String| Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)
| messageId          | Number| Unique message identifier

<a name="sendPhoto"/>
## Telegram.sendPhoto
Send a photo.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| photo              | String| Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data.
| caption            | String| Photo caption (may also be used when resending photos by file_id), 0-200 characters
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendDocument"/>
## Telegram.sendDocument
Send a document.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| file               | String| File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new file using multipart/form-data.
| caption            | String| File caption (may also be used when resending files by file_id), 0-200 characters
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendSticker"/>
## Telegram.sendSticker
Send a sticker.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| sticker            | String| Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new  one using multipart/form-data.
| caption            | String| sticker caption (may also be used when resending stickers by file_id), 0-200 characters
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendAudio"/>
## Telegram.sendAudio
Send a audio.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| audio              | String| Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.
| caption            | String| Audio caption (may also be used when resending audios by file_id), 0-200 characters
| duration           | String| Duration of the audio in seconds
| performer          | String| Performer
| title              | String| Track name
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendVideo"/>
## Telegram.sendVideo
Send a video.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| video              | String| Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.
| duration           | Number| Duration of sent video in seconds
| width              | Number| Video width
| height             | Number| Video height
| caption            | Number| Video height
| caption            | String| Video caption (may also be used when resending videos by file_id), 0-200 characters
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendVoice"/>
## Telegram.sendVoice
Send a voice.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| voice              | String| Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.
| caption            | String| Voice caption (may also be used when resending voices by file_id), 0-200 characters
| duration           | String| Duration of the audio in seconds
| disableNotification| Number| Sends the message silently. 
| replyToMessageId   | Number| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="sendLocation"/>
## Telegram.sendLocation
Send a location.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| latitude           | String| Latitude of location
| longitude          | String| Longitude of location
| disableNotification| String| Sends the message silently.
| replyToMessageId   | String| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.

<a name="sendContact"/>
## Telegram.sendContact
Send a contact.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| phoneNumber        | String| Contact's phone number
| firstName          | String| Contact's first name
| lastName           | String| Contact's last name
| disableNotification| String| Sends the message silently.
| replyToMessageId   | String| If the message is a reply, ID of the original message
| replyMarkup        | JSON  | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.

<a name="sendChatAction"/>
## Telegram.sendChatAction
Send a chat action.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| action| String| Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or uploadVideo for videos, record_audio or upload_audio for audio files, upload_document for general files, find_location for location data

<a name="getUserProfilePhotos"/>
## Telegram.getUserProfilePhotos
Send a chat action.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| userId| String| Unique identifier of the target user
| offset| String| Sequential number of the first photo to be returned. By default, all photos are returned.
| limit | String| Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.

<a name="getFile"/>
## Telegram.getFile
Get file. Use this method to get basic info about a file and prepare it for downloading. Attention: link will be valid for 1 hour.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| fileId| String| File identifier to get info about

<a name="kickChatMember"/>
## Telegram.kickChatMember
Method description

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String| Unique identifier of the target user

<a name="leaveChat"/>
## Telegram.leaveChat
Method description

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)

<a name="unbanChatMember"/>
## Telegram.unbanChatMember
Use this method to unban a previously kicked user in a supergroup. The user will not return to the group automatically, but will be able to join via link, etc. The bot must be an administrator in the group for this to work.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String| Unique identifier of the target user

<a name="unbanChatMember"/>
## Telegram.unbanChatMember
Use this method to unban a previously kicked user in a supergroup. The user will not return to the group automatically, but will be able to join via link, etc. The bot must be an administrator in the group for this to work.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String| Unique identifier of the target user

<a name="getChat"/>
## Telegram.getChat
Method description

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)

<a name="getChatAdministrators"/>
## Telegram.getChatAdministrators
Returns the administrators in a chat in form of an Array of `ChatMember` objects.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)

<a name="getChatMembersCount"/>
## Telegram.getChatMembersCount
Use this method to get the number of members in a chat.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)

<a name="getChatMember"/>
## Telegram.getChatMember
Use this method to get information about a member of a chat. Returns a ChatMember object on success.

| Field | Type  | Description
|-------|-------|----------
| token | String| Authentication token
| chatId| String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| userId| String| Unique identifier of the target member.

<a name="answerCallbackQuery"/>
## Telegram.answerCallbackQuery
Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| callbackQueryId| String| Unique identifier for the query to be answered.
| text           | String| If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
| showAlert      | String| If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
| url            | String| URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game – note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like telegram.me/your_bot?start=XXXX that open your bot with a parameter.

<a name="editMessageText"/>
## Telegram.editMessageText
Use this method to edit text and game messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

| Field                | Type  | Description
|----------------------|-------|----------
| token                | String| Authentication token
| chatId               | String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| messageId            | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| text                 | String|  Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message.
| parseMode            | String| New text of the message.
| parseMode            | String| New text of the message.
| disableWebPagePreview| JSON  | Disables link previews for links in this message.
| replyMarkup          | JSON  | A JSON-serialized object for an inline keyboard.

<a name="editMessageCaption"/>
## Telegram.editMessageCaption
Use this method to edit captions of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| chatId         | String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| messageId      | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String| Required if chat_id and message_id are not specified. Identifier of the inline message
| caption        | String| New caption of the message
| replyMarkup    | JSON  | A JSON-serialized object for an inline keyboard.

<a name="editMessageReplyMarkup"/>
## Telegram.editMessageReplyMarkup
Use this method to edit only the reply markup of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| chatId         | String| Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
| messageId      | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String| Required if chat_id and message_id are not specified. Identifier of the inline message
| replyMarkup    | JSON  | A JSON-serialized object for an inline keyboard.

<a name="answerInlineQuery"/>
## Telegram.answerInlineQuery
Use this method to send answers to an inline query. On success, True is returned.

| Field            | Type  | Description
|------------------|-------|----------
| token            | String| Authentication token
| inlineQueryId    | String| Unique identifier for the answered query
| results          | JSON  | A JSON-serialized array of results for the inline query
| cacheTime        | String| The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
| isPersonal       | String| Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
| nextOffset       | String| Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes.
| switchPmText     | String| If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter
| switchPmParameter| String| Parameter for the start message sent to the bot when user presses the switch button

<a name="sendGame"/>
## Telegram.sendGame
Use this method to send a game. On success, the sent Message is returned.

| Field              | Type  | Description
|--------------------|-------|----------
| token              | String| Authentication token
| chatId             | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| gameShortName      | String| Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
| disableNotification| String| Sends the message silently.
| replyToMessageId   | Number| If the message is a reply, ID of the original message.
| replyMarkup        | JSON  | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.

<a name="setGameScore"/>
## Telegram.setGameScore
Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited Message, otherwise returns True. Returns an error, if the new score is not greater than the user's current score in the chat.

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| chatId         | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| userId         | Number| User identifier
| score          | String| New score, must be positive
| messageId      | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String| Required if chat_id and message_id are not specified. Identifier of the inline message
| editMessage    | String| Pass True, if the game message should be automatically edited to include the current scoreboard

<a name="getGameHighScores"/>
## Telegram.getGameHighScores
Method description

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| chatId         | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| messageId      | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String| Required if chat_id and message_id are not specified. Identifier of the inline message

<a name="getGameHighScores"/>
## Telegram.getGameHighScores
Method description

| Field          | Type  | Description
|----------------|-------|----------
| token          | String| Authentication token
| chatId         | String| Unique identifier for the target chat or username of the target channel (in the format @channelusername)
| messageId      | Number| Required if inline_message_id is not specified. Unique identifier of the sent message
| inlineMessageId| String| Required if chat_id and message_id are not specified. Identifier of the inline message

<a name="getWebhookInfo"/>
## Telegram.getWebhookInfo
Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.

| Field               | Type  | Description
|---------------------|-------|----------
| token               | String| Authentication token
| url                 | String| Webhook URL, may be empty if webhook is not set up
| hasCustomCertificate| String| True, if a custom certificate was provided for webhook certificate checks
| pendingUpdateCount  | Number| Number of updates awaiting delivery
| lastErrorDate       | Number| Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
| lastErrorMessage    | String| Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook

