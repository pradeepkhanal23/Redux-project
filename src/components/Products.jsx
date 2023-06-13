import Product from "./Product.jsx";
import useFetch from "./useFetch.jsx";

const url = "https://fakestoreapi.com/products?limit=10";

const Products = () => {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl">
        <h1 className="text-primary">Loading Cart Items.....</h1>
      </div>
    );
  }
  if (error) {
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
