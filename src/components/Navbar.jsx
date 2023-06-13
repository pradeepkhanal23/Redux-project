import { useState } from "react";
import { SiRedux } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Products");
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="w-full">
      <header className="flex items-center justify-between px-10 py-5 text-white bg-primary md:py-3">
        <Link to="/">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <p className="hidden text-lg font-bold md:block">Store-X</p>
            <SiRedux className="scale-[1.7] " />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/products"
            className={
              activeButton === "Products" ? "active text-lg" : "text-lg"
            }
            onClick={() => setActiveButton("Products")}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className={activeButton === "Cart" ? "active text-lg" : "text-lg"}
            onClick={() => setActiveButton("Cart")}
          >
            Cart
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/cart">
            <AiOutlineShoppingCart className="relative scale-[2]" />
          </Link>
          <div className="absolute right-5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white p-3 font-bold text-primary">
            <p>{amount}</p>
          </div>
        </div>
      </header>
    </nav>
  );
};
export default Navbar;
