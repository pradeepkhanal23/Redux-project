import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const url = "https://fakestoreapi.com/products?limit=5";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(url);

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <section className="grid items-center w-full grid-cols-1 gap-10 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.length ? (
        <>
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default Products;
