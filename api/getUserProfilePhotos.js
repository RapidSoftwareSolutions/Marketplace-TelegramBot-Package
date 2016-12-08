const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        userId,
        offset,
        limit
    } = req.body.args;

    let required = lib.parseReq({token, userId});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let bot = new TelegramBot(token);

    return bot.getUserProfilePhotos(userId, offset, limit);
}