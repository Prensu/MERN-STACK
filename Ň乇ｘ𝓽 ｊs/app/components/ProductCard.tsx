"use client";

import React from 'react';
import styles from './ProductCard.module.css'
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
