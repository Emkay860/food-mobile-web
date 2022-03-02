import React from 'react';
import MenuList from '../../components/MenuList';
import Grid from '@mui/material/Grid';

export default function ProfileView() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={10}
          md={8}
          sx={{
            my: 10,
            borderTop: '10px solid orange',
            borderRight: '1px solid orange',
            borderLeft: '1px solid orange',
            borderBottom: '10px solid orange',
            borderRadius: 2,
            height: 400,
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'orange',
              color: 'white',
            },
          }}
        >
          <MenuList />
        </Grid>
      </Grid>
    </>
  );
}

// List of menus (NUI table)
// update profile page (Maybe a modal popup)
// Update menuItempage (maybe a modal popup)
