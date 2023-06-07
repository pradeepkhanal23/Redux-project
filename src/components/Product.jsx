import defaultImage from "../assets/3.jpg";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
const Product = () => {
  return (
    <article className="max-w-[350px] shadow-xl mx-auto flex flex-col p-2">
      <div className="w-full h-full mx-auto">
        <img
          src={defaultImage}
          alt="cart-item"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1 text-xs text-center ">
        <h2 className="font-bold ">Title</h2>
        <div className="flex items-center justify-center gap-2 font-bold text-gray-700 ">
          <button>
            <GrFormSubtract className="text-base bg-gray-200 rounded-full" />
          </button>
          <span>1</span>
          <button>
            <GrFormAdd className="text-base bg-gray-200 rounded-full" />
          </button>
        </div>
        <span className="font-bold text-gray-700 ">$120</span>

        <button className="self-center px-2 py-1 mb-2 text-white bg-red-500 rounded-sm w-[60%]">
          Remove
        </button>
      </div>
    </article>
  );
};
export default Product;
