import React from "react";
import {Container, Row, Col, Card, Button, Alert} from "react-bootstrap";
import ocean from "../../FILE/ocean.jpg";

export class PMain extends React.Component{
    render() {
        return(
            <section id="mainPageProjects" >
                <Container className="py-5">
                    <Row className="my-3 text-center">
                        <h2>Projects</h2>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col md={4}>*/}
                    {/*        <Card className='bg-dark text-white' style={{height: '25rem' }}>*/}
                    {/*            <Card.Img src={ocean} alt="ocean" style={{height: '100%' }}/>*/}
                    {/*            <Card.ImgOverlay>*/}
                    {/*                <Row className='h-50 text-center'>*/}
                    {/*                    <Card.Title>*/}
                    {/*                       <h3>Card title</h3>*/}
                    {/*                    </Card.Title>*/}
                    {/*                </Row>*/}
                    {/*                <Row className="h-50">*/}
                    {/*                    <Card.Text>*/}
                    {/*                        there are some more things*/}
                    {/*                    </Card.Text>*/}
                    {/*                    <Button variant="outline-light">Join</Button>*/}
                    {/*                </Row>*/}
                    {/*            </Card.ImgOverlay>*/}

                    {/*        </Card>*/}

                    {/*    </Col>*/}
                    {/*    <Col md={4}>*/}
                    {/*        <Card className='bg-dark text-white'>*/}
                    {/*            <Card.Img src={ocean} alt="ocean" />*/}
                    {/*            <Card.ImgOverlay>*/}
                    {/*                <Card.Title>Card title</Card.Title>*/}
                    {/*                <Card.Text>*/}
                    {/*                    there are some more things*/}
                    {/*                </Card.Text>*/}
                    {/*            </Card.ImgOverlay>*/}

                    {/*        </Card>*/}

                    {/*    </Col>*/}
                    {/*    <Col md={4}>*/}
                    {/*        <Card className='bg-dark text-white'>*/}
                    {/*            <Card.Img src={ocean} alt="ocean" />*/}
                    {/*            <Card.ImgOverlay>*/}
                    {/*                <Card.Title>Card title</Card.Title>*/}
                    {/*                <Card.Text>*/}
                    {/*                    there are some more things*/}
                    {/*                </Card.Text>*/}
                    {/*            </Card.ImgOverlay>*/}

                    {/*        </Card>*/}

                    {/*    </Col>*/}
                    {/*</Row>*/}
                    <Row>
                        <Alert variant={"warning"} className="text-center">
                            업데이트 예정입니다.
                        </Alert>
                        <Alert variant={"info"} className="text-center">
                            업데이트 예정입니다.
                        </Alert>
                        <Alert variant={"danger"} className="text-center">
                            업데이트 예정입니다.
                        </Alert>
                    </Row>

                </Container>
            </section>
        );
    }
}