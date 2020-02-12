'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = () => {

    return {
        list: () => makeRequest('symbol/available-indexes'),
        quote: (stock) => makeRequest('quote', generateJson(stock)),

        history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/index', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit }))
    }
};
