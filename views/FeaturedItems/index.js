import Grid from '@mui/material/Grid';
import { minWidth } from '@mui/system';
import FeaturedItemCard from '../../components/FeaturedItemCard';

import styles from './FeaturedItems.module.css';

export default function FeaturedItems() {
  return (
    <>
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
    </>
  );
}
