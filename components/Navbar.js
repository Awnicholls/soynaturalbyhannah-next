import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart } from "@material-ui/icons";
// import Link from "next/link";
import Link from '../src/Link';


const useStyles = makeStyles({
title: {
  textDecoration: "none",
},
grow:{
flexGrow: 1,
},
appBar: {
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
},
});
const Navbar = () => {

const classes = useStyles();
  return (
    <>
      <div>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" component={Link} naked href="/">
              Soy Natural by Hannah
            </Typography>
            <div className={classes.grow}/>

            <div>
                <IconButton component={Link} naked href="/products" aria-label="Show cart items" color="inherit">
                  <Badge color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
