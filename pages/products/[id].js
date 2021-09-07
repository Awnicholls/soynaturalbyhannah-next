import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useCartDispatch } from "../../context/cart";
import { commerce } from "../../src/lib/commerce";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { AddShoppingCart } from "@material-ui/icons";
import Link from "../../src/Link";

export const getStaticPaths = async () => {
  const { data } = await commerce.products.list();
  const paths = data.map((product) => {
    return {
      params: { id: product.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const product = await commerce.products.retrieve(id, { type: "id" });

  return {
    props: { product },
  };
};


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: "100%",
    width: 260,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 260,
    },
  },
  cardContent: {
    flexDirection: "column",
  },
  cardDescription: {
    width: 500,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  grow: {
    flexGrow: 1,
  },
  formControl: {
    marginBottom: theme.spacing(1),
    width: "55%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  cardActions: {
    justifyContent: "flex-start",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const Details = ({ product }) => {
  const [scents, setScents] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variant1, setVariant1] = useState();
  const [variant2, setVariant2] = useState();
  const [variant1GroupId, setVariant1GroupId] = useState("");
  const [variant2GroupId, setVariant2GroupId] = useState("");
  const [hasError1, setHasError1] = useState(false);
  const [hasError2, setHasError2] = useState(false);
  const [open, setOpen] = React.useState(false);
const {setCart} = useCartDispatch()


  const classes = useStyles();
// console.log(product.variant_groups[0].name);

useEffect(() => {
  let finalScentArray = product.variant_groups[0].options.map((option) => {
    let scentInfo = {};
    scentInfo.key = option.name;
    scentInfo.text = option.name;
    scentInfo.value = option.id;
    return scentInfo;
  });
  setScents(finalScentArray);
}, [product]);
  
useEffect(() => {
  let finalSizeArray = product.variant_groups[1].options.map((option) => {
    let sizeInfo = {};
    sizeInfo.key = option.name;
    sizeInfo.text = option.name;
    sizeInfo.value = option.id;
    sizeInfo.price = option.price.formatted_with_symbol;
    return sizeInfo;
  });
  setSizes(finalSizeArray);
}, [product]);

useEffect(() => {
  let finalVariantObject = product.variant_groups.map((variant_group) => {
    let variantGroups = {};
    variantGroups.id = variant_group.id;
    variantGroups.name = variant_group.name;
    return variantGroups;
  });
  setVariant1GroupId(finalVariantObject[0].id);
  setVariant2GroupId(finalVariantObject[1].id);

}, [product]);

const handleVariant1 = (e) => {
  setVariant1(e.currentTarget.getAttribute("data-value"));
};


const handleVariant2 = (e) => {
  setVariant2(e.currentTarget.getAttribute("data-value"));
};

const handleAddToCart = () => {
  setHasError1(false);
  setHasError2(false);

  if (variant1 === "") {
    setHasError1(true);
  }
  if (variant2 === "") {
    setHasError2(true);
  }

  const variantObject = {
    [variant1GroupId]: variant1,
    [variant2GroupId]: variant2,
  };
  if (variant1 && variant2) {
    setOpen(true);
    commerce.cart
    .add(product.id, 1, variantObject)
    .then(({cart}) => {
      setCart(cart);
      console.log(cart)
      return cart
    })
  }

};

const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
        <div className={classes.toolbar} />
      <main className={classes.content}>

        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent className={classes.cardContent}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.cardDescription}
            />
 <div>
               <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="scent">{product.variant_groups[0].name}</InputLabel>
                <Select
                  className={classes.select}
                  displayEmpty
                  name="scent"
                  value={variant1 || ""}
                  onChange={handleVariant1}
                  error={hasError1}

                >
                  {scents.map((scent) => {
                    return (
                      <MenuItem
                        key={scent.key}
                        name={scent.text}
                        value={scent.value}
                      >
                        {scent.text}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="size">{product.variant_groups[1].name}</InputLabel>
                <Select
                  displayEmpty
                  className={classes.select}
                  value={variant2 || ""}
                  onChange={handleVariant2}
                  name="size"
                  error={hasError2}

                >
                  {sizes.map((size) => {
                    return (
                      <MenuItem
                        key={size.key}
                        name={size.text}
                        value={size.value}
                      >
                        {size.text} ({size.price})
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl> 
            </div>
            <CardActions disableSpacing className={classes.cardActions}>
              <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                component={Link}
                href={"/products"}
              >
                Back to Products
              </Button> 
              <div className={classes.grow} />

               <Button
                color="primary"
                variant="contained"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                aria-label="Add to Cart"
                className={classes.button}
              >
                Add to Checkout
              </Button>
            </CardActions>
          </CardContent>
        </Card>
         <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Added to Cart"
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
      </main>
    </>
  );
};

export default Details;
