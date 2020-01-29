# Financial Modeling Prep

[![Travis CI](https://travis-ci.org/patelneel55/financialmodelingprep.svg?branch=master)](https://travis-ci.org/patelneel55/financialmodelingprep)
[![codecov](https://codecov.io/gh/patelneel55/financialmodelingprep/branch/master/graph/badge.svg)](https://codecov.io/gh/patelneel55/financialmodelingprep)


This module is a node wrapper for the [Financial Modeling Prep API](https://financialmodelingprep.com/developer/docs). This node application implements almost all aspects of the FMP API. The features that are still work in progress are listed below. 

## About FinancialModelingPrep

The FMP API provides a **free** financial API that provides different types of data ranging from stock prices and historical data to financial statements and market performance. The complete API documentation is available [here](https://financialmodelingprep.com/developer/docs).

I have no affiliation with FinancialModelingPrep and its web API development.

## Installation
```bash
$ npm install financialmodelingprep
```

## Usage

```js
const fmp = require('financialmodelingprep')

// Simple Examples

// API route: /quote/AAPL
fmp.stock('aapl').quote().then(response => console.log(response));

// API route: /stock/sectors-performance
fmp.market.sectorperformance().then(response => console.log(response));
```

Keep in mind most of the web API breakdown and routes closely follow the structure of the node functions.






