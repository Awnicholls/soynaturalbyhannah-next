import { makeStyles } from "@material-ui/styles";
import Hero from "../components/homepage/Hero";
import Features from "../components/homepage/Features";
import Header from "../components/homepage/Header";
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
     <div className={classes.toolbar} />
     <Header/>
    {/* <Hero/> */}
    <Features/>
</>
  )
}
