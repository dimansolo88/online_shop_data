import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Intro, MainWrapper } from '../style/style'
import Translate from '@/locale/tralsate'

const Main = () => {
  return (
    <MainWrapper>
      <Container>
        <Fade big cascade>
          <Intro>
            <span>{Translate('hi', 'HI')} </span>
            <span>
              {' '}
              it is <span> {Translate('super_shop', 'Super Online Shop')}</span>
            </span>
            <span>
              <h1> {Translate('we_are', 'we are best of the best')} </h1>
            </span>
          </Intro>
          {/* <div className={styles.photo} /> */}
        </Fade>
      </Container>
    </MainWrapper>
  )
}

export default Main
