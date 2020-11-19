"use-strict";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid } from "@material-ui/core/";
import getProductListByTypeId from "../api/GetProductListByTypeId";

function ProductContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const s = useStyles();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getProductListByTypeId();
    setProductsList(products);
  };

  const addProductToList = (item) => {
    return props.addproductToList(item);
  };

  return (
    <div className={s.root}>
      {productsList.map((productType) => {
        return (
          <div className={s.productThing} key={productType.pt_id}>
            <h3 className={s.title}>{productType.pt_name}</h3>

            <Product
              products={productType.Products}
              manufacture={productType.products}
              addProduct={(item) => addProductToList(item)}
            />
          </div>
        );
      })}
    </div>
  );
}

const Product = (props) => {
  const { products } = props;
  const s = useStyles();

  return (
    <Grid container>
      {products.map((productItem, index) => {
        return (
          <Grid item sm={4} md={2} className={s.productItemCon} key={index}>
            <div
              className={s.productItem}
              onClick={() => props.addProduct(productItem)}
            >
              <h4
                className={s.itemText}
              >{`${productItem.p_model_name} - ${productItem.Manufacture.m_name}`}</h4>
              <img
                className={s.thumbnail}
                src={require(`../assets/productImages/${productItem.image}`)}
                alt="product"
              />

              <div className={s.itemText}>
                <h5>{productItem.p_price} ,-</h5>
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "75vw",
    height: "95vh",
    float: "left",
    overflow: "scroll",
  },
  title: { padding: 20 },
  productThing: {
    minHeight: "100%",
    background: "#f8f8f8",
  },
  productItemCon: {
    alignItems: "center",
    margin: 20,
  },
  productItem: {
    width: "100%",
    padding: "10px 5px",
    margin: "0 auto",
    borderRadius: 5,
    background: "#FFF",
    cursor: "pointer",
    border: "1px solid #FFF",
    "&:hover": {
      borderColor: "#CCC",
    },
  },
  itemText: { padding: "5px 0px 5px 5px" },
  thumbnail: { width: "100%" },
}));

ProductContainer.defaultProps = {
  products: [],
};
ProductContainer.propTypes = {
  products: PropTypes.array,
};
