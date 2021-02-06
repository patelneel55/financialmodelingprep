'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = () => {
    return {
        list: () => makeRequest('symbol/available-indexes'),
        quote: (stock = undefined) => (stock) ? makeRequest('quote', generateJson(stock)) : makeRequest('quotes/index'),
        history: (stock, { start_date, end_date, data_type, limit } = {}) => makeRequest('historical-price-full', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit })),
        sp500_companies: () => makeRequest('sp500_constituent'),
        sp500_history: () => makeRequest('historical/sp500_constituent'),
        nasdaq_companies: () => makeRequest('nassdaq_constituent'),
        nasdaq_history: () => makeRequest('historical/nasdaq_constituent'), 
        dowjones_companies: () => makeRequest('dowjones_constituent'),
        dowjones_history: () => makeRequest('historical/dowjones_constituent'),
        chart_history: (stock, interval) => makeRequest('historical-chart', generateJson(interval + '/' + stock))  
    }
};
