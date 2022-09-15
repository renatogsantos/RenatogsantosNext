import { Col, Container, Row } from "react-bootstrap";
import VscodeScreen from "../components/vscode-screen";

export default function Home() {
  return (
    <>
      <section>
        <Container fluid className="home">
          <Container className="block-1">
            <img
              src="/svgs/bg-hero-1.svg"
              className="rotate-center vector-1"
              alt=""
            />
            <Row>
              <Col className="col-12 col-md-6 order-2 order-md-1 d-flex align-items-center">
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  accusamus, natus totam impedit corporis molestiae!
                </p>
              </Col>
              <Col className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center">
                <div className="position-relative w-100 d-flex align-items-center">
                  <VscodeScreen />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}
