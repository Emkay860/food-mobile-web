import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';

import Amala from '../../assets/amala.jpg';
import styles from './FeaturedItemCard.module.css';

export default function FeaturedItemCard() {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth: 200, minWidth: 150, flexShrink: 0 }}
        my={4}
        mr={3}
      >
        <Grid
          item
          sx={{
            mb: -10,
          }}
        >
          <Image
            height={160}
            width={160}
            src={Amala}
            alt="featured-image"
            className={styles.featuredImg}
          />
        </Grid>
        <Grid
          item
          sx={{
            width: '100%',
          }}
        >
          <Card
            sx={{
              width: '100%',
              paddingTop: 10,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Box mb={3}>
                <Typography>Chciken Pasta</Typography>
                <Typography variant="caption">Item 7</Typography>
              </Box>
              <Typography variant="h6">NGN 1,349.99</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
