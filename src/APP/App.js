import React from "react";

import {BrowserRouter, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../CSS/App.css';

import {MainPage} from "./MainPage";
import {AboutMeContent} from "./AboutMeContent";
import ScrollToTop from "./scrollToTop";



class App extends React.Component{

  render() {

    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about_me' element={<AboutMeContent/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
