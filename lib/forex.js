'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (from_curr, to_curr) => {

    return {
        rate: () => makeRequest('fx', generateJson(from_curr + to_curr)),
        history: ({ start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full/forex', generateJson(from_curr + to_curr, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
        chart_history: (interval) => makeRequest('historical-chart', generateJson(interval + '/' + from_curr + to_curr)),
    }
};
