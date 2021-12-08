import aboutMe from '../FILE/hyunbae.JPG';
import {Col, Container, Row} from "react-bootstrap";

export default function AboutMe(){
    return(
        <section id="mainPageAboutMeOuter">
            <Container className="py-5" id="mainPageAboutMe">
                <Row className="align-items-center">
                    <Col md={4}  xl={3}>
                        <Row id="profileImg" className="align-items-center">
                            <div>
                                <img src={aboutMe} className="rounded img-thumbnail"  alt="about me"/>
                            </div>
                            <h3 className="pt-2 text-center">전 현 배</h3>
                            <div className="text-center">[ James ]</div>
                            <div className="text-center">1989. 03. 30</div>
                        </Row>
                    </Col>
                    <Col md={8}  xl={9}>
                        <Container >
                            <Row >
                                <h4 >경력 사항</h4>
                                 <Row className="pt-3 border-bottom">
                                    <Col xs='6' md="3" className="text-center">2017. ~ 2019.  </Col>
                                    <Col xs='6' md='4' className="text-center">US, Fremont, CA</Col>
                                    <Col md="5" className="text-center">Lento Medical Inc.</Col>
                                    <Col>-> Web Front-End 개발</Col>
                                 </Row>

                                <Row className="pt-3 border-bottom">
                                    <Col xs='6' md="3" className="text-center">2016. ~ 2017.  </Col>
                                    <Col xs='6' md='4' className="text-center">US, Fremont, CA</Col>
                                    <Col md="5" className="text-center">All Quality & Services inc.</Col>
                                    <Col>-> K-Move 해외 인턴, 취업 연수</Col>
                                </Row>
                            </Row>
                            <Row className="pt-5">
                                <h4>학력 사항</h4>
                                <Row className="border-bottom align-items-center">
                                    <Col xs='5' md="3" className="text-center ">2008. ~ 2016.  </Col>
                                    <Col xs='7' md='4' className="text-center">대한민국, 부산, 경남</Col>
                                    <Col md="5">
                                        <Row className="justify-content-center">동의대학교</Row>
                                        <Row className="justify-content-center">컴퓨터공학과 학사 졸업</Row>
                                    </Col>
                                </Row>

                            </Row>


                        </Container>
                    </Col>
                </Row>
               <div className='row justify-content-center'>
                  <div className="col-12 col-md-4 text-center">

                  </div>
                   <div className="col-12 col-md-8">
                       <div className='container'>
                           <div className='row'>

                           </div>
                           <div className="row">

                           </div>
                           <div className='row'>

                           </div>

                       </div>
                  </div>
               </div>
            </Container>
        </section>
    )
}