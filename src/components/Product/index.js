import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Ui from './styles';
import Transport from '../../assets/images/transport.png';

export default function Product({
  thumbnail,
  title,
  address,
  price,
  shipping,
  id,
}) {
  const history = useHistory();

  const handleProductDetail = useCallback(
    productId => {
      history.push(`/item/${productId}`);
    },
    [history]
  );

  return (
    <Ui.Product image={thumbnail} onClick={() => handleProductDetail(id)}>
      <div className="image" />
      <div className="info">
        <div className="price">
          <h2>R$ {price}</h2>
          {shipping && (
            <img src={Transport} alt="free shiping" title="Free shipping" />
          )}
        </div>
        <span>{address.state_name}</span>
        <p>{title}</p>
      </div>
    </Ui.Product>
  );
}

Product.propTypes = {
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  shipping: PropTypes.bool,
  address: PropTypes.shape({
    state_name: PropTypes.string,
  }),
};

Product.defaultProps = {
  thumbnail: '',
  price: '',
  shipping: false,
  address: {},
};
