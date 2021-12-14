import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '../CSS/App.css';

import Header from "./Header";
import {MainPage} from "./MainPage";
import Footer from "./Footer";


class App extends React.Component{

  render() {

    return(
        <div>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
  }
}

export default App;
