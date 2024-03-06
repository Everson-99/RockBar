import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Endereco = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TituloEndereco = styled.h3`
  color: #333;
`;

export const HorarioFuncionamento = styled.div`
  cursor: pointer;
`;

export const FormasPagamento = styled.div`
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const RedesSociais = styled.div`
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
