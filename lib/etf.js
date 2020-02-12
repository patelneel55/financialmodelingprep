'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-etfs'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/etf'),

    history: (stock) => makeRequest('historical-price-full/etf', generateJson(stock)),
    dividend_history: (stock) => makeRequest('historical-price-full/stock_dividend', generateJson(stock)),
    split_history: (stock) => makeRequest('historical-price-full/stock_split', generateJson(stock))
};