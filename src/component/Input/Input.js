import React from 'react';

const input = props => {
  return (
    <div>
      <input onChange={props.changed} value={props.value} />
    </div>
  );
};

export default input;
