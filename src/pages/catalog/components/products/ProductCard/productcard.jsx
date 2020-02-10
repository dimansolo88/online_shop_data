import React from 'react'
import styles from '../../catalog.module.css'
import Button from '../../../../../blocks/common/button/Button'
import PropTypes from 'prop-types'

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

ProductCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  size: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
}

export default ProductCard
