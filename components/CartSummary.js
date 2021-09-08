import { useCartState } from "../context/cart";
import { ShoppingCart } from "@material-ui/icons";
import Link from "../src/Link";
import { IconButton, Badge } from "@material-ui/core";

const CartSummary = () => {
  const { total_unique_items } = useCartState();

  return (
    <IconButton
      component={Link}
      naked
      href="/products"
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