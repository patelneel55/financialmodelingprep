'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const crypto = require('../lib/crypto');

describe('.crypto', () => {
    describe('.list', () => {
        it('should return list of cryptocurrencies', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-cryptocurrencies')
                .end((err, res) => {
                    crypto.list()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return list of valid cryptocurrencies', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-cryptocurrencies')
                .end((err, res) => {
                    crypto.list('123')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.quote', () => {
        it('should return valid price quote for BTCUSD', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD')
                .end((err, res) => {
                    crypto.quote('BTCUSD')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('lowercse \'btcusd\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD')
                .end((err, res) => {
                    crypto.quote('btcusd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('no parameter should return all crypto quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/cryptocurrencies')
                .end((err, res) => {
                    crypto.quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty parameter should return all crypto quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/cryptocurrencies')
                .end((err, res) => {
                    crypto.quote('')
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
                    crypto.quote('abcd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'BTCUSD,ETHUSD\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.quote(['BTCUSD', 'ETHUSD'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'btcusd,ethusd\'] stock in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.quote(['btcusd', 'ethusd'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'btc,eth\'] stock in lowercase should return valid data without USD denotion', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.quote(['btc', 'eth'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid data without USD denotion', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/BTCUSD')
                .end((err, res) => {
                    crypto.quote('BTC')
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
                .get('/historical-price-full/crypto/BTCUSD')
                .end((err, res) => {
                    crypto.history('BTCUSD')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a commodity for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD')
                .end((err, res) => {
                    crypto.history('BTCUSD')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD?timeseries=5')
                .end((err, res) => {
                    crypto.history('BTCUSD', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD?timeseries=5&serietype=line')
                .end((err, res) => {
                    crypto.history('BTCUSD', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    crypto.history('BTCUSD', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            crypto.history('BTCUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            crypto.history('BTCUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('[\'BTCUSD,ETHUSD\'] stock should return valid history data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.history(['BTCUSD', 'ETHUSD'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'btcusd,ethusd\'] stock in lowercase should return valid history data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.history(['btcusd', 'ethusd'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'btc,eth\'] stock in lowercase should return valid history data without USD denotion', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/crypto/BTCUSD,ETHUSD')
                .end((err, res) => {
                    crypto.history(['btc', 'eth'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });
});