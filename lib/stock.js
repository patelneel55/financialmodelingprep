'use strict'

const { makeRequest, generateJson } = require('./utilities');
const financial = require('./financial');

module.exports = (stock) => {
    
    return {
        profile: () => makeRequest('company/profile', generateJson(stock)),
        quote: () => makeRequest('quote', generateJson(stock)),
        financial: financial(stock),

    }
};