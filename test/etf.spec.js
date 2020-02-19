'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const etf = require('../lib/etf');

describe('.etf', () => {
    describe('.list', () => {
        it('should return list of etfs', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-etfs')
                .end((err, res) => {
                    etf.list()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return list of valid etfs', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-etfs')
                .end((err, res) => {
                    etf.list('123')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.quote', () => {
        it('should return valid price quote for XLK', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/XLK')
                .end((err, res) => {
                    etf.quote('XLK')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('lowercse \'xlk\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/XLK')
                .end((err, res) => {
                    etf.quote('xlk')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('no parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/etf')
                .end((err, res) => {
                    etf.quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/etf')
                .end((err, res) => {
                    etf.quote('')
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
                    etf.quote('abcd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'XLK,CDL\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/XLK,CDL')
                .end((err, res) => {
                    etf.quote(['XLK', 'CDL'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'xlk,cdl\'] stock in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/XLK,CDL')
                .end((err, res) => {
                    etf.quote(['XLK', 'cdl'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    })

    describe('.history', () => {
        it('should return valid of history of a etf', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/etf/XLK')
                .end((err, res) => {
                    etf.history('XLK')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a etf for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/etf/XLK')
                .end((err, res) => {
                    etf.history('xlk')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/etf/XLK?timeseries=5')
                .end((err, res) => {
                    etf.history('XLK', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/etf/XLK?timeseries=5&serietype=line')
                .end((err, res) => {
                    etf.history('XLK', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/etf/XLK?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    etf.history('XLK', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            etf.history('XLK', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            etf.history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });
});