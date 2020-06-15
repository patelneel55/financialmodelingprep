'use strict'

const commodities = require('./lib/commodities');
const crypto = require('./lib/crypto');
const etf = require('./lib/etf');
const forex = require('./lib/forex');
const mutualfund = require('./lib/mutualfund');
const stock = require('./lib/stock');
const market = require('./lib/market');
const search = require('./lib/search');
const auth = require('./lib/auth');


const FinancialModelingPrep = function FinancialModelingPrep(apikey) {
  auth.key = apikey;
};

FinancialModelingPrep.prototype.stock = stock;
FinancialModelingPrep.prototype.market = market;
FinancialModelingPrep.prototype.forex = forex;
FinancialModelingPrep.prototype.crypto = crypto;
FinancialModelingPrep.prototype.search = search;
FinancialModelingPrep.prototype.commodities = commodities;
FinancialModelingPrep.prototype.etf = etf;
FinancialModelingPrep.prototype.mutualfund = mutualfund;

module.exports = FinancialModelingPrep;
