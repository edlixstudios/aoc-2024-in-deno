export async function splitInput(): Promise<[number[], number[], number]> {
  const input = (await Deno.readTextFile("input.txt")).split("\n");

  const left = input.map((line) => parseInt(line.split("   ")[0], 10));
  const right = input.map((line) => parseInt(line.split("   ")[1], 10));

  return [left, right, input.length];
}
