import React from 'react';
import PropTypes from 'prop-types';
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

ListProducts.propTypes = {
  products: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.string,
    }),
    id: PropTypes.string,
  }),
};

ListProducts.defaultProps = {
  products: [],
};
