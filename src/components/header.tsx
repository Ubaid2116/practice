import React from "react";
import { AiOutlineDown, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <div className="relative">
      <div className="bg-black p-3 flex justify-center items-center">
        <p className="text-white text-sm font-medium">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer hover:text-white transition duration-300">
            Sign Up Now
          </span>
        </p>
        <AiOutlineClose className="text-white absolute right-3 cursor-pointer mr-8 hover:text-yellow-300 transition duration-300" />
      </div>
      <nav className="bg-white text-black shadow-md flex items-center justify-between px-8 py-4">
        <h1 className="font-extrabold text-4xl ml-8 text-black tracking-wide">
          SHOP.CO
        </h1>
        <ul className="flex space-x-8">
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300 flex items-center">
            Shop
            <AiOutlineDown className="ml-1" />
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            On Sale
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            New Arrivals
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition duration-300">
            Brands
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search for products"
              className="border border-gray-300 rounded-full px-4 py-2 pr-10 w-full focus:ring-2 focus:ring-gray-300 transition duration-300"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-indigo-600 transition duration-300" />
          </div>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer text-black hover:text-indigo-600 transition duration-300" />
          <AiOutlineUser className="text-2xl cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-300" />
        </div>
      </nav>
    </div>
  );
};

export default Header;

