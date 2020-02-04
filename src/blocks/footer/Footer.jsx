import React from 'react'
import styles from './Fotter.module.css'
import linkidin from '../../assets/img/linkedin.svg'
import telegram from '../../assets/img/telegram2.svg'
import vk from '../../assets/img/vk.svg'
import github from '../../assets/img/github5.png'
import LIne from '../common/LIne'
import Fade from 'react-reveal/Fade'
import {FooterWrapper, SocialBlock, SocialIcon, SocialIconHover, SocialIconImg, SocialIconLink} from './style'

const Footer = () => {
  const state = [
    { id: 1, link: 'https://www.linkedin.com/in/dzmitry-padshybiakin/', img: linkidin },
    { id: 2, link: 'https://t.me/Dzmitry_Padshybiakin', img: telegram },
    { id: 3, link: 'https://vk.com/id43475432', img: vk },
    { id: 4, link: 'https://github.com/dimansolo88', img: github },
  ]

  return (
    <FooterWrapper light="">

      <Fade big cascade>
        <div className={styles.footerContainer}>
          <div className={styles.titleWrapper}>
            <h3> Online shop </h3>
            <LIne />

          </div>
          <SocialBlock>

            {state.map(el =>
              <SocialIconLink key={el.id}>
                <SocialIcon href={el.link} target="_blank">
                  <SocialIconImg src={el.img} alt="_" >

                  </SocialIconImg>
                </SocialIcon>

              </SocialIconLink>,
            )}

          </SocialBlock>
          <span> 2020  </span>

        </div>

      </Fade>

    </FooterWrapper>

  )
}

export default Footer
