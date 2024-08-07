import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, secondName, fileName) {
  return Promise.all([signUpUser(), uploadPhoto()])
    .then((result) => {
      const [user, photo] = result;
      photo.body = fileName;
      user.firstName = firstName;
      user.lastName = secondName;
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
