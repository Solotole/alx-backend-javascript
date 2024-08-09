import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const [userData, photoData] = await Promise.all([userPromise, photoPromise]);

    return [
      { status: "fulfilled", value: userData },
      { status: "fulfilled", value: photoData },
    ];
  } catch (error) {
    return [{ status: "rejected", value: error.message }];
  }
};

export default handleProfileSignup;
