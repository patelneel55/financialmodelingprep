'use strict'

let Data = require('./lib/data')

// module.exports = (config = {}) => {
console.log("hello");
// Add the base url for submodules to use.
let cc = {};
cc["base"] = `https://financialmodelingprep.com/api/v3/`

let dd = Data(cc);

dd.quote('AAPL')

// };