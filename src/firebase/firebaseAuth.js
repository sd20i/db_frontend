import { firebase } from "./firebaseConfig";

// sign out user
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      return {};
    })
    .catch(function (error) {
      return error;
    });
};

const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return await firebase.auth().signInWithPopup(provider);
};

export { googleLogin, signOut };
