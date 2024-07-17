import React from 'react';
import Hero from './home-components/Hero';
import EmDestaque from './home-components/EmDestaque';
import EmAlta from './home-components/EmAlta';
import SelectProduto from './home-components/SelectProduto';
import Footer from '../../Components/Footer';
import CallToAction from './home-components/CallToAction';

export default function Home() {
  return (
    <div>
      <Hero />
      <EmDestaque />
      <SelectProduto />
      <EmAlta />
      <CallToAction />
      <Footer />
    </div>
  );
}
