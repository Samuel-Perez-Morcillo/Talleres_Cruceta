import banner from "./../../assets/Cruceta.png"
import "./HomePage.css"
import { Row, Col, Container } from "react-bootstrap"

const HomePage = () => {
    return (
        <>
            <br></br>
            <img
                src={banner}
                alt="Banner"
                className="banner"
            />
            <Container>
                <Row className="mt-4">
                    <Col>
                        <p>Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Aspernatur
                            accusamus natus quae? Numquam, tempore ea asperiores magni
                            dignissimos eligendi, possimus dicta ratione quas harum fugit
                            laboriosam quidem beatae officia vel.</p>
                    </Col>
                    <Col>

                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default HomePage
