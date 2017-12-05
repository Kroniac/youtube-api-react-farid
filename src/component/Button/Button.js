import React from 'react';

const button = props => {
  return (
    <a class="waves-effect waves-light btn" onClick={props.clicked}>
      button
    </a>
  );
};

export default button;
