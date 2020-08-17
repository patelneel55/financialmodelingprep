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


module.exports = (apikey) => {
  auth.key = apikey;

  return {
      stock: stock,
      market: market,
      forex: forex,
      crypto: crypto,
      search: search,
      commodities: commodities,
      etf: etf,
      mutualfund: mutualfund
  }
}
