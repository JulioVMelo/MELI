import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Ui from './styles';
import Logo from '../../assets/images/Logo.png';
import Search from '../../assets/images/search.png';

export default function Header() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

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
