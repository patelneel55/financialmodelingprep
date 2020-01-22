'use strict'

const fetch = require('cross-fetch')

module.exports = (config) => {

    const url = (params) => {
        let queryParameters = params['query'];
        let pathParameters = params['path'];
        let urlPath = params['urlPath'];
        let url = config.base;
        url += urlPath;

        if(pathParameters instanceof Array)
            pathParameters = pathParameters.join(',');
        url += '/' + pathParameters;

        if(queryParameters)
        {
            let queryString = undefined;
            for(key in queryParameters)
                queryString += `${key}=${queryParameters[key]},`;

            if(queryString) {
                queryString = queryString.slice(0, -1);
                url += '?' + queryString;
            }
        }

        return url;
    }

    const makeRequest = (path, params) => {
        fetch(url(Object.assign({}, params, { urlPath: path })))
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            return json;
        })
        .catch(err => {

        })
    };

    return {
        url,
        makeRequest
    };
};