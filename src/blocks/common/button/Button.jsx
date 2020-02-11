import React from 'react'
import { BaseButton } from './style'
import PropTypes from 'prop-types'

const Button = ({ type, value, children }) => {
  return (
    <>
      <BaseButton type={type} value={value}>
        {children}
      </BaseButton>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string,
}
export default Button
