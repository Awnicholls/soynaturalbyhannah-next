import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "../../../src/Link";
import Image from "next/image"
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const TitleCard = () => {
  const classes = useStyles();
  return (
    <Container component="div" maxWidth="xs">
      <div className={classes.paper}>
        <Image src="/logo.png" width={250} height={250} alt="Soy Natural by Hannah logo"/>
        <Typography component="h1" variant="h5">
          SoyNatural By Hannah
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/products"
          className={classes.button}
        >
          Products
        </Button>
      </div>
    </Container>
  );
};

export default TitleCard;
