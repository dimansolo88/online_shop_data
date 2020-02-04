import React from 'react'
import styles from './Contact.module.css'
import LIne from '../../blocks/common/LIne'
import Fade from 'react-reveal/Fade'
import Button from '../../blocks/common/Button'

const Contact = () => {
  return (

    <div className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.titleContacts}>Contacts</span>
        <LIne />

        <Fade big cascade>
          <form
            action="https://formspree.io/dzmitry795@gmail.com" method="POST"
            className={styles.formWrapper}>
            <input type="text" name="name" className={styles.input} placeholder="Your name" />
            <input type="text" name="_replyto" className={styles.input} placeholder="Your e-mail" />
            <textarea
              name="name" cols="30" rows="10" className={styles.textarea}
              placeholder="your message" />
            <Button type="submit" value="send">
              send
            </Button>

          </form>
        </Fade>

      </div>

    </div>

  )
}

export default Contact
