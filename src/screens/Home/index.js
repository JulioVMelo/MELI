import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    async function handleFetchProducts() {
      api
        .get(`/search?q=${query}&limit=4`)
        .then(res => setProducts(res.data.results));
    }
    handleFetchProducts();
  }, [query]);

  return (
    <>
      <Header handleSetProducts={setProducts} />
      {products.length > 0 && <ListProducts products={products} />}
    </>
  );
}
