function countWordOccurrences(sen: string, word: string): number {
  const arrSplit: string[] = sen.split(" ");
  let count: number = 0;

  arrSplit.map((s) => {
    if (word === s) {
      count++;
    }
  });

  return count;
}

const l = countWordOccurrences("I love typescript", "typescript");
console.log(l);
