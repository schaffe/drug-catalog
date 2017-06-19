const defaultConfig = {
    debug: false,
    express: {
        port: 3000
    },
    mongo: {
        db: "example",
        host: "mongo",
        port: 27017
    },
    secrets: {
        jwtKeyPath: "resources/jwtRS256.key",
        jwtPubKeyPath: "resources/jwtRS256.key.pub"
    }
};

//todo use inheritance
if (process.env.ENV === "TEST_LOCAL") {
    defaultConfig.debug = true;
    defaultConfig.mongo.host = "localhost";
    defaultConfig.secrets = {
        jwtKeyPath: "servercode/resources/jwtRS256.key",
        jwtPubKeyPath: "servercode/resources/jwtRS256.key.pub"
    }
}

if (process.env.ENV === "DEV") {
    defaultConfig.debug = true;
}

module.exports = defaultConfig;
