[![Build Status](https://travis-ci.org/lfirek/regression-trend.svg?branch=master)](https://travis-ci.org/lfirek/regression-trend)
# Regression Trend
Library for creating regression and trend from requested data set.

## Supported Regression Types

* Linear
* Power

## Quick Start

### Input data looks
Data pattern must looks like ``{ x: point, y: value}``

``
data = [{x:1,y:10},{x:2,y:15}..{x:10,y:50}];
``

If you want see predictable values use null for value

``
data = [{x:1,y:10},{x:2,y:15}..{x:10,y:50},{x:11,y:null}];
``

Predictable value can be everywhere

``
data = [{x:1,y:10},{x:2,y:null}..{x:10,y:50},{x:11,y:null}];
``

or

``
data = [{x:1,y:null},{x:2,y:null}..{x:10,y:50},{x:11,y:150}];
``

Try not use zero value for x,y but if you need just do it

### Example output data

````
{ equation: { a: -1, b: 1 },
  points: 
   [ { x: 1, y: 0 },
     { x: 2, y: 1 },
     { x: 3, y: 2 },
     { x: 4, y: 3 },
     { x: 5, y: 4 } ],
  pattern: 'y = -1 + 1 * x' }
````

### Generate regression and trend for requested point

You can use data not in order

````
var regression = require('regression-trend');
var inputData = [{x:1,y:10},{x:2,y:15},{x:10,y:50}];

var output = regression.generate(inputData);
````

You can create predictable values for selected points

``
var value = regression.trend(output.equation,5);
``

### Generate regression for another type

You can create regression for another type default type of regression is linear

List of all types is in

``
regression.TYPES
``

Setting other type than default

``
regression.setType(regression.TYPES.power);
``