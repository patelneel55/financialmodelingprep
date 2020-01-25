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

        it('undefined stock value should return valid data', (done) => {
            stock().profile()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });

        it('empty stock value should return valid data', (done) => {
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

        it('undefined stock value should return valid data', (done) => {
            stock().profile()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });

        it('empty stock value should return valid data', (done) => {
            stock('').profile()
                .then((response) => {
                    expect(response).to.have.status(404);
                    done();
                })
                .catch(done);
        });
    })
});