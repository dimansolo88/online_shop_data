import React from 'react'
import styles from '../style/main.module.css'
import Fade from 'react-reveal/Fade'
import { Intro, MainWrapper } from '../style/style'

const Main = () => {
  return (
    <MainWrapper>
      <Fade big cascade>
        <div className={styles.container}>
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
        </div>
      </Fade>
    </MainWrapper>
  )
}

export default Main
