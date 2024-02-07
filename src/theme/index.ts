import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
      light: colors.secondaryColor,
      // light: string;
      // dark: string;
      // contrastText: string;
    },
  },
});

export { theme }
