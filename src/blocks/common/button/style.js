import styled from 'styled-components'

export const BaseButton = styled.button`
  color: white;
  max-width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: none;
  background-color: transparent;
  outline: none;
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1px;
  position: relative;
  margin: 0 0 15px;
  padding: 8px 30px;
  z-index: 0;
  &: after {
    content: '';
    position: absolute;
    width: 50%;
    height: 8px;
    background-color: #ea548d;
    transition: all 0.2s ease-in-out;
    bottom: 10px;
    z-index: -1;
  }
  &:hover {
    color: white;
    text-decoration: none;
  }
  &:hover::after {
    border-radius: 10px;

    bottom: 0;
    width: 60%;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    &:after {
      width: 0;
      height: 0;
    }

    &:hover::after {
      border-radius: 0;
      bottom: 0;
      width: 0;
      height: 0;
    }
  }
`
