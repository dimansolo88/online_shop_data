import React from 'react'
import PropTypes from 'prop-types'
import { Bar, MenuButton } from './style'

const MenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <MenuButton
        className={isOpen && 'active'}
        aria-label="open menu"
        onClick={toggleMenu}
      >
        <Bar />
        <Bar />
        <Bar />
      </MenuButton>
    </div>
  )
}

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default MenuToggle
