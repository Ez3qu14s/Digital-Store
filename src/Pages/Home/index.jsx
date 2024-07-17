import React from 'react';
import Hero from './home-components/Hero';
import EmDestaque from './home-components/EmDestaque';
import EmAlta from "./home-components/EmAlta";
import SelectProduto from "./home-components/SelectProduto";

export default function Home() {
  return (
    <div>
      <Hero />
      <EmDestaque />
      <SelectProduto />
      <EmAlta/>

    </div>
  );
}
