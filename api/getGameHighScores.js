const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token,
        chatId,
        messageId,
        inlineMessageId,
    } = req.body.args;

    if(!token) throw new Error('Required fields: token');

    let options = lib.clearArgs({
        chat_id:           chatId,
        message_id:        messageId,
        inline_message_id: inlineMessageId,
    })

    let uri  = `https://api.telegram.org/bot${token}/getGameHighScores`;

    request({
        url: uri,
        qs:  options
    }, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(JSON.parse(reslut));
        else 
            defered.reject(err || JSON.parse(reslut));
    });

    return defered.promise;
}