'use strict'

const axios = require('axios')

const baseURL = 'https://financialmodelingprep.com/api/v3/';

/**
 * Creates the endpoint using the default base URL and adding the respective
 * path and query parameters to be requested by the API.
 * 
 * Future Use: Incase of querying a new database in the future, this is the
 * only function that would require modification for the most part to control how
 * data is queried.
 * 
 * @param {JsonObject} params Query and Path parameters to be passed to the API
 */
const url = (params) => {
    let queryParameters = params['query'];
    let pathParameters = params['path'];
    let urlPath = params['urlPath'];
    let url = baseURL;
    url += urlPath;

    if(pathParameters) {
        if (pathParameters instanceof Array)
            pathParameters = pathParameters.join(',');
        url += '/' + pathParameters;
    }

    if (queryParameters) {
        let queryString = '';
        for (const key in queryParameters)
            queryString += `${key}=${queryParameters[key]}&`;

        if (queryString) {
            queryString = queryString.slice(0, -1);
            url += '?' + queryString;
        }
    }

    return url;
}

function generateJson(pathParam, queryParam = undefined)
{
    return {
        query: queryParam,
        path: pathParam
    }
}

module.exports = {
    makeRequest: (path, params = {}) => axios.get(url(Object.assign({}, params, { urlPath: path })))
                                        .then(response => response.data).catch(err => console.error(err)),
    generateJson: generateJson
};