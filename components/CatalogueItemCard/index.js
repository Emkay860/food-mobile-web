// @author - MUI javascript examples

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CatalogueItemCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="180px"
        src="../../amala.jpg"
        alt="food item"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Amala
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Àmàlà is a local indigenous Nigerian food, native to the Yoruba ethnic
          group in the western states of the country.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
