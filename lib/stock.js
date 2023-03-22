'use strict'

const { makeRequest, generateJson } = require('./utilities');
const financial = require('./financial');

module.exports = (stock) => {

    return {
        profile: () => makeRequest('company/profile', generateJson(stock)),
        quote: () => makeRequest('quote', generateJson(stock)),
        financial: financial(stock),
        rating: () => makeRequest('company/rating', generateJson(stock)),
        current_price: () => makeRequest('stock/real-time-price', generateJson(stock)),
        key_metrics: () => makeRequest('key-metrics-ttm', generateJson(stock)),

        history: ({ start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
        dividend_history: ({ start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_dividend', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
        split_history: ({ start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/stock_split', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),

        /* V4 endpoints. */
        outlook: () => makeRequest('company-outlook', generateJson(undefined, { symbol: stock }, 'v4')),
        target_consensus: () => makeRequest('price-target-consensus', generateJson(undefined, { symbol: stock }, 'v4')),
    }
};
