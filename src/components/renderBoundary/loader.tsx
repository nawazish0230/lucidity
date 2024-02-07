import { makeStyles } from "@material-ui/core";
import type { ComponentType } from "react";
import LoaderGif from './loaders.gif'

const useStyles = makeStyles(() => ({
  loader: {
    height: 400,
    width: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderImg: {
    width: 300,
    height: 300,
  }
}));

const Loader: ComponentType = () => {
  const classes = useStyles();
  return <div className={classes.loader}><img src={LoaderGif} alt="loader" className={classes.loaderImg} /></div>;
};

export default Loader;
