import styled from 'styled-components'

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  color: white;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Intro = styled.div`
& span {
  display: flex;
  flex-direction: column;


}

& span:nth-child(1) {
  font-size: 16px;
}

& span:nth-child(2),
& span:nth-child(2) span {
  font-size: 30px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 5px;
  position: relative;
  z-index: 0;
}

& span:nth-child(2) span:after {
  content: "";
  position: absolute;
  width: 435px;
  height: 20px;
  bottom: -5px;
  z-index: -1;
  background-color: #ea548d;
}

& span:nth-child(3) {
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;


@media screen and (max-width: 1100px) {   
    margin-top: 100px;

  .container {
    flex-direction: column;
    align-items: center;
  }

 & span:nth-child(2) span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -5px;
    z-index: -1;
    background-color: #ea548d;
  }
}

`
