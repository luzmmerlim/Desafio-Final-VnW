import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #0b090a;
  margin: 0 0 30px;
`;
const Ul = styled.div`
  list-style: none;
  width: 55vw;
  justify-content: space-evenly;
`;
const Li = styled.li`
  font-size: 1.5rem;
  background-color: silver;
  margin: 10px 0;
  padding: 10px;
`;
const A = styled.a`
  text-decoration: none;
  color: #0b090a;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 1.8vw;
  border-radius: 50%;
  margin-right: 10px;
`;

export default function portfolio() {
  return (
    <Container>
      <section>
        <Title>My portfolio:</Title>
        <Ul>
          <Li>
            <A href="https://codesandbox.io/s/divine-monad-483ob5">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              TODOFLIX
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/maddening-cake">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Feito em grupo
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/projeto-api">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Projeto com API
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/FridaKhaloDesafio">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Frida Khalo
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/Dados-Complexos">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Dados Complexos
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/Fun-es">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Funções
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/Estrutura-de-Dados">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Estrutura de Dados Complexos
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/For-While">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              For ou While
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/If-Else-">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              If ou Else
            </A>
          </Li>
          <Li>
            <A href="https://github.com/luzmmerlim/Desafio-Portflow">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Portflow
            </A>
          </Li>
          <Li>
            <A href="https://codesandbox.io/s/componentizando1-39vwwb">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Exercício livre
            </A>
          </Li>
          <Li>
            <A href="https://codesandbox.io/s/filter-2go86m">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Filter
            </A>
          </Li>
          <Li>
            <A href="https://codesandbox.io/s/props-goxk4r">
              <Icon src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              Props
            </A>
          </Li>
        </Ul>
      </section>
    </Container>
  );
}
