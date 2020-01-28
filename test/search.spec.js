'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const search = require('../lib/search');

describe('.search', () => {
    it('single keyword should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=Apple')
            .end((err, res) => {
                search('Apple')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('multiple keywords should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=Microsoft%20Corporation')
            .end((err, res) => {
                search('Microsoft Corporation')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('undefined query parameter should return empty set', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search')
            .end((err, res) => {
                search()
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('empty query parameter should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=')
            .end((err, res) => {
                search('')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('undefined query with valid limit should return empty set', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?limit=10')
            .end((err, res) => {
                search(undefined, 10)
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('keywords with response limit should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=AA&limit=10')
            .end((err, res) => {
                search('AA', 10)
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('keywords with response limit and exchange should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=AA&limit=10&exchange=NASDAQ')
            .end((err, res) => {
                search('AA', 10, 'NASDAQ')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('keywords with empty limit and valid exchange should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=AA&limit=10')
            .end((err, res) => {
                search('AA', '', 'NASDAQ')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('keywords with valid exchange should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?query=AA&exchange=NASDAQ')
            .end((err, res) => {
                search('AA', undefined, 'NASDAQ')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });

    it('no keywords with exchange and limit specified should return empty set', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
            .get('/search?limit=10&exchange=NASDAQ')
            .end((err, res) => {
                search(undefined, 10, 'NASDAQ')
                    .then((response) => {
                        expect(res.body).to.eql(response);
                        done();
                    })
                    .catch(done);
            });
    });
});