import { useState, useEffect } from 'react';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { CiSearch } from 'react-icons/ci';

export default function Header() {
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
    };

    const toggleSearchInput = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <header className="bg-white shadow-md relative z-20">
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
                        <input
                            type="text"
                            className="w-96 p-2 border-none bg-zinc-100 rounded-md focus:outline-none focus:border-pink-600"
                            placeholder="Pesquisar produto..."
                        />
                        <CiSearch className="cursor-pointer h-6 w-6 md:h-10 md:w-10 text-gray-600" onClick={toggleSearchInput} />
                        <button className="relative text-gray-600 hover:text-pink-600">
                            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white font-bold">
                                <span className="block">2</span>
                            </div>
                            <IoCartOutline className="h-6 w-6 md:h-10 md:w-10 text-pink-600" />
                        </button>
                        <Link to="/" className="text-gray-600 hover:text-pink-600">Cadastre-se</Link>
                        <Link to="/" className="text-gray-600 hover:text-pink-600">Entrar</Link>
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
                <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-around">
                    <Link to="/" className="text-gray-600 hover:text-pink-600">Home</Link>
                    <Link to="/" className="text-gray-600 hover:text-pink-600">Produtos</Link>
                    <Link to="/" className="text-gray-600 hover:text-pink-600">Categorias</Link>
                    <Link to="/" className="text-gray-600 hover:text-pink-600">Meus pedidos</Link>
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
                    <div className="fixed top-0 bottom-0 left-0 w-3/4 h-full bg-white shadow-md z-30">
                        <div className="container mx-auto py-4 px-6 md:py-6 md:px-12 flex flex-col justify-between h-full">
                            <div>
                                <label className='font-bold text-gray-600 text-base'>Páginas</label>
                                <div className="mt-4">
                                    <Link to="/" className="block py-2 text-gray-600 transition-colors duration-300 hover:font-bold hover:text-pink-600 hover:border-b-2 hover:border-pink-600 focus:text-pink-600 focus:border-b-2 focus:border-pink-600">
                                        Home
                                    </Link>
                                    <Link to="/" className="block py-2 text-gray-600 transition-colors duration-300 hover:font-bold hover:text-pink-600 hover:border-b-2 hover:border-pink-600 focus:text-pink-600 focus:border-b-2 focus:border-pink-600">
                                        Produtos
                                    </Link>
                                    <Link to="/" className="block py-2 text-gray-600 transition-colors duration-300 hover:font-bold hover:text-pink-600 hover:border-b-2 hover:border-pink-600 focus:text-pink-600 focus:border-b-2 focus:border-pink-600">
                                        Categorias
                                    </Link>
                                    <Link to="/" className="block py-2 text-gray-600 transition-colors duration-300 hover:font-bold hover:text-pink-600 hover:border-b-2 hover:border-pink-600 focus:text-pink-600 focus:border-b-2 focus:border-pink-600">
                                        Meus pedidos
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <hr className="my-4" />
                                <div className='flex flex-col items-center space-y-2'>
                                    <button className="w-full py-2 bg-pink-600 text-white font-bold rounded">Entrar</button>
                                    <Link to="/" className="block py-2 text-gray-600 hover:text-pink-600 focus:text-pink-600">Cadastre-se</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
