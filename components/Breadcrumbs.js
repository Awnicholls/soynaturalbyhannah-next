import { useCheckoutState } from "../context/checkout";
import { useModalDispatch } from "../context/modal";

function Breadcrumbs({ inCart }) {
  const { currentStep } = useCheckoutState();
  const { showCart } = useModalDispatch();

  if (inCart) {
    return <span className="text-lg md:text-xl">Shopping Bag</span>;
  }

  if (currentStep === "success") {
    return <span className="text-lg md:text-xl">Order received</span>;
  }

  return (
    <div className="space-x-3">
      {currentStep === "shipping" && (
        <>
          <span onClick={showCart} className="text-lg md:text-xl cursor-pointer">
            Shopping Bag
          </span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Shipping</span>
          <span className="text-lg md:text-xl opacity-50">&rarr;</span>
          <span className="text-lg md:text-xl opacity-50">Payment</span>
        </>
      )}
      {currentStep === "billing" && (
        <>
          <span onClick={showCart} className="text-lg md:text-xl cursor-pointer">
            Shopping Bag
          </span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Shipping</span>
          <span className="text-lg md:text-xl">&rarr;</span>
          <span className="text-lg md:text-xl">Payment</span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
