import { Splide, SplideSlide } from '@splidejs/react-splide';
import Tenis from '/assets/White-tenis-hero.png';
import Ornament from '/assets/Ornament.svg';

import '@splidejs/react-splide/css';

function Hero() {
  return (
    <Splide
      options={{
        type: 'loop',
        // autoplay: true,
      }}
      className="md:px-[8rem] lg:px-[10rem]"
    >
      <SplideSlide className="mb-12 md:mb-0 relative">
        <div className="w-full flex flex-col-reverse text-center md:grid md:grid-cols-2 md:text-start md:items-center">
          <div className="px-6">
            <span className="text-[1.4rem] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[4rem] leading-[5rem] font-bold text-dark-gray">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-[1.4rem] my-4 text-dark-gray-2">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full p-4 rounded-lg bg-primary text-[1.4rem] text-white font-medium md:w-[22rem]">
              Ver ofertas
            </button>
          </div>
          <img src={Tenis} alt="" />
          <img className="absolute top-0 right-0" src={Ornament} alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mb-12 md:mb-0 relative">
        <div className="w-full flex flex-col-reverse text-center md:grid md:grid-cols-2 md:text-start md:items-center">
          <div className="px-6">
            <span className="text-[1.4rem] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[4rem] leading-[5rem] font-bold text-dark-gray">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-[1.4rem] my-4 text-dark-gray-2">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full p-4 rounded-lg bg-primary text-[1.4rem] text-white font-medium md:w-[22rem]">
              Ver ofertas
            </button>
          </div>
          <img src={Tenis} alt="" />
          <img className="absolute top-0 right-0" src={Ornament} alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mb-12 md:mb-0 relative">
        <div className="w-full flex flex-col-reverse text-center md:grid md:grid-cols-2 md:text-start md:items-center">
          <div className="px-6">
            <span className="text-[1.4rem] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[4rem] leading-[5rem] font-bold text-dark-gray">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-[1.4rem] my-4 text-dark-gray-2">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full p-4 rounded-lg bg-primary text-[1.4rem] text-white font-medium md:w-[22rem]">
              Ver ofertas
            </button>
          </div>
          <img src={Tenis} alt="" />
          <img className="absolute top-0 right-0" src={Ornament} alt="" />
        </div>
      </SplideSlide>
      <SplideSlide className="mb-12 md:mb-0 relative">
        <div className="w-full flex flex-col-reverse text-center md:grid md:grid-cols-2 md:text-start md:items-center">
          <div className="px-6">
            <span className="text-[1.4rem] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[4rem] leading-[5rem] font-bold text-dark-gray">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-[1.4rem] my-4 text-dark-gray-2">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full p-4 rounded-lg bg-primary text-[1.4rem] text-white font-medium md:w-[22rem]">
              Ver ofertas
            </button>
          </div>
          <img src={Tenis} alt="" />
          <img className="absolute top-0 right-0" src={Ornament} alt="" />
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Hero;
