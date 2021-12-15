import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import {faPhoneVolume, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from 'qrcode.react';

export class Contact extends React.Component{
    render() {
        return(
            <section id="mainPageContact"  className="bg-secondary py-4">
              <Container className="bg-white">
                  <Row >
                      <Col md={5}>
                          <h2 className="my-5 text-center ">
                              Contact
                          </h2>
                          <Row className="my-3">
                              <Col xs={3} className="text-center">
                                  <FontAwesomeIcon className="fa-lg" icon={faPhoneVolume} />
                              </Col>
                              <Col xs={9}>
                                  <h5>
                                      +82 (10) 7425 6435
                                  </h5>
                              </Col>
                          </Row>
                          <Row className="my-3">
                              <Col xs={3} className="text-center">
                                  <FontAwesomeIcon className="fa-lg" icon={faEnvelope} />
                              </Col>
                              <Col xs={9}>
                                  <h5>
                                      zxcv6487@gmail.com
                                  </h5>
                              </Col>
                          </Row>
                      </Col>
                      <Col md={7}>
                          <Row className="my-4">
                              <QRCode value={"https://open.kakao.com/o/sSpI4Apd"} renderAs={"svg"}/>
                          </Row>
                          <Row className="mb-4  mb-5 mx-5 text-center justify-content-center">
                              <Button className="openTack-btn align-self-center " href="https://open.kakao.com/o/sSpI4Apd" target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                                  1:1 오픈 채팅
                              </Button>
                          </Row>
                      </Col>
                  </Row>
              </Container>
            </section>
        );
    }
}