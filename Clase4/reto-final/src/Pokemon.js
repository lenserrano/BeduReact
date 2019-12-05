import React from 'react';

const Pokemon = ({ number, name, types }) => (
  <div className="pokemon">
    <div className="img-container">
      <img src={ `https://pokeres.bastionbot.org/images/pokemon/${number}.png` }/>
    </div>
    <div className="info">
      <span className="number">#{number}</span>
      <h3 className="name">{name}</h3>
      <small className="type">Type: <span>{ types.map(t => t.type.name).join(' / ') }</span></small>
    </div>
  </div>
);

export default Pokemon;