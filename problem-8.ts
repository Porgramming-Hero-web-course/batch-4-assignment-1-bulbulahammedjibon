{
  function validateKeys<T extends { hasOwnProperty: any }>(
    obj: T,
    keys: (keyof T)[]
  ): boolean {
    // const [a, b] = keys;
    // console.log(a, b, obj);

    // console.log(keys.length);
    const checkWhich = keys.map((a) => {
      let check = obj.hasOwnProperty(a);
      //   console.log(check);
      if (check) {
      } else {
        return false;
      }
      return true;
    });

    // console.log(checkWhich);
    const k = checkWhich.includes(false);
    return !k;

    //   const sp = p.hasOwnProperty(a);
    //   return sp;
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //   console.log(
  //     validateKeys({ name: "Alice", age: 25, email: "alice@example.com" }, [
  //       "age",
  //       "name",
  //     ]),
  //     "final"
  //   );
}
