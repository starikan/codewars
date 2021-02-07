/**
 * Remove normal sequences of ascend ints in source array with sorted.
 * Numbers on edges is potential numbers that we must find
 * @param {*} input
 * @param {*} sort
 */
const removeSequence = (input, sort) => {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === sort[i]) {
      input[i] = null;
    }
  }
  return input.filter((v) => v !== null);
};

function orderBreaker(input) {
  const sorted = [...input].sort((x, y) => Math.sign(x - y));
  const inputMod = removeSequence([...input], [...sorted]);

  const [a, b] = [inputMod[0], inputMod[inputMod.length - 1]];

  const [idxA, idxB] = [input.findIndex((v) => v === a), input.findIndex((v) => v === b)];
  const [prevA, prevB] = [input[idxA - 1], input[idxB - 1]];
  const [nextA, nextB] = [input[idxA + 1], input[idxB + 1]];

  // Check if sequence starts with wrong number
  if (idxA === 0 && a > nextA) return a;
  if (idxB === 0 && b > nextB) return b;

  // Check fluctuation
  if ((prevA < a && a > nextA) || (prevA > a && a < nextA)) return a;
  if ((prevB < b && b > nextB) || (prevB > b && b < nextB)) return b;

  // Check if sequence ends with wrong number
  if (idxA === input.length - 1 && a < prevA) return a;
  if (idxB === input.length - 1 && b < prevB) return b;

  return NaN;
}

const run = () => {
  const tests = [
    [[1, 3, 2], 3],
    [[19, 27, 33, 34, 112, 578, 116, 170, 800], 578],
    [[0, -10], 0],
    [[1, 2, 3, 4, -1], -1],
    [[1, 2, 0, 3, 4], 0],
    [[2, 1], 2],
    [[15, 0], 15],
    [[1, 0, 2], 1],
    [[-11, 5, 0, 3, 4], 5],
    [[-11, -5, 0, -2, 4], 0],
    [[5, 7, 6, 8, 9, 10], 7],
    [[1, 2, 3, 4, 17, 5, 6, 7, 8], 17],
    [[105, 110, 111, 112, 114, 113, 115], 114],
    [[1001, 991, 992, 993, 994, 995, 996], 1001],
  ];

  for (test of tests) {
    if (orderBreaker(test[0]) !== test[1]) {
      debugger;
    }
  }
  console.log('Done');
};

run();
