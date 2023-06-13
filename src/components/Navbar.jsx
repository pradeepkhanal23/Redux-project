import { SiRedux } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="w-full">
      <header className="flex items-center justify-between px-10 py-5 text-white bg-primary md:py-3">
        <div className="flex items-center justify-center gap-4">
          <p className="hidden text-lg font-bold md:block">Store-X</p>
          <SiRedux className="scale-[1.7] " />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/products" className="text-lg">
            Products
          </Link>
          <Link to="/cart" className="text-lg">
            Cart
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineShoppingCart className="relative scale-[2]" />
          <div className="absolute flex items-center justify-center w-5 h-5 p-3 font-bold bg-white rounded-full right-5 top-1 text-primary">
            <p>{amount}</p>
          </div>
        </div>
      </header>
      <Outlet />
    </nav>
  );
};
export default Navbar;
