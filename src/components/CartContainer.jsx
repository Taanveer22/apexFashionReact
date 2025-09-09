import Info from "./Info";
import Task from "./Task";

const CartContainer = ({ handleActiveButton, isActive }) => {
  // console.log(handleActiveButton);
  // console.log(isActive);
  return (
    <div>
      <h1 className="text-4xl font-bold">Cartcontainer </h1>
      <div className="flex items-center justify-between">
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
      {isActive.info ? <Info></Info> : <Task></Task>}
    </div>
  );
};

export default CartContainer;
