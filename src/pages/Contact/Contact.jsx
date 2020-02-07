import React from 'react'
import styles from './Contact.module.css'
import Fade from 'react-reveal/Fade'
import Button from '../../blocks/common/button/Button'
import { LineWrapper } from '../../blocks/common/line/style'
import { ContactWrapper, Container, FormWrapper, Input, Textarea, TitleContacts } from './style'

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <TitleContacts> contacts </TitleContacts>
        <LineWrapper />
        <Fade big cascade>
          <FormWrapper
            action="https://formspree.io/dzmitry795@gmail.com"
            method="POST"
          >
            <Input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Your name" />
            <Input
              type="text"
              name="_replyto"
              className={styles.input}
              placeholder="Your e-mail" />
            <Textarea
              name="name"
              cols="30"
              rows="10"
              placeholder="your message" />
            <Button type="submit" value="send">
                            send
            </Button>
          </FormWrapper>
        </Fade>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
