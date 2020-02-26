'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const commodities = require('../lib/commodities');

describe('.commodities', () => {
    describe('.list', () => {
        it('should return list of commodities', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-commodities')
                .end((err, res) => {
                    commodities.list()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return list of valid commodities', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-commodities')
                .end((err, res) => {
                    commodities.list('123')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.quote', () => {
        it('should return valid price quote for PLUSD', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/PLUSD')
                .end((err, res) => {
                    commodities.quote('PLUSD')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('lowercse \'plusd\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/PLUSD')
                .end((err, res) => {
                    commodities.quote('plusd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('no parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/commodity')
                .end((err, res) => {
                    commodities.quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/commodity')
                .end((err, res) => {
                    commodities.quote('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should empty object', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/abcd')
                .end((err, res) => {
                    commodities.quote('abcd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'PLUSD,CTUSX\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/PLUSD,CTUSX')
                .end((err, res) => {
                    commodities.quote(['PLUSD', 'CTUSX'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'plusd,ctusx\'] stock in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/PLUSD,CTUSX')
                .end((err, res) => {
                    commodities.quote(['plusd', 'ctusx'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

    });

    describe('.history', () => {
        it('should return valid of history of a commodity', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/commodity/ZGUSD')
                .end((err, res) => {
                    commodities.history('ZGUSD')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a commodity for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/commodity/ZGUSD')
                .end((err, res) => {
                    commodities.history('zgusd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/commodity/ZGUSD?timeseries=5')
                .end((err, res) => {
                    commodities.history('ZGUSD', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/commodity/ZGUSD?timeseries=5&serietype=line')
                .end((err, res) => {
                    commodities.history('ZGUSD', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/commodity/ZGUSD?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    commodities.history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 404 not found between a time interval with a data limit', (done) => {
            commodities.history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 404 not found between a time interval with a data limit for a line graph', (done) => {
            commodities.history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });
});