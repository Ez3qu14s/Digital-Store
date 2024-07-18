import React from 'react';
import Hero from './home-components/Hero';
import EmDestaque from './home-components/EmDestaque';
import EmAlta from './home-components/EmAlta';
import SelectProduto from './home-components/SelectProduto';
import Footer from '../../Components/Footer';
import CallToAction from './home-components/CallToAction';
import Header from '../../Components/Header';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <EmDestaque />
      <SelectProduto />
      <EmAlta />
      <CallToAction />
      <Footer />
    </div>
  );
}
