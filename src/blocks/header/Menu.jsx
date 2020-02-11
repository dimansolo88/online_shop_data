import React from 'react'
import { NavLink } from 'react-router-dom'
import Roll from 'react-reveal/Roll'

export const Menu = () => {
  return (
    <Roll left>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Roll>
  )
}
