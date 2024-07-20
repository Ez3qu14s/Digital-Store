import React from 'react';
import Hero from './home-components/Hero';
import EmDestaque from './home-components/EmDestaque';
import EmAlta from './home-components/EmAlta';
import SelectProduto from './home-components/SelectProduto';
import Footer from '../../Components/Footer';
import CallToAction from './home-components/CallToAction';
import Header from '../../Components/Header';

function Home() {
  return (
    <div className='bg-light-gray-3'>
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

export default Home;
