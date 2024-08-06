export default function signUpUser(firstName, lastName) {
  const returnObject = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(returnObject);
  });
}
