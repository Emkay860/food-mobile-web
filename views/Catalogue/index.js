import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CatalogueItemCard from '../../components/CatalogueItemCard';
import styles from './Catalogue.module.css';

export default function Catalogue() {
  return (
    <Grid container spacing={3} justifyContent="center" my={10}>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
      <Grid container justifyContent="center" item sm={6} md={4}>
        <CatalogueItemCard />
      </Grid>
    </Grid>
  );
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Catalogue() {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={4}>
//         <Item>xs=8</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>xs=4</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>xs=4</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>xs=8</Item>
//       </Grid>
//     </Grid>
//   );
// }
