{
  function validateKeys<T extends { hasOwnProperty: any }>(
    obj: T,
    keys: (keyof T)[]
  ): boolean {
     
    const checkWhich = keys.map((a) => {
      let check = obj.hasOwnProperty(a);
 
      if (check) {
      } else {
        return false;
      }
      return true;
    });

    
    const k = checkWhich.includes(false);
    return !k;

     
  }

 
}
