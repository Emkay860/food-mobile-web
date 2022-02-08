import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CatalogueItemCard from '../../components/CatalogueItemCard';

export default function Catalogue() {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
        }}
        mt={10}
      >
        <Typography variant="h2">Food List</Typography>
      </Box>
      <Grid container spacing={1} justifyContent="center" mb={10} mt={4}>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
        <Grid item md={4} lg={3}>
          <CatalogueItemCard />
        </Grid>
      </Grid>
    </>
  );
}
