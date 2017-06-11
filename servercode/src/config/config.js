const defaultConfig = {
    "express": {
        "port": 3000
    },
    "mongo": {
        "db": "example",
        "host": "mongo",
        "port": 27017
    }
};

if (process.env.ENV === "TEST_LOCAL") {
    defaultConfig.mongo.host = "localhost";
}

module.exports = defaultConfig;
