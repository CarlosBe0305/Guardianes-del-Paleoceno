import React from 'react';
import './styles/ButtonLink.css';

function ButtonLink({ title, link }) {
  return (
    <a href={link} className="button-link">
      {title}
    </a>
  );
}

export default ButtonLink;