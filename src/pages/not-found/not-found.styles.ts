import { makeStyles } from "@material-ui/core";
import { colors } from "theme/colors";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.bgPrimaryColor,
    color: colors.whiteColor,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default useStyles;
