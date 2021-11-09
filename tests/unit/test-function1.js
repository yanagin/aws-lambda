'use strict';

const app = require('../../sam-app/hello-world/function1.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests function1', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("Hello from Lambda! Function1");
        // expect(response.location).to.be.an("string");
    });
});
