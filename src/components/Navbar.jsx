import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { TbBrandAmongUs } from "react-icons/tb";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import "./navbar.css";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = StateContextCustom();
  console.log(cart);

  return (
    <div className="navbar bg-base-100 justify-around items-center p-5 shadow-lg">
      <Link to={"/"}>
        <div className="flex-1 ">
          <h1 className="btn btn-ghost normal-case text-center font-serif text-2xl">
            <TbBrandAmongUs className=" text-3xl mr-1" /> PARADISE
          </h1>
        </div>
      </Link>
      <div className=" flex gap-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          className="w-16 lg:w-32 bg-transparent outline-none text-blue-700 border-b-2 border-b-blue-600"
        />
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle ">
              <Link to={"/addtocart"}>
                <div className="indicator relative">
                  <BsCart4 className="text-4xl text-blue-800" />
                  <span className=" bg-red-600 rounded-full bottom-5 flex justify-center items-center align-middle left-6 text-center text-white w-5 h-5 absolute">
                    {cart.length}
                  </span>
                </div>
              </Link>
            </label>
          </div>
        </div>
      </div>

      {/* <div className=" flex justify-around p-6 shadow-xl items-center navbar">
      <Link to={"/"}>
         <h1 className=" title text-3xl font-bold text-blue-700">PARADISE</h1>
       </Link>
      <div className=" flex gap-6">
         <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          className="w-16 lg:w-32 bg-transparent outline-none text-blue-700 border-b-2 border-b-blue-600"
        />
        <div className="relative ">
          <BsCart4 className=" text-4xl text-blue-800" />
          <span className=" bg-red-600 rounded-full bottom-5 left-6 text-center text-white w-6 h-6 absolute">
            0
          </span>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Navbar;
