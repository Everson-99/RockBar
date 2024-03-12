import React from 'react';
import { Header } from '../../Componentes/header';
import Menu from '../../Componentes/menu';
import BarLocation from '../../Componentes/localizacao'
import {Footer} from'../../Componentes/footer'
import MenuGastronomia from '../../Componentes/Gastronomia/MenuGastronomia.jsx'

export function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <BarLocation/>
      <MenuGastronomia/>
      <Footer/>
    </div>
  );
}
