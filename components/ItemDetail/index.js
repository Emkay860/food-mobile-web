import React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Amala from '../../assets/amala.jpg';

import styles from './ItemDetail.module.css';

export default function ItemDetail() {
  return (
    <>
      <Grid container mb={10} spacing={2}>
        <Grid item md={6} sx={{}}>
          <Paper elevation={2}>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Image src={Amala} layout="intrinsic" alt="Image of amala" />
            </Box>
            <Box
              p={3}
              mt={3}
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h4" align="center">
                Amala
              </Typography>
              <hr className="horizontalRule"></hr>
              <Typography variant="body1" className="text-gray">
                Vendor: Item 7
              </Typography>
              <Typography variant="body1" className="text-gray">
                Whatsapp: 09077876123
              </Typography>
              <Typography variant="body1" className="text-gray">
                Location: 23 tanke road ilorin
              </Typography>

              <Typography variant="h5" align="center" mt={4}>
                Description
              </Typography>
              <hr className="horizontalRule"></hr>
              <Typography className="text-gray" mt={3}>
                Spicy jalapeno bacon ipsum dolor amet alcatra jerky pork
                prosciutto salami, bresaola meatball sirloin pork loin. Tri-tip
                turducken burgdoggen shankle ham shoulder landjaeger kielbasa
                shank alcatra tongue salami jerky drumstick bresaola. Biltong
                pig frankfurter, shankle spare ribs sausage short ribs. Picanha
                ham hock short loin shoulder buffalo drumstick ham. Beef doner
                short ribs pancetta jerky spare ribs landjaeger, boudin jowl
                shankle. Spare ribs biltong pancetta pastrami.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Skeleton variant="rectangular" height="100vh" />
        </Grid>
      </Grid>
    </>
  );
}
