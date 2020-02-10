import styled from 'styled-components'

export const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.secondary};
`

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`

export const TitleContacts = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.2;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 30px;
  text-transform: capitalize;
`

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    @media screen and (max-width: 1100px) {
      width: 100%;
  

`

export const Input = styled.input`
  width: ${props => props.primary && '50em'};
  padding: ${props => props.primary && '1em'};
  margin: ${props => props.primary && '0.5em'};

  background-color: ${props => props.theme.primary};
  border: 1px solid #4a4a4a;
  font-size: 12px;
  color: white;
  outline: none;
  padding: 5px;
  margin: 10px 0;
  transition: all 0.5s ease-in-out;
`
export const Textarea = styled.textarea`
  min-height: 160px;
  background-color: ${props => props.theme.primary};
  border: 1px solid #4a4a4a;
  color: white;
  font-size: 12px;
  outline: none;
  padding: 5px;
  margin: 10px 0;
  transition: all 0.5s ease-in-out;
  &:focus {
    border: 1px solid transparent;
  }
`
