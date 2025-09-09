import { useState } from "react";

import AllProducts from "./components/AllProducts";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    info: true,
    status: "active",
  });

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

  console.log(isActive);

  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="flex justify-between">
        <AllProducts></AllProducts>
        <CartContainer handleActiveButton={handleActiveButton} isActive={isActive}></CartContainer>
      </div>
    </div>
  );
}

export default App;
