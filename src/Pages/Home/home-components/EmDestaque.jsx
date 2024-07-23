import React from 'react';
import BlusaDestaque from '../../../../public/assets/blusa-destaque.png';
import ColecaoAdidas from '../../../../public/assets/tenis-destaque.png';
import NovoBeatBass from '../../../../public/assets/fone-destaque.png';

const produtosDestaque = [
  {
    id: 1,
    discount: '30% OFF',
    title: 'Novo drop Supreme',
    buttonText: 'Comprar',
    imgSrc: BlusaDestaque,
  },
  {
    id: 2,
    discount: '30% OFF',
    title: 'Coleção Adidas',
    buttonText: 'Comprar',
    imgSrc: ColecaoAdidas,
  },
  {
    id: 3,
    discount: '30% OFF',
    title: 'Novo Beats Bass',
    buttonText: 'Comprar',
    imgSrc: NovoBeatBass,
  },
];

export default function EmDestaque() {
  return (
    <section className="flex flex-col font-bold items-center justify-center">
      <h2 className="text-dark-gray-2 mb-4 md:text-[24px] mt-10">
        Coleções em destaque
      </h2>
      <div className="lg:flex justify-center">
        {produtosDestaque.map((produto) => (
          <div
            key={produto.id}
            className="flex w-[338px] h-[212px] bg-[#D8E3F2] mb-4 rounded-[8px] sm: m-1.5"
          >
            <div className="flex flex-col justify-around p-4">
              <span className="w-[90.55px] text-[14px] bg-[#E7FF86] text-dark-gray-2 rounded-[29px] text-center inline-block leading-[32px]">
                {produto.discount}
              </span>
              <h4 className="text-[28px] tracking-[2px]">{produto.title}</h4>
              <button className="w-[144.31px] h-[48px] bg-light-gray-3 text-primary rounded-[8px] hover:bg-secondary hover:text ">
                {produto.buttonText}
              </button>
            </div>
            <div className="flex items-center">
              <img
                src={produto.imgSrc}
                alt={produto.title}
                className="h-full rounded-r-[8px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
