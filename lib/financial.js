'use strict'

const { makeRequest, generateJson } = require('./utilities');

module.exports = (stock) => {

    return {
        income: (period = 'annual') => makeRequest('income-statement', generateJson(stock, { period: period })),
        balance: (period = 'annual') => makeRequest('balance-sheet-statement', generateJson(stock, { period: period })),
        cashflow: (period = 'annual') => makeRequest('cash-flow-statement', generateJson(stock, { period: period })),
        metrics: (period = 'annual') => makeRequest('key-metrics', generateJson(stock, { period: period })),
        metrics_ttm: (period = 'annual') => makeRequest('key-metrics-ttm', generateJson(stock, { period: period })),
        growth: (period = 'annual') => makeRequest('financial-growth', generateJson(stock, { period: period })),
        company_value: (period = 'annual') => makeRequest('enterprise-values', generateJson(stock, { period: period })),
        ratios: (period = 'annual') => makeRequest('ratios', generateJson(stock, { period: period})),
        ratios_ttm: (period = 'annual') => makeRequest('ratios-ttm', generateJson(stock, { period: period})),
    }
};