interface ITheme {
  palette: {
    primary: { main: string };
    secondary: { main: string };
    background: { main: string };
    common: { white: string }
  };
}

export type { ITheme };
