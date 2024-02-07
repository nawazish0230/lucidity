import { Box as LuiBox } from '@mui/material';
import { ComponentType } from 'react';
import { IBoxProps } from './box';

const Box: ComponentType<IBoxProps> = ({ ...props }) => {
  return (
    <LuiBox {...props} />
  )
}

export default Box
