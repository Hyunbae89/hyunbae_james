import React from "react";
import aboutMe from '../FILE/hyunbae.JPG';

export class AboutMe extends React.Component{
    render() {
        return(
            <section className="container py-5" id="mainPageAboutMe">
               <div className='row justify-content-center'>
                  <div className="col-12 col-md-4 text-center">
                      <img src={aboutMe} className="rounded img-thumbnail" alt="about me"/>
                      <h3 className="pt-2 text-center">전 현 배</h3>
                      <div className="text-center">[ James ]</div>
                      <div className="text-center">1989. 03. 30</div>

                  </div>
                   <div className="col-12 col-md-8">
                       <div className='container'>
                           <div className='row'>
                               <h4>경력 사항</h4>
                           </div>
                           <div className="row">
                               <div className="col-6">2017. ~ 2019. US Fremont CA </div>
                               <div className="col-6">Lento Medical Inc.</div>
                           </div>
                           <div className='row'>
                               -> Front-End 웹 개발
                           </div>

                       </div>
                  </div>
               </div>
            </section>
        )
    }
}