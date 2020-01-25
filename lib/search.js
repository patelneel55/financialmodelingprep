'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (keywords, limit = 10, exchange = 'NASDAQ') => makeRequest('search', generateJson(undefined, { query: keywords, limit: limit, exchange: exchange }));