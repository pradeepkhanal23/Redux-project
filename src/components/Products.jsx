import Product from "./Product.jsx";
import useFetch from "./useFetch.jsx";

const url = "https://dummyjson.com/products?limit=5";

const Products = () => {
  const { data } = useFetch(url);

  return (
    <section className="flex flex-wrap justify-around w-full gap-3 p-3 mx-auto">
      {data.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
