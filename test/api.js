const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const lastErrorMessage = '', 
    lastErrorDate = '', 
    pendingUpdateCount = '', 
    hasCustomCertificate = '', 
    editMessage = '', 
    score = '100', 
    gameShortName = '', 
    switchPmParameter = '', 
    switchPmText = '', 
    nextOffset = '', 
    isPersonal = '', 
    cacheTime = '', 
    results = '', 
    inlineQueryId = '', 
    inlineMessageId = '', 
    showAlert = '', 
    callbackQueryId = '', 
    fileId = 'AgADAgAD26cxG3GgFA4AAYdoFUWaMqSWAkgNAARboYaZJQ3tPh34AQABAg', 
    userId = '236232817', 
    action = '', 
    lastName = 'Dima', 
    firstName = 'Shirokov', 
    phoneNumber = '+380957381742', 
    longitude = '50.4608806', 
    latitude = '50.4608806', 
    voice = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg', 
    height = '', 
    width = '', 
    video = '', 
    performer = '', 
    duration = '', 
    replyMarkup = '', 
    replyToMessageId = '', 
    disableNotification = '', 
    disableWebPagePreview = '', 
    parseMode = '', 
    timeout = '', 
    offset = '', 
    title = 'test', 
    audio = 'http://www.w3schools.com/html/horse.mp3', 
    sticker = 'http://www.gstatic.com/webp/gallery/1.webp', 
    file = 'https://i.vimeocdn.com/portrait/58832_300x300', 
    caption = 'test', 
    photo = 'https://i.vimeocdn.com/portrait/58832_300x300', 
    messageId = '49', 
    fromChatId = '236232817', 
    text = 'Yo', 
    chatId = '236232817', 
    limit = '1', 
    url = 'https://telegramwebhook.com/', 
    token = '296485939:AAF8qFtAXJMRmpWlx4Lr9UDMXMtKZcdESv4';
    

describe('Telegram package', () => {    
it('/setWebHook', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/setWebHook')
    .send({args:{ token, url,}})
    .expect(200)
    .then((res) => {});
});

it('/getMe', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getMe')
    .send({args:{ token,}})
    .expect(200)
    .then((res) => {});
});

it('/getUpdates', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getUpdates')
    .send({args:{ token, offset, limit, timeout,}})
    .expect(200)
    .then((res) => {});
});

it('/sendMessage', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendMessage')
    .send({args:{ token, chatId, text, parseMode, disableWebPagePreview, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/forwardMessage', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/forwardMessage')
    .send({args:{ token, chatId, fromChatId, disableNotification, messageId,}})
    .expect(200)
    .then((res) => {});
});

it('/sendPhoto', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendPhoto')
    .send({args:{ token, chatId, photo, caption, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendDocument', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendDocument')
    .send({args:{ token, chatId, file, caption, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendSticker', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendSticker')
    .send({args:{ token, chatId, sticker, caption, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendAudio', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendAudio')
    .send({args:{ token, chatId, audio, caption, duration, performer, title, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendVideo', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendVideo')
    .send({args:{ token, chatId, video, duration, width, height, caption, caption, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendVoice', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendVoice')
    .send({args:{ token, chatId, voice, caption, duration, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendLocation', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendLocation')
    .send({args:{ token, chatId, latitude, longitude, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendContact', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendContact')
    .send({args:{ token, chatId, phoneNumber, firstName, lastName, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/sendChatAction', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendChatAction')
    .send({args:{ token, chatId, action,}})
    .expect(200)
    .then((res) => {});
});

it('/getUserProfilePhotos', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getUserProfilePhotos')
    .send({args:{ token, userId, offset, limit,}})
    .expect(200)
    .then((res) => {});
});

it('/getFile', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getFile')
    .send({args:{ token, fileId,}})
    .expect(200)
    .then((res) => {});
});

it('/kickChatMember', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/kickChatMember')
    .send({args:{ token, chatId, userId,}})
    .expect(200)
    .then((res) => {});
});

it('/leaveChat', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/leaveChat')
    .send({args:{ token, chatId,}})
    .expect(200)
    .then((res) => {});
});

it('/unbanChatMember', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/unbanChatMember')
    .send({args:{ token, chatId, userId,}})
    .expect(200)
    .then((res) => {});
});

it('/unbanChatMember', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/unbanChatMember')
    .send({args:{ token, chatId, userId,}})
    .expect(200)
    .then((res) => {});
});

it('/getChat', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getChat')
    .send({args:{ token, chatId,}})
    .expect(200)
    .then((res) => {});
});

it('/getChatAdministrators', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getChatAdministrators')
    .send({args:{ token, chatId,}})
    .expect(200)
    .then((res) => {});
});

it('/getChatMembersCount', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getChatMembersCount')
    .send({args:{ token, chatId,}})
    .expect(200)
    .then((res) => {});
});

it('/getChatMember', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getChatMember')
    .send({args:{ token, chatId, userId,}})
    .expect(200)
    .then((res) => {});
});

it('/answerCallbackQuery', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/answerCallbackQuery')
    .send({args:{ token, callbackQueryId, text, showAlert, url,}})
    .expect(200)
    .then((res) => {});
});

it('/editMessageText', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/editMessageText')
    .send({args:{ token, chatId, messageId, text, parseMode, parseMode, disableWebPagePreview, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/editMessageCaption', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/editMessageCaption')
    .send({args:{ token, chatId, messageId, inlineMessageId, caption, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/editMessageReplyMarkup', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/editMessageReplyMarkup')
    .send({args:{ token, chatId, messageId, inlineMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/answerInlineQuery', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/answerInlineQuery')
    .send({args:{ token, inlineQueryId, results, cacheTime, isPersonal, nextOffset, switchPmText, switchPmParameter,}})
    .expect(200)
    .then((res) => {});
});

it('/sendGame', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/sendGame')
    .send({args:{ token, chatId, gameShortName, disableNotification, replyToMessageId, replyMarkup,}})
    .expect(200)
    .then((res) => {});
});

it('/setGameScore', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/setGameScore')
    .send({args:{ token, chatId, userId, score, messageId, inlineMessageId, editMessage,}})
    .expect(200)
    .then((res) => {});
});

it('/getGameHighScores', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getGameHighScores')
    .send({args:{ token, chatId, messageId, inlineMessageId,}})
    .expect(200)
    .then((res) => {});
});

it('/getGameHighScores', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getGameHighScores')
    .send({args:{ token, chatId, messageId, inlineMessageId,}})
    .expect(200)
    .then((res) => {});
});

it('/getWebhookInfo', () => {
    return request(app)
    .post('/api/'+ global.PACKAGE_NAME +'/getWebhookInfo')
    .send({args:{ token, url, hasCustomCertificate, pendingUpdateCount, lastErrorDate, lastErrorMessage,}})
    .expect(200)
    .then((res) => {});
});

});