import { makeStyles } from "@material-ui/core";
import { colors } from "theme/colors";

const useStyles = makeStyles(() => ({
  headerLabel: {
    backgroundColor: colors.bgPrimaryColor,
    color: colors.primaryColor,
    padding: 10,
    borderRadius: 8,
  },
}));

export default useStyles;
