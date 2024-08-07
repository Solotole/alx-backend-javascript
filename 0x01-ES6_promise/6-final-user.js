import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => (
      result.status === 'fulfilled'
        ? { status: 200, value: result.value }
        : { status: 'rejected', value: result.reason }
    )));
}
