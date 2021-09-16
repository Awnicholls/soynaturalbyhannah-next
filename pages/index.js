import { makeStyles } from "@material-ui/styles";
import Hero from "../components/homepage/Hero";
import Features from "../components/homepage/Features";
import Header from "../components/homepage/Header";
import Example from "../components/homepage/HeaderTest"
import TitleCard from "../components/homepage/TitleCard/TitleCard"
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
    <Hero/>
    <TitleCard/>
     {/* <Header/> */}
     <Example/>
    <Features/>
</>
  )
}
