export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const returnObject = {
        status: 200,
        body: 'Success',
      };
      resolve(returnObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
