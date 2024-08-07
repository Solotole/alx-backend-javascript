import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const returnObject = {
    photo: null,
    user: null,
  };

  try {
    const upload = await uploadPhoto();
    returnObject.photo = upload;
  } catch (err) {
    returnObject.photo = null;
  }

  try {
    const user = await createUser();
    returnObject.user = user;
  } catch (err) {
    returnObject.user = null;
  }
  return returnObject;
}
