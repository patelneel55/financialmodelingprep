'use strict'

const { makeRequest, generateJson } = require('./utilities');
const financial = require('./financial');

module.exports = (stock) => {
    
    return {
        profile: () => makeRequest('company/profile', generateJson(stock)),
        quote: () => makeRequest('quote', generateJson(stock)),
        financial: financial(stock),
        rating: () => makeRequest('company/rating', generateJson(stock)),
        current_price: () => makeRequest('stock/real-time-price', generateJson(stock)),

        history: (start_date, end_date, type, limit) => {
            
            let jsonObject = {};

            if(start_date)
                jsonObject['from'] = start_date;
            if(end_date)
                jsonObject['to'] = end_date;
            if(type)
                jsonObject['serietype'] = type;
            if(limit)
                jsonObject['timeseries'] = limit;

            return makeRequest('historical-price-full', generateJson(stock, jsonObject));
        },
        dividend_history: () => makeRequest('historical-price-full/stock_dividend', generateJson(stock)),
        split_history: () => makeRequest('historical-price-full/stock_split', generateJson(stock))
    }
};