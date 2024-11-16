function duplicate(arr: number[]): number[] {
  const removeDuplicates: number[] = arr.filter(
    (value, index) => arr.indexOf(value) === index
  );

  return removeDuplicates;
}

 
