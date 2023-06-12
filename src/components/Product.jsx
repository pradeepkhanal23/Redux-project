/* eslint-disable react/prop-types */
import defaultImage from "../assets/3.jpg";
const Product = (product) => {
  console.log(product);
  const { image, price, title } = product;
  return (
    <section>
      <div className="overflow-hidden rounded shadow-my_shadow ">
        <div className="flex items-center justify-center w-full h-full border-2">
          <img
            className="object-cover w-full h-full p-2 rounded"
            style={{ height: "300px", width: "auto" }}
            src={image || defaultImage}
          />
        </div>
        <div className="flex flex-col items-center ">
          <div className="mb-1 font-bold text-rose-950">{title}</div>

          <p className="text-gray-700 ">${price}</p>
        </div>
        <div className="flex items-center justify-center px-6 py-4">
          <button className="px-4 py-2 font-bold text-white rounded bg-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};
export default Product;
