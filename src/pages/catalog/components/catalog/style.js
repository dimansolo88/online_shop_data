import styled from 'styled-components'

export const CatalogWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.secondary};
  background-attachment: fixed;
`

export const ContainerCatalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 80px 0;
`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.2;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 30px;
  text-transform: capitalize;
`

export const BlockTitle = styled.h2`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.2;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 30px;
  text-transform: capitalize;
`
