'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (stock) => {
    
    return {
        income: (period = 'annual') => makeRequest('financials/income-statement', generateJson(stock, { period: period })),
        balance: (period = 'annual') => makeRequest('financials/balance-sheet-statement', generateJson(stock, { period: period })),
        cashflow: (period = 'annual') => makeRequest('financials/cash-flow-statement', generateJson(stock, { period: period })),
        metrics: (period = 'annual') => makeRequest('company-key-metrics', generateJson(stock, { period: period })),
        growth: (period = 'annual') => makeRequest('financial-statement-growth', generateJson(stock, { period: period })),
        companyvalue: (period = 'annual') => makeRequest('enterprise-value', generateJson(stock, { period: period })),
        ratios: () => makeRequest('financial-ratios', generateJson(stock))
    }
};