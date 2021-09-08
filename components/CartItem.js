import { commerce } from "../src/lib/commerce";
import { useCartDispatch } from "../context/cart";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";

const CartItem = ({
  id,
  media,
  name,
  quantity,
  line_total,
  selected_options,
}) => {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart.remove(id).then(handleUpdateCart);
  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <div>
      <div>
        <Image
          src={media.source}
          alt={name}
        //   layout="fill"
          loading="eager"
          priority={true}
          width={250} height={250} 
        />
      </div>
      <div>
        <div>
          <p>{name}</p>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div>
          <div>{line_total.formatted_with_symbol}</div>
          <div>
            <div>
              <span>Quantity:</span>
              <Button
                onClick={decrementQuantity}
                type="button"
                size="small"
                variant="outlined"
                color="primary"
              >
                -
              </Button>
              <span className="px-2 md:text-lg">{quantity}</span>
              <Button
                onClick={incrementQuantity}
                type="button"
                size="small"
                variant="outlined"
                color="primary"
              >
                +
              </Button>
            </div>
            <div>
              <Button
                onClick={handleRemoveItem}
                type="button"
                size="small"
                variant="outlined"
                color="primary"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
