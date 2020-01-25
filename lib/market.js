'use strict'

const { makeRequest } = require('./utilities');
const index = require('./index');

module.exports = {    
        index: index(),
        mostactive: () => makeRequest('stock/actives'),
        mostgainer: () => makeRequest('stock/gainers'),
        mostlaver: () => makeRequest('stock/losers'),
        sectorperformance: () => makeRequest('stock/sectors-performance')
};