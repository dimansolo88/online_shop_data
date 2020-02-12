import React from 'react'
import Button from '../../../../../blocks/common/button/Button'
import PropTypes from 'prop-types'
import {
  ProductCardCommon,
  ProductCardImg,
  ProductCardTitle,
  ProductCardWrapper,
} from './style'

const ProductCard = ({ images, title, size, price }) => {
  return (
    <div>
      <ProductCardWrapper>
        <ProductCardImg>
          <img src={images[0]} alt="images" />
        </ProductCardImg>
        <ProductCardTitle> {title} </ProductCardTitle>
        <ProductCardCommon> {size.join(' ')} </ProductCardCommon>
        <ProductCardCommon> $ {price} </ProductCardCommon>
        <Button value="more" />
      </ProductCardWrapper>
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
