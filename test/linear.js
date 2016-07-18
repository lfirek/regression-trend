"use strict";

const linear = require('./../src/types/linear');
const should = require('should');
const fs = require('fs');

describe("REGRESSION - LINEAR", function () {

    let data, data2, regression;

    before(function () {
        data = JSON.parse(fs.readFileSync('./test/data/linear.json', 'utf8'));
        data2 = JSON.parse(fs.readFileSync('./test/data/linear-trend.json', 'utf8'));
    });

    it("trend", function () {
        let i;
        for (i = 0; i < 10; i++) {
            linear.trend({ a: 0, b: 1 }, i).should.be.eql(i);
        }
    });

    it("generate", function () {

        regression = linear.generate(data);
        regression.should.have.property('equation');
        regression.should.have.property('points');
        regression.should.have.property('pattern');

    });

    it("generate with trend", function () {

        regression = linear.generate(data2);
        regression.should.have.property('equation').which.is.a.Object();
        regression.should.have.property('points').which.is.a.Array();
        regression.should.have.property('pattern').which.is.a.String();
        regression.pattern.should.be.eql("y = -1 + 1 * x");
        regression.equation.a.should.be.eql(-1);
        regression.equation.b.should.be.eql(1);

    });

});