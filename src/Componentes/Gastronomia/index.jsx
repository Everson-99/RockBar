import React from 'react';
import styled from 'styled-components';

const CardapioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 3%; /* Adiciona um espaço negativo para compensar as margens dos itens */
`;

const CardapioItem = styled.div`
  width: calc(70% - 2%); /* Calcula 50% do espaço disponível e subtrai 8% de margem */
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 0 4%; /* Define a margem entre os itens */
`;

const Titulo = styled.h2`
  color: #333;
`;

const Descricao = styled.p`
  color: #666;
`;

const Preco = styled.p`
  font-weight: bold;
`;

export function Cardapio() {
  return (
    <CardapioContainer>
      <CardapioItem>
        <Titulo>Filtrado Hario V60</Titulo>
        <Descricao>
          Esse é um método japonês de filtragem rápida, dando ao café um sabor
          equilibrado, com baixo amargor e corpo acentuado.
        </Descricao>
        <Descricao>
          This is a Japanese method of rapid filtration, giving the coffee a
          balanced flavor, with low bitterness and a strong body.
        </Descricao>
        <Preco>200ml - R$ 12,00</Preco>
      </CardapioItem>
      <CardapioItem>
        <Titulo>Expresso</Titulo>
        <Descricao>
          Denso, aroma acentuado, na medida certa para um bom expresso
          tradicional.
        </Descricao>
        <Descricao>
          Dense, strong aroma, just the right amount for a good traditional
          expresso.
        </Descricao>
        <Preco>R$ 8,00</Preco>
      </CardapioItem>
    </CardapioContainer>
  );
}
