import React from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import "./product.css";

const Product = (props) => {
  const { id, title, thumbnail, price, description } = props;
  const { dispatch } = StateContextCustom();

  return (
    <div className=" bg-gray-400 pdCard card w-80 shadow-xl p-2">
      <figure>
        <img
          src={thumbnail}
          alt=""
          className="rounded-lg mb-0 w-[150px] h-[150px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.substring(0, 25)}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <p className=" truncate text-sm">{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
            className=" font-semibold rounded-lg px-2 mr-1 py-1 bg-blue-600 text-white shadow-lg"
          >
            ADD TO CART
          </button>
          <Link to={`/detail/${id}`}>
            <button className=" font-semibold rounded-lg px-2 py-1 bg-blue-600 text-white shadow-lg">
              DETAIL
            </button>
          </Link>
        </div>
      </div>
    </div>

    // <div className="  w-72 shadow-lg rounded-lg flex flex-col p-4 border-b-4 border-t-4 border-blue-400">
    //   <img
    //     src={image}
    //     alt=""
    //     className=" card-title rounded-lg mb-2 w-[150px] h-[150px] object-cover"
    //   />
    //   <div className="">
    //     <h1 className=" text-gray-500 font-serif text-2xl font-semibold">
    //       {title.substring(0, 25)}
    //     </h1>
    //     <p className=" truncate w-20">{description}</p>
    //     <p className=" font-bold">${price}</p>
    //   </div>
    //   <div className=" text-center align-middle items-center">
    //     <button className=" rounded-lg px-3 mr-2 py-2 bg-blue-600 text-white shadow-lg">
    //       ADD TO CART
    //     </button>
    //     <button className=" rounded-lg px-3 py-2 bg-blue-600 text-white shadow-lg">
    //       DETAIL
    //     </button>
    //   </div>
    // </div>
  );
};

export default Product;
