import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Amazon Echo (3rd generation) –
            New Black Echo Spot – with
            built-in
            Alexa, Charcoal"
            price={4999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="2"
            title="New Apple iPad Pro (12.9-inch,
            Wi-Fi, 128GB) - Silver (4th
            generation)"
            price={7999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="The Lean Startup:How Constant
            Innovation Creates Radically Successful
            Businesses Paperback"
            price={999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="4"
            title="Kenwood kMix Stand Mixer for
            Baking,Stylish Kitchen Mixer with
            K-beater,Dough Hook and Whisk,5Litre
            Glass Bowl"
            price={1599}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Samsung LC49RG90SSUXEN 49'
            Curved LED Gaming Monitor
            - Super Ultra Wide Dual WQHD
            4K"
            price={10900}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Amazon Echo (3rd generation) –
            New Black Echo Spot – with
            built-in
            Alexa, Charcoal"
            price={399}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="7"
            title="New Apple iPad Pro (12.9-inch,
            Wi-Fi, 128GB) - Silver (4th
            generation)"
            price={7999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
