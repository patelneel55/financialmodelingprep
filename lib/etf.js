'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-etfs'),
    values: (stock = undefined) => (stock) ? makeRequest('quotes/etf') : makeRequest('quote', generateJson(stock)),
    history: (stock) => makeRequest('historical-price-full/etf', generateJson(stock)),
    dividendhistory: (stock) => makeRequest('historical-price-full/stock_dividend', generateJson(stock)),
    splithistory: (stock) => makeRequest('historical-price-full/stock_split', generateJson(stock))
};