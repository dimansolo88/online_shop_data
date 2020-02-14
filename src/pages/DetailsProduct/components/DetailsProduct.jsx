import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { StyleContainer, StyledCarusel, StyleDetail } from './style'
import PropTypes from 'prop-types'
import { Loader } from '../../../blocks/'

const DetailProduct = ({ history, match, location, getCurrentProduct, currentProduct }) => {
  const { id } = match.params

  useEffect(() => {
    getCurrentProduct(id)
  }, [id])

  if (!currentProduct) {
    return <Loader />
  }

  console.log(currentProduct.id)
  function onChange (a, b, c) {
    console.log(a, b, c)
  }
  return (
    <Fade big cascade>
      <StyleDetail>
        <StyleContainer>

          {currentProduct.title}
          {/*<Carousel afterChange={onChange}>*/}
          {/*  <StyledCarusel>*/}
          {/*    <h3>1</h3>*/}
          {/*  </StyledCarusel>*/}
          {/*  <div>*/}
          {/*    <h3>2</h3>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <h3>3</h3>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <h3>4</h3>*/}
          {/*  </div>*/}
          {/*</Carousel>,*/}
        </StyleContainer>
      </StyleDetail>
    </Fade>
  )
}
DetailProduct.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  getCurrentProduct: PropTypes.func,
}

export default DetailProduct
