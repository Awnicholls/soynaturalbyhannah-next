import { commerce } from "../src/lib/commerce";
import { useCartDispatch } from "../context/cart";
import { Typography, Button } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
  const [open, setOpen] = React.useState(false);

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart.remove(id).then(handleUpdateCart);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
  const handleMaxItems = () => {
    setOpen(true);
  }

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : handleRemoveItem();
  };

  const incrementQuantity = () => {
    quantity < 10
      ? commerce.cart
          .update(id, { quantity: quantity + 1 })
          .then(handleUpdateCart)
      : handleMaxItems();
  };

  return (
    <div>
      <div>
        <Image
          src={media.source}
          alt={name}
          //   layout="fill"
          loading="eager"
          priority={true}
          width={350}
          height={250}
        />
      </div>
      <div>
        <div>
          <Typography variant="p">{name}</Typography>
        </div>
        <div>
          {hasVariants && (
            <Typography variant="p">
              {selected_options.map(({ group_name, option_name }, index) => (
                <React.Fragment key={index}>
                  <div>
                    {`${group_name}:`}
                    {` ${option_name}`}
                  </div>
                </React.Fragment>
              ))}
            </Typography>
          )}
        </div>

        <div>
          <div>{line_total.formatted_with_symbol}</div>
          <div>
            <div>
              <span>Quantity:</span>
              <div>
                <Button
                  onClick={decrementQuantity}
                  type="button"
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  -
                </Button>
                <span> {quantity} </span>
                <Button
                  onClick={incrementQuantity}
                  type="button"
                  size="small"
                  variant="outlined"
                  color="secondary"
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <Button
                onClick={handleRemoveItem}
                type="button"
                size="small"
                variant="contained"
                color="secondary"
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Max items for this product reached"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        /> 
    </div>
  );
};

export default CartItem;
