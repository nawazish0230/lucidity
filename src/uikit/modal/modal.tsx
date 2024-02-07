import { Box, Modal as LuiModal } from '@mui/material';
import { ComponentType } from 'react';
import { IModalProps } from './modal';
import { colors } from 'theme/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: colors.modalBgColor,
  border: '2px solid #000',
  boxShadow: 24,
  padding: 2,
  borderRadius: 3,
};


const Modal: ComponentType<IModalProps> = ({ ...props }) => {
  return (
    <LuiModal {...props} >
      <Box sx={style}>
        {props.children}
      </Box>
    </LuiModal>
  )
}

export default Modal
