import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Amala from '../../assets/amala.jpg';

export default function UpdateMenuForm() {
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
                className="white"
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
                className="white"
                {...field}
              />
            )}
          />
        </FormControl>
        <div style={{ marginTop: '1.5em' }}>
          <Image alt="amala" src={Amala} layout="intrinsic" />
        </div>
        <FormControl>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="image"
                type="file"
                fullWidth
                className="white"
                {...field}
              />
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
                className="white"
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
          Update Menu Item
        </Button>
      </Stack>
    </form>
  );
}
