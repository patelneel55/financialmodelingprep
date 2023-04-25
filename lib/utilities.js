'use strict'

const axios = require('axios')
const auth = require("./auth");

const baseURL = 'https://financialmodelingprep.com/api/';

/**
 * Creates the endpoint using the default base URL and adding the respective
 * path and query parameters to be requested by the API.
 *
 * Defaults to API version 3, which can be overwritten in the parameters.
 *
 * Future Use: Incase of querying a new database in the future, this is the
 * only function that would require modification for the most part to control how
 * data is queried.
 *
 * @param {JsonObject} params
 *      Query and Path parameters to be passed to the API
 *
 * @returns {String} url
 *      String that represents the REST API request to be make to FMP API
 */
const url = (params) => {
    let queryParameters = params['query'];
    let pathParameters = params['path'];
    let urlPath = params['urlPath'];
    let apiVersion = params['apiVersion'] || 'v3';
    let url = baseURL + apiVersion + '/';
    let queryString = '';
    let apikey = auth.key;
    url += urlPath;
    if(pathParameters) {
        if (pathParameters instanceof Array)
            pathParameters = pathParameters.join(',');
        pathParameters = pathParameters.toUpperCase();
        url += '/' + pathParameters;
    }

    if (queryParameters) {
        for (const key in queryParameters)
            if(queryParameters[key] != undefined)
                queryString += `${key}=${queryParameters[key]}&`;

        if (queryString) {
            queryString = queryString.slice(0, -1);
            url += '?' + queryString;
        }
    }
    if (!queryString) {
        url += '?'
    } else {
      url += '&'
    }

    url += `apikey=${apikey}`;

    return url;
}

/**
 * Generates a nested JSON Object to accomodate all the necessary parameters
 * that are going to be passed to FMP's REST API.
 *
 * @param {Object} pathParam
 *      A JSON object or a string that represents the path of the endpoint
 * @param {JsonObject} queryParam
 *      A JSON object that contains key value pairs to be added to the
 *      query parameters
 * @param {String} apiVersion
 *      A string that represents the API version
 *
 * @returns {JsonObject}
 *      A manageable JSON object that contains the respective query and path
 *      parameters which will be parsed by `url` function
 */
function generateJson(pathParam, queryParam = undefined, apiVersion = undefined)
{
    return {
        query: queryParam,
        path: pathParam,
        apiVersion: apiVersion
    }
}

module.exports = {
    makeRequest: (path, params = {}) => axios.get(url(Object.assign({}, params, { urlPath: path })))
                                        .then(response => response.data).catch(err => err.response),
    generateJson: generateJson
};
