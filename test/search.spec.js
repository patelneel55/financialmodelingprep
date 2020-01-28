'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const search = require('../lib/search');

describe('.search', () => { 
    it('single keyword should return valid data', (done) => {
        chai.request('https://financialmodelingprep.com/api/v3')
                .get('/search?query=Microsoft')
                .end((err, res) => {
                    search('Microsoft')
                        .then((response) => {
                            console.log(res.body);
                            console.log(response);
                            expect(res.body).to.eql(response);
                            done();
                        })
                        .catch(done);
                })
    });
});