const Info = ({ selectedProducts, handleDeleteButton }) => {
  // console.log(selectedProducts);
  // console.log(handleDeleteButton);
  return (
    <div>
      {selectedProducts.map((item) => (
        <div>
          <div className="flex justify-between items-center m-5">
            <img className="w-12" src={item.image} />
            <h1 className="text-base font-semibold">{item.title}</h1>
            <p className="text-base font-medium">{item.price} $</p>
            <button
              onClick={() => handleDeleteButton(item.id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
