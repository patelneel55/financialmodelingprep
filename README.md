# Financial Modeling Prep

[![Travis CI](https://travis-ci.org/patelneel55/financialmodelingprep.svg?branch=master)](https://travis-ci.org/patelneel55/financialmodelingprep)
[![codecov](https://codecov.io/gh/patelneel55/financialmodelingprep/branch/master/graph/badge.svg)](https://codecov.io/gh/patelneel55/financialmodelingprep)


This module is a node wrapper for the [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs). This node application implements almost all aspects of the FMP API. The features that are still work in progress are listed below. 

## About FinancialModelingPrep

The FMP API provides a **free** financial API that provides different types of data ranging from stock prices and historical data to financial statements and market performance. The complete API documentation is available [here](https://financialmodelingprep.com/developer/docs).

I have no affiliation with FinancialModelingPrep and its web API development.

## Installation
```bash
$ npm install --save financialmodelingprep
```

## Usage

```js
const fmp = require('financialmodelingprep')

// Simple Examples

// API route: /quote/AAPL
fmp.stock('aapl').quote().then(response => console.log(response));
//API route: /quote/AAPL,MSFT
fmp.stock(['AAPL', 'MSFT']).quote().then(response => console.log(response));

// API route: /stock/sectors-performance
fmp.market.sectorperformance().then(response => console.log(response));

// API route: /quote/USDEUR
fmp.forex('USD', 'EUR').then(response => console.log(response));

```

Keep in mind most of the web API breakdown and routes closely follow the structure of the node functions.

### Stock

Accessed through `fmp.stock({symbol or symbol list}).{method_name}`
```js
profile()                               // /profile
quote()                                 // /quote
rating()                                // /company/rating
currentprice()                          // /stock/real-time-price
financial.{method_name}                 // Sub-Function
```

### Financial
Accessed throuh `fmp.stock({symbol or symbol list}).financial.{method_name}`
```js
income(period = 'annual')               // /financials/income-statement
balancesheet(period = 'annual')         // /financials/balance-sheet-statement
cashflow(period = 'annual')             // /financials/cash-flow-statement
metrics(period = 'annual')              // /company-key-metrics
growth(period = 'annual')               // /financial-statement-growth
ratios()                                // /financial-ratios
```

### Market
Accessed through `fmp.market.{method_name}`
```js
mostactive()                            // /stock/actives
mostgainer()                            // /stock/gainers
mostloser()                             // /stock/losers
sectorperformance()                     // /stock/sectors-performance
```

### Crypto
Accessed through `fmp.crypto.{method_name}`
```js
values(stock = 'all')                   // /quotes/crypto
```

### Search
Accessed through `fmp.search()`
```js
search(keywords, limit = 10, exchange)  // /search
```

