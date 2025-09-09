import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = ({ handleSelectedProducts }) => {
  // console.log(handleSelectedProducts);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="w-full sm:w-3/5">
      <h1 className="text-4xl font-bold">
        Products available {products.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {products.map((element, index) => (
          <SingleProduct
            element={element}
            key={index}
            handleSelectedProducts={handleSelectedProducts}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
