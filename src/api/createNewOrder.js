import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const placeNewOrder = async (customerId, productIds) => {
  return await axios({
    method: "post",
    url: `${baseUrl}/createNewOrder`,
    data: {
      customerId: customerId,
      productsArray: productIds,
    },
  })
    .then(function (response) {
      return {
        msg: "order has been created",
        status: true,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return { msg: "could not create order", status: false, data: {} };
    });
};

export default placeNewOrder;
