import React, { useState } from "react";
import styled from "styled-components";
import ODS7 from "../imgs/SDG-7.png";
import ODS11 from "../imgs/SDG-11.png";
import ODS13 from "../imgs/SDG-13.png";
import ODS14 from "../imgs/SDG-14.png";
import ODS15 from "../imgs/SDG-15.png";
const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0eff4;
  padding: 30px 0 30px 0;
`;
const Img = styled.img`
  width: 10vw;
`;
const ImgODS = styled.img`
  width: 40%;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #0b090a;
  margin: 0 0 20px 0;
`;
const P = styled.p`
  width: 100%;
  font-size: 1.2rem;
  color: #0b090a;
`;
const Section = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 0 60px 0;
`;
const ContentImg = styled.div`
  width: 100%;
  margin: 0 0 60px 0;
  display: flex;
  justify-content: space-between;
`;
const ContentCard = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: #e5e5e5;
`;

const ContainerODS = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const ContentTextoODs = styled.div`
  width: 50%;
`;
const PODS = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;
const NumberODs = styled.p`
  font-size: 5rem;
  color: #fff;
`;
const TitleODS = styled.h2`
  font-size: 2.5rem;
  color: #fff;
`;
const ContainerAboutODS = styled.div`
  width: 100%;
  padding: 30px;
`;
export default function ODSs() {
  const [Modal, setModal] = useState(Number(0));
  const ODSinfoList = [
    {
      numODS: 7,
      TitleODS: "Energia limpa e acessível",
      descriptionODS:
        "Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos",
      inMyNeighborhood:
        "- Na área localizada em Rio do Ouro – São Gonçalo, vemos uma quantidade muito agradável de árvores, diversidade de plantas e etc. Podemos assim usar essa quantidade de mata a nosso favor.Usar energia eólica ou energia solar para garantirmos acesso à energia barata, confiável, sustentável e renovável para todos. ",
      ImgODS: ODS7,
      color: "#fcc30b"
    },
    {
      numODS: 11,
      TitleODS: "Cidades e comunidades sustentáveis",
      descriptionODS:
        "Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis",
      inMyNeighborhood:
        "- Utilizar o acesso a natureza para criar comércio natural e sustentável, tais como uso de produtos naturais, comercialização positiva de plantas, mudas de árvores para conscientizarmos e aumentarmos o plantio da nossa floresta. Construção de casas sustentáveis e inclusivas, descarte correto de resíduos, passagem acessível para os animais silvestres. ",
      ImgODS: ODS11,
      color: "#fd9d24"
    },
    {
      numODS: 13,
      TitleODS: "Ação contra a mudança global do clima",
      descriptionODS:
        "Adotar medidas urgentes para combater as alterações climáticas e os seus impactos",
      inMyNeighborhood:
        "-Campanhas públicas de conscientização do uso negativo de gases poluentes e queima de parte da floresta para descarte de resíduos, engajar mais o uso de produtos sustentáveis  como ecobags, sacolas de mercado sustentáveis, descarte correto do óleo de cozinha, reutilização de água de descargas, uso de bicicletas a carros não elétricos. ",
      ImgODS: ODS13,
      color: "#3f7e44"
    },
    {
      numODS: 14,
      TitleODS: "Vida na água",
      descriptionODS:
        "Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável",
      inMyNeighborhood:
        "-Incentivar a pesca local legal, campanha de limpeza e descarte de resíduos que ficam na areia da praia, manutenção correta do nosso bioma marinho, diminuição do descarte de resíduos de grandes navios industriais.",
      ImgODS: ODS14,
      color: "#0a97d9"
    },
    {
      numODS: 15,
      TitleODS: "Vida terrestre",
      descriptionODS:
        "Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade",
      inMyNeighborhood:
        "Adotar medidas urgentes para combater as alterações climáticas e os seus impactos",
      ImgODS: ODS15,
      color: "#56c02b"
    }
  ];
  return (
    <Container>
      <Section>
        <Content>
          <Title>Os Objetivos de Desenvolvimento Sustentável no Brasil</Title>
          <P>
            Os Objetivos de Desenvolvimento Sustentável são um apelo global à
            ação para acabar com a pobreza, proteger o meio ambiente e o clima e
            garantir que as pessoas, em todos os lugares, possam desfrutar de
            paz e de prosperidade. Estes são os objetivos para os quais as
            Nações Unidas estão contribuindo a fim de que possamos atingir a
            Agenda 2030 no Brasil.
          </P>
        </Content>
        <ContentImg>
          <Img
            onClick={() => setModal(Modal !== 7 ? 7 : 0)}
            src="https://odsbrasil.gov.br/content/ods/7.png"
          />
          <Img
            onClick={() => setModal(Modal !== 11 ? 11 : 0)}
            src="https://odsbrasil.gov.br/content/ods/11.png"
          />
          <Img
            onClick={() => setModal(Modal !== 13 ? 13 : 0)}
            src="https://odsbrasil.gov.br/content/ods/13.png"
          />
          <Img
            onClick={() => setModal(Modal !== 14 ? 14 : 0)}
            src="https://odsbrasil.gov.br/content/ods/14.png"
          />
          <Img
            onClick={() => setModal(Modal !== 15 ? 15 : 0)}
            src="https://odsbrasil.gov.br/content/ods/15.png"
          />
        </ContentImg>

        {ODSinfoList.filter((item) => item.numODS === Modal).map((item) => (
          <ContentCard>
            <ContainerODS backgroundColor={item.color}>
              <ContentTextoODs>
                <PODS>Objetivo de Desenvolvimento Sustentável</PODS>
                <NumberODs>{item.numODS}</NumberODs>
                <TitleODS>{item.TitleODS}</TitleODS>
                <PODS>{item.descriptionODS}</PODS>
              </ContentTextoODs>
              <ImgODS src={item.ImgODS} />
            </ContainerODS>
            <ContainerAboutODS>
              <Title>
                Minha ideia de como meu bairro pode ajudar a cumprir essa meta.
              </Title>
              <P>{item.inMyNeighborhood}</P>
            </ContainerAboutODS>
          </ContentCard>
        ))}
      </Section>
    </Container>
  );
}
