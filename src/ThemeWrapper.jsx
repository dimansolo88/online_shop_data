import React, { useState } from "react";
import { theme2, theme1 } from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { symbol } from "prop-types";

// class ThemeWrapper extends React.Component {
//
//
//     render () {
//       return <ThemeProvider theme={this.state.theme}>
//         {this.props.children}
//       </ThemeProvider>
//     }
// }
//
// export default ThemeWrapper

const ThemeWrapper = props => {
  const [theme, setTheme] = useState({ ...theme2 });
  console.log(`theme ${theme.primary}`);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ThemeWrapper;
