import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Ui from './styles';
import Logo from '../../assets/images/Logo.png';
import Search from '../../assets/images/search.png';
import api from '../../services/api';

export default function Header({ handleSetProducts }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query) {
      api
        .get(`/search?q=${query}&limit=4`)
        .then(res => handleSetProducts(res.data.results));
    }
  }

  return (
    <Ui.Container>
      <div className="content">
        <Link className="logo" to="/">
          <img src={Logo} alt="Mercado livre" />
        </Link>
        <Ui.Search onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            name="query"
            placeholder="Nunca dejes de buscar"
            onChange={e => setQuery(e.target.value)}
          />
          <button className="button" type="submit">
            <img src={Search} alt="search" />
          </button>
        </Ui.Search>
      </div>
    </Ui.Container>
  );
}

Header.propTypes = {
  handleSetProducts: PropTypes.func,
};

Header.defaultProps = {
  handleSetProducts: () => {},
};
