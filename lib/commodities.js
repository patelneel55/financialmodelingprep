'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-commodities'),
    quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/commodity'),
    history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/commodity', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
    chart_history: (stock, interval) => makeRequest('historical-chart', generateJson(interval + '/' + stock)),
};