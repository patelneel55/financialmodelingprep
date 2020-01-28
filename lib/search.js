'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (keywords, limit, exchange) => makeRequest('search', generateJson(undefined, { query: keywords, limit: limit, exchange: exchange }));