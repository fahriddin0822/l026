import { FaRegHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Products = ({ data, isAdmin }) => {
  const navigate = useNavigate();

  const handleGetDetails = (id) => {
    navigate(`/product/${id}`); // Navigate to the detail page with the product ID
  };

  const productItems = data?.map((product) => (
    <div
      key={product.id}
      className="product w-full min-w-[262px]"
      onClick={() => handleGetDetails(product.id)}
    >
      <div className="h-[349px] relative overflow-hidden product-image">
        <img
          src={product.image}
          className="w-full h-full object-cover"
          alt={product.name}
        />
        <span className="absolute top-4 left-4 font-medium py-1 px-[14px] rounded shadow bg-white">
          NEW
        </span>
        {isAdmin ? (
          <button
            className="absolute top-btn duration-300 top-[-32px] right-4 bg-white w-8 h-8 rounded-full grid place-items-center"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(product.id);
            }}
          >
            <FaTrashAlt />
          </button>
        ) : (
          <button className="absolute top-btn duration-300 top-[-32px] right-4 bg-white w-8 h-8 rounded-full grid place-items-center">
            <FaRegHeart />
          </button>
        )}
        <button
          className="cart-btn absolute w-[230px] left-4 bottom-[-46px] h-[46px] bg-black text-white font-medium rounded-lg duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product.id);
          }}
        >
          Add to cart
        </button>
      </div>
      <div className="pt-3">
        <div className="flex pb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <h3 className="font-medium line-clamp-2" title={product.name}>
          {product.name}
        </h3>
        <p className="font-medium">${Number(product.price).toLocaleString()}</p>
      </div>
    </div>
  ));

  return (
    <div className="container py-12">
      <p className="mb-12 text-[40px] font-medium">Just in</p>
      <div id="products" className="flex gap-3 overflow-auto">
        {productItems}
      </div>
    </div>
  );
};
export default Products;
