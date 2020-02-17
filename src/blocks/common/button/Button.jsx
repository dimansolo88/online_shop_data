import React from 'react'
import { BaseButton } from './style'
import PropTypes from 'prop-types'

const Button = ({ type, value }) => {
  return (
    <>
      <BaseButton type={type} value={value}>
        {value}
      </BaseButton>
    </>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
}
export default Button
