import { makeStyles } from "@material-ui/core";
import { colors } from "theme/colors";

const useStyles = makeStyles(() => ({
  modalContainer: {
    backgroundColor: colors.modalBgColor,
  },
  modalHeading: {
    color: colors.whiteColor
  },
  modalCross: {
    color: colors.primaryColor,
    cursor: 'pointer',
  },
  modalTitle: {
    color: colors.whiteColor,
    marginTop: 0.5,
  },
  modalInput: {
    width: '48%',
    padding: 2,
  },
}));

export default useStyles;
