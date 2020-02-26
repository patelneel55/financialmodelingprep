'use strict'

const commodities = require('./lib/commodities');
const crypto = require('./lib/crypto');
const etf = require('./lib/etf');
const forex = require('./lib/forex');
const mutualfund = require('./lib/etf');
const stock = require('./lib/stock');
const market = require('./lib/market');
const search = require('./lib/search');

module.exports = {
    stock: stock,
    market: market,
    forex: forex,
    crypto: crypto,
    search: search,
    commodities: commodities,
    etf: etf,
    mutualfund: mutualfund
};