import {Container, Row} from "react-bootstrap";

export default function Quote() {
    return(
        <Container className="py-5">
            <Row className="text-center py-5">
                <h5 ><em>TOUCHING SAYING</em></h5>
            </Row>
            <Row className="text-center pb-5">
                <figure>
                    <blockquote id="quote">
                        <Row>
                            <h2>
                                <em>우리들의 중요한 임무는 멀리 있는 희미한것을 보는게 아니라,</em>
                            </h2>
                        </Row>
                        <Row>
                            <h2>
                                <em>가까이 있는 분명한 것을 실천하는 것이다.</em>
                            </h2>
                        </Row>
                    </blockquote>
                    <h4>
                        <figcaption className="blockquote-footer pt-3">
                            토머스 칼라일
                        </figcaption>
                    </h4>
                </figure>
            </Row>
        </Container>
    )
}