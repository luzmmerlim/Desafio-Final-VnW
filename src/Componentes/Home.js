import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0eff4;
`;
const Content = styled.div`
  height: 85vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #f0eff4;
`;
const P = styled.p`
  width: 50vw;
  font-size: 1.2rem;
  color: #0b090a;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #0b090a;
`;
export default function Main() {
  return (
    <Container>
      <Content>
        <section>
          <Title>Biography:</Title>
          <P>
            Olá,Eu sou a Luzia Merlim, tenho 20 anos e sou natural de Barra
            Mansa/RJ. Desde criança, me destaco por ser muito comunicativa e
            espontânea. Aprendi a sonhar sem limites ainda muito nova e, por
            isso, me tornei uma pessoa determinada a correr atrás das minhas
            metas e aspirações.Tive muitas dúvidas sobre qual faculdade cursar,
            pois gosto de muitas coisas! Mas me encontro diariamente na
            tecnologia e na biologia.Estou em constante aprendizado e dou meu
            melhor todos os dias para contribuir com meu trabalho. Acredito que
            as mulheres podem dominar o mundo, mas que será muito melhor se
            pudermos TRANSFORMAR o mundo juntas! "Que nada nos defina, que nada
            nos sujeite. Que a liberdade seja nossa própria substância..."Simone
            Beauvoir
          </P>
        </section>
      </Content>
    </Container>
  );
}
