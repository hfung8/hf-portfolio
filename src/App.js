import React, { useState } from 'react'; 
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Grid from './components/SingleGridList';
import Hello from './components/Hello';
import MyBackground from './components/MyBackground';
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import './index.css';
import 'antd/dist/antd.css';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from 'antd';

const light = {
  palette: {
    primary: {main : "#e91e63", contrastText: "#fff"},
    secondary: { main: "#03a9f4", contrastText: "#fff"},
    type: "light"
  }
};

const dark = {
  palette: {
    primary: { main : "#e91e63", contrastText: "#fff"},
    secondary: { main: "#03a9f4", contrastText: "#fff"},
    type: "dark"
  }
};

function App(){
  
  const [ theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />
  const appliedTheme = createTheme(theme? light: dark);
  return (
    <ThemeProvider theme={appliedTheme}>
      <div className="App">
        <Paper>
          <CssBaseline />
          {icon}
          <Switch onClick={() => setTheme(!theme)} />
          <Hello />
          <MyBackground/> 
          <br/>
          <About/>
          <Portfolio/>
          <br/>
          <br/>
          <Grid />
          <br/>
          <br/>
          <Connect/>
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export default App;