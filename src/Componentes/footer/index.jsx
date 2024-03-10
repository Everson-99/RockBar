import React, { useState } from 'react';
import { FooterContainer, Endereco, TituloEndereco, HorarioFuncionamento, FormasPagamento, RedesSociais } from './styles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importando os ícones
import imgpix from '../../imgGlobal/imgpix.webp'
import imgvisa from '../../imgGlobal/imgVisa.webp'
import imgMaster from '../../imgGlobal/imgMasterCard.webp'
import imgElo from '../../imgGlobal/imgElo.webp'
import imgIntsa from '../../imgGlobal/logoInta.png'
import imgFace from '../../imgGlobal/logoFace.png'
import imgWhatsFooter from '../../imgGlobal/logoWhatsFooter.png'


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
        <h3>Meios de pagamento</h3>
        <img src={imgpix} alt="imgpix" className='logo' />
        <img src={imgvisa} alt="imgVisa" className='logo' />
        <img src={imgMaster} alt="imgMaster" className='logo' />
        <img src={imgElo} alt="imgElo" className='logo' />

        <RedesSociais>
          <h3>Redes Sociais</h3>
          <ul>
            <a href="###">
              <img src={imgWhatsFooter} alt="imgElo" className='logo' style={{ width: '35px', height: '35px', cursor: 'pointer', marginRight: -5 }} />
            </a>
            <a href="###">
              <img src={imgFace} alt="imgElo" className='logo' style={{ width: '26px', height: '35px', cursor: 'pointer', marginLeft: 21 }} />
            </a>
            <a href="###">
              <img src={imgIntsa} alt="imgElo" className='logo' style={{ width: '32px', height: '35px', cursor: 'pointer', marginLeft: 21 }} />
            </a>        </ul>
        </RedesSociais>
      </FormasPagamento>

      <Endereco>
        <TituloEndereco>Nosso Endereço</TituloEndereco>
        <p style={{ cursor: 'pointer' }}>
          <br />
          <a href="https://www.google.com/maps/dir//Rock+Bar+Rocker's+R.+Jos%C3%A9+Francisco+da+Silveira,+59+-+Aririu+da+Formiga+Palho%C3%A7a+-+SC+88135-390/@-27.6953775,-48.663272,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95273334d823e883:0xa0ddcc81e84fd1dc!2m2!1d-48.663272!2d-27.6953775?entry=ttu" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>R. José Francisco da Silveira, 59 <br />
            Aririu da Formiga, Palhoça <br />
            SC, 88135-390</a>
        </p>
      </Endereco>

      <HorarioFuncionamento onClick={toggleExpanded}>
        <h3>Horário de Funcionamento {expanded ? <FiChevronUp /> : <FiChevronDown />}</h3>
        {expanded && (
          <ul>
            <li>Segunda-Feira: Fechado</li>
            <li>Terça-Feira: Fechado</li>
            <li>Quarta-Feira: 16:00 - 00:00</li>
            <li>Quinta-Feira: 16:00 - 00:00</li>
            <li>Sexta-Feira: 16:00 - 00:00</li>
            <li>Sábado: 16:00 - 00:00</li>
            <li>Domingo: 16:00 - 00:00</li>

          </ul>
        )}
      </HorarioFuncionamento>
    </FooterContainer>
  );
}
