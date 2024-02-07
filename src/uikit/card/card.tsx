import { Card as LuiCard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ComponentType } from 'react';
import { ICardProps } from './card';

const Card: ComponentType<ICardProps> = ({ children, ...props }) => {
  return (
    <LuiCard {...props}>
      <CardContent>
        {children}
      </CardContent>
    </LuiCard>
  )
}

export default Card
