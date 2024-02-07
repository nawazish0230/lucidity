import { Switch as LuiSwitch } from '@mui/material';
import { ComponentType } from 'react';
import { ISwitchProps } from './switch';

const Switch: ComponentType<ISwitchProps> = ({ ...props }) => {
  return (
    <LuiSwitch {...props} />
  )
}

export default Switch
