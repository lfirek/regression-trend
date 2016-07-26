"use strict";

function generate(data) {
    let equation, n, sumX, sumY, sumXY, sumPowX, aveY, aveX, pointsArray;

    pointsArray = [];
    
    equation = {
        a: 0,
        b: 0
    };

    n = sumX = sumY = sumXY = sumPowX = aveY = aveX = 0;
    let i;

    for (i = 0; i < data.length; i++) {

        if (data[i].y !== null) {
            n++;
            sumX += data[i].x;
            sumY += data[i].y;
            sumXY += data[i].x * data[i].y;
            sumPowX += Math.pow(data[i].x,2);
        }
    }
    aveY = sumY / n;
    aveX = sumX / n;
    equation.b = (n * sumXY - sumX * sumY) / (n * sumPowX - sumX * sumX);
    equation.a = aveY - equation.b * aveX;

    for (i = 0; i < data.length; i++) {
        pointsArray.push(
            {
                x: data[i].x,
                y: trend(equation, data[i].y)
            }
        );
    }

    return {
        equation: equation,
        points: pointsArray,
        pattern: "y = " + equation.a + " + " + equation.b + " * x"
    };
}

function trend(equation, point) {
    return equation.a + equation.b * point;
}

module.exports = { generate, trend };