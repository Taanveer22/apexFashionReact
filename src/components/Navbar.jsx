import { FaShoppingCart } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

const Navbar = ({ selectedProducts, cartPrice }) => {
  // console.log(selectedProducts);
  // console.log(cartPrice);
  return (
    <div className="flex justify-between items-center my-5 text-2xl font-bold text-green-500">
      <h1>Apex Fashion</h1>
      <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>
          <FaShoppingCart />
        </li>
        <li>{selectedProducts.length}</li>
        <li>
          <HiCurrencyDollar />
        </li>
        <li>{cartPrice}</li>
      </ul>
    </div>
  );
};

export default Navbar;
