import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const signIn = async (idToken) => {
  return await axios({
    method: "post",
    url: `${baseUrl}/signIn`,
    data: { idToken: idToken },
  })
    .then(function (response) {
      return response.data.data;
    })
    .catch((error) => {
      console.log("error");
      return [];
    });
};

export default signIn;
