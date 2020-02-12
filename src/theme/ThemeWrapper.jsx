import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import propTypes from 'prop-types'
import { ThemeContext } from '../App'

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: propTypes.element,
}

export default ThemeWrapper
