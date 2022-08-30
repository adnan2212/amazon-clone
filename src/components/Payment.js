/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import { db } from "./firebase";
import "./Payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // generate the client secret then call stripe to set up the payment intents and display the payment form to the user to complete the payment process
    /*  
      
      const response = await fetch(
        `/payment/create?total=${getBasketTotal(basket)}`
      );

      */
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits (e.g. pence in GBP)
        url: `/payments/create?total=${getBasketTotal(basket) * 1}`,
      });

      //   const { clientSecret } = await response.json();
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  console.log("The secret is >>>>>>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "CLEAR_BASKET",
        });
        navigate("/orders", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setProcessing(false);
      });
  };

  /* const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      setProcessing(false);
      setSucceeded(true);
      console.log({ paymentMethod });
    } else {
      setError(error);
    } */

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>
              <span>Address: </span>
              <span>Reactjs</span>
            </p>
            <p>
              <span>City: </span>
              <span>Reactjs</span>
            </p>
            <p>
              <span>State: </span>
              <span>Reactjs</span>
            </p>
            <p>
              <span>ZipCode: </span>
              <span>Reactjs</span>
            </p>
          </div>
        </div>

        {/* Payment section - Review Item  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Payment section -  Payment method */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />

                <button disabled={disabled || processing || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>

                {/* Error */}
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
