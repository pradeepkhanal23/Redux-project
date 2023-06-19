import Product from "./Product.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice.jsx";
import { STATUS_CODES } from "../features/products/productSlice.jsx";

const Products = () => {
  const { status, data } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUS_CODES.LOADING) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        <h1 className="text-primary">Loading Cart Items.....</h1>
      </div>
    );
  }
  if (status === STATUS_CODES.ERROR) {
    return (
      <div className="flex items-center justify-center min-h-screen text-4xl">
        <h1 className="text-red-500">Oops!!! Something went wrong</h1>
      </div>
    );
  }

  return (
    <section className="flex flex-wrap justify-around w-full gap-3 p-3 mx-auto my-10">
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
