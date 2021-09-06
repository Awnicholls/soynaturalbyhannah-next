import { commerce } from "../../src/lib/commerce";
import Product from "../../components/products/Product";
export const getStaticProps = async () => {
  const { data } = await commerce.products.list();
  return {
    props: { products: data },
  };
};

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="flex-start" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
