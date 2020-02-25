import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import * as Ui from './styles';
import Header from '../../components/Header';

export default function Detail() {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function handleDetailProduct() {
      api
        .get(`/items/${id}`, {
          baseURL: 'https://api.mercadolibre.com',
        })
        .then(res => setProduct(res.data));
    }

    async function handleDescriptionProduct() {
      api
        .get(`/items/${id}/description`, {
          baseURL: 'https://api.mercadolibre.com',
        })
        .then(res => setDescription(res.data));
    }

    handleDetailProduct();
    handleDescriptionProduct();
  }, [id]);

  return (
    <>
      <Header />
      <Ui.Container>
        {product && (
          <Ui.Product>
            <div className="info">
              <div className="image">
                <img src={product.pictures[0].url} alt={product.title} />
                <div className="description">
                  <h1>Descrição do produto</h1>
                  <p>{description.plain_text}</p>
                </div>
              </div>
              <div className="detail">
                <span>
                  {product.condition} - {product.sold_quantity} vendido(s)
                </span>
                <h2>{product.title}</h2>
                <h1>R$ {product.price}</h1>
                <button type="button">Comprar</button>
              </div>
            </div>
          </Ui.Product>
        )}
      </Ui.Container>
    </>
  );
}
