/* eslint-disable react/prop-types */
import defaultImage from "../assets/3.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Product = (product) => {
  const { price, title, image } = product;
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex h-auto w-[360px] flex-col items-center  justify-center overflow-hidden rounded shadow-my_shadow">
        <div className="flex h-[330px] w-[350px] items-center justify-center rounded-lg">
          <img
            className="object-cover w-full h-full p-3 "
            src={image || defaultImage}
            alt={title}
          />
        </div>

        <div className="flex flex-col items-center ">
          <div className="px-2 mb-1 font-bold text-center text-rose-950">
            {title}
          </div>
          <p className="font-bold text-green-600 ">${price}</p>
        </div>
        <div className="flex items-center justify-center px-6 py-4">
          <button
            className="px-4 py-2 font-bold text-white rounded bg-primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Product;
