import React from 'react';
import TenisCallToAction from '/public/assets/tenisCallToAction.png';

const CallToAction = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center md:gap-12 md:flex-row p-4  w-[1200px]">
        <img className="md:w-1/2" src={TenisCallToAction} alt="" />
        <div className="self-center">
          <span className="block text-[14px] text-primary font-medium mb-4">
            Oferta especial
          </span>
          <h1 className="text-[28px] lg:text-[48px] leading-[32px] lg:leading-[50px] font-bold">
            Air Jordan edição de <br className="hidden md:block" /> colecionador
          </h1>
          <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[28px] my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button className="w-[200px] p-2 mt-4 bg-primary text-white rounded-md">
            Ver Oferta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
