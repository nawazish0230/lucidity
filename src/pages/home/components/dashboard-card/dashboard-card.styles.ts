import { makeStyles } from "@material-ui/core";
import { ITheme } from "theme/type";

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    width: '25%',
    borderRadius: 16,
  },
}));

export default useStyles;
