'use strict';

const Data = require('./lib/data');

  // Add the base url for submodules to use.
  let config = {}
  config.base = `https://financialmodelingprep.com/api/v3/`

  // Include all the submodules.
  let data = Data(config);
  data.intraday('MSFT').then(res => console.log(res));

// };