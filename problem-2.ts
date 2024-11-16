function duplicate(arr: number[]): number[] {
  const removeDuplicates: number[] = arr.filter(
    (value, index) => arr.indexOf(value) === index
  );

  return removeDuplicates;
}

console.log(duplicate([1, 2, 2, 3, 4, 4, 5]));
