{
  type Person = { name: string; age: number };

  function getProperty<T, K extends keyof T>(person: T, key: K): T[K] {
    return person[key];
  }

  
}
