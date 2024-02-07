import { Button as LuiButton } from '@mui/material';
import { ComponentType } from 'react';
import { IButtonProps } from './button';

const Button: ComponentType<IButtonProps> = ({ ...props }) => {
  return (
    <LuiButton {...props} />
  )
}

export default Button
