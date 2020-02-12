'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = () => {
    
    return {
        list: () => makeRequest('symbol/available-indexes'),
        quote: (stock) => makeRequest('quote', generateJson(stock)),

        history: (stock) => makeRequest('historical-price-full/index', generateJson(stock))
    }
};
