import React from "react";
import Image from "next/image";

import { commerce } from "../src/lib/commerce";
import { useCartDispatch } from "../context/cart";

function CartItem({ id, media, name, quantity, line_total, selected_options }) {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;
console.log(selected_options)
  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
;

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)

      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
;

  return (
    <div className="py-3 md:py-4  flex md:items-end space-x-3 md:space-x-4  border-b border-black">
      <div className="w-24 h-24 md:w-48 md:h-48  rounded relative">
        <Image
          src={media.source}
          alt={name}
          layout="fill"
          className="object-cover rounded-lg"
          loading="eager"
          priority={true}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-end flex-grow">
        <div className="md:flex-grow">
          <p className="font-serif text-xl md:text-2xl  italic leading-none">
            {name}
          </p>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name, group_name }, index) => (
                <React.Fragment key={index}>
                  <p className="font-bold">
                  {`${group_name}: `}
                  </p>
                  <p className="italic">
                  {option_name}
                  </p>

                </React.Fragment>
              ))}
            </p>
 )}
        </div>
        <div className="flex flex-col items-start md:items-end justify-between flex-grow">
          <div className="text-lg md:text-xl">
            {line_total.formatted_with_symbol}
          </div>
          <div className="w-full flex md:flex-col items-center md:items-end justify-between">
            <div className="md:pb-4  inline-flex items-center">
              <span className="pr-2">Quantity:</span>
              <button
                onClick={decrementQuantity}
                className="appearance-none inline-flex items-center justify-center rounded-lg border border-black w-5 h-5 text-xs text-black focus:outline-none hover:bg-black hover:text-white transition"
              >
                -
              </button>
              <span className="px-2 md:text-lg">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="appearance-none inline-flex items-center justify-center rounded-lg border border-black w-5 h-5 text-xs text-black focus:outline-none hover:bg-black hover:text-white transition"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleRemoveItem}
                className="appearance-none bg-pink inline-flex items-center justify-center rounded-lg border border-black text-xs text-white px-1 h-5 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none transition"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
