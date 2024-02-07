import { makeStyles } from "@material-ui/core";
import type { ComponentType } from "react";

const useStyles = makeStyles(() => ({
  loader: {
    width: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
}));

const Loader: ComponentType = () => {
  const classes = useStyles();
  return <div className={classes.loader}>Loading....</div>;
};

export default Loader;
