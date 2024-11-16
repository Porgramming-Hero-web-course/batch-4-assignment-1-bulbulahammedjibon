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

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
