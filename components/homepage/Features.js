
import {
  Paper,
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import { EcoTwoTone } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 250,
  },
}));
const Features = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content} component="section" id="features">
      <div className={classes.title}>
        <Typography component="h1" variant="h5">
          About Us
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h6">
              <EcoTwoTone style={{ color: green[500], fontSize: 50 }} />
            </Typography>
            <Typography component="h2" variant="h6">
              Eco-Friendly
            </Typography>
            <Typography component="h3" variant="body1">
              All our packaging is entirely eco-friendly
              <br /> and designed to protect the planet
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <Image src="/handmade.png" alt="handmade icon" height={50} width={50} />
            <Typography component="h2" variant="h6">
              Handmade
            </Typography>
            <Typography component="h3" variant="body1">
              All our candles and melts are hand-poured <br /> using 100%
              natural soy wax, <br /> which is vegan and biodegradable{" "}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <Image src="/ukicon.png" alt="UK icon" height={50} width={50} />
            <Typography component="h2" variant="h6">
              Made In the U.K.
            </Typography>
            <Typography component="h3" variant="body1">
              All of our products and materials <br /> are locally sourced and
              packed locally
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
          <Image src="/giftbox.png" alt="giftbox icon" height={50} width={50} />
            <Typography component="h2" variant="h6">
              Gift options avaiable
            </Typography>
            <Typography component="h3" variant="body1">
              Orders are packed on demand, <br /> so gift options and notes are
              avaible! <br /> Just add them to the note section on checkout
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
