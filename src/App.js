import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Projects from './Components/Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <LandingPage />
      <About />
      <Projects />
      </>
    )
  }
}

export default App