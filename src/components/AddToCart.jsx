import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Cart from "./Cart";

const AddToCart = () => {
  const {
    state: { cart },
    dispatch,
  } = StateContextCustom();

  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  // const increasePrice = (price) => {
  //   setMainTotal(mainTotal + price);
  // };

  const increasePrice = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreasePrice = (price) => {
    setMainTotal(mainTotal - price);
  };

  const total = () => cart.reduce((pv, cv) => pv + cv.price, 0);

  return (
    <>
      {cart?.length === 0 ? (
        <div className=" mt-20 mb-20">
          <h1 className=" text-3xl text-center font-serif">
            You haven't bought any products yet!
          </h1>
          <Link to={"/"}>
            <div className=" flex justify-center mt-5">
              <button className="px-4 py-1 rounded-lg shadow font-bold text-white bg-blue-400">
                Buy
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <div className=" mt-20 mb-20">
          <div className=" flex flex-col  items-center justify-center ">
            {cart?.map((item) => {
              return (
                <Cart
                  key={item.id}
                  item={item}
                  increasePrice={increasePrice}
                  decreasePrice={decreasePrice}
                />
              );
            })}
          </div>
          <hr className=" w-[60%] mx-auto" />
          <div className=" w-[40%] mx-auto items-center flex justify-around ">
            <h1 className=" text-xl font-bold">Total</h1>
            <p className=" font-bold text-green-600">${mainTotal}</p>
          </div>
          <div className=" flex justify-center mt-5">
            <button>
              <h1
                className=" bg-red-400 px-2 py-1 rounded shadow"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Clear Cart
              </h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
