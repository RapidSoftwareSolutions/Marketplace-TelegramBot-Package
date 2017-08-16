module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Telegram',
        'tagline': "Telegram API Package",
        "keywords": ["API", "message", "messaging", "sms", "text", "texting"],
        "description": "The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/480px-Telegram_Messenger.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/',
        "accounts": {
            'domain': 'telegram.org',
            'credentials': [
                'token',
            ]
        },
        "events": [
            {
                "name": "webhookCommand",
                "description": "Command for vendor webhook calls",
                "payload": { "update_id": "693231410",
                    "status": 'success',
                    "message":
                        { "text": 'hello world',
                            "message_id": "54",
                            "from":
                                { "username": 'RapiApi',
                                    "last_name": 'RapiApi',
                                    "language_code": 'en-US',
                                    "id": "66724092",
                                    "first_name": 'RapiApi' },
                            "date": "1498042236",
                            "chat":
                                { "username": 'RapiApi',
                                    "type": 'private',
                                    "last_name": 'RapiApi',
                                    "id": "66724092",
                                    "first_name": 'RapiApi' } } },
                "steps": [
                    "Navigate to https://telegram.me/botfather to setup your telegram bot and get your token",
                    "Navigate to https://rapidapi.com/package/TelegramBot/functions/setWebHook",
                    "Create your webhook by using your token from step 1 and the following URL: __WEBHOOK_URL__"
                ],
                "args": [
                    {
                        "name": "token",
                        "type": "string",
                        "info": "Token sent on each message",
                        "required": true
                    }
                ]
            }
        ],
        'blocks': [{
            "name":"setWebHook",
            "description": "Specify an url to receive incoming updates via an outgoing webHook.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true
                },
                {
                    name: "url",
                    type: "String",
                    info: "HTTPS url to send updates to. Use an empty string to remove webhook integration",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getMe",
            "description": "Returns basic information about the bot in form of a `User` object.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUpdates",
            "description": "Use this method to receive incoming updates using long polling",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "offset",
                    type: "Number",
                    info: "Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previouslyreceived updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.",
                    required: false,
                },
                {
                    name: "limit",
                    type: "Number",
                    info: "Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.",
                    required: false,
                },
                {
                    name: "timeout",
                    type: "Number",
                    info: "Timeout in seconds for long polling.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendMessage",
            "description": "Send text message.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Required: Text of the message to be sent",
                    required: true
                },
                {
                    name: "parseMode",
                    type: "String",
                    info: "Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs  in your bot's message.",
                    required: false,
                },
                {
                    name: "disableWebPagePreview",
                    type: "String", //Boolean
                    info: "Disables link previews for links in this message",
                    required: false,
                },
                {
                    name: "disableNotification",
                    type: "String", //Boolean
                    info: "Sends the message silently.",
                    required: false,
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message.",
                    required: false,
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"forwardMessage",
            "description": "Forward messages of any kind.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "fromChatId",
                    type: "String",
                    info: "Required: Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)",
                    required: true
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required: Unique message identifier",
                    required: true
                },
                {
                    name: "disableNotification",
                    type: "String", //Boolean
                    info: "Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendPhoto",
            "description": "Send a photo.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "photo",
                    type: "String",
                    info: "Required: Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data.",
                    required: true
                },
                {
                    name: "caption",
                    type: "String",
                    info: "Photo caption (may also be used when resending photos by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendDocument",
            "description": "Send a document.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new file using multipart/form-data.",
                    required: true
                },
                {
                    name: "caption",
                    type: "String",
                    info: "File caption (may also be used when resending files by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendSticker",
            "description": "Send a sticker.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "sticker",
                    type: "String",
                    info: "Required: Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new  one using multipart/form-data.",
                    required: true
                },
                {
                    name: "caption",
                    type: "String",
                    info: "sticker caption (may also be used when resending stickers by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendAudio",
            "description": "Send a audio.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "audio",
                    type: "String",
                    info: "Required: Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.",
                    required: true
                },
                {
                    name: "caption",
                    type: "String",
                    info: "Audio caption (may also be used when resending audios by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "duration",
                    type: "String",
                    info: "Duration of the audio in seconds",
                    required: false
                },
                {
                    name: "performer",
                    type: "String",
                    info: "Performer",
                    required: false
                },
                {
                    name: "title",
                    type: "String",
                    info: "Track name",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendVideo",
            "description": "Send a video.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "video",
                    type: "String",
                    info: "Required: Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.",
                    required: true
                },
                {
                    name: "duration",
                    type: "Number",
                    info: "Duration of sent video in seconds",
                    required: false
                },
                {
                    name: "width",
                    type: "Number",
                    info: "Video width",
                    required: false
                },
                {
                    name: "height",
                    type: "Number",
                    info: "Video height",
                    required: false
                },
                {
                    name: "caption",
                    type: "Number",
                    info: "Video height",
                    required: false
                },
                {
                    name: "caption",
                    type: "String",
                    info: "Video caption (may also be used when resending videos by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendVoice",
            "description": "Send a voice.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "voice",
                    type: "String",
                    info: "Required: Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.",
                    required: true
                },
                {
                    name: "caption",
                    type: "String",
                    info: "Voice caption (may also be used when resending voices by file_id), 0-200 characters",
                    required: false
                },
                {
                    name: "duration",
                    type: "String",
                    info: "Duration of the audio in seconds",
                    required: false
                },
                {
                    name: "disableNotification",
                    type: "Number", //Boolean
                    info: "Sends the message silently. ",
                    required: false
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options.  A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendLocation",
            "description": "Send a location.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "latitude",
                    type: "String", //Float
                    info: "Required: Latitude of location",
                    required: true   
                },
                {
                    name: "longitude",
                    type: "String", //Float
                    info: "Required: Longitude of location",
                    required: true   
                },
                {
                    name: "disableNotification",
                    type: "String", //Boolean
                    info: "Sends the message silently.",
                    required: false   
                },
                {
                    name: "replyToMessageId",
                    type: "String",
                    info: "If the message is a reply, ID of the original message",
                    required: false   
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.",
                    required: false   
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendContact",
            "description": "Send a contact.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "phoneNumber",
                    type: "String",
                    info: "Required: Contact's phone number",
                    required: true   
                },
                {
                    name: "firstName",
                    type: "String",
                    info: "Required: Contact's first name",
                    required: true   
                },
                {
                    name: "lastName",
                    type: "String",
                    info: "Contact's last name",
                    required: false   
                },
                {
                    name: "disableNotification",
                    type: "String",
                    info: "Sends the message silently.",
                    required: false   
                },
                {
                    name: "replyToMessageId",
                    type: "String",
                    info: "If the message is a reply, ID of the original message",
                    required: false   
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to hide reply keyboard or to force a reply from the user.",
                    required: false   
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendChatAction",
            "description": "Send a chat action.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "action",
                    type: "String",
                    info: "Required: Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or uploadVideo for videos, record_audio or upload_audio for audio files, upload_document for general files, find_location for location data",
                    required: true   
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserProfilePhotos",
            "description": "Send a chat action.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: Unique identifier of the target user",
                    required: true
                },
                {
                    name: "offset",
                    type: "String",
                    info: "Sequential number of the first photo to be returned. By default, all photos are returned.",
                    required: false
                },
                {
                    name: "limit",
                    type: "String",
                    info: "Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFile",
            "description": "Get file. Use this method to get basic info about a file and prepare it for downloading. Attention: link will be valid for 1 hour.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "fileId",
                    type: "String",
                    info: "Required: File identifier to get info about",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"kickChatMember",
            "description": "Use this method to kick a user from a group or a supergroup. In the case of supergroups, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the group for this to work. Returns True on success.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: Unique identifier of the target user",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"leaveChat",
            "description": "Use this method for your bot to leave a group, supergroup or channel. Returns True on success.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unbanChatMember",
            "description": "Use this method to unban a previously kicked user in a supergroup. The user will not return to the group automatically, but will be able to join via link, etc. The bot must be an administrator in the group for this to work.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: Unique identifier of the target user",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChat",
            "description": "Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChatAdministrators",
            "description": "Returns the administrators in a chat in form of an Array of `ChatMember` objects.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChatMembersCount",
            "description": "Use this method to get the number of members in a chat.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChatMember",
            "description": "Use this method to get information about a member of a chat. Returns a ChatMember object on success.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: true
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: Unique identifier of the target member.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, /*{
            "name":"answerCallbackQuery",
            "description": "Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "callbackQueryId",
                    type: "String",
                    info: "Unique identifier for the query to be answered.",
                    required: false
                },
                {
                    name: "text",
                    type: "String",
                    info: "If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.",
                    required: false
                },
                {
                    name: "showAlert",
                    type: "String", //Boolean
                    info: "If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.",
                    required: false
                },
                {
                    name: "url",
                    type: "String",
                    info: "URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @Botfather, specify the URL that opens your game – note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like telegram.me/your_bot?start=XXXX that open your bot with a parameter.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },*/ {
            "name":"editMessageText",
            "description": "Use this method to edit text and game messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: false
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required if inline_message_id is not specified. Unique identifier of the sent message",
                    required: false
                },
                {
                    name: "text",
                    type: "String",
                    info: " Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message.",
                    required: false
                },
                {
                    name: "parseMode",
                    type: "String",
                    info: "New text of the message.",
                    required: false
                },
                {
                    name: "parseMode",
                    type: "String",
                    info: "New text of the message.",
                    required: false
                },
                {
                    name: "disableWebPagePreview",
                    type: "JSON",
                    info: "Disables link previews for links in this message.",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "A JSON-serialized object for an inline keyboard.",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"editMessageCaption",
            "description": "Use this method to edit captions of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: false
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required if inline_message_id is not specified. Unique identifier of the sent message",
                    required: false
                },
                {
                    name: "inlineMessageId",
                    type: "String",
                    info: "Required if chat_id and message_id are not specified. Identifier of the inline message",
                    required: false
                },
                {
                    name: "caption",
                    type: "String",
                    info: "New caption of the message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "A JSON-serialized object for an inline keyboard.",
                    required: false
                }

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, /*{
            "name":"editMessageReplyMarkup",
            "description": "Use this method to edit only the reply markup of messages sent by the bot or via the bot (for inline bots). On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)",
                    required: false
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required if inline_message_id is not specified. Unique identifier of the sent message",
                    required: false
                },
                {
                    name: "inlineMessageId",
                    type: "String",
                    info: "Required if chat_id and message_id are not specified. Identifier of the inline message",
                    required: false
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "A JSON-serialized object for an inline keyboard.",
                    required: false
                }

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"answerInlineQuery",
            "description": "Use this method to send answers to an inline query. On success, True is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "inlineQueryId",
                    type: "String",
                    info: "Unique identifier for the answered query",
                    required: false
                },
                {
                    name: "results",
                    type: "JSON",
                    info: "A JSON-serialized array of results for the inline query",
                    required: false
                },
                {
                    name: "cacheTime",
                    type: "String",
                    info: "The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.",
                    required: false
                },
                {
                    name: "isPersonal",
                    type: "String", // Boolean
                    info: "Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query",
                    required: false
                },
                {
                    name: "nextOffset",
                    type: "String",
                    info: "Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes.",
                    required: false,
                },
                {
                    name: "switchPmText",
                    type: "String",
                    info: "If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter",
                    required: false,
                },
                {
                    name: "switchPmParameter",
                    type: "String",
                    info: "Parameter for the start message sent to the bot when user presses the switch button",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, */{
            "name":"sendGame",
            "description": "Use this method to send a game. On success, the sent Message is returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Required: Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: true
                },
                {
                    name: "gameShortName",
                    type: "String",
                    info: "Required: Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.",
                    required: true
                },
                {
                    name: "disableNotification",
                    type: "String", //Boolean
                    info: "Sends the message silently.",
                    required: false,
                },
                {
                    name: "replyToMessageId",
                    type: "Number",
                    info: "If the message is a reply, ID of the original message.",
                    required: false,
                },
                {
                    name: "replyMarkup",
                    type: "JSON",
                    info: "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard,  instructions to hide reply keyboard or to force a reply from the user.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, /*{
            "name":"setGameScore",
            "description": "Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited Message, otherwise returns True. Returns an error, if the new score is not greater than the user's current score in the chat.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: false
                },
                {
                    name: "userId",
                    type: "Number",
                    info: "User identifier",
                    required: false
                },
                {
                    name: "score",
                    type: "String",
                    info: "New score, must be positive",
                    required: false
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required if inline_message_id is not specified. Unique identifier of the sent message",
                    required: false
                },
                {
                    name: "inlineMessageId",
                    type: "String",
                    info: "Required if chat_id and message_id are not specified. Identifier of the inline message",
                    required: false
                },
                {
                    name: "editMessage",
                    type: "String", //Boolean
                    info: "Pass True, if the game message should be automatically edited to include the current scoreboard",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, */{
            "name":"getGameHighScores",
            "description": "Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an Array of GameHighScore objects.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "userId",
                    type: "String",
                    info: "Required: Target user id",
                    required: true
                },
                {
                    name: "chatId",
                    type: "String",
                    info: "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
                    required: false
                },
                {
                    name: "messageId",
                    type: "Number",
                    info: "Required if inline_message_id is not specified. Unique identifier of the sent message",
                    required: false
                },
                {
                    name: "inlineMessageId",
                    type: "String",
                    info: "Required if chat_id and message_id are not specified. Identifier of the inline message",
                    required: false
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getWebhookInfo",
            "description": "Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token.",
                    required: true,
                },
                {
                    name: "url",
                    type: "String",
                    info: "Webhook URL, may be empty if webhook is not set up",
                    required: false
                },
                {
                    name: "hasCustomCertificate",
                    type: "String", //Boolean
                    info: "True, if a custom certificate was provided for webhook certificate checks",
                    required: false
                },
                {
                    name: "pendingUpdateCount",
                    type: "Number",
                    info: "Number of updates awaiting delivery",
                    required: false
                },
                {
                    name: "lastErrorDate",
                    type: "Number",
                    info: "Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook",
                    required: false
                },
                {
                    name: "lastErrorMessage",
                    type: "String",
                    info: "Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook",
                    required: false
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }]
    })
};
