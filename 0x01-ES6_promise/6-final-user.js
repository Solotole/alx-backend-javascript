import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, secondName, fileName) {
  return Promise.all([signUpUser(), uploadPhoto()])
    .then((result) => {
      console.log(result);
    });
}
