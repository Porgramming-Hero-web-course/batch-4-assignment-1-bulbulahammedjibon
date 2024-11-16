function Sum(arr: number[]): number {
  const length: number = arr.length;
  let sum: number = 0;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }

  return sum;
}
 
