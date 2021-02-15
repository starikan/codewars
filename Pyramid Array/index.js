function pyramid(n) {
  const filled = Array(n).fill(0).map((_, i) => Array(i + 1).fill(1));
  return filled;
}

const run = () => {
  const assert = require('assert').strict;
  try {
    assert.deepStrictEqual(pyramid(0), []);
  } catch (error) {
    debugger;
  }
  try {
    assert.deepStrictEqual(pyramid(1), [[1]]);
  } catch (error) {
    console.log(error.message)
    debugger;
  }
  try {
    assert.deepStrictEqual(pyramid(2), [[1], [1, 1]]);
  } catch (error) {
    console.log(error.message)
    debugger;
  }
  try {
    assert.deepStrictEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]);
  } catch (error) {
    console.log(error.message)
    debugger;
  }
};

run();
