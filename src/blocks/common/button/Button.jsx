import React from 'react'
import styles from '../../../pages/Contact/Contact.module.css'
import { BaseButton } from './style'

const Button = ({ type, value, children }) => {
  return (
    <>
      <BaseButton type={type} value={value} className={styles.button}>
        {children}
      </BaseButton>
    </>
  )
}

export default Button
