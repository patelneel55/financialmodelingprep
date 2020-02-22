'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const index = require('../lib/index.js');

describe('.market', () => {
    describe('.index', () => {
        describe('.list', () => {
            it('should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                    .get('/symbol/available-indexes')
                    .end((err, res) => {
                        index().list()
                            .then((response) => {
                                expect(res.body).to.eql(response);
                                done();
                            })
                            .catch(done);
                    })
            });
    
            it('invalid parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                    .get('/symbol/available-indexes')
                    .end((err, res) => {
                        index().list()
                            .then((response) => {
                                expect(res.body).to.eql(response);
                                done();
                            })
                            .catch(done);
                    })
            });
        });
    });

    describe('.quote', () => {
        it('should return valid price quote for ^DJI', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/^DJI')
                .end((err, res) => {
                    index().quote('^DJI')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('lowercse \'^dji\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/^DJI')
                .end((err, res) => {
                    index().quote('^dji')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('no parameter should return all index quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/index')
                .end((err, res) => {
                    index().quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty parameter should return all index quotes', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quotes/index')
                .end((err, res) => {
                    index().quote('')
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
                    index().quote('abcd')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'^DJI,^MXX\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/^DJI,^MXX')
                .end((err, res) => {
                    index().quote(['^DJI', '^MXX'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'^dji,^mxx\'] stock in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/^DJI,^MXX')
                .end((err, res) => {
                    index().quote(['^dji', '^mxx'])
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

    });

    describe('.history', () => {
        it('should return valid of history of a index', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/index/^DJI')
                .end((err, res) => {
                    index().history('^DJI')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return valid of history of a index for lowercase values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/index/^DJI')
                .end((err, res) => {
                    index().history('^dji')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/index/^DJI?timeseries=5')
                .end((err, res) => {
                    index().history('^DJI', { limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return only data points until limit in linear graph format', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/index/^DJI?timeseries=5&serietype=line')
                .end((err, res) => {
                    index().history('^DJI', { data_type: 'line', limit: 5 })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return data points between a time interval', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/historical-price-full/index/^DJI?from=2018-03-12&to=2019-03-12')
                .end((err, res) => {
                    index().history('^DJI', { start_date: '2018-03-12', end_date: '2019-03-12' })
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('should return 500 server error between a time interval with a data limit', (done) => {
            index().history('^DJI', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5 })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });

        it('should return 500 server error between a time interval with a data limit for a line graph', (done) => {
            index().history('^DJI', { start_date: '2018-03-12', end_date: '2019-03-12', limit: 5, data_type: 'line' })
                .then((response) => {
                    expect(response).to.have.status(500);
                    done();
                })
                .catch(done);
        });
    });
});