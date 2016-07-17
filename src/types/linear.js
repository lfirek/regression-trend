"use strict";

function generate(data) {
    let equation, n, sumX, sumY, sumXY, sumPowX, aveY, aveX;

    equation = {
        a: 0,
        b: 0
    };

    n = sumX = sumY = sumXY = sumPowX = aveY = aveX = 0;
    let i;

    for (i = 0; i < data.length; i++) {

        if (data[i][1] !== null) {
            n++;
            sumX += data[i][0];
            sumY += data[i][1];
            sumXY += data[i][0] * data[i][1];
            sumPowX += Math.pow(data[i][0],2);

        }
    }
    aveY = sumY / n;
    aveX = sumX / n;
    equation.b = (n * sumXY - sumX * sumY) / (n * sumPowX - sumX * sumX);
    equation.a = aveY - equation.b * aveX;

    for (i = 0; i < data.length; i++) {
        data[i][1] = trend(equation, data[i][0]);
    }

    return {
        equation: equation,
        points: data,
        pattern: "y = " + equation.a + " + " + equation.b + " * x"
    };
}

function trend(equation, point) {
    return equation.a + equation.b * point;
}

module.exports = { generate, trend };