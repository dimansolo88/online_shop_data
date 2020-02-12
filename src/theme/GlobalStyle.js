import { createGlobalStyle } from 'styled-components'

export const theme1 = {
  primary: '#FFFFFF',
  secondary: '#a9a9a9',
}

export const theme2 = {
  primary: '#252527',
  secondary: '#1f1f20',
}

export const GlobalStyle = createGlobalStyle`
html,
body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.8;
    color: white;
    background-color: #1f1f20;
    letter-spacing: 0.5px;
    scroll-behavior: smooth;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3{color:white}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;

`
