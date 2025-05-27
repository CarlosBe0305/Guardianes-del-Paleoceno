import React from 'react';
import './styles/ButtonLink.css';

function ButtonLink({ href, children, ...props }) {
  if (href) {
    return (
      <a href={href} {...props} className="button-link">
        {children}
      </a>
    );
  }
  return (
    <button {...props} className="button-link">
      {children}
    </button>
  );
}

export default ButtonLink;