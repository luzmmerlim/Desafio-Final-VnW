import React from "react";
import perfilImg from "./imgs/foto de perfil.jpeg";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Componentes/Nav.js";
import Home from "./Componentes/Home.js";
import ODSs from "./Componentes/ODSs.js";
import Portifolio from "./Componentes/Portifolio.js";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Content = styled.div`
  width: 74vw;
`;
const Header = styled.div`
  background-color: pink;
  width: 26vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 0;
  padding: 50px;
`;
const Img = styled.img`
  width: 180px;
  border-radius: 50%;
`;
const Name = styled.h1`
  color: gray;
  text-shadow: 0 1px 2px #495057;
`;
const Ul = styled.ul`
  width: 15vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Li = styled.li`
  list-style: none;
  border-left: 8px solid #f98da0;
  background-color: #f1a5b2;
  padding: 12px;
  a {
    text-decoration: none;
  }
`;
const P = styled.p`
  color: #edf2f4;
  font-size: 1.2rem;
`;
function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header>
          <div>
            <Img src={perfilImg} />
            <Name>Luzia Merlim</Name>
          </div>
          <nav>
            <Ul>
              <Li>
                <Link to="/">
                  <P>Bio</P>
                </Link>
              </Li>
              <Li>
                <Link to="/Portifolio">
                  <P>Portfolio</P>
                </Link>
              </Li>
              <Li>
                <Link to="/ODSs">
                  <P>Para um mundo + Eco</P>
                </Link>
              </Li>
              <Li>
                <a href="#Contatos">
                  <P>Meus Contatos</P>
                </a>
              </Li>
            </Ul>
          </nav>
        </Header>
        <Content>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ODSs" element={<ODSs />} />
            <Route path="/Portifolio" element={<Portifolio />} />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
}

export default App;
