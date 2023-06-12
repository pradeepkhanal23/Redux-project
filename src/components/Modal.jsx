const Modal = () => {
  return (
    <div className="hidden modal ">
      <div className="h-48 bg-white w-96 ">
        <h1 className="mt-8 text-lg text-center">
          Remove All Items from the cart?
        </h1>
        <div className="flex items-center justify-around w-full px-5 mx-auto my-8 rounded-lg">
          <button className="px-8 py-1 font-bold uppercase border-2 border-primary text-primary shadow-my_shadow">
            Confirm
          </button>
          <button className="px-8 py-1 font-bold text-red-500 uppercase border-2 border-red-500 shadow-my_shadow">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
