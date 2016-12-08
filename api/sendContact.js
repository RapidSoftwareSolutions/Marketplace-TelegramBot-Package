const Q        = require('q');
const lib      = require('../lib/functions');
const request  = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    let {
        token,
        chatId,
        phoneNumber,
        firstName,
        lastName,
        disableNotification,
        replyToMessageId,
        replyMarkup
    } = req.body.args;

    let required = lib.parseReq({token, chatId, phoneNumber, firstName});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(replyMarkup && typeof replyMarkup == 'string') {
        try {
            replyMarkup = JSON.parse(replyMarkup);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION');
        }   
    }

    let options = lib.clearArgs({
        chat_id:              chatId,
        phone_number:         phoneNumber,
        first_name:           firstName,
        last_name:            lastName,
        disable_notification: disableNotification,
        reply_to_message_id:  replyToMessageId,
        reply_markup:         replyMarkup
    });

    let uri  = `https://api.telegram.org/bot${token}/sendContact`;

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