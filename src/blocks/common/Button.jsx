import React from 'react'
import styles from '../../pages/Contact/Contact.module.css'

const Button = ({ type, value, children  }) => {
  return (
    <>
      <button type={type} value={value} className={styles.button}>
        {children}
      </button>

    </>
  )
}

export default Button
