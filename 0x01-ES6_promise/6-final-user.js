import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, secondName, fileName) {
  return Promise.allSettled([signUpUser(firstName, secondName), uploadPhoto()])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
}
