import React from 'react';
import TenisCallToAction from '../../../../public/assets/tenisCallToAction.png';

const CallToAction = () => {
  return (
    <div className="flex justify-center py-4 pt-12">
      <div className="flex flex-col sm:gap-8 md:flex-row px-4">
        <img
          className="self-center w-[420px] lg:w-[520px]"
          src={TenisCallToAction}
          alt=""
        />

        <section className="max-w-[520px] self-center">
          <span className="text-primary font-medium text-sm">
            Oferta especial
          </span>
          <h1 className="my-2 font-bold text-3xl text-dark-gray-2">
            Air Jordan edição de colecionador
          </h1>
          <p className="text-dark-gray-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button className="w-[200px] py-2 bg-primary my-3 rounded-md font-medium text-light-gray-3 transition-colors hover:bg-tertiary duration-200">
            Ver oferta
          </button>
        </section>
      </div>
    </div>
  );
};

export default CallToAction;
