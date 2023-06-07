import { SiRedux } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className=" flex items-center justify-between w-full px-10 py-2 text-white bg-[#764abc]">
        <header className="flex items-center gap-2">
          <p className="hidden md:block">Store-X</p>
          <SiRedux className="text-base" />
        </header>

        <div className="flex items-center gap-1">
          <AiOutlineShoppingCart className="text-base" />
          <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
            <p className="font-bold text-purple-700">1</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
