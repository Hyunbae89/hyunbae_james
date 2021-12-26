import React from "react";
import {Container, Navbar, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDragon} from "@fortawesome/free-solid-svg-icons";

export class AboutMeContent extends React.Component{
    render() {
        return(
          <div>
              <Navbar bg="dark" variant="dark">
                  <Container fluid>
                      <Navbar.Brand as={Link} to="/">
                          <FontAwesomeIcon className="mx-3" icon={faDragon} />
                          James lives Busan
                      </Navbar.Brand>
                  </Container>
              </Navbar>
              <section>
                  <Container>
                      <h4 className="my-5">Resume</h4>
                      <Row>
                          <Col md={3}>
                              <div className="pt-3 ">
                                  <strong>
                                      Work Experience
                                  </strong>
                              </div>
                          </Col>
                          <Col md={9}>
                              <Row className="my-4 text-center border-top  py-5">
                                   <Row>
                                      <Col md={6} lg={4} className="py-3">
                                          2017.01 - 2019.07
                                      </Col>
                                      <Col md={6} lg={4} className="py-3">
                                          Lento Medical Inc.
                                      </Col>
                                       <Col md={12} lg={4} className="py-3">
                                           웹프론트엔드 개발자
                                       </Col>
                                  </Row>
                                  <Row className="text-center">
                                    <Col className="py-2">
                                        React.js / Javascript / Jquery 를 사용하여 Front-End Web Application 구현
                                    </Col>
                                  </Row>
                              </Row>
                              <Row className="my-4 text-center border-top   py-5">
                                   <Row>
                                      <Col md={6} lg={4} className="py-3">
                                          2016.01 - 2017.01
                                      </Col>
                                      <Col md={6} lg={4} className="py-3">
                                          All Quality & Services Inc.
                                      </Col>
                                       <Col md={12} lg={4} className="py-3">
                                           인턴
                                       </Col>
                                  </Row>
                                  <Row className="text-center">
                                    <Col>
                                        대학교 졸업 후 K-Move 해외인턴
                                    </Col>
                                  </Row>
                              </Row>

                          </Col>
                      </Row>
                      <Row>
                          <Col md={3}>
                              <div className="pt-3 ">
                                  <strong>
                                      Education
                                  </strong>
                              </div>
                          </Col>
                          <Col md={9}>
                              <Row className="my-4 text-center border-top  py-5">
                                   <Row>
                                      <Col md={6} lg={4} className="py-3">
                                          2008.03 - 2016.01
                                      </Col>
                                      <Col md={6} lg={4} className="py-3">
                                          동의대학교
                                      </Col>
                                       <Col md={12} lg={4} className="py-3">
                                           컴퓨터 공학 학사 졸업
                                       </Col>
                                  </Row>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col md={3}>
                              <div className="pt-3 ">
                                  <strong>
                                      Skill & Certificate
                                  </strong>
                              </div>
                          </Col>
                          <Col md={9}>
                              <Row className="my-4 text-center border-top  py-5">
                                   <Row>
                                      <Col xs={5} className="py-3">
                                          2021.11
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          프레젠테이션 전문가
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={5} className="py-3">
                                          2007.09
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          워드프로세서 1급
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={5} className="py-3">
                                          2007.07
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          전자기기 기능사
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={5} className="py-3">
                                          2007.03
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          정보처리기능사
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={5} className="py-3">
                                          2006.11
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          정보기기운용기능사
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={5} className="py-3">
                                          2006.10
                                      </Col>
                                      <Col xs={7} className="py-3">
                                          컴퓨터활용능력 2급
                                      </Col>
                                  </Row>
                              </Row>
                          </Col>
                      </Row>
                      <Row className="py-5">
                          <Link to="/" className="btn btn-secondary">Home으로 돌아가기</Link>
                      </Row>
                  </Container>
              </section>
          </div>
        );
    }
}