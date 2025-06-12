import React from 'react';

const produto = ({ produto }) => {
  return (
    <div style={{bprder: '1px solid', margin: '1rem 0', padding: '1rem'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default produto;
