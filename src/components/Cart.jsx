import defaultImage from "../assets/3.jpg";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg md:text-4xl">
        <h1 className="text-red-500">Your Cart is Currently empty</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="mt-5 text-2xl font-medium text-center text-rose-950">
        Your Cart
      </h1>
      {cartItems.map((item) => {
        const { id, image, price, title } = item;
        return (
          <article className="h-auto p-3 " key={id}>
            <div className="m-1 mx-auto flex max-w-[1400px] items-center justify-around gap-2 rounded-lg bg-gray-50 p-3 shadow-my_shadow md:justify-between md:px-5 ">
              <div className="flex items-center gap-5">
                <div className="w-32 h-32 rounded-lg ">
                  <img
                    src={image || defaultImage}
                    alt="random-image"
                    className="object-cover w-full h-full border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 ">
                  <h1 className="text-base font-medium text-rose-950">
                    {title}
                  </h1>

                  <p className="font-bold text-green-600 ">${price}</p>
                  <button className="self-start text-red-600">Remove</button>
                </div>
              </div>
              <div className="flex items-center self-end gap-3 px-4 mb-3 bg-white rounded-lg shadow-my_shadow">
                <button className="flex items-center justify-center ">
                  <GrFormSubtract className="scale-[1.2]" />
                </button>
                <p className="text-base font-medium ">1</p>
                <button className="flex items-center justify-center ">
                  <GrFormAdd className="scale-[1.2] " />
                </button>
              </div>
            </div>
          </article>
        );
      })}
      <Footer />
    </>
  );
};
export default Cart;
