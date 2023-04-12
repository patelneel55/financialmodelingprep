'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (stock) => {

    return {
        income: (period = 'annual') => makeRequest('income-statement', generateJson(stock, { period: period })),
        balance: (period = 'annual') => makeRequest('balance-sheet-statement', generateJson(stock, { period: period })),
        cashflow: (period = 'annual') => makeRequest('cash-flow-statement', generateJson(stock, { period: period })),
        metrics: (period = 'annual') => makeRequest('key-metrics', generateJson(stock, { period: period })),
        growth: (period = 'annual') => makeRequest('financial-growth', generateJson(stock, { period: period })),
        company_value: (period = 'annual') => makeRequest('enterprise-value', generateJson(stock, { period: period })),
        ratios: () => makeRequest('financial-ratios', generateJson(stock))
    }
};