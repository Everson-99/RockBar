import React from 'react';
import { Petflix, Imglogo, PetflixTitle,  } from './styles';
import logo from '../../imgGlobal/Rock.png';

export function Header() {
  return (
    <Petflix>

      <PetflixTitle>
        <h1>Lanches</h1>
        <Imglogo src={logo} alt="logo" className='logo' />
        <h1>Porção</h1>
      </PetflixTitle>

      

    </Petflix>
  );
}
