import Product from "./Product";

const Products = () => {
  return (
    <section className="w-full h-full">
      <h1 className="mt-3 text-xl font-bold text-center uppercase text-rose-950">
        Your Cart
      </h1>
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
};
export default Products;
