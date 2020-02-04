'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (keywords, limit, exchange) => {

    let params = {};

    params['query'] = keywords;
    params['limit'] = limit;
    if(exchange)
        params['exchange'] = exchange;

    return makeRequest('search', generateJson(undefined, params))
};