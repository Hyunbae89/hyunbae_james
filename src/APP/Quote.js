import {Container, Row} from "react-bootstrap";

export default function Quote() {
    return(
        <Container className="py-5">
            <Row className="text-center py-5">
                <h5 ><em>TOUCHING SAYING</em></h5>
            </Row>
            <Row className="text-center pb-5">
                <blockquote id="quote">
                    <Row>
                        <h2>
                            <em>바다에 혼자 있어보아라.</em>
                        </h2>
                    </Row>
                    <Row>
                        <h2>
                            <em>바다는 당신이 인식하지도 못했던 문제들에 대한 해답을 얻을 장소이다.</em>
                        </h2>
                    </Row>
                </blockquote>

                <p>

                </p>
            </Row>
        </Container>
    )
}