import React, { useState, useEffect, useCallback } from 'react'
import EmblaCarouselReact from 'embla-carousel-react'
import './carusel.css'
import { DotBtn, NextBtn, PrevBtn } from './CaruselButtons'
import {
  StyledCarousel,
  StyledCarouselContainer,
  StyledCarouselDots,
  StyledCarouselItem,
  StyledCarouselWrapper,
} from './style'

const EmblaCarouselComponent = ({ children }) => {
  const [carousel, initCarousel] = useState(null)
  const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel])
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel])
  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel])

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap())
      togglePrevBtnEnabled(carousel.canScrollPrev())
      toggleNextBtnEnabled(carousel.canScrollNext())
    }
    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList())
      carousel.on('select', onSelect)
      onSelect()
    }
    return () => carousel && carousel.destroy()
  }, [carousel])

  return (
    <StyledCarousel>
      <StyledCarouselWrapper>
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={initCarousel}
          options={{ loop: false }}
          htmlTagName="div"
        >
          <StyledCarouselContainer>
            {children.map((Child, index) => (
              <StyledCarouselItem key={index}>{Child}</StyledCarouselItem>
            ))}
          </StyledCarouselContainer>
        </EmblaCarouselReact>
        <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
      </StyledCarouselWrapper>
      <StyledCarouselDots>
        {scrollSnaps.map((snap, index) => (
          <DotBtn
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </StyledCarouselDots>
    </StyledCarousel>
  )
}

export default EmblaCarouselComponent
