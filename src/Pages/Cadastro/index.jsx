import React from 'react';
import Footer from '../../Components/Footer';
import Logo from '../../../public/assets/logo.png';

import Gmail from '../../../public/assets/Icons/gmail.png';
import Facebook from '../../../public/assets/Icons/facebook.png';
import Sapatos from '../../../public/assets/Icons/sapatos.png';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <div>
      <header className="flex justify-center lg:justify-start items-center p-2 gap-2 lg:pl-24 bg-white shadow-md">
        <img src={Logo} alt="Logo" className="w-6 md:w-8" />
        <h1 className="text-primary font-bold text-[18px] md:text-[24px]">
          {' '}
          Digital Store
        </h1>
      </header>
      <main className="bg-gradient-to-b from-custom-top to-custom-bottom w-full min-h-screen flex flex-col lg:-mb-[120px]">
        <div className="flex-1 flex justify-center items-center p-6 lg:-mt-[100px] ">
          <div className="bg-white w-full max-w-[500px] p-6 flex flex-col justify-center items-center rounded-md shadow-md mx-auto">
            <div className="flex flex-col justify-start mb-6 w-full">
              <h1 className="text-2xl text-start font-bold">Crie sua conta</h1>
              <p className="text-sm text-start">
                Possui uma conta? Entre{' '}
                <Link to={'/login'} className='className="text-black underline'>
                aqui
                </Link>
                .
              </p>
            </div>
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  placeholder="Insira seu login ou email"
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <div className="w-full">
              <button className="w-full bg-pink-500 text-white py-2 rounded mb-4">
                Acessar Conta
              </button>
              <div className="text-center mb-4 lg:flex lg:items-center lg:justify-start lg:space-x-4">
                <p className="text-sm mb-4 lg:mb-0 lg:mr-4">
                  Ou faça login com
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <button>
                    <img src={Gmail} alt="gmail" className="w-6 h-6" />
                  </button>
                  <button>
                    <img src={Facebook} alt="facebook" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <img src={Sapatos} alt="Shoes" className="w-full h-auto" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
