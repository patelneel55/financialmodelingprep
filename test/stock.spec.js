'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const stock = require('../lib/stock');

describe('.stock', () => {
    describe('.profile', () => {
        it('AAPL stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/profile/AAPL')
                .end((err, res) => {
                    stock('AAPL').profile()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })

        });

        it('[\'AAPL,MSFT\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/profile/AAPL,MSFT')
                .end((err, res) => {
                    stock(['AAPL', 'MSFT']).profile()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'aapl\' in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/profile/AAPL')
                .end((err, res) => {
                    stock('aapl').profile()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'AAPL,MSFT\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/profile/AAPL,MSFT')
                .end((err, res) => {
                    stock('AAPL,MSFT').profile()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('undefined stock value should return 404 error', (done) => {
            stock().profile()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });

        it('empty stock value should return 404 error', (done) => {
            stock('').profile()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });
    });

    describe('.quote', () => {
        it('AAPL stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/AAPL')
                .end((err, res) => {
                    stock('AAPL').quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })

        });

        it('[\'AAPL,MSFT\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/AAPL,MSFT')
                .end((err, res) => {
                    stock(['AAPL', 'MSFT']).quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'aapl\' in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/AAPL')
                .end((err, res) => {
                    stock('aapl').quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/AAPL,MSFT')
                .end((err, res) => {
                    stock(['aapl', 'msft']).quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'AAPL,MSFT\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/quote/AAPL,MSFT')
                .end((err, res) => {
                    stock('AAPL,MSFT').quote()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('undefined stock value should return 404 error', (done) => {
            stock().quote()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });

        it('empty stock value should return 404 error', (done) => {
            stock('').quote()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });
    });

    describe('.rating', () => {
        it('AAPL stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/rating/AAPL')
                .end((err, res) => {
                    stock('AAPL').rating()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })

        });

        it('[\'AAPL,MSFT\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/rating/AAPL,MSFT')
                .end((err, res) => {
                    stock(['AAPL', 'MSFT']).rating()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'aapl\' in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/rating/AAPL')
                .end((err, res) => {
                    stock('aapl').rating()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/rating/AAPL,MSFT')
                .end((err, res) => {
                    stock(['aapl', 'msft']).rating()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'AAPL,MSFT\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/company/rating/AAPL,MSFT')
                .end((err, res) => {
                    stock('AAPL,MSFT').rating()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('undefined stock value should return 404 error', (done) => {
            stock().rating()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });

        it('empty stock value should return 404 error', (done) => {
            stock('').rating()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });
    });

    describe('.currentprice', () => {
        it('AAPL stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/AAPL')
                .end((err, res) => {
                    stock('AAPL').currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })

        });

        it('[\'AAPL,MSFT\'] stock should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/AAPL,MSFT')
                .end((err, res) => {
                    stock(['AAPL', 'MSFT']).currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'aapl\' in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/AAPL')
                .end((err, res) => {
                    stock('aapl').currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('[\'aapl\', \'msft\'] in lowercase should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/AAPL,MSFT')
                .end((err, res) => {
                    stock(['aapl', 'msft']).currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('\'AAPL,MSFT\' should return valid data', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/AAPL,MSFT')
                .end((err, res) => {
                    stock('AAPL,MSFT').currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('undefined stock value should return all price values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price')
                .end((err, res) => {
                    stock().currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });

        it('empty stock value should return all price values', (done) => {
            chai.request('https://financialmodelingprep.com/api/v3')
                .get('/stock/real-time-price/')
                .end((err, res) => {
                    stock('').currentprice()
                        .then((response) => {
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
        });
    });
});