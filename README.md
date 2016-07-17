# Regression Trend
Library for creating regression and trend from requested data set.

## Supported Regression Types

* Linear
* Power

## Quick Start

### Input data looks
Data pattern must looks like [point,value] 

``
data = [[1,10],[2,15]..[10,50]];
``

If you want see predictable values use null for value

``
data = [[1,10],[2,15]..[10,50],[11,null];
``

Predictable value can be everywhere

``
data = [[1,10],[2,null]..[10,50];
``

or

``
data = [[1,null],[2,15]..[10,50];
``

or

``
data = [[1,null],[2,null],[3,20]..[10,50];
``

Try not use zero value for point but if you need just do it

### Example output data

````
{ 
  equation: { a: -1, b: 1 },
  points: [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ],
  pattern: 'y = -1 + 1 * x'
}
````

### Generate regression and trend for requested point

You can use data not in order

````
var regression = require('regression-trend');
var inputData = [[1,1],[2,5],[3,6],[5,20],[11,50]];

var output = regression.generate(inputData);
````

You can create predictable values for selected points

``
var value = regression.trend(output.equation,10);
``

### Generate regression for another type

You can create regression for another type default type of regression is linear

List of all types is in

``
regression.TYPES
``

Setting other type than default

``
regression.setType(regression.TYPES.linear);
``