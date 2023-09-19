import PropTypes from "prop-types";
const Cart = ({ cart,creditHour,totalPrice,remainingHour }) => {
  console.log(cart);
  return (
    <div className="w-full p-6 bg-[#FFF] rounded-xl shadow-lg">
      <p className="text-lg font-bold text-[#2F80ED] mb-4">
        Credit Hour Remaining {remainingHour} hr
      </p>
      <hr />
      <h1 className="text-xl font-bold mt-4 mb-5">Course Name</h1>
      <div className="flex flex-col mb-4">{cart.map((course, idx) => <p key={idx}>{idx+1}. {course}</p>)}</div>
      <hr />
      <p className="text-base font-medium mb-4 mt-4">Total Credit Hour : {creditHour}</p>
      <hr />
      <p className="text-base font-semibold mb-4 mt-4">
        Total Price : {totalPrice} USD
      </p>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  creditHour: PropTypes.number,
  totalPrice: PropTypes.number,
  remainingHour: PropTypes.number
};
export default Cart;
