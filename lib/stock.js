'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (stock) => {
    
    return {
        quote: () => makeRequest('/quote', generateJson(stock))
    }
};