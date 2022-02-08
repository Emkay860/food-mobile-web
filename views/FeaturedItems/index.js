import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FeaturedItemCard from '../../components/FeaturedItemCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from './FeaturedItems.module.css';

export default function FeaturedItems() {
  return (
    <>
      <div className={styles.container}>
        <IconButton color="primary" aria-label="scroll left" component="span">
          <ChevronLeftIcon />
        </IconButton>
        <div className={styles.featuredContainer}>
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
          <FeaturedItemCard />
        </div>
        <IconButton
          color="primary"
          aria-label="scroll right"
          component="span"
          size="large"
        >
          <ChevronRightIcon fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}
