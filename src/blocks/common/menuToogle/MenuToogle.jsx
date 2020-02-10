import React from 'react'
import style from './MenuToogle.module.css'
import 'font-awesome/css/font-awesome.min.css'
import PropTypes from 'prop-types'

const MenuToggle = ({ isOpen, handleonToogle }) => {
  const cls = [style.menuToogle, 'fa']

  if (isOpen) {
    cls.push('fa-times fa-2x')
    cls.push(style.open)
  } else {
    cls.push('fa-bars fa-2x')
  }
  return (
    <div>
      <i className={cls.join(' ')} onClick={handleonToogle} />
    </div>
  )
}

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  handleonToogle: PropTypes.func,
}

export default MenuToggle
