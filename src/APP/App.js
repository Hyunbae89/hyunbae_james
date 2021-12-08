import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../CSS/App.css';

import Header from "./Header";
import {MainPage} from "./MainPage";
import AboutMe from "./AboutMe";
import {Contact} from "./Contact";
import {PMain} from "./Projects/PMain";

class App extends React.Component{

  render() {

    return(
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route
              path='/'
              element={<MainPage/>} />
            <Route
             path='/about'
             element={<AboutMe/>} />
            <Route
              path='/about'
              element={<AboutMe/>} />
            <Route
              path='/projects'
              element={<PMain/>} />
            <Route
              path='/contact'
              element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
