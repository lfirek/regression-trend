"use strict";

function generate(data) {
    let equation, n, sumX, sumY, sumXY, sumPowX;

    equation = {
        a: 0,
        b: 0
    };

    n = sumX = sumY = sumXY = sumPowX = 0;
    let i;

    for (i = 0; i < data.length; i++) {

        if (data[i][1] !== null && data[i][1] !== 0 && data[i][0] !== 0 ) {
            n++;
            sumX += Math.log(data[i][0]);
            sumY += Math.log(data[i][1]);
            sumXY += Math.log(data[i][0]) * Math.log(data[i][1]);
            sumPowX += Math.pow(Math.log(data[i][0]), 2);
        }
    }

    equation.b = (n * sumXY - sumX * sumY) / (n * sumPowX - sumX * sumX);
    equation.a = Math.pow(Math.E, (sumY - equation.b * sumX) / n);

    for (i = 0; i < data.length; i++) {
        data[i][1] = trend(equation, data[i][0]);
    }

    return {
        equation: equation,
        points: data,
        pattern: 'y = ' + equation.a + ' * x^' + equation.b
    };
}

function trend(equation, point) {
    return equation.a * Math.pow(point, equation.b);
}

module.exports = { generate, trend };