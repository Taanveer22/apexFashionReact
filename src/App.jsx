import { useState } from "react";
import AllProducts from "./components/AllProducts";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    info: true,
    status: "active",
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  const handleActiveButton = (status) => {
    if (status === "info-button") {
      setIsActive({
        info: true,
        status: "info-button-active",
      });
    } else {
      setIsActive({
        info: false,
        status: "task-button-active",
      });
    }
  };
  // console.log(isActive);

  const handleSelectedProducts = (element) => {
    console.log(element);
    const isExist = selectedProducts.find(
      (existElement) => existElement.id === element.id
    );
    if (isExist) {
      alert("product already added");
    } else {
      // alert("successfully product added");
      handleIncreasePrice(element.price);
      const newSelectedProducts = [...selectedProducts, element];
      setSelectedProducts(newSelectedProducts);
    }
  };
  // console.log(selectedProducts);

  const handleDeleteButton = (clickedId) => {
    // console.log(id);
    handleDecreasePrice(clickedId);
    const remainingSelectedProducts = selectedProducts.filter(
      (element) => element.id !== clickedId
    );
    setSelectedProducts(remainingSelectedProducts);
  };

  const handleIncreasePrice = (price) => {
    // console.log(price);
    setCartPrice(price + cartPrice);
  };

  const handleDecreasePrice = (id) => {
    console.log(id);
    const product = selectedProducts.find((pro) => pro.id === id);
    let productPrice = product.price;
    setCartPrice(cartPrice - productPrice);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar
        cartPrice={cartPrice}
        selectedProducts={selectedProducts}
      ></Navbar>
      <div className="flex justify-between">
        <AllProducts
          handleSelectedProducts={handleSelectedProducts}
        ></AllProducts>
        <CartContainer
          handleDeleteButton={handleDeleteButton}
          selectedProducts={selectedProducts}
          handleActiveButton={handleActiveButton}
          isActive={isActive}
        ></CartContainer>
      </div>
    </div>
  );
}

export default App;
