'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-commodities'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/commodity'),
    history: (stock) => makeRequest('historical-price-full/commodity', generateJson(stock))
};