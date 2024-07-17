import React from 'react';
import TenisCallToAction from '/public/assets/tenisCallToAction.png';

const CallToAction = () => {
  return (
    <div className="p-4 mb-4">
      <img src={TenisCallToAction} alt="" />
      <div>
        <span className="block text-[14px] text-primary font-medium mb-4">
          Oferta especial
        </span>
        <h1 className="text-[28px] leading-[32px] font-semibold">
          Air Jordan edição de colecionador
        </h1>
        <p className="text-[14px] leading-[22px] my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <button className="w-[200px] p-2 bg-primary text-white rounded-md">
          Ver Oferta
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
