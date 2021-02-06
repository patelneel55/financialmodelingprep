'use strict'

const { makeRequest } = require('./utilities');
const index = require('./index');

module.exports = {
    index: index(),
    most_active: () => makeRequest('stock/actives'),
    most_gainer: () => makeRequest('stock/gainers'),
    most_loser: () => makeRequest('stock/losers'),
    sector_performance: () => makeRequest('stock/sectors-performance'),
    trading_hours: () => makeRequest('market-hours')
};