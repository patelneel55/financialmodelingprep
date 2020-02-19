'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const mutualfund = require('../lib/mutualfund');

describe('.mutualfund', () => {
    describe('.list', () => {
        it('should return list of mutualfunds', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-mutual-funds')
                .end((err, res) => {
                    mutualfund.list()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return list of valid mutualfunds', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/symbol/available-mutual-funds')
                .end((err, res) => {
                    mutualfund.list('123')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.quote', () => {
        it('should return valid price quote for GIFPX', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/GIFPX')
                .end((err, res) => {
                    mutualfund.quote('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('lowercse \'gifpx\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/GIFPX')
                .end((err, res) => {
                    mutualfund.quote('gifpx')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('no parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/mutual_fund')
                .end((err, res) => {
                    mutualfund.quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty parameter should return all commodities quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/mutual_fund')
                .end((err, res) => {
                    mutualfund.quote('')
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
                    mutualfund.quote('abcd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'GIFPX,JBFRX\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/GIFPX,JBFRX')
                .end((err, res) => {
                    mutualfund.quote(['GIFPX', 'JBFRX'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'gifpx,jbfrx\'] stock in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/GIFPX,jbfrx')
                .end((err, res) => {
                    mutualfund.quote(['gifpx', 'jbfrx'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    })

    describe('.history', () => {
        it('should return valid of history of a mutualfund', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/mutual_fund/GIFPX')
                .end((err, res) => {
                    mutualfund.history('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a mutualfund for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/mutual_fund/GIFPX')
                .end((err, res) => {
                    mutualfund.history('gifpx')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/mutual_fund/GIFPX?timeseries=5')
                .end((err, res) => {
                    mutualfund.history('GIFPX', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/mutual_fund/GIFPX?timeseries=5&serietype=line')
                .end((err, res) => {
                    mutualfund.history('GIFPX', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/mutual_fund/GIFPX?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    mutualfund.history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            mutualfund.history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            mutualfund.history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });

    describe('.dividend_history', () => {
        it('should return valid of history of a mutualfund', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_dividend/GIFPX')
                .end((err, res) => {
                    mutualfund.dividend_history('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a mutualfund for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_dividend/GIFPX')
                .end((err, res) => {
                    mutualfund.dividend_history('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_dividend/GIFPX?timeseries=5')
                .end((err, res) => {
                    mutualfund.dividend_history('GIFPX', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_dividend/GIFPX?timeseries=5&serietype=line')
                .end((err, res) => {
                    mutualfund.dividend_history('GIFPX', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_dividend/GIFPX?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    mutualfund.dividend_history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            mutualfund.dividend_history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            mutualfund.dividend_history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });

    describe('.split_history', () => {
        it('should return valid of history of a mutualfund', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_split/GIFPX')
                .end((err, res) => {
                    mutualfund.split_history('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a mutualfund for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_split/GIFPX')
                .end((err, res) => {
                    mutualfund.split_history('GIFPX')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_split/GIFPX?timeseries=5')
                .end((err, res) => {
                    mutualfund.split_history('GIFPX', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_split/GIFPX?timeseries=5&serietype=line')
                .end((err, res) => {
                    mutualfund.split_history('GIFPX', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/stock_split/GIFPX?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    mutualfund.split_history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            mutualfund.split_history('GIFPX', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            mutualfund.split_history('ZGUSD', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });
});