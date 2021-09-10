import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CartSummary from "./CartSummary";
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
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" component={Link} naked href="/">
              Soy Natural by Hannah
            </Typography>

            <div className={classes.grow}/>

            <div>
        <CartSummary/>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
