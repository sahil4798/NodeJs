const add = (x, y) => x + y;
const PI = 3.14;
const square = (x) => x * x;

// module.exports = "hiii";
// module.exports.hii = "hiii";

//method-1 for exporting
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// method-2 for exporting
// const math = { add: add, PI: PI, square: square };
// module.exports = math;

// method-4 for exporting
exports.add = add;
exports.PI = PI;
exports.square = square;

//method-3 for exporting
module.exports.cube = (x) => x * x * x;
