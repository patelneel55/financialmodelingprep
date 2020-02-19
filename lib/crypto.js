'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = {
    list: () => makeRequest('symbol/available-cryptocurrencies'),
    quote: (stock = undefined) => {

        if (stock) {
            if (stock instanceof Array) {
                stock = stock.map((value) => {
                    if (!value.toLowerCase().includes('USD'.toLowerCase()))
                        value += 'USD';

                    return value.toUpperCase()
                })
            }
            else {
                if (!stock.toLowerCase().includes('USD'.toLowerCase()))
                    stock += 'USD';
                stock = stock.toUpperCase()
            }

            return makeRequest('quote', generateJson(stock))
        }
        return makeRequest('cryptocurrencies')
    },
    history: (stock, { start_date, end_date, data_type, limit } = {}) => {

        if (stock instanceof Array) {
            stock = stock.map((value) => {
                if (!value.toLowerCase().includes('USD'.toLowerCase()))
                    value += 'USD';

                return value.toUpperCase()
            })
        }
        else {
            if (!stock.toLowerCase().includes('USD'.toLowerCase()))
                stock += 'USD';
            stock = stock.toUpperCase()
        }

        return makeRequest('historical-price-full/crypto', generateJson(stock, { from: start_date, to: end_date, serietype: data_type, timeseries: limit }))
    }
};