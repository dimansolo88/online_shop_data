import styled from 'styled-components'

export const StyledLazyImage = styled.div`
  position: relative;
  height: 0;
`

export const StyledLazyImageImg = styled.img`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
