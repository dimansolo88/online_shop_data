import React from 'react'
import PropTypes from 'prop-types'
import { Bar, MenuButton } from './style'

const MenuToggle = ({ isOpen, handleonToogle }) => {
  return (
    <div>
      <MenuButton
        className={isOpen && 'active'}
        aria-label="open menu"
        onClick={handleonToogle}
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
  handleonToogle: PropTypes.func,
}

export default MenuToggle
