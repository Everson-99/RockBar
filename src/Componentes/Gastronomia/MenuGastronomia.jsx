import React from 'react';
import styled from 'styled-components';
import amistel600 from '../../imgGlobal/imgCardapio/amistel600.jpg'
import amistelLong from '../../imgGlobal/imgCardapio/amistelLong.webp'
import heinejen600 from '../../imgGlobal/imgCardapio/heinejen600.jpg'
import HeinekenAlcool from '../../imgGlobal/imgCardapio/HeinekenAlcool.png'
import Original600 from '../../imgGlobal/imgCardapio/Original600.jpg'
import originalLata from '../../imgGlobal/imgCardapio/originalLata.png'
import brahma600 from '../../imgGlobal/imgCardapio/brahma600.jpg'
import brahmaLata from '../../imgGlobal/imgCardapio/brahmaLata.webp'
import brahmaZero from '../../imgGlobal/imgCardapio/brahmaZero.jpg'




const ProductCard = ({ name, description, image }) => {
  return (
    <CardContainer>
      <CardContent>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
      </CardContent>
      <ImageContainer>
      <Image src={image} alt={name} style={{ width: '200px', height: '160px' }} />
      </ImageContainer>
    </CardContainer>
  );
};

const bebidas = [
  {
    category: "Cervejas",
    products: [
      {
        name: "Amistel 600ml",
        description: "A clássica Amistel em sua versão de 600ml, perfeita para compartilhar com amigos em momentos de descontração.",
        image: amistel600,
        
      },
      {
        name: "Amistel Long Neck",
        description: "A versão em Long Neck da famosa Amistel, ideal para quem busca praticidade e sabor em uma embalagem conveniente.",
        image: amistelLong
      },
      {
        name: "Heineken 600ml",
        description: "A renomada cerveja Heineken, em sua versão de 600ml, conhecida pelo seu sabor único e qualidade premium.",
        image: heinejen600
      },
      {
        name: "Heineken Long Neck",
        description: "A clássica Heineken em sua versão Long Neck, perfeita para desfrutar em festas ou bares com amigos.",
        image: heinejen600
      },
      {
        name: "Heineken Long Neck Zero Álcool",
        description: "A versão sem álcool da icônica Heineken, mantendo o mesmo sabor característico e refrescante, ideal para quem busca uma opção sem álcool.",
        image: HeinekenAlcool

      },
      {
        name: "Cerveja Original 600ml",
        description: "A cerveja Original em sua versão de 600ml, conhecida pelo seu sabor encorpado e marcante, perfeita para apreciadores de cervejas tradicionais.",
        image: Original600

      },
      {
        name: "Cerveja Original Lata",
        description: "A versão em lata da cerveja Original, ideal para ser consumida gelada em momentos de descontração e lazer.",
        image:originalLata
      },
      {
        name: "Brahma 600ml",
        description: "A cerveja Brahma em sua versão de 600ml, refrescante e leve, perfeita para acompanhar churrascos e eventos sociais.",
        image:brahma600

        
      },
      {
        name: "Brahma Lata",
        description: "A cerveja Brahma em lata, prática e versátil, ideal para ser apreciada em qualquer ocasião.",
        image:brahmaLata

        
      },
      {
        name: "Brahma Lata Zero",
        description: "A versão sem álcool da cerveja Brahma, mantendo o sabor característico e refrescante, mas com teor alcoólico reduzido.",
        image:brahmaZero
      },
      // Adicione mais cervejas aqui conforme necessário
    ]
//   },
//   {
//     category: "Refrigerantes",
//     products: [
//       {
//         name: "Refrigerante 1",
//         description: "Descrição do refrigerante 1",
//         image: "url_do_refrigerante_1",
//       },
//       {
//         name: "Refrigerante 2",
//         description: "Descrição do refrigerante 2",
//         image: "url_do_refrigerante_2",
//       },
//       // Adicione mais refrigerantes aqui conforme necessário
//     ]
//   },
//   {
//     category: "Doses",
//     products: [
//       {
//         name: "Dose 1",
//         description: "Descrição da dose 1",
//         image: "url_da_dose_1",
//       },
//       {
//         name: "Dose 2",
//         description: "Descrição da dose 2",
//         image: "url_da_dose_2",
//       },
//       // Adicione mais doses aqui conforme necessário
//     ]
//   },
// ];

// const porcoes = [
//   {
//     name: "Porção de Batata Frita",
//     description: "Descrição da porção de batata frita",
//     image: "url_para_batata_frita",
//   },
//   {
//     name: "Porção de Mandioca",
//     description: "Descrição da porção de mandioca",
//     image: "url_para_mandioca",
//   },
//   {
//     name: "Porção de Calabresa",
//     description: "Descrição da porção de calabresa",
//     image: "url_para_calabresa",
//   },
//   {
//     name: "Porção de Frango à Passarinho",
//     description: "Descrição da porção de frango à passarinho",
//     image: "url_para_frango_passarinho",
//   },
//   {
//     name: "Porção de Polenta Frita",
//     description: "Descrição da porção de polenta frita",
//     image: "url_para_polenta_frita",
//   },
//   {
//     name: "Porção de Torresmo",
//     description: "Descrição da porção de torresmo",
//     image: "url_para_torresmo",
//   },
// ];

// const lanches = [
//   {
//     name: "Hambúrguer Simples",
//     description: "Descrição do hambúrguer simples",
//     image: "url_para_hamburguer_simples",
//   },
//   {
//     name: "Hambúrguer Duplo",
//     description: "Descrição do hambúrguer duplo",
//     image: "url_para_hamburguer_duplo",
//   },
//   {
//     name: "Sanduíche de Frango",
//     description: "Descrição do sanduíche de frango",
//     image: "url_para_sanduiche_frango",
//   },
//   {
//     name: "Sanduíche de Carne",
//     description: "Descrição do sanduíche de carne",
//     image: "url_para_sanduiche_carne",
//   },
//   {
//     name: "Sanduíche Vegetariano",
//     description: "Descrição do sanduíche vegetariano",
//     image: "url_para_sanduiche_vegetariano",
//   },
//   {
//     name: "Wrap de Atum",
//     description: "Descrição do wrap de atum",
//     image: "url_para_wrap_atum",
   },
 ]

const MenuGastronomia = () => {
  return (
    <MenuContainer>
      {bebidas.map((subcategory, index) => (
        <MenuSection key={index} sectionTitle={subcategory.category} products={subcategory.products} />
      ))}
      {/* <MenuSection sectionTitle="Porções" products={porcoes} /> */}
      {/* <MenuSection sectionTitle="Lanches" products={lanches} /> */}
    </MenuContainer>
  );
};


const MenuSection = ({ sectionTitle, products }) => {
  return (
    <SectionContainer>
      <SectionTitle>
        {sectionTitle}
        <SectionLine />
      </SectionTitle>
      <ProductList>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductList>
    </SectionContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding: 6%;
`;

const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 10px;
  position: relative;
`;

const SectionLine = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ffd700;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  width: calc(50% - 20px);
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductName = styled.h3`
  margin: 0;
`;

const ProductDescription = styled.p`
  margin: 10px 0;
`;

export default MenuGastronomia;
