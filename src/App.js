import React from "react";
import theme from "./theme/theme";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import IndexScreens from "./screens/index";
import { getDirection } from "./localization/index";
import { create } from 'jss';
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <StylesProvider> 
        <CssBaseline />
        <IndexScreens />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <IndexScreens />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App;
