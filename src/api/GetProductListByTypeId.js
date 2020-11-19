import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const getProductListByTypeId = async () => {
  return await axios({
    method: "post",
    url: `${baseUrl}/getProductsByProductType`,
  })
    .then(function (response) {
      return response.data.data;
    })
    .catch((error) => {
      console.log("error");
      return [];
    });
};

export default getProductListByTypeId;
