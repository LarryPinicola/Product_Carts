import React, { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { StateContextCustom } from "../context/StateContext";

const Cart = ({ item, increasePrice, decreasePrice }) => {
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = StateContextCustom();

  const addQty = () => {
    setQuantity(quantity + 1);
    increasePrice(item.price);
  };

  const removeQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreasePrice(item.price);
    }
  };

  const singlePrice = item.price * quantity;

  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreasePrice(singlePrice);
  };

  return (
    <div className=" lg:flex mb-8 justify-around gap-20 items-center shadow-lg w-[80%] bg-gray-300 p-5 rounded-lg">
      <div className=" flex gap-9 ">
        <img
          src={item.thumbnail}
          alt=""
          className=" w-[100px] object-cover rounded-lg "
        />
        <div className="">
          <h1 className=" font-serif text-lg text-gray-700">
            {item.title.substring(0, 20)}...
          </h1>
          <h1 className=" text-green-600 font-semibold">
            ${singlePrice.toFixed(2)}
          </h1>
          <p
            className=" mt-5 font-bold cursor-pointer text-red-700"
            onClick={delBtn}
          >
            Remove
          </p>
        </div>
      </div>
      <div className=" lg:flex lg:flex-col lg:items-center flex mt-4 gap-3">
        <p onClick={addQty} className=" cursor-pointer">
          <MdKeyboardArrowUp className=" text-2xl text-green-600" />
        </p>
        <div className=" select-none font-bold text-purple-500">{quantity}</div>
        <p onClick={removeQty} className=" cursor-pointer">
          <MdKeyboardArrowDown className=" text-2xl text-green-600" />
        </p>
      </div>
    </div>
  );
};

export default Cart;
