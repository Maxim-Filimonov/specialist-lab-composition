import React from 'react';
import "./Button.css"

function Button({ onClickHandler, value, className }) {
  return (
    <button className={'btn ' + className} onClick={onClickHandler}>
      {value}
    </button>
  );
}

export default Button;