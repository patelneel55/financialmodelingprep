'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (from_curr, to_curr) => makeRequest('forex', generateJson(from_curr + to_curr));