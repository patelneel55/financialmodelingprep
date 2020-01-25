'use strict';

const stock = require('./lib/stock');
const market = require('./lib/market');
const forex = require('./lib/forex');
const crypto = require('./lib/crypto');
const search = require('./lib/search');

module.exports = {
    stock: stock,
    market: market,
    forex: forex,
    crypto: cryto,
    search: search
};