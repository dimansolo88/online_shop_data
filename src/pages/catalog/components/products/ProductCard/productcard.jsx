import React from 'react'
import styles from '../../catalog.module.css'
import Button from '../../../../../blocks/common/button/Button'

const ProductCard = ({ images, title, size, price }) => {
  return (
    <div>
      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src={images[0]} alt="images" />
        </div>
        <span className={styles.projectTitle}> {title} </span>
        <span className={styles.projectDiscription}> {size} </span>
        <span className={styles.projectDiscription}> $ {price} </span>
        <Button> more </Button>
      </div>
    </div>
  )
}

export default ProductCard
