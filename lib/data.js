'use strict'

const Util = require('./util');

module.exports = config => {
    
    const util = Util(config);

    const series = path => symbols => util.makeRequest(path, {path: symbols});

    return {
        intraday: series('quote')
    };
};
