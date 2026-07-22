import React from "react";
import '../styles/Menu.css';

function MenuItem({ image, name, description }) {
  return (
    <div className="menuItem">
      <img src={image} alt={name} className="menuItemImage" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default MenuItem;