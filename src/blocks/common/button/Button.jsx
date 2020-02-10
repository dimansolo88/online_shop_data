import React from 'react'
import styles from '../../../pages/Contact/Contact.module.css'
import { BaseButton } from './style'
import PropTypes from 'prop-types'

const Button = ({ type, value, children }) => {
  return (
    <>
      <BaseButton type={type} value={value} className={styles.button}>
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
