const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const stock = require('../lib/stock');

describe('.stock', () => {
    describe('.profile', () => {
        it('should be 4 when 2+2 is called', (done) => {
            // chai.request('https://financialmodelingprep.com/api/v3')
            // .get('/company/profile/AAPL')
            // .end((err, res) => {
            //     stock('AAPL').quote().then((response) => {
            //         ///expect(response).to.deep.equal(res);
            //         // assert.equal(2+2, 5);
            //         // done()
            //     }).catch((err)=>console.log(err));
            //     // assert.equal(2+2, 5);
            //     // done()
            // });
            // assert.equal(2+2, 4);
            // stock('MSFT').quote().then(res => {
                
            //     expect(2+2).to.equal(4);
            //     done();
            // })
            chai.request('https://financialmodelingprep.com/api/v3')
            .get('/company/profile/AAPL')
            .end((err, res) => {
                stock('MSFT').quote()
                .then((response) => {
                    expect(2+2).to.equal(5);
                    done();
                })
                .catch(err => done(err));
            })
            
        })
    })
})