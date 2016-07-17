"use strict";

const regressions = {
    linear: require('./types/linear'),
    power: require('./types/power')
};

const TYPES = {
    linear: "linear",
    power: "power"
};
let type = TYPES.linear;

function setType(newType) {
    let bool = false;
    Object.keys(TYPES).forEach(function (k) {
        if (TYPES[k] === newType) {
            type = TYPES[k];
            bool = true;
            return;
        }
    });

    return bool;
}

function generate(data) {

    return regressions[type].generate(data);
}

function trend(equation, point) {
    return regressions[type].trend(equation, point);
}

module.exports = { setType, generate, trend, TYPES };