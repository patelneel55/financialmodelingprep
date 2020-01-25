'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = () => {
    
    return {
        list: () => makeRequest('majors-indexes'),
        history: (stock) => makeRequest('historical-price-full/index', generateJson(stock))
    }
};
