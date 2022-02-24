import React from 'react';
import Searchbar from '../components/Searchbar';
import Catalogue from '../views/Catalogue';
import FeaturedItems from '../views/FeaturedItems';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Searchbar />
      <FeaturedItems />
      <Catalogue />
    </div>
  );
}
