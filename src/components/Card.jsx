import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../features/counterSlice";
import { Link } from "react-router-dom";

function Card({ title, description, image, price, id }) {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false);

  const handleCart = (id) => {
    if (!cart) {
      dispatch(addToCart({ id, title, description, image, price }));
    } else {
      dispatch(removeToCart(id));
    }
    setCart((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in"
      >
        <h2 className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">
          {title.split(" ").slice(0, 10).join(" ") + "..."}
        </h2>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
        <Link to="/">
          <img src={image} alt={title} className="h-[180px]" />
        </Link>
        <h2 className="text-xl font-bold">${price}</h2>
        {cart ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={() => handleCart(id)}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={() => handleCart(id)}
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
