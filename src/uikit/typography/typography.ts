import { TypographyProps } from "@material-ui/core";
import { ReactElement } from "react";

interface ITypographyProps extends TypographyProps {
  children: ReactElement | string | number
}

export type { ITypographyProps }
