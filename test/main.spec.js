'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const fmp = require('../index');

describe('blackbox test', () => {
    it('should test happy path for stock', (done) => {
        fmp.stock('AAPL').quote()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for market', (done) => {
        fmp.market.trading_hours()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for forex', (done) => {
        fmp.forex('USD', 'EUR').rate()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for crypto', (done) => {
        fmp.crypto.quote('BTC')
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for search', (done) => {
        fmp.search('Microsoft Corporation')
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for commodities', (done) => {
        fmp.commodities.list()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for etf', (done) => {
        fmp.etf.list()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });

    it('should test happy path for mutual funds', (done) => {
        fmp.mutualfund.list()
                .then((response) => {
                    expect(response).to.not.be.empty
                    done();
                })
                .catch(done);
    });
})
