// Split the input into two arrays, one for the left side and one for the right side.

import { splitInput } from "./split-input.ts";

const [left, right, length] = await splitInput();

export function starOneResult() {
  const distance = [];

  for (let i = 0; i < length; i++) {
    const smallestLeft = Math.min(...left);
    const smallestLeftIndex = left.indexOf(smallestLeft);

    const smallestRight = Math.min(...right);
    const smallestRightIndex = right.indexOf(smallestRight);

    left.splice(smallestLeftIndex, 1);
    right.splice(smallestRightIndex, 1);
    distance.push(Math.abs(smallestLeft - smallestRight));
  }

  return distance.reduce((acc, curr) => acc + curr, 0);
}
