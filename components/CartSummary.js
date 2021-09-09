import { useCartState } from "../context/cart";
import { ShoppingCart } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import { useModalDispatch } from "../context/modal";

const CartSummary = () => {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <IconButton
      onClick={openModal}
      aria-label="Show cart items"
      color="inherit"
    >
      <Badge badgeContent={total_unique_items} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}

export default CartSummary;