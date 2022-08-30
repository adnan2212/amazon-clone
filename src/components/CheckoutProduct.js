import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {/* <p className="checkoutProduct__quantity">
          <strong>{props.quantity}</strong>
          <span>x</span>
        </p> */}
        {/* <button
          className="checkoutProduct__remove"
          onClick={() => props.removeItem(props.id)}
        >
          &times;
        </button> */}

        {!props.hideButton && (
          <button onClick={removeFromCart}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
