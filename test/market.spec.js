'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const market = require('../lib/market');

describe('.market', () => {
    describe('.most_active', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/actives')
                .end((err, res) => {
                    market.most_active()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/actives')
                .end((err, res) => {
                    market.most_active('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.most_gainer', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/gainers')
                .end((err, res) => {
                    market.most_gainer()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/gainers')
                .end((err, res) => {
                    market.most_gainer('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.most_loser', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/losers')
                .end((err, res) => {
                    market.most_loser()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/losers')
                .end((err, res) => {
                    market.most_loser('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.sector_performance', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/sectors-performance')
                .end((err, res) => {
                    market.sector_performance()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/sectors-performance')
                .end((err, res) => {
                    market.sector_performance('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.trading_hours', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/is-the-market-open')
                .end((err, res) => {
                    market.trading_hours()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('invalid parameter should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/is-the-market-open')
                .end((err, res) => {
                    market.trading_hours('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });
});