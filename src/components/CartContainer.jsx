import React from "react";

const CartContainer = ({ handleActiveButton }) => {
  // console.log(handleActiveButton);
  return (
    <div>
      <h1 className="text-4xl font-bold">Cartcontainer </h1>
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleActiveButton("info-button")}
          className="bg-green-500 p-1 m-2"
        >
          Info
        </button>
        <button
          onClick={() => handleActiveButton("task-button")}
          className="bg-red-500 p-1 m-2"
        >
          Task
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
