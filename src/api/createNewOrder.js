import { axios } from "axios";

const createNewOrder = (customer, products) => {
  axios({
    method: "post",
    url: `${baseUrl}/"/createNewOrder"`,
    data: {
      customer: customer,
      productsArray: products,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default createNewOrder;
