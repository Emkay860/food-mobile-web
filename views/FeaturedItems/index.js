import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FeaturedItemCard from '../../components/FeaturedItemCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import styles from './FeaturedItems.module.css';

export default function FeaturedItems() {
  const handleScroll = (prop) => (event) => {
    const slider = document.getElementById('featuredContainer');
    // smoothen slider animation
    slider.style.scrollBehavior = 'smooth';

    // Add delay to slide motion with setTimeout
    if (prop === 'left') {
      setTimeout(() => {
        slider.scrollLeft -= 300;
      }, 200);
    } else if (prop === 'right') {
      setTimeout(() => {
        slider.scrollLeft += 300;
      }, 200);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <IconButton
          color="primary"
          aria-label="scroll left"
          component="span"
          onClick={handleScroll('left')}
        >
          <ChevronLeftIcon />
        </IconButton>
        <div className={styles.featuredContainer} id="featuredContainer">
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
          onClick={handleScroll('right')}
        >
          <ChevronRightIcon fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}
