'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (from_curr, to_curr) => {

    return {
        rate: () => makeRequest('quote', generateJson(from_curr + to_curr)),
        history: () => makeRequest('historical-price-full/forex', generateJson(from_curr + to_curr))
    }
};
    