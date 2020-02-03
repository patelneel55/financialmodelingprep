'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-mutual-funds'),
    values: (stock = undefined) => (stock) ? makeRequest('quotes/mutual_fund') : makeRequest('quote', generateJson(stock)),
    
    // TODO: Historical data
};