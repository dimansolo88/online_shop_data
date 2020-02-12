import React from 'react'
import { NavLink } from 'react-router-dom'
import Roll from 'react-reveal/Roll'
import PropTypes from 'prop-types'
import { StyleNavLink } from './style'

export const Menu = ({ hideMenu }) => {
  return (
    <Roll left>
      {/*<NavLink to="/" onClick={hideMenu}>Home</NavLink>*/}
      <StyleNavLink to="/" onClick={hideMenu}>Home</StyleNavLink>
      <StyleNavLink to="/catalog" onClick={hideMenu}>Catalog</StyleNavLink>
      <StyleNavLink to="/contact" onClick={hideMenu}>Contact</StyleNavLink>
    </Roll>
  )
}

Menu.propTypes = {
  hideMenu: PropTypes.func,
}
