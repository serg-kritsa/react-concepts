import React from 'react';

export const CardList = props => (
  <div>
  {props.monsters.map(monster => (
    <p key={monster.id}>{monster.name}</p>
  ))}
  </div>
);
