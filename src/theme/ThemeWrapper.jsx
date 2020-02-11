import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../Layout'
import propTypes from 'prop-types'

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: propTypes.element,
}

export default ThemeWrapper
