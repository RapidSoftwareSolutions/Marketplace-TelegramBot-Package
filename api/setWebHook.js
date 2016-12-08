const lib         = require('../lib/functions');
const TelegramBot = require('node-telegram-bot-api');
const fs          = require('fs');
const path        = require('path');

module.exports = (req, res) => {
    let {
        token,
        url,
        certificate
    } = req.body.args;

    let required = lib.parseReq({token});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required)

    let bot = new TelegramBot(token);

    if(certificate) {
        let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), certificate]);
    
        if(!attach.stderr.toString()) {
            let response = JSON.parse(attach.stdout.toString());
            var fn       = path.resolve('./lib', response.message);

            if(!response.success) {
                throw new Error('Bad file!', res, {to});
                return;
            }

            certificate = fs.createReadStream(fn);

        } else {
            console.log('Error with download.js!', attach.stderr.toString());
            throw new Error('Error. Please, call support.');
        }
    }

    if(certificate) fs.unlink(fn, () => {});

    return bot.setWebHook(url, certificate);
}