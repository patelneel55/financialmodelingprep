'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const financial = require('../lib/financial');

describe('.stock', () => {
    describe('.financial', () => {
        describe('.income', () => {
            it('undefined parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/income-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').income()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('empty parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/income-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').income('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('quarter parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/income-statement/AAPL?period=quarter')
                .end((err, res) => {
                    financial('AAPL').income('quarter')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('annual parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/income-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').income('annual')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('invalid parameter should return valid annual data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/income-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').income('dfsgffdsf')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        });

        describe('.balance', () => {
            it('undefined parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/balance-sheet-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').balance()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('empty parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/balance-sheet-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').balance('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('quarter parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/balance-sheet-statement/AAPL?period=quarter')
                .end((err, res) => {
                    financial('AAPL').balance('quarter')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('annual parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/balance-sheet-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').balance('annual')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('invalid parameter should return valid annual data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/balance-sheet-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').balance('dfsgffdsf')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        });

        describe('.cashflow', () => {
            it('undefined parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/cash-flow-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').cashflow()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('empty parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/cash-flow-statement/AAPL')
                .end((err, res) => {
                    financial('AAPL').cashflow('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('quarter parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/cash-flow-statement/AAPL?period=quarter')
                .end((err, res) => {
                    financial('AAPL').cashflow('quarter')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('annual parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/cash-flow-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').cashflow('annual')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('invalid parameter should return valid annual data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financials/cash-flow-statement/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').cashflow('dfsgffdsf')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        });

        describe('.metrics', () => {
            it('undefined parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company-key-metrics/AAPL')
                .end((err, res) => {
                    financial('AAPL').metrics()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('empty parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company-key-metrics/AAPL')
                .end((err, res) => {
                    financial('AAPL').metrics('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('quarter parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company-key-metrics/AAPL?period=quarter')
                .end((err, res) => {
                    financial('AAPL').metrics('quarter')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('annual parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company-key-metrics/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').metrics('annual')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('invalid parameter should return valid annual data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company-key-metrics/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').metrics('dfsgffdsf')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        });

        describe('.growth', () => {
            it('undefined parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-statement-growth/AAPL')
                .end((err, res) => {
                    financial('AAPL').growth()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('empty parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-statement-growth/AAPL')
                .end((err, res) => {
                    financial('AAPL').growth('')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('quarter parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-statement-growth/AAPL?period=quarter')
                .end((err, res) => {
                    financial('AAPL').growth('quarter')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('annual parameter should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-statement-growth/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').growth('annual')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });

            it('invalid parameter should return valid annual data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-statement-growth/AAPL?period=annual')
                .end((err, res) => {
                    financial('AAPL').growth('dfsgffdsf')
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        });

        describe('.ratios', () => {
            it('should return valid data', (done) => {
                chai.request('https://financialmodelingprep.com/api/v3')
                .get('/financial-ratios/AAPL')
                .end((err, res) => {
                    financial('AAPL').ratios()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                });
            });
        })
    });
});