import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import theme from '../../theme';

export default function BottomNavbar() {
  const [value, setValue] = useState('');
  const router = useRouter();
  useEffect(() => {
    console.log(value);
    if (value !== '') {
      router.push(value);
    }
  }, [value]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            value="/home"
          />
          <BottomNavigationAction
            label="Add Menu"
            icon={<AddCircleOutlineIcon />}
            value="/create-menu"
          />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonIcon />}
            value="/profile"
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
