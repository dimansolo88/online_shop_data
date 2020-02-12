import React, { useEffect } from 'react'
import ProductCard from './ProductCard/productcard'
import PropTypes from 'prop-types'
import { ProductsWrapper } from './style'
import { childrenPropType } from '../../../../constants/propTypes '

const Products = ({ products, getProduct }) => {
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <ProductsWrapper>
      {products.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          size={p.size}
          price={p.price}
          images={p.images}
        />
      ))}
    </ProductsWrapper>
  )
}

Products.propTypes = {
  products: childrenPropType,
  getProduct: PropTypes.func,
}

export default Products
