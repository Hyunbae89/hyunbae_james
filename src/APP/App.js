import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../CSS/App.css';
import {MainPage} from "./MainPage";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import {Contact} from "./Contact";

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
              path='/contact'
              element={<Contact/>} />
          <Route />
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
