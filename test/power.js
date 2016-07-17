"use strict";

const power = require('./../src/types/power');
const should = require('should');
const fs = require('fs');

describe("REGRESSION - POWER", function () {

    let data, data2, regression;

    before(function () {
        data = JSON.parse(fs.readFileSync('./test/data/power.json', 'utf8'));
        data2 = JSON.parse(fs.readFileSync('./test/data/power-trend.json', 'utf8'));
    });

    it("trend", function () {
        let i;
        for (i = 0; i < 10; i++) {
            power.trend({ a: 1, b: 1 }, i).should.be.eql(i);
        }
    });

    it("generate", function () {

        regression = power.generate(data);
        regression.should.have.property('equation');
        regression.should.have.property('points');
        regression.should.have.property('pattern');

    });

    it("generate with trend", function () {

        regression = power.generate(data2);
        regression.should.have.property('equation').which.is.a.Object();
        regression.should.have.property('points').which.is.a.Array();
        regression.should.have.property('pattern').which.is.a.String();
        regression.pattern.should.be.eql("y = 1 * x^1");
        regression.equation.a.should.be.eql(1);
        regression.equation.b.should.be.eql(1);

    });

});