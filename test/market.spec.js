'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const market = require('../lib/market');

describe('.market', () => {
    describe('.mostactive', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/actives')
                .end((err, res) => {
                    market.mostactive()
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
                    market.mostactive('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.mostgainer', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/gainers')
                .end((err, res) => {
                    market.mostgainer()
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
                    market.mostgainer('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.mostloser', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/losers')
                .end((err, res) => {
                    market.mostloser()
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
                    market.mostloser('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });

    describe('.sectorperformance', () => {
        it('should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/sectors-performance')
                .end((err, res) => {
                    market.sectorperformance()
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
                    market.sectorperformance('invalid')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });
});