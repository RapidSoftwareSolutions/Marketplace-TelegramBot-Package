const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token,
        chatId,
        userId,
        score,
        messageId,
        inlineMessageId,
        editMessage
    } = req.body.args;

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let options = lib.clearArgs({
        chat_id:           chatId,
        user_id:           userId,
        message_id:        messageId,
        inline_message_id: inlineMessageId,
        edit_message:      editMessage
    });

    let uri  = `https://api.telegram.org/bot${token}/setGameScore`;

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