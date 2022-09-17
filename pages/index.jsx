import { Col, Container, Row } from "react-bootstrap";
import CardPerfil from "../components/card-perfil";
import VscodeScreen from "../components/vscode-screen";

export default function Home({ user }) {
  console.log(user);
  return (
    <>
      <section>
        <Container fluid className="home">
          <img
            draggable={false}
            className="bg-gradient-blue"
            src="/bg-gradient-blue.png"
            alt="vetor gráfico"
            height="90%"
          />
          <Container className="block-1">
            <img
              draggable={false}
              src="/svgs/bg-hero-1.svg"
              className="rotate-center vector-1"
              alt="vetor gráfico"
            />
            <Row>
              <Col className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <span className="text-light">{user.name}</span>
                <h1 className="title-one">Desenvolvedor</h1>
                <h2 className="title-two">Front-End</h2>
              </Col>
              <Col className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                <div className="position-relative w-100 d-flex align-items-center">
                  <VscodeScreen />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5">
          <Container className="py-5">
            <Row className="d-flex align-items-center">
              <Col className="col-12 col-lg-4">
                <CardPerfil
                  avatar={user.avatar_url}
                  name={user.name}
                  bio={user.bio}
                />
              </Col>
              <Col className="col-12 col-lg-8 p-3 d-flex flex-column align-items-center justify-content-center">
                <p className="text-light">
                  Desenvolvedor Web Front End, Designer UX UI e Designer
                  Gráfico, atuando no mercado há 8 anos desenvolvendo projetos
                  para grandes empresas, com atuação nas áreas de criação de
                  logomarcas, marketing, web design, design gráfico, entre
                  muitas outras.
                </p>
                <p className="text-light">
                  Experiente nos processos de desenvolvimento de softwares as a
                  service (Saas) e produtos relacionados, branding e divulgação
                  com o uso das mais diversas ferramentas disponíveis
                  atualmente.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/renatogsantos");
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 60 * 60 * 24,
  };
};
