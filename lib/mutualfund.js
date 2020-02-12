'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-mutual-funds'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/mutual_fund'),

    history: (stock) => makeRequest('historical-price-full/mutual_fund', generateJson(stock)),
    dividend_history: (stock) => makeRequest('historical-price-full/stock_dividend', generateJson(stock)),
    split_history: (stock) => makeRequest('historical-price-full/stock_split', generateJson(stock))
};