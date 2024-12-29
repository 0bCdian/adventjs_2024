export function createFrame(names: string[]): string {
  if (names.length < 1) throw new Error("Empty array");
  const sortedNames = names.toSorted((a, b) => {
    return b.length - a.length;
  });

  const width = sortedNames.at(0)?.length!;
  let innerString = "";
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    const leftPad = "* ";
    const rightPad = " *";
    const spaces = " ".repeat(width - currentName.length);
    const line = leftPad + currentName + spaces + rightPad + "\n";
    innerString = innerString.concat(line);
  }
  const topLine = "*".repeat(width + 4);
  const result = topLine.concat("\n", innerString.concat(topLine));
  return result;
}
