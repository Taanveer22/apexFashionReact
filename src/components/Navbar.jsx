import React from "react";

const Navbar = ({ selectedProducts }) => {
  return (
    <div className="flex justify-between items-center my-5 text-2xl font-bold text-green-500">
      <h1>Apex Fashion</h1>
      <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>Products</li>
        <li>Cart Added {selectedProducts.length}</li>
        <li>Price $</li>
      </ul>
    </div>
  );
};

export default Navbar;
