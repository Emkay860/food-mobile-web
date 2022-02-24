import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
      <Grid container mb={10}>
        <Grid xs={1} sm={2} md={3} lg={4} item></Grid>
        <Grid xs={10} sm={8} md={6} lg={4} item>
          <TabContext value={value}>
            <Box sx={{ width: '100%' }}>
              <Tabs
                value={value}
                onChange={handleChange}
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
              <Box
                py={6}
                sx={{
                  width: '100%',
                  margin: 'auto',
                }}
              >
                <Typography variant="h3">Hello There</Typography>
                <Typography variant="h6" className="text-gray">
                  Welcome aboard
                </Typography>
              </Box>
              <SignUpForm />
            </TabPanel>
            <TabPanel value="login">
              <Box
                py={6}
                sx={{
                  width: '100%',
                  margin: 'auto',
                }}
              >
                <Typography variant="h3">Welcome back</Typography>
                <Typography variant="h6" className="text-gray">
                  We&apos;ve missed you
                </Typography>
              </Box>
              <LoginForm />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid xs={1} sm={2} md={3} lg={4} item></Grid>
      </Grid>
    </ThemeProvider>
  );
}
