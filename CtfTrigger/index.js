var fs = require('fs');

module.exports = async function (context, req) {

    if (req.query.cookie) {
	context.log.warn('Cookie: ' + req.query.cookie)
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: 'Look at this cat!'
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Nothing here, make sure to pass the correct value!"
        };
    }
};
