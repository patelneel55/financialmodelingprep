# Financial Modeling Prep

[![Travis CI](https://travis-ci.org/patelneel55/financialmodelingprep.svg?branch=master)](https://travis-ci.org/patelneel55/financialmodelingprep)
[![codecov](https://codecov.io/gh/patelneel55/financialmodelingprep/branch/master/graph/badge.svg)](https://codecov.io/gh/patelneel55/financialmodelingprep)


This module is a node wrapper for the [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs). This node application implements almost all aspects of the FMP API. The features that are still work in progress are listed below. 

## About FinancialModelingPrep

The FMP API provides a **free** financial API that provides different types of data ranging from stock prices and historical data to financial statements and market performance. The complete API documentation is available [here](https://financialmodelingprep.com/developer/docs).

This API is perfect for someone like me who loves to dabble with financial data as a hobby and incorporate it into my other projects but doesn't have the capital to spend into other financial APIs such as Alphavantage or Quandl. Even though these other APIs offer free endpoints, the FMP API has no query limits to its servers and some of their endpoints are almost real-time.

I have no affiliation with FinancialModelingPrep and its web API development.

## Installation
```bash
npm install --save financialmodelingprep
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

## API Documentation

### Stock

Accessed through `fmp.stock(ticker).{method_name}*`
```js
profile()                                   // /profile
quote()                                     // /quote
rating()                                    // /company/rating
current_price()                             // /stock/real-time-price
history({start_date, end_date, limit, type} = {})
dividend_history({start_date, end_date, limit, type} = {})
split_history({start_date, end_date, limit, type} = {})

financial.income(period = 'annual')         // /financials/income-statement
financial.balancesheet(period = 'annual')   // /financials/balance-sheet-statement
financial.cashflow(period = 'annual')       // /financials/cash-flow-statement
financial.metrics(period = 'annual')        // /company-key-metrics
financial.growth(period = 'annual')         // /financial-statement-growth
financial.ratios()                          // /financial-ratios
```

### Market
Accessed through `fmp.market.{method_name}`
```js
most_active()                                // /stock/actives
most_gainer()                                // /stock/gainers
most_loser()                                 // /stock/losers
sector_performance()                         // /stock/sectors-performance
trading_hours()

index.list()                                // /symbol/available-indexes
index.quote(stock = 'all')                  // /quote
index.history(stock, { start_date, end_date, data_type, limit } = {})                     // /historical-price-full/index/{ticker}
```

### Search
Accessed through `fmp.search()`
```js
search(keywords, limit = 10, exchange)      // /search
```

### ETF
Accessed through `fmp.etf.{method_name}
```js
list()
quote(stock = 'all')
history(stock, { start_date, end_date, data_type, limit } = {})
dividend_history(stock, { start_date, end_date, data_type, limit } = {})
split_history(stock, { start_date, end_date, data_type, limit } = {})
```

### Mutual Funds
Accessed through `fmp.mutualfund.{method_name}`
```js
list()
quote(stock = 'all')
history(stock, { start_date, end_date, data_type, limit } = {})
dividend_history(stock, { start_date, end_date, data_type, limit } = {})
split_history(stock, { start_date, end_date, data_type, limit } = {})
```

### Cryptocurrency
Accessed through `fmp.crypto.{method_name}`
```js
list()
quote(stock = 'all')*
history(stock, { start_date, end_date, data_type, limit } = {})*
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. Also, the parameter appends `USD` to the crypto ticker passed to provide the value in US dollars so if you need to query data in a different currency I would suggest using the [forex](###Forex) command and manually convert it to the desired currency.

### Commodities
Accessed through `fmp.commodities.{method_name}`
```js
list()
quote(stock = 'all')*
history(stock, { start_date, end_date, data_type, limit } = {})*
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name or through the `list` function

### Forex
Accessed through `fmp.forex(from, to).{method_name}`
```js
rate()
history()
```

# Contributing
Contributions are welcome! The purpose of this npm package is to create a node wrapper that closely aligns to the free financial API provided by Financial Modeling Prep. If there are any featuresthat are vital and I may have forgotten, feel free to open an issue or complete it and open a pull request. 

Before you open any pull requests, make sure the code structure follows the function calls provided above and the test suite passes, which can be checked by running `npm test`. If possible try to keep the coverage of your code at around >90% to ensure future regression stability.

# Contact
- Neel Patel (patelneel55@gmail.com)
