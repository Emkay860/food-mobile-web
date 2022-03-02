import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export default function Searchbar() {
  const [values, setValues] = useState({
    searchbar: '',
  });

  const handleSearch = () => {
    console.log(values.searchbar);
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1} mt={1} justifyContent="center">
        <Grid item xs={9} md={8}>
          <OutlinedInput
            fullWidth
            id="searchbar"
            placeholder="search..."
            value={values.searchbar}
            onChange={handleChange('searchbar')}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="search button"
                  size="large"
                  onClick={handleSearch}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              backgroundColor: 'white',
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            size="large"
            sx={{
              padding: 2,
            }}
            variant="contained"
            color="primary"
          >
            <SettingsInputComponentIcon fontSize="medium" />
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
