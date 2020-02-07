import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './Layout'

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper
