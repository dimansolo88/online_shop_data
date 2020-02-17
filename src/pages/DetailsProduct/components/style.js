import styled from 'styled-components'
import { Select } from 'antd'

export const StyleDetail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.secondary};
  background-attachment: fixed;
`
export const StyleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding: 100px 0;
`

export const StyledProductSection = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledProductLayout = styled.div`
  & h1 {
    padding-top: 70%;
    font-size: 17px;
    line-height: 1.3;
    letter-spacing: 1.3px;
    padding-bottom: 12px;
  }
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const StyledCurrentPrice = styled.span`
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 2.8px;
  font-family: 'futura-pt-n7', 'futura-pt', Tahoma, Geneva, Verdana, Arial,
    sans-serif;
  font-style: normal;
  font-weight: 700;
`
export const StyledColorSection = styled.div`
  width: 100%;
  padding-top: 21px;
  margin-bottom: 5px;
  & label {
    ont-size: 12px;
    line-height: 1.7;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    padding-right: 6px;
  }
  & span {
  }
`
export const StyledPriceSection = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`
export const StyledSizeSelect = styled.div`
  position: relative;
  padding-top: 9px;
`

export const StyledSelectSizeSection = styled(Select)`
  width: 200px;
`
