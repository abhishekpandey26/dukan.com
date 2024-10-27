import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const fethData = async () => {
    try {
      const data = await fetch(url);
      const finalData = await data.json();
      setData(finalData);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fethData();
  }, []);
  return (
    <div>
      <div className="bg-slate-900 relative">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home data={data}></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
