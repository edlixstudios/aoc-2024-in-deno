// Split the input into two arrays, one for the left side and one for the right side.

import { splitInput } from "./split-input.ts";

const [left, right] = await splitInput();

export function starTwoResult() {
  const multiple: number[] = [];

  left.forEach((entry) => {
    const amount = right.filter((e) => e === entry).length;
    multiple.push(amount * entry);
  });

  return multiple.reduce((acc, curr) => acc + curr, 0);
}
