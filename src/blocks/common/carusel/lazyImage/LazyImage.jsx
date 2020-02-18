import React, { useEffect } from 'react'
// import { withLazyImageContext } from './LazyImageContext'
import './lazyImage.css'
import { withLazyImageContext } from './LazyImageConext'
import { StyledLazyImage } from './style'

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`

  useEffect(() => {
    if (lazyLoad) lazyLoad.update()
  }, [src, aspectRatio, lazyLoad])

  return (
    <StyledLazyImage style={{ paddingTop }}>
      <img className="lazyImage__img" data-src={src} />
    </StyledLazyImage>
  )
}

export default withLazyImageContext(LazyImage)
