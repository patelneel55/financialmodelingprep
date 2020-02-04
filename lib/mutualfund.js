'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-mutual-funds'),
    values: (stock = undefined) => (stock) ? makeRequest('quotes/mutual_fund') : makeRequest('quote', generateJson(stock)),
    history: (stock) => makeRequest('historical-price-full/mutual_fund', generateJson(stock)),
    dividendhistory: (stock) => makeRequest('historical-price-full/stock_dividend', generateJson(stock)),
    splithistory: (stock) => makeRequest('historical-price-full/stock_split', generateJson(stock))
};