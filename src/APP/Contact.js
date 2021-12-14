import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export class Contact extends React.Component{
    render() {
        return(
            <section>
              <Container className="py-5" id="mainPageContact">
                  <Row className="text-center align-items-center">
                      <Col>
                          더 궁금한 것이 있다면 여기로 연락부탁 드립니다.
                      </Col>
                      <Col>
                          test
                      </Col>
                  </Row>
              </Container>
            </section>
        );
    }
}