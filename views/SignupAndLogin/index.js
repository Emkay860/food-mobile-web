import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignupForm';
import theme from '../../theme';

export default function SignupAndLogin() {
  const [value, setValue] = useState('login');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid xs={1} sm={2} md={3} lg={4}></Grid>
        <Grid xs={10} sm={8} md={6} lg={4}>
          <TabContext value={value}>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                className="white"
                textColor="primary"
                indicatorColor="primary"
                aria-label="login and sign up tab"
                centered
              >
                <Tab value="login" label="Sign In" />
                <Tab value="signup" label="Register" />
              </Tabs>
            </Box>
            <TabPanel value="signup">
              <SignUpForm />
            </TabPanel>
            <TabPanel value="login">
              <LoginForm />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid xs={1} sm={2} md={3} lg={4}></Grid>
      </Grid>
    </ThemeProvider>
  );
}
