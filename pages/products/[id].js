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
  CircularProgress,
  Container,
  Button,
} from "@material-ui/core";
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

import { makeStyles } from "@material-ui/styles";

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
  const classes = useStyles();

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
              component="p"
              className={classes.cardDescription}
            />
 <div>
              <FormControl required className={classes.formControl}>
                <InputLabel htmlFor="scent">{variantGroup[0].name}</InputLabel>
                <Select
                  className={classes.select}
                  displayEmpty
                  onChange={handleScent}
                  value={variant1Info}
                  name="scent"
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
                <InputLabel htmlFor="size">{variantGroup[1].name}</InputLabel>
                <Select
                  displayEmpty
                  className={classes.select}
                  onChange={handleSize}
                  value={variant2Info}
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
                to={"/products"}
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
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </main>
    </>
  );
};

export default Details;
