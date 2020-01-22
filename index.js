'use strict';

const stock = require('./lib/stock');

stock('MSFT').quote().then(res => console.log(res));

// };