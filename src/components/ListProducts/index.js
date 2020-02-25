import React from 'react';
import * as Ui from './styles';

export default function ListProducts({ products }) {
  console.log('prod', products);

  return (
    <Ui.Container>
      <Ui.List>
        {products.map(({ thumbnail, title, address, price }) => (
          <Ui.Product image={thumbnail}>
            <div className="image" />
            <div className="info">
              <h2>R$ {price}</h2>
              <span>{address.state_name}</span>
              <p>{title}</p>
            </div>
          </Ui.Product>
        ))}
      </Ui.List>
    </Ui.Container>
  );
}
