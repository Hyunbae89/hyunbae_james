import aboutMe from '../FILE/hyunbae.JPG';
import {Col, Container, Image, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function AboutMe(){
    return(
        <section id="mainPageAboutMeOuter">
            <Container className="my-2 py-3" id="mainPageAboutMe">
                <Row className="">
                    <Col sm={12} md={8} xl={8}>
                        <Row className="AboutMeText text-center">
                            <h2 className="text-center">About Me</h2>
                            <div className="col-12">
                                반갑습니다. Web Front-End 개발자 전현배(James)입니다.
                            </div>
                            <p className="col-12">
                                저는 해외 인턴을 시작으로 커리어 대부분의 시간을 미국에서 보냈습니다. <br/>
                                그래서 현재 한국에서의 도전이 조금은 낯설기도 합니다.
                            </p>
                            <p className="col-12">
                                하지만 꿈을 이루기 위해 도전했던 수많은 시간과 노력이 <br/>
                                지금의 나를 만든 것 처럼
                            </p>
                            <div className="col-12">
                                성장하기 위해 다시 도전하려고 합니다.
                            </div>

                        </Row>
                        <Row className="mx-5 justify-content-center">
                            <Link to={'/about_me'} className="btn btn-outline-dark more-btn" >
                                더보기
                            </Link>
                        </Row>
                    </Col>
                    <Col sm={12} md={4} xl={4}>
                        <div className="circularImg">
                            <Image src={aboutMe} id="profileImg"  alt="about me" roundedCircle/>
                        </div>

                    </Col>
                </Row>
                {/*<Container >*/}
                {/*    <Row >*/}
                {/*        <h4 >경력 사항</h4>*/}
                {/*         <Row className="pt-3 ">*/}
                {/*            <Col xs='6' md="3" className="text-center">2017. ~ 2019.  </Col>*/}
                {/*            <Col xs='6' md='4' className="text-center">US, Fremont, CA</Col>*/}
                {/*            <Col md="5" className="text-center">Lento Medical Inc.</Col>*/}
                {/*            <Col>-> Web Front-End 개발</Col>*/}
                {/*         </Row>*/}

                {/*        <Row className="pt-3 ">*/}
                {/*            <Col xs='6' md="3" className="text-center">2016. ~ 2017.  </Col>*/}
                {/*            <Col xs='6' md='4' className="text-center">US, Fremont, CA</Col>*/}
                {/*            <Col md="5" className="text-center">All Quality & Services inc.</Col>*/}
                {/*            <Col>-> K-Move 해외 인턴, 취업 연수</Col>*/}
                {/*        </Row>*/}
                {/*    </Row>*/}
                {/*    <Row className="pt-5">*/}
                {/*        <h4>학력 사항</h4>*/}
                {/*        <Row className=" align-items-center">*/}
                {/*            <Col xs='5' md="3" className="text-center ">2008. ~ 2016.  </Col>*/}
                {/*            <Col xs='7' md='4' className="text-center">대한민국, 부산, 경남</Col>*/}
                {/*            <Col md="5">*/}
                {/*                <Row className="justify-content-center">동의대학교</Row>*/}
                {/*                <Row className="justify-content-center">컴퓨터공학과 학사 졸업</Row>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
            </Container>
        </section>
    )
}