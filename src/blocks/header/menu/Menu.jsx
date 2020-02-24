import React from 'react'
import Roll from 'react-reveal/Roll'
import PropTypes from 'prop-types'
import { StyleNavLink } from './style'
import Translate from '@/locale/tralsate'

export const Menu = ({ hideMenu }) => {
  return (
    <Roll left>
      <StyleNavLink to="/" onClick={hideMenu}>
        {Translate('home', 'Home')}
      </StyleNavLink>
      <StyleNavLink to="/catalog" onClick={hideMenu}>
        {Translate('catalog', 'Catalog')}
      </StyleNavLink>
      <StyleNavLink to="/contact" onClick={hideMenu}>
        {Translate('contact', 'Contact')}
      </StyleNavLink>
    </Roll>
  )
}

Menu.propTypes = {
  hideMenu: PropTypes.func,
}
