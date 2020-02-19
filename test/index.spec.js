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
});