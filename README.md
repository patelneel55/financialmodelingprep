# Financial Modeling Prep

This module is a node wrapper for the free [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs). This node application implements almost all aspects of the FMP API.

[![Travis CI](https://travis-ci.org/patelneel55/financialmodelingprep.svg?branch=master)](https://travis-ci.org/patelneel55/financialmodelingprep)
[![codecov](https://codecov.io/gh/patelneel55/financialmodelingprep/branch/master/graph/badge.svg)](https://codecov.io/gh/patelneel55/financialmodelingprep)

## About FinancialModelingPrep

The FMP API offers different types of data ranging from stock prices and historical data to financial statements and market performance. The complete API documentation is available [here](https://financialmodelingprep.com/developer/docs).

This API is perfect for someone who loves to dabble with financial data as a hobby and incorporate it into other projects.

I have no affiliation with FinancialModelingPrep and its web API development.

## Installation
```bash
npm install --save financialmodelingprep
```

## Usage

To use this module first create an account with [FinancialModelingPrep](https://financialmodelingprep.com/developer/docs/pricing/) and retrieve your API key.

```js
const fmp = require('financialmodelingprep')(apikey)

// Simple Examples

// API route: /quote/AAPL
fmp.stock('aapl').quote().then(response => console.log(response));
//API route: /quote/AAPL,MSFT
fmp.stock(['AAPL', 'MSFT']).quote().then(response => console.log(response));

// API route: /stock/sectors-performance
fmp.market.sector_performance().then(response => console.log(response));

// API route: /quote/USDEUR
fmp.forex('USD', 'EUR').rate().then(response => console.log(response));

```

Keep in mind most of the web API breakdown and routes closely follow the structure of the node functions.

## API Documentation

### Stock

Accessed through `fmp.stock({ticker}).{method_name}*`
```js
profile()                                                   // /profile
quote()                                                     // /quote
rating()                                                    // /company/rating
current_price()                                             // /stock/real-time-price
history({start_date, end_date, limit, type} = {})           // /historical-price-full/{ticker}?{opts}
dividend_history({start_date, end_date, limit, type} = {})  // /historical-price-full/stock_dividend/{ticker}?{opts}
split_history({start_date, end_date, limit, type} = {})     // /historical-price-full/stock_split/{ticker}?{opts}

financial.income(period = 'annual')                         // /financials/income-statement
financial.balancesheet(period = 'annual')                   // /financials/balance-sheet-statement
financial.cashflow(period = 'annual')                       // /financials/cash-flow-statement
financial.metrics(period = 'annual')                        // /company-key-metrics
financial.growth(period = 'annual')                         // /financial-statement-growth
financial.ratios()                                          // /financial-ratios
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name.

### Market
Accessed through `fmp.market.{method_name}`
```js
most_active()                                                           // /stock/actives
most_gainer()                                                           // /stock/gainers
most_loser()                                                            // /stock/losers
sector_performance()                                                    // /stock/sectors-performance
trading_hours()                                                         // /is-the-market-open

index.list()                                                            // /symbol/available-indexes
index.quote(stock = 'all')*                                             // /quote
index.history(stock, { start_date, end_date, data_type, limit } = {})*  // /historical-price-full/index/{ticker}?{opts}
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name or through the `list` function

### Search
Accessed through `fmp.search()`
```js
search(keywords, limit = 10, exchange)      // /search?{opts}
```

### ETF
Accessed through `fmp.etf.{method_name}
```js
list()                                                                      // /symbol/available-etfs
quote(stock = 'all')*                                                       // /quote
history(stock, { start_date, end_date, data_type, limit } = {})*            // /historical-price-full/etf/{ticker}?{opts}
dividend_history(stock, { start_date, end_date, data_type, limit } = {})*   // /historical-price-full/stock_dividend/{ticker}?{opts}
split_history(stock, { start_date, end_date, data_type, limit } = {})*      // /historical-price-full/stock_split/{ticker}?{opts}
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name or through the `list` function

### Mutual Funds
Accessed through `fmp.mutualfund.{method_name}`
```js
list()                                                                      // /symbol/available-mutual-funds
quote(stock = 'all')*                                                       // /quote
history(stock, { start_date, end_date, data_type, limit } = {})*            // /historical-price-full/mutual_fund/{ticker}?{opts}
dividend_history(stock, { start_date, end_date, data_type, limit } = {})*   // /historical-price-full/stock_dividend/{ticker}?{opts}
split_history(stock, { start_date, end_date, data_type, limit } = {})*      // /historical-price-full/stock_split/{ticker}?{opts}
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name or through the `list` function

### Cryptocurrency
Accessed through `fmp.crypto.{method_name}`
```js
list()                                                                      // /symbol/available-cryptocurrencies
quote(stock = 'all')*                                                       // /quote
history(stock, { start_date, end_date, data_type, limit } = {})*            // /historical-price-full/crypto/{ticker}?{opts}
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. Also, the parameter appends `USD` to the crypto ticker passed to provide the value in US dollars so if you need to query data in a different currency I would suggest using the [forex](###Forex) command and manually convert it to the desired currency.

### Commodities
Accessed through `fmp.commodities.{method_name}`
```js
list()                                                                      // /symbol/available-commodities
quote(stock = 'all')*                                                       // /quote
history(stock, { start_date, end_date, data_type, limit } = {})*            // /historical-price-full/commodity/{ticker}?{opts}
```
\* The `stock` parameter can either be pased as a string or an array of market tickers. These tickers can be found either by running search based on corporation name or through the `list` function

### Forex
Accessed through `fmp.forex({from_ticker}, {to_ticker}).{method_name}`
```js
rate()                                                      // /quote
history({ start_date, end_date, data_type, limit } = {})    // /historical-price-full/{ticker}?{opts}
```

# Contributing
Contributions are welcome! The purpose of this npm package is to create a node wrapper that closely aligns to the free financial API provided by Financial Modeling Prep. If there are any features that are vital and I may have forgotten, feel free to open an issue or complete it by opening a pull request.

Before you open any pull requests, make sure the code structure follows the function calls provided above and the test suite passes, which can be checked by running `npm test`. If possible try to keep the coverage of your code at ~100% to ensure future regression stability.

# Contact
- Neel Patel (patelneel55@gmail.com)
