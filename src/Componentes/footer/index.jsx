import React, { useState } from 'react';
import { FooterContainer, Endereco, TituloEndereco, HorarioFuncionamento, FormasPagamento, RedesSociais } from './styles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importando os ícones

export function Footer() {
  // Estado para controlar se os horários de funcionamento estão expandidos ou não
  const [expanded, setExpanded] = useState(false);

  // Função para alternar entre expandido e recolhido
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <FooterContainer>
       <FormasPagamento>
          <h3>Formas de Pagamento</h3>
          <p>Aceitamos todos os principais cartões de crédito e débito.</p>
          <RedesSociais>
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </RedesSociais>
        </FormasPagamento>
        

      <div>
      <Endereco>
        <TituloEndereco>Nosso Endereço</TituloEndereco>
        <p>
          <br />
          R. José Francisco da Silveira, 59 <br />
          Aririu da Formiga, Palhoça <br />
          SC, 88135-390
        </p>
      </Endereco>
        

       
      </div>

     
      <HorarioFuncionamento onClick={toggleExpanded}>
          <h3>Horário de Funcionamento {expanded ? <FiChevronUp /> : <FiChevronDown />}</h3>
          {expanded && (
            <ul>
              <li>Segunda a Sexta: 8:00 - 18:00</li>
              <li>Sábado: 8:00 - 12:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          )}
        </HorarioFuncionamento>
    </FooterContainer>
  );
}
