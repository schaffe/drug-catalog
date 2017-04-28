const resolveDirName = (dirname) => {
    return dirname.substring(0,dirname.indexOf("/src/"));
};

require('app-module-path').addPath(resolveDirName(__dirname) + '/src');

// require('config/config').config.mongo.db = 'test';


