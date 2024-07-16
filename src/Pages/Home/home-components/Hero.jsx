import { Splide, SplideSlide } from '@splidejs/react-splide';
import Tenis from '../../../../public/assets/White-tenis-hero.png';

import '@splidejs/react-splide/css';

function Hero() {
  return (
    <Splide
      options={{
        type: 'loop',
        // autoplay: true,
      }}
      className="bg-light-gray-3 flex justify-center px-12"
    >
      <SplideSlide className="py-8 pb-16 w-full flex justify-center">
        <div className="flex flex-col md:flex-row-reverse my-0 mx-[auto]">
          <div className=" flex justify-center md:justify-normal w-auto w-full ">
            <img className="w-[350px] md:w-[520px]" src={Tenis} alt="" />
          </div>
          <div className="content-center px-16 md:pl-20 md:px-12 text-center md:text-start">
            <span className="text-[14px] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[40px] leading-[5rem] font-bold">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-dark-gray-2 text-[14px] font-[500] mt-4">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full sm:w-[300px] bg-primary p-4 text-[16px] rounded-lg text-white mt-4">
              Ver ofertas
            </button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="py-8 pb-16 ">
        <div className="flex flex-col md:flex-row-reverse my-0 mx-[auto]">
          <div className=" flex justify-center md:justify-normal w-full ">
            <img className="w-[350px] md:w-[520px]" src={Tenis} alt="" />
          </div>
          <div className="content-center px-16 md:px-12 text-center md:text-start">
            <span className="text-[14px] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[40px] leading-[5rem] font-bold">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-dark-gray-2 text-[14px] font-[500] mt-4">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full sm:w-[300px] bg-primary p-4 text-[16px] rounded-lg text-white mt-4">
              Ver ofertas
            </button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="py-8 pb-16 ">
        <div className="flex flex-col md:flex-row-reverse my-0 mx-[auto]">
          <div className=" flex justify-center md:justify-normal w-full ">
            <img className="w-[350px] md:w-[520px]" src={Tenis} alt="" />
          </div>
          <div className="content-center px-16 md:px-12 text-center md:text-start">
            <span className="text-[14px] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[40px] leading-[5rem] font-bold">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-dark-gray-2 text-[14px] font-[500] mt-4">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full sm:w-[300px] bg-primary p-4 text-[16px] rounded-lg text-white mt-4">
              Ver ofertas
            </button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide className="py-8 pb-16 ">
        <div className="flex flex-col md:flex-row-reverse my-0 mx-[auto]">
          <div className=" flex justify-center md:justify-normal w-full ">
            <img className="w-[350px] md:w-[520px]" src={Tenis} alt="" />
          </div>
          <div className="content-center px-16 md:px-12 text-center md:text-start">
            <span className="text-[14px] text-primary">
              Melhores ofertas personalizadas
            </span>
            <h1 className="text-[40px] leading-[5rem] font-bold">
              Queima de stoque Nike 🔥
            </h1>
            <p className="text-dark-gray-2 text-[14px] font-[500] mt-4">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-full sm:w-[300px] bg-primary p-4 text-[16px] rounded-lg text-white mt-4">
              Ver ofertas
            </button>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Hero;
