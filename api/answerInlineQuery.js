const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');

module.exports = (req, res) => {
    let {
        token,
        inlineQueryId,
        results,
        cacheTime,
        isPersonal,
        nextOffset,
        switchPmText,
        switchPmParameter,
    } = req.body.args;

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let bot     = new TelegramBot(token);
    let options = lib.clearArgs({
        cache_time:          cacheTime,
        is_personal:         isPersonal,
        next_offset:         nextOffset,
        switch_pm_text:      switchPmText,
        switch_pm_parameter: switchPmParameter
    })

    return bot.answerInlineQuery(inlineQueryId, results, options);
}