import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const getOrderByCustomer = async (customerId) => {
  return await axios({
    method: "post",
    url: `${baseUrl}/getOrderByCustomer`,
    data: {
      customerId: customerId,
    },
  })
    .then(function (response) {
      return { msg: "Order by id nad customer", data: response.data };
    })
    .catch((error) => {
      console.log(error);
      return { msg: "could not fetch order", status: false, data: {} };
    });
};

export default getOrderByCustomer;
