import { SiRedux } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full">
      <header className="flex items-center justify-between px-10 py-5 text-white bg-primary md:py-3">
        <div className="flex items-center justify-center gap-4">
          <p className="hidden text-lg font-bold md:block">Store-X</p>
          <SiRedux className="scale-[1.7] " />
        </div>

        <div className="flex items-center gap-2">
          <AiOutlineShoppingCart className="relative scale-[2]" />
          <div className="absolute flex items-center justify-center w-5 h-5 p-2 font-bold bg-white rounded-full right-5 top-2 text-primary">
            <p>1</p>
          </div>
        </div>
      </header>
    </nav>
  );
};
export default Navbar;
