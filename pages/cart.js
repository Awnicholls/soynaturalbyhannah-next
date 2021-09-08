import { Container, Typography, Button, Grid } from "@material-ui/core";
import Link from "../src/Link";
import CartItem from "../components/CartItem.js";
import { useCartState } from "../context/cart";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({}));

const Cart = () => {
  const classes = useStyles();
  const { line_items, subtotal } = useCartState();
  const isEmpty = line_items.length === 0;

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} naked href="/products">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {line_items.map((item) => (
          <Grid item xs={12} sm={2} key={item.id}>
            <CartItem {...item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.checkoutButton}
            component={Link}
            href="/checkout"
            naked
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
