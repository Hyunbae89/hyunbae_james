import React from "react";
import {AboutMe} from "./AboutMe";
import {Contact} from "./Contact";
import {PMain} from "./Projects/PMain";

export class MainPage extends React.Component{
    render() {
        return(
          <div>
              <section className="jumbotron" id="mainPage-chapter1">
                  <div className="container py-5">
                      <div className='row justify-content-center'>
                          <div className="col-md-10 text-center">
                              <h1>부산사는 제임스</h1>
                              <p>
                                이 웹사이트는 개인 포트폴리오 용도로 만들어졌습니다.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
              <AboutMe/>
              <PMain/>
              <Contact/>
          </div>
        );
    }
}