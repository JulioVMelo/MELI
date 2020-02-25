import React from 'react';
import * as Ui from './styles';
import Product from '../Product';

export default function ListProducts({ products }) {
  return (
    <Ui.Container>
      <Ui.List>
        {products.map(({ thumbnail, title, address, price, shipping, id }) => (
          <Product
            thumbnail={thumbnail}
            title={title}
            address={address}
            price={price}
            shipping={shipping.free_shipping}
            key={id}
            id={id}
          />
        ))}
      </Ui.List>
    </Ui.Container>
  );
}
