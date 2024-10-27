import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { removeToCart } from "../features/counterSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl p-6 lg:p-14 mx-auto gap-8">
      {/* Cart Items Container */}
      <div className="flex-1">
        {cart.length === 0 ? (
          <div className="flex flex-col text-center items-center justify-center gap-6">
            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800">
              Your Cart is Empty
            </h2>
            <Link to="/">
              <button className="bg-green-600 border text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-white hover:text-green-600 hover:border-green-600">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 mb-6 gap-6"
            >
              <div className="md:w-1/3 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full object-cover md:w-[80%] lg:w-[70%] shadow-sm"
                />
              </div>
              <div className="flex flex-col justify-between md:w-2/3">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {item.title.split(" ").slice(0, 10).join(" ") + "..."}
                  </h1>
                  <p className="text-gray-600 mb-4">
                    {item.description.split(" ").slice(0, 20).join(" ") + "..."}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg md:text-xl font-semibold text-green-600">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => dispatch(removeToCart(item.id))}
                    className="flex items-center text-red-500 hover:text-red-600 transition duration-200"
                  >
                    <RiDeleteBin7Fill size={24} />
                    <span className="ml-2">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Summary</h1>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-600 mb-2">
            Items in Cart: {cart.length}
          </h2>

          <hr className="my-4" />
          <div className="flex justify-between font-bold text-gray-800">
            <span>Total:</span>
            <span>
              ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </span>
          </div>
          <button
            className="
  px-4 py-2
  sm:px-5 sm:py-3 
  lg:px-6 lg:py-3
  mt-5 sm:mt-7
  bg-green-500 
  border text-white 
  font-bold rounded-full 
  hover:bg-white hover:text-green-500 hover:border-green-500
  transition duration-300 ease-in-out
"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
