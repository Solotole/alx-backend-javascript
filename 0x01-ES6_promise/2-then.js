export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const returnObject = {
        status: 200,
        body: 'success',
      };
      console.log('Got a response from the API');
      resolve(returnObject);
    } else {
      reject(new Error());
    }
  });
}
