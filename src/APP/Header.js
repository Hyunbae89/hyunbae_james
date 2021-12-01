import React from "react";
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            navbarEvent:false
        }
        this.OnclickScreen = this.OnclickScreen.bind(this);
    }


    OnclickScreen(){
        this.setState(preState=>({navbarEvent : !preState.navbarEvent}));
    }

    render() {
        return(
            <header className="page-header shadow-sm">
              <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark" >
                  <Link className="navbar-brand" to="/">
                      <FontAwesomeIcon className="mx-3" icon={faDragon} />
                      James-Busan
                  </Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation" >
                      <span className="navbar-toggler-icon"/>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ">
                          <li className="nav-item">
                              <Link to="/" className="nav-link p-3" onClick={this.OnclickScreen}> Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/about" className="nav-link p-3" onClick={this.OnclickScreen}> About</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/projects" className="nav-link p-3" onClick={this.OnclickScreen}> Projects</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="/contact" className="nav-link p-3" onClick={this.OnclickScreen}> Contact</Link>
                          </li>
                      </ul>
                  </div>

              </nav>
            </header>
        );
    }
}