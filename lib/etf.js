'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-etfs'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/etf'),
    history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/etf', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    dividend_history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_dividend', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    split_history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_split', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    chart_history: (stock, interval) => makeRequest('historical-chart', generateJson(interval + '/' + stock)),
};