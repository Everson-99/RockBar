import React from 'react';
import styled from 'styled-components';
import fotomaps from '../../imgGlobal/fotomaps.png';
import icomWhats from '../../imgGlobal/whats.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapContainer = styled.div`
  width: 60%;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InfoContainer = styled.div`
  width: 25%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const GoogleMaps = () => {
  return (
    
    <Container>

      <MapContainer>
      <h2 style={{ color: 'white', fontSize: '24px',marginLeft:'38%' }}>Localização</h2>      

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.70947972927!2d-48.665846923635186!3d-27.69537272636117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273334d823e883%3A0xa0ddcc81e84fd1dc!2sRock%20Bar%20Rocker&#39;s!5e0!3m2!1spt-BR!2sbr!4v1709676548647!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </MapContainer>
      <InfoContainer>
        <img src={fotomaps} alt="Descrição da imagem" style={{ maxWidth: '55%', height: 'auto', marginBottom: '10px',marginTop:'14%' }} />
        <a href="https://wa.me/5548988191707?text=+Ol%C3%A1+Estive+conferindo+o+site+do+Rock+Bar+e+fiquei+super+interessado%28a%29+em+visitar%21+" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: '25px' }}>
        
          <img src={icomWhats} alt="Descrição da imagem" style={{ maxWidth: '9%', height: 'auto' }} />
          <p style={{ fontSize: '18px' }}>(48)988191707</p>
        </a>
      </InfoContainer>
    </Container>
  );
};

export default GoogleMaps;
