import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { LogoutOutlined } from '@mui/icons-material';
import { Stack, Switch } from 'uikit';
import { useDispatch } from 'react-redux';
import { toggleAccount } from '../../redux/account/slice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountToggle = () => {
    dispatch(toggleAccount())
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Lucidity
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          {/* togggle switch */}
          <Stack flexDirection="row" alignItems="center">
            <Typography fontSize={14}>admin</Typography>
            <Switch onChange={handleAccountToggle} />
            <Typography fontSize={14}>user</Typography>
          </Stack>

          {/* logout user */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
