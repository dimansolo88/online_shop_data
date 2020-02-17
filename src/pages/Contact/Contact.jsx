import React from 'react'
import Fade from 'react-reveal/Fade'
import { LineWrapper, Button } from '@/blocks'
import {
  ContactWrapper,
  Container,
  FormWrapper,
  Input,
  Textarea,
  TitleContacts,
} from './style'

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
            <Input name="name" placeholder="Your name" />
            <Input name="_replyto" placeholder="Your e-mail" />
            <Textarea
              name="name"
              cols="30"
              rows="10"
              placeholder="your message"
            />
            <Button type="submit" value="send" />
          </FormWrapper>
        </Fade>
      </Container>
    </ContactWrapper>
  )
}

export default Contact
