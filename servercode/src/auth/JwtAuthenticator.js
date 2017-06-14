const jwt = require('./JwtService');

module.exports = (() => {
    return {
        authenticate: (req,res,next) => {
            if (req.method === "OPTIONS")
                return next();

            let token = req.cookies["x-secure-token"];
            try {
                let user = jwt.verify(token);
                req.context = {
                    user: user
                };
            } catch (err) {
                res.sendStatus(403);
                return;
            }
            next();
        }
    }
})();