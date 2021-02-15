function solution(str) {
  const filled = str.padEnd(str.length + (str.length % 2), '_').match(/.{2}/g) || [];
  return filled;
}

const run = () => {
  const assert = require('assert').strict;
  try {
    assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
  } catch (error) {
    console.log(error.message);
    debugger;
  }
  try {
    assert.deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
  } catch (error) {
    console.log(error.message);
    debugger;
  }
  try {
    assert.deepEqual(solution(''), []);
  } catch (error) {
    console.log(error.message);
    debugger;
  }
};

run();
