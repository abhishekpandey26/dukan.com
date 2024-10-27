import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
 
  const cart = useSelector((state) => state.counter.value);
  return (
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto relative">
        <div className="ml-5 w-full flex justify-between  ">
          <Link to="/">
            <img className="lg:h-14 md:h-10 h-8" src="logo.png" alt="" />
          </Link>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
            <Link to="/">
              <h1>Home</h1>
            </Link>
            <Link to="/cart">
              <div className="relative ">
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
