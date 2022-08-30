import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Orders from "./components/Orders";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const promise = loadStripe(
  "pk_test_51Laz4GSEeYNYCOcMdPiyZUDrse5wnLMElGGfl223FKiJ1AJ3l0ZocXEzRUH3vsf89JWDF768c8XQMDJ2guwku8Yr00WO6O8JU4"
);

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log("THE USER IS >>>>> ", user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
