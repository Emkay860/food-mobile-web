import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
          <InputLabel htmlFor="firstname">First Name</InputLabel>

          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="firstname"
                placeholder="E.g John"
                type="text"
                fullWidth
                label="First Name"
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>

          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="lastname"
                placeholder="E.g Doe"
                type="text"
                fullWidth
                label="Last Name"
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="email"
                placeholder="E.g John@example.com"
                type="email"
                fullWidth
                label="Email"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="password"
                type="password"
                fullWidth
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                }
                {...field}
              />
            )}
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            justifyContent: 'space-between',
          }}
          size="large"
          endIcon={<ArrowForwardIcon fontSize="inherit" />}
        >
          Sign up
        </Button>
      </Stack>
    </form>
  );
}
