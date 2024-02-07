import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useStyles from './table.style';
import { TABLE_HEAD } from 'constant';

const Header = () => {
  const classes = useStyles()
  return (
    <TableHead>
      <TableRow>
        {TABLE_HEAD.map((item, index) => <TableCell align={index === 0 ? "left" : "right"}>
          <span className={classes.headerLabel}>
            {item}
          </span>
        </TableCell>)}
      </TableRow>
    </TableHead>
  )
}

export default Header
