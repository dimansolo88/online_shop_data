import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Intro, MainWrapper } from '../style/style'

const Main = () => {
  return (
    <MainWrapper>
      <Container>
        <Fade big cascade>
          <Intro>
            <span>Hi</span>
            <span>
              {' '}
              it is <span> Super Online Shop</span>
            </span>
            <span>
              <h1> we are best of the best </h1>
            </span>
          </Intro>
          {/* <div className={styles.photo} /> */}
        </Fade>
      </Container>
    </MainWrapper>
  )
}

export default Main
