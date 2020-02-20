import React from 'react'
import { Button } from '@/blocks'
import PropTypes from 'prop-types'
import {
  ProductCardCommon,
  ProductCardImg,
  ProductCardTitle,
  ProductCardWrapper,
  StyledNavLink,
} from './style'

const ProductCard = ({ id, images, title, size, price }) => {
  return (
    <div>
      <ProductCardWrapper>
        <ProductCardImg>
          <img src={images[0]} alt="images" />
        </ProductCardImg>
        <ProductCardTitle> {title} </ProductCardTitle>
        <ProductCardCommon> £ {price} </ProductCardCommon>
        <StyledNavLink to={`/detail/${id}`}>
          <Button value="more" />
        </StyledNavLink>
      </ProductCardWrapper>
    </div>
  )
}

ProductCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  size: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  price: PropTypes.number,
}

export default ProductCard
