import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

import "./Order.css";

const Order = (props) => {
  return (
    <div className="order">
      <p>
        {moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>

      <p className="order__id">
        <small>Order ID: {props.order.id}</small>
      </p>

      {props.order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={props.order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Order;
