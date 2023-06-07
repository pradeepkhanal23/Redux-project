import Product from "./Product";

const Products = () => {
  return (
    <div className="">
      <div>
        <h1 className="mt-2 text-base font-bold text-center uppercase">
          Your Cart
        </h1>
      </div>
      <section className="grid gap-1 p-2 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        <Product />
      </section>

      <hr />
      <footer className="mt-2 text-center">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <span className="text-base font-bold"> Total</span>
          <p className="text-base  text-white bg-[#764abc]  px-2 rounded-sm">
            $1234.22
          </p>
        </div>
        <div></div>
        <button className="self-center px-4 py-2 mb-2 text-white bg-[#764abc] rounded-sm w-[200px] mt-10 ">
          Clear Cart
        </button>
      </footer>
    </div>
  );
};
export default Products;
