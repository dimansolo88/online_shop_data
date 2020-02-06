import React from "react";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};
