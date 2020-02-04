'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    values: (stock = undefined) => (stock) ? makeRequest('cryptocurrencies') : makeRequest('quote', generateJson(stock + 'USD')),
    history: (stock) => makeRequest('historical-price-full/crypto', generateJson(stock + 'USD'))
};