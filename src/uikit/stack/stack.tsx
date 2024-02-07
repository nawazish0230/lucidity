import { Stack as LuiStack } from '@mui/material';
import { ComponentType } from 'react';
import { IStackProps } from './stack';

const Stack: ComponentType<IStackProps> = ({ ...props }) => {
  return (
    <LuiStack {...props} />
  )
}

export default Stack
