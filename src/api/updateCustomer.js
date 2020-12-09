import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const updateCustomer = async (customer, idToken) => {
  return await axios({
    method: "post",
    url: `${baseUrl}/updateuser`,
    data: {
      customer: customer,
      idToken: idToken,
    },
  })
    .then(function (response) {
      return { msg: "Informations updated" };
    })
    .catch((error) => {
      console.log("error");
      return { msg: "An error has occured" };
    });
};

export default updateCustomer;
