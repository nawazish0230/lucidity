import { CardProps } from "@mui/material";
import { ReactElement } from "react";

interface ICardProps extends CardProps{
  children: ReactElement
}

export type { ICardProps }
