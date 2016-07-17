"use strict";

const regression = require('./../src/regression');
const should = require('should');
const fs = require('fs');

describe("REGRESSION", function () {

    let data, data2,generatedData;

    before(function () {
        data = JSON.parse(fs.readFileSync('./test/data/linear.json', 'utf8'));
        generatedData = regression.generate(data);
    });

    it("setType", function () {

        regression.setType(regression.TYPES.linear).should.be.eql(true);
        regression.setType("none").should.be.eql(false);

    });

    it("generate", function () {

        generatedData.should.have.property('equation').which.is.a.Object();
        generatedData.should.have.property('points').which.is.a.Array();
        generatedData.should.have.property('pattern').which.is.a.String();
        generatedData.pattern.should.be.eql("y = -1 + 1 * x");
        generatedData.equation.a.should.be.eql(-1);
        generatedData.equation.b.should.be.eql(1);
    });


    it("trend", function () {
        let i;
        for (i = 0; i < 10; i++) {
            regression.trend(generatedData.equation, i).should.be.eql(i-1);
        }
    });

});