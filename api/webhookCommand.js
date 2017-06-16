const lib         = require('../lib/functions');

module.exports = (req, res) => {
    let {
        params,
        body
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    let reply = {
        http_resp : "",
        client_msg : req.body.args.body,
        params : req.body.args.params
    };

    r.callback          = 'success';
    r.contextWrites["to"] = reply;

    res.status(200).send(r);

}