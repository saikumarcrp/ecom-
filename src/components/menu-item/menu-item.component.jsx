import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size }) => (
  //insted of passing props we can also destrecture title like {title}
  //var title = somename === prpps.title
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
