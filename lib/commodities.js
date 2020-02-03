'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-commodities'),
    values: (stock = undefined) => (stock) ? makeRequest('quotes/commodity') : makeRequest('quote', generateJson(stock)),
    history: (stock) => makeRequest('historical-price-full/commodity', generateJson(stock))
};