import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors";
import Routes from "./routes";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: teal["A400"]
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['"Lato"', "sans-serif"].join(",")
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
