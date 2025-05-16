import React from 'react';
import './styles/ButtonLink.css';

function ButtonLink({ children, ...props }) {
  return (
    <button {...props} className="button-link">
      {children}
    </button>
  );
}

export default ButtonLink;