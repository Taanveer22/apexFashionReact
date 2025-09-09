import Info from "./Info";
import Task from "./Task";

const CartContainer = ({
  handleActiveButton,
  isActive,
  selectedProducts,
  handleDeleteButton,
}) => {
  // console.log(handleActiveButton);
  // console.log(isActive);
  // console.log(selectedProducts);
  // console.log(handleDeleteButton);
  return (
    <div className="w-full sm:w-2/5">
      <h1 className="text-4xl font-bold mb-5 text-center">Cartcontainer </h1>
      <div className="flex items-center justify-between m-5">
        <button
          onClick={() => handleActiveButton("info-button")}
          className={`${isActive.info ? "btn btn-success" : "btn"}`}
        >
          Info
        </button>
        <button
          onClick={() => handleActiveButton("task-button")}
          className={`${isActive.info ? "btn" : "btn btn-success"}`}
        >
          Task
        </button>
      </div>
      {isActive.info ? (
        <Info
          handleDeleteButton={handleDeleteButton}
          selectedProducts={selectedProducts}
        ></Info>
      ) : (
        <Task></Task>
      )}
    </div>
  );
};

export default CartContainer;
