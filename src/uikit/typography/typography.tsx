import React from 'react';
import { Typography as LuiTypography } from '@material-ui/core';
import { ComponentType } from 'react';
import { ITypographyProps } from './typography';

const Typography: ComponentType<ITypographyProps> = ({ children, ...props }) => {
  return (
    <LuiTypography {...props} >{children}</LuiTypography>
  )
}

export default Typography
