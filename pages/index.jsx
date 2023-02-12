import { Col, Container, Row } from "react-bootstrap";
import CardPerfil from "../components/card-perfil";
import VscodeScreen from "../components/vscode-screen";
import Konami from "react-konami-code";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import MouseWheel from "../components/MouseWheel";

export default function Home({ user, repos }) {
  const [post, setPost] = useState();
  const URL = "/api/hello";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const easterEgg = () => {
    alert("teste");
  };

  useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Konami>
        <img
          draggable={false}
          className="mario"
          src="/mario-gif.gif"
          alt="mario world"
        />
      </Konami>
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
            <Row>
              <Col className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <span className="text-light">{user.name}</span>
                <h1 className="title-one">Desenvolvedor</h1>
                <h2 className="title-two">Web Front-End & Designer UX /UI</h2>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex flex-column align-items-start">
                    <input name="name" type="text" {...register("name")} />
                    <input name="post" type="text" {...register("post")} />
                    <button type="submit">Enviar post</button>
                  </div>
                </form> */}
              </Col>
              <Col className="col-12 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                <div className="position-relative w-100 d-flex align-items-center">
                  <VscodeScreen />
                  <img
                    draggable={false}
                    src="/svgs/bg-hero-1.svg"
                    className="rotate-center vector-1"
                    alt="vetor gráfico"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="py-5 position-relative">
          <img
            draggable={false}
            className="playstation rotate-center-play"
            src="/svgs/playstation.svg"
            alt="playstation"
            title="↑↑↓↓←→←→BA"
          />
          <Container className="py-5">
            <Row className="d-flex align-items-center">
              <Col className="col-12 col-lg-4 position-relative">
                <CardPerfil
                  avatar={user.avatar_url}
                  name={user.name}
                  bio={user.bio}
                />
                <img
                  draggable={false}
                  src="/svgs/bg-hero-1.svg"
                  className="vector-2"
                  alt="vetor gráfico"
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
      <MouseWheel />
    </>
  );
}

export const getStaticProps = async () => {
  const userGit = await fetch("https://api.github.com/users/renatogsantos");
  const user = await userGit.json();
  const reposGit = await fetch(
    "https://api.github.com/users/renatogsantos/repos"
  );
  const repos = await reposGit.json();

  return {
    props: {
      user: user,
      repos: repos,
    },
    revalidate: 60 * 60 * 24,
  };
};
