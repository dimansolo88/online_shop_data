import React from 'react'
import { BaseButton } from './style'
import PropTypes from 'prop-types'
// import Translate from '@/locale/tralsate'

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
