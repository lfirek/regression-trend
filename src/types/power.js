"use strict";

function generate(data) {
    let equation, n, sumX, sumY, sumXY, sumPowX, pointsArray;

    pointsArray = [];

    equation = {
        a: 0,
        b: 0
    };

    n = sumX = sumY = sumXY = sumPowX = 0;
    let i;

    for (i = 0; i < data.length; i++) {

        if (data[i].y !== null && data[i].y !== 0 && data[i].x !== 0) {
            n++;
            sumX += Math.log(data[i].x);
            sumY += Math.log(data[i].y);
            sumXY += Math.log(data[i].x) * Math.log(data[i].y);
            sumPowX += Math.pow(Math.log(data[i].x), 2);
        }
    }

    equation.b = (n * sumXY - sumX * sumY) / (n * sumPowX - sumX * sumX);
    equation.a = Math.pow(Math.E, (sumY - equation.b * sumX) / n);

    for (i = 0; i < data.length; i++) {
        pointsArray.push(
            {
                x: data[i].x,
                y: trend(equation, data[i].x)
            }
        );
    }

    return {
        equation: equation,
        points: pointsArray,
        pattern: 'y = ' + equation.a + ' * x^' + equation.b
    };
}

function trend(equation, point) {
    return equation.a * Math.pow(point, equation.b);
}

module.exports = { generate, trend };