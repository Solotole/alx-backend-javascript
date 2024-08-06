export default function uploadPhoto(fileName) {
  // const fileName = filename;

  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
