import {Container, Row} from "react-bootstrap";

export default function Quote() {
    return(
        <Container className="py-5">
            <Row className="text-center py-5">
                <h5 ><em>TOUCHING SAYING</em></h5>
            </Row>
            <Row className="text-center">
                <figure>
                    <blockquote id="quote">
                        <Row>
                            <div  className="col-12">
                                <em>우리들의 중요한 임무는 </em>
                            </div>
                            <div className="col-12">
                                <em>멀리 있는 희미한것을 보는게 아니라,</em>
                            </div>
                            <div className="col-12">
                                <em>가까이 있는 분명한 것을 실천하는 것이다.</em>
                            </div>
                        </Row>
                    </blockquote>
                    <figcaption className="blockquote-footer pt-3">
                        토머스 칼라일
                    </figcaption>
                </figure>
            </Row>
        </Container>
    )
}