import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__info__title">{props.title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <img src={props.image} alt="" />

        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
