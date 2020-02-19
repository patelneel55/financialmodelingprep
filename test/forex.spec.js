'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const forex = require('../lib/forex');

describe('.forex', () => {
    describe('.rate', () => {
        it('should return exchange rate for valid currencies', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/EURUSD')
                .end((err, res) => {
                    forex('EUR', 'USD').rate()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return exchange rate for lowercase valid currencies', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/EURUSD')
                .end((err, res) => {
                    forex('EUR', 'USD').rate()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.history', () => {
        it('should return valid history of a forex ticker', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/forex/USDEUR')
                .end((err, res) => {
                    forex('USD', 'EUR').history()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a etf for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/forex/USDEUR')
                .end((err, res) => {
                    forex('USD', 'EUR').history()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/forex/USDEUR?timeseries=5')
                .end((err, res) => {
                    forex('USD', 'EUR').history({ limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/forex/USDEUR?timeseries=5&serietype=line')
                .end((err, res) => {
                    forex('USD', 'EUR').history({ data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/forex/USDEUR?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    forex('USD', 'EUR').history({ start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            forex('USD', 'EUR').history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            forex('USD', 'EUR').history({ start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });
});