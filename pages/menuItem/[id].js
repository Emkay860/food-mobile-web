import { useRouter } from 'next/router';
import React from 'react';
import ItemDetailAndMap from '../../views/ItemDetailAndMap';

export default function MenuItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <ItemDetailAndMap />
    </>
  );
}
