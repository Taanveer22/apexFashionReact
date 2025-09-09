const SingleProduct = ({ element, handleSelectedProducts }) => {
  // console.log(element);
  const { image, title, price, description } = element;
  return (
    <div>
      <div className="card bg-slate-300 shadow-sm m-5">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-full h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 90)}</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Price : {price} $</button>
            <button
              onClick={() => handleSelectedProducts(element)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
