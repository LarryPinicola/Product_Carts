import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";

const Detail = () => {
  const { dispatch } = StateContextCustom();
  const [item, setItem] = useState({}); // for detail
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const api = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await api.json();
    setItem(data);
    // console.log(data);
  };

  return (
    <div className=" lg:flex gap-10 w-[80%] mx-auto mt-20 mb-20 items-center ">
      <img
        src={item.thumbnail}
        className=" rounded-lg shadow w-[300px]"
        alt=""
      />
      <div className=" mt-5">
        <div className=" lg:flex items-center">
          <h1 className=" font-bold text-xl">{item.title}</h1>
          <span className=" lg:ml-20 text-center text-sm bg-purple-500 px-1 font-semibold rounded-lg text-yellow-400 ">
            Category : {item.category}
          </span>
        </div>
        <p className=" text-green-600 font-semibold">${item.price}</p>
        <h1 className=" mt-2 text-gray-600">{item.description}</h1>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          className=" mt-5 shadow rounded-lg test-white px-2 py-1 bg-purple-400"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Detail;
