import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import {
  StyleContainer,
  StyledColorSection,
  StyledCurrentPrice,
  StyleDetail,
  StyledPriceSection,
  StyledProductLayout,
  StyledProductSection,
  StyledSelectSizeSection,
  StyledSizeSelect,
} from './style'
import PropTypes from 'prop-types'
import {
  Loader,
  EmblaCarouselComponent,
  LazyImage,
  LazyImageProvider,
} from '@/blocks'
import { Select } from 'antd'

const DetailProduct = ({
  history,
  match,
  location,
  getCurrentProduct,
  currentProduct,
}) => {
  const { id } = match.params
  console.log(currentProduct)
  useEffect(() => {
    getCurrentProduct(id)
  }, [id])

  if (!currentProduct) {
    return <Loader />
  }
  const { Option } = Select
  return (
    <Fade big cascade>
      <StyleDetail>
        <StyleContainer>
          <StyledProductSection>
            <LazyImageProvider>
              <EmblaCarouselComponent>
                {currentProduct.images.map((image, i) => (
                  <LazyImage aspectRatio={[10, 7]} src={image} key={image} />
                ))}
              </EmblaCarouselComponent>
            </LazyImageProvider>
            <StyledProductLayout>
              <h1> {currentProduct.title} </h1>
              <StyledCurrentPrice>£ {currentProduct.price}</StyledCurrentPrice>

              <StyledColorSection>
                <label>color:</label>
                <span> {currentProduct.color} </span>
              </StyledColorSection>

              <StyledPriceSection>
                <label>size:</label>

                <StyledSizeSelect>
                  <StyledSelectSizeSection defaultValue="please select">
                    {currentProduct.size.map(s => (
                      <Option value={s} key={[s]}>
                        {s}
                      </Option>
                    ))}
                  </StyledSelectSizeSection>
                </StyledSizeSelect>
              </StyledPriceSection>
            </StyledProductLayout>
          </StyledProductSection>

          <div>
            <div>{currentProduct.description}</div>
          </div>
        </StyleContainer>
      </StyleDetail>
    </Fade>
  )
}
DetailProduct.propTypes = {
  currentProduct: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  getCurrentProduct: PropTypes.func,
}

export default DetailProduct
