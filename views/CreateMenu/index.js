import React from 'react';
import Grid from '@mui/material/Grid';
import CreateMenuForm from '../../components/CreateMenuForm';
import theme from '../../theme';
import { ThemeProvider } from '@emotion/react';

export default function CreateMenuView() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" mt={2}>
        <Grid>
          <CreateMenuForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
