'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-mutual-funds'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/mutual_fund'),

    history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/mutual_fund', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    dividend_history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_dividend', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    split_history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_split', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit }))
};