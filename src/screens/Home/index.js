import React, { useState } from 'react';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';

export default function Home() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header handleSetProducts={setProducts} />
      {products.length > 0 && <ListProducts products={products} />}
    </>
  );
}
