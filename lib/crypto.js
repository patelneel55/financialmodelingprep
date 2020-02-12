'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-cryptocurrencies'),
    quote: (stock = undefined) => {

        if (stock) {
            if (!stock.toLowerCase().includes('USD'.toLowerCase()))
                stock += 'USD';

            return makeRequest('quote', generateJson(stock.toUpperCase()))
        }
        return makeRequest('cryptocurrencies')
    },
    history: (stock) => {

        if (!stock.toLowerCase().includes('USD'.toLowerCase()))
            stock += 'USD';

        return makeRequest('historical-price-full/crypto', generateJson(stock.toUpperCase()))
    }
};