{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile(
    obj: Required<Profile>,
    updateProfileObj: Partial<Profile>
  ) {
    return {
      ...obj,
      ...updateProfileObj,
    };
  }

 
}
