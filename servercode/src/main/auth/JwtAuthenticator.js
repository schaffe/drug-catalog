const jwt = require('./JwtService');
const config = require('../config/index');

module.exports = (() => {
    return {
        authenticate: (req, res, next) => {
            if (req.method === "OPTIONS")
                return next();

            let token = req.cookies["x-secure-token"];
            // console.log(req.cookies);
            try {
                let user = jwt.verify(token);
                req.context = {
                    user
                };
            } catch (err) {
                if (config.isDebug)
                    console.error(err);
                res.sendStatus(403);
                return;
            }
            next();
        }
    }
})();