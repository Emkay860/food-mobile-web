import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function CreateMenuForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="title"
                type="text"
                fullWidth
                placeholder="E.g Brownie and coffee"
                label="Title"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="price"
                type="number"
                fullWidth
                label="Price"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <OutlinedInput id="image" type="file" fullWidth {...field} />
            )}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="description"
                multiline
                fullWidth
                rows={4}
                label="Description"
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
          endIcon={<AddIcon fontSize="inherit" />}
        >
          Create Menu
        </Button>
      </Stack>
    </form>
  );
}
