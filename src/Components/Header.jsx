import { useState } from 'react';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/assets/logo.png';
import { CiSearch } from 'react-icons/ci';
import classNames from 'classnames';

import NavBar from './NavBar';

export default function Header() {
  const [mostrarPesquisa, setMostrarPesquisa] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <>
      <header className="px-5 py-3 md:px-14 bg-white fixed w-full z-20">
        <div className="flex justify-between items-center md:justify-start md:gap-10">
          {/* Logo e Título */}
          <div className="flex items-center gap-2 md:flex-none">
            <IoMenu
              className="text-[24px] md:hidden"
              onClick={() => setMostrarMenu(!mostrarMenu)}
            />
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-6 md:w-8" />
              <h1 className="text-primary font-bold text-[18px] md:text-[24px]">
                {' '}
                Digital Store
              </h1>
            </div>
          </div>

          {/* Barra de Pesquisa Centralizada */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center bg-light-gray-3 rounded-md px-4 py-2 w-full max-w-xl">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="bg-transparent w-full outline-none"
              />
              <CiSearch className="text-[20px]" />
            </div>
          </div>

          {/* Ícone de Pesquisa e Carrinho - Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={() => setMostrarPesquisa(!mostrarPesquisa)}>
              <CiSearch className="text-[24px]" />
            </button>
            <button className="relative">
              <div className="absolute top-[-4px] right-[-4px] flex items-center justify-center bg-primary text-white rounded-full w-4 h-4 text-xs font-bold">
                2
              </div>
              <IoCartOutline className="text-[24px] text-primary" />
            </button>
          </div>

          {/* Menu Completo - Desktop */}
          <div className="hidden md:flex items-center gap-5 justify-between">
            <div className="mr-12 flex justify-between gap-12 items-center">
              <NavLink
                to="/cadastro"
                className="text-dark-gray-2 text-nowrap underline"
              >
                Cadastre-se
              </NavLink>
              <button className="w-full text-white bg-primary rounded-md p-2 px-8 font-bold">
                <NavLink to="/login">Entrar</NavLink>
              </button>
            </div>
            <button className="relative">
              <div className="absolute top-[-4px] right-[-4px] flex items-center justify-center bg-primary text-white rounded-full w-4 h-4 text-xs font-bold">
                2
              </div>
              <IoCartOutline className="text-primary text-[35px]" />
            </button>
          </div>
        </div>

        {/* Barra de Pesquisa Expandida - Mobile */}
        <div
          className="flex bg-light-gray-3 w-full justify-between rounded-md mt-5 px-4 py-2 md:hidden"
          style={{ display: mostrarPesquisa ? 'flex' : 'none' }}
        >
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="bg-transparent w-full outline-none"
          />
          <CiSearch className="text-[20px]" />
        </div>
      </header>

      {/* Menu Lateral - Mobile */}
      <div
        className="bg-black/50 w-screen h-screen fixed top-12 z-10 md:hidden"
        style={{ display: mostrarMenu ? 'block' : 'none' }}
      >
        <div className="w-[80%] bg-white h-[97%] px-5 py-6 flex flex-col justify-between">
          <div className="">
            <h1 className="font-bold text-gray-600 text-base mb-4">Páginas</h1>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('block py-2 transition-colors duration-300', {
                  'text-pink-600 font-bold underline': isActive,
                  'text-gray-600 hover:text-pink-600': !isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                classNames('block py-2 transition-colors duration-300', {
                  'text-pink-600 font-bold underline': isActive,
                  'text-gray-600 hover:text-pink-600': !isActive,
                })
              }
            >
              Produtos
            </NavLink>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                classNames('block py-2 transition-colors duration-300', {
                  'text-pink-600 font-bold underline': isActive,
                  'text-gray-600 hover:text-pink-600': !isActive,
                })
              }
            >
              Categorias
            </NavLink>
            <NavLink
              to="/meus-pedidos"
              className={({ isActive }) =>
                classNames('block py-2 transition-colors duration-300', {
                  'text-pink-600 font-bold underline': isActive,
                  'text-gray-600 hover:text-pink-600': !isActive,
                })
              }
            >
              Meus pedidos
            </NavLink>
          </div>
          <div className="mb-[35px] flex flex-col gap-2">
            <hr className="h-px bg-light-gray-2 border-0" />
            <button className="w-full text-white bg-primary rounded-md p-2 mt-2">
              Entrar
            </button>
            <button className="w-full text-dark-gray-2 underline">
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}
