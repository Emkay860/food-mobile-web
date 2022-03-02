import React from 'react';
import MenuList from '../../components/MenuList';
import Grid from '@mui/material/Grid';

export default function ProfileView() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <MenuList />
        </Grid>
      </Grid>
    </>
  );
}

// List of menus (NUI table)
// update profile page (Maybe a modal popup)
// Update menuItempage (maybe a modal popup)
