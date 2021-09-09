import { Container, Typography, Button, Grid } from "@material-ui/core";
import Link from "../src/Link";
import CartItem from "./CartItem.js";
import { useCartState, useCartDispatch } from "../context/cart";
import Image from "next/image";
import AddProductSVG from "../svg/undraw_add_to_cart_vkjp.svg"
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  link:{
    textDecoration: 'none' 
  },
  toolbar: theme.mixins.toolbar,

  cartDetails: {
    display: "flex",
    flexDirection: "column",
    // marginTop: '10%',
    width: "100%",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    alignItems: "self-end"
  },

}));

const Cart = () => {
  const classes = useStyles();
  const { line_items, subtotal } = useCartState();
  const isEmpty = line_items.length === 0;
const {gotoCheckout}=useCartDispatch()
  const renderEmptyCart = () => (
    <>
    <Typography variant="subtitle1" gutterBottom>
      You have no items in your shopping cart,
      <Link className={classes.link} naked href="/products">{" "}
        start adding some
      </Link>
      !
    </Typography>
    <Image  src={AddProductSVG} height={500} alt="Adding Products" />
    </>
  );

  if (!line_items) return "Loading";

  const renderCart = () => (
    <>
            <div className={classes.toolbar} />

      <Grid container spacing={3}>
        {line_items.map((item) => (
          <Grid item xs={12} sm={2} key={item.id}>
            <CartItem {...item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
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
            onClick={gotoCheckout}
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
