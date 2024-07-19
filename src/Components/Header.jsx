import { useState, useEffect } from 'react';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { CiSearch } from 'react-icons/ci';
import classNames from 'classnames';

export default function Header({
    setShowFilter
}) {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showSearchInput, setShowSearchInput] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowFilter(false)
    };

    const toggleSearchInput = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <header className={`bg-white shadow-md z-20 ${isMobile ? 'fixed top-0 left-0 w-full' : ''}`}>
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:py-6 md:px-12">
                {isMobile && (
                    <IoMenu className="text-gray-600 cursor-pointer block lg:hidden h-6 w-6 md:h-10 md:w-10" onClick={toggleMenu} />
                )}

                <div className={`flex items-center ${isMobile ? 'space-x-2 justify-center' : 'space-x-2'}`}>
                    <img className={`${isMobile ? 'w-7 md:h-10 md:w-10' : 'md:h-7 md:w-7'}`} src={Logo} alt="Logo" />
                    <h1 className={`text-custom font-bold ${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} text-pink-600`}>Digital Store</h1>
                </div>
                {!isMobile && (
                    <div className="flex items-center flex-1 justify-center space-x-4">
                        <div className='relative flex items-center h-10'>
                            <input
                                type="text"
                                className="w-[600px] p-2 pr-12 border-none bg-zinc-100 focus:outline-none focus:border-pink-600 rounded-l"
                                placeholder="Pesquisar produto..."
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-4 bg-zinc-100 border-none rounded text-gray-600"
                                onClick={toggleSearchInput}
                            >
                                <CiSearch className="h-6 w-6" />
                            </button>
                        </div>
                        <div className='flex items-center gap-7'>
                            <NavLink to="/cadastre-se" className="block py-2 text-gray-600 hover:text-pink-600 focus:text-pink-600">Cadastre-se</NavLink>
                            <button className="w-[80px] py-2 bg-pink-600 text-white font-bold rounded">Entrar</button>
                        </div>
                        <button className="relative text-gray-600 hover:text-pink-600">
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white font-bold">
                                <span className="block">2</span>
                            </div>
                            <IoCartOutline className="h-6 w-6 md:h-10 md:w-10 text-pink-600" />
                        </button>
                    </div>
                )}

                {isMobile && (
                    <div className="flex items-center space-x-4">
                        <CiSearch className="cursor-pointer h-6 w-6 md:h-10 md:w-10 text-gray-600" onClick={toggleSearchInput} />
                        <button className="relative text-gray-600 hover:text-pink-600">
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white font-bold">
                                <span className="block">2</span>
                            </div>
                            <IoCartOutline className="h-6 w-6 md:h-10 md:w-10 text-pink-600" />
                        </button>
                    </div>
                )}
            </div>

            {!isMobile && (
                <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-start space-x-4">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            classNames(
                                "block py-2 transition-colors duration-300",
                                {
                                    "text-pink-600 font-bold underline": isActive,
                                    "text-gray-600 hover:text-pink-600": !isActive
                                }
                            )}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/produtos'
                        className={({ isActive }) =>
                            classNames(
                                "block py-2 transition-colors duration-300",
                                {
                                    "text-pink-600 font-bold underline": isActive,
                                    "text-gray-600 hover:text-pink-600": !isActive
                                }
                            )}
                    >
                        Produtos
                    </NavLink>
                    <NavLink
                        to='/categorias'
                        className={({ isActive }) =>
                            classNames(
                                "block py-2 transition-colors duration-300",
                                {
                                    "text-pink-600 font-bold underline": isActive,
                                    "text-gray-600 hover:text-pink-600": !isActive
                                }
                            )}
                    >
                        Categorias
                    </NavLink>
                    <NavLink
                        to='/meus-pedidos'
                        className={({ isActive }) =>
                            classNames(
                                "block py-2 transition-colors duration-300",
                                {
                                    "text-pink-600 font-bold underline": isActive,
                                    "text-gray-600 hover:text-pink-600": !isActive,
                                }
                            )}
                    >
                        Meus pedidos
                    </NavLink>
                </nav>
            )}

            {showSearchInput && isMobile && (
                <div className="container mx-auto px-6 md:px-12 py-4">
                    <input
                        type="text"
                        className="w-full p-2 border-none bg-zinc-100 rounded-md focus:outline-none focus:border-pink-600"
                        placeholder="Pesquisar produto..."
                    />
                </div>
            )}

            {showMenu && isMobile && (
                <>
                    <div className="fixed top-15 left-0 w-full h-screen bg-black opacity-50 z-20" onClick={toggleMenu} />
                    <div className="fixed top-[60px] left-0 w-3/4 h-[calc(100%-60px)] bg-white shadow-md z-40">
                        <div className="container mx-auto py-4 px-6 md:py-6 md:px-12 flex flex-col justify-between h-full">
                            <div>
                                <label className='font-bold text-gray-600 text-base'>Páginas</label>
                                <div className="mt-4">
                                    <NavLink
                                        to='/'
                                        className={({ isActive }) =>
                                            classNames(
                                                "block py-2 transition-colors duration-300",
                                                {
                                                    "text-pink-600 font-bold underline": isActive,
                                                    "text-gray-600 hover:text-pink-600": !isActive
                                                }
                                            )}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to='/produtos'
                                        className={({ isActive }) =>
                                            classNames(
                                                "block py-2 transition-colors duration-300",
                                                {
                                                    "text-pink-600 font-bold underline": isActive,
                                                    "text-gray-600 hover:text-pink-600": !isActive
                                                }
                                            )}
                                    >
                                        Produtos
                                    </NavLink>
                                    <NavLink
                                        to='/categorias'
                                        className={({ isActive }) =>
                                            classNames(
                                                "block py-2 transition-colors duration-300",
                                                {
                                                    "text-pink-600 font-bold underline": isActive,
                                                    "text-gray-600 hover:text-pink-600": !isActive
                                                }
                                            )}
                                    >
                                        Categorias
                                    </NavLink>
                                    <NavLink
                                        to='/meus-pedidos'
                                        className={({ isActive }) =>
                                            classNames(
                                                "block py-2 transition-colors duration-300",
                                                {
                                                    "text-pink-600 font-bold underline": isActive,
                                                    "text-gray-600 hover:text-pink-600": !isActive,
                                                }
                                            )}
                                    >
                                        Meus pedidos
                                    </NavLink>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <hr className="my-4" />
                                <div className='flex flex-col items-center space-y-2'>
                                    <NavLink to="/cadastre-se" className="block py-2 text-gray-600 hover:text-pink-600 focus:text-pink-600">Cadastre-se</NavLink>
                                    <button className="w-full py-2 bg-pink-600 text-white font-bold rounded">Entrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
