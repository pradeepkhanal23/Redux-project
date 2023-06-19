import defaultImage from "../assets/3.jpg";
// import { GrFormAdd, GrFormSubtract } from "react-icons/gr";

import { openModal } from "../features/modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../features/cart/cartSlice";

const Cart = () => {
  const { cartItems, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg md:text-4xl">
        <h1 className="text-red-500">Your Cart is Currently empty</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="mt-5 text-2xl font-medium text-center uppercase text-rose-950">
        Items in the Bag
      </h1>
      {cartItems.map((item) => {
        const { id, image, price, title } = item;
        return (
          <div
            key={id}
            className="m-3 mx-auto flex h-auto w-[90%] flex-col items-center justify-around overflow-hidden rounded p-3 shadow-my_shadow md:flex-row"
          >
            <div className="flex h-auto w-[200px] items-center justify-center rounded-lg">
              <img
                className="object-cover w-full h-full p-3 "
                src={image || defaultImage}
                alt={title}
              />
            </div>
            <div className="flex flex-col items-center ">
              <div className="px-2 mb-1 text-lg font-bold text-center text-rose-950">
                {title}
              </div>
              <p className="text-xl font-bold text-green-600 ">${price}</p>
            </div>
            <div className="flex items-center ">
              <button
                className="px-6 py-1 mr-2 text-lg text-red-700 rounded-lg shadow-my_shadow"
                onClick={() => {
                  dispatch(removeItem(id));
                  if (cartItems.length < 1) {
                    dispatch(clearCart);
                  }
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-center my-10">
        <button
          className="px-10 py-2 text-xl text-white bg-red-500 rounded-md"
          onClick={() => dispatch(openModal())}
        >
          Clear All
        </button>
      </div>
    </>
  );
};
export default Cart;
