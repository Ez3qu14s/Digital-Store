import { useState, useEffect } from 'react';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { CiSearch } from 'react-icons/ci';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

    return (
        <header className="bg-white shadow-md relative z-20">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:py-6 md:px-12">
                {isMobile && (
                    <IoMenu className="text-gray-600 cursor-pointer block lg:hidden h-6 w-6 md:h-10 md:w-10" onClick={toggleMenu} />
                )}

                {/* Logo e título centralizados */}
                <div className="flex items-center space-x-2 md:space-x-4 flex-1 justify-center">
                    <img className="w-7 md:h-10 md:w-10" src={Logo} alt="Logo" />
                    <h1 className="text-custom font-bold text-xl text-pink-600">Digital Store</h1>
                </div>

                {/* Ícones de busca e carrinho */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <CiSearch className="text-gray-600 cursor-pointer h-6 w-6 md:h-10 md:w-10" />
                    <button className="relative text-gray-600 hover:text-pink-600">
                        {/* Notificação no ícone do carrinho */}
                        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white font-bold">
                            <span className="block">2</span>
                        </div>
                        <IoCartOutline className="h-6 w-6 md:h-10 md:w-10 text-pink-600" />
                    </button>
                </div>
            </div>

            {/* Menu lateral */}
            {showMenu && (
                <>
                    <div className="fixed top-10px left-0 w-full h-screen bg-black opacity-50 z-10" onClick={toggleMenu} />
                    <div className="absolute top-full left-0 right-0 bg-white shadow-md z-20">
                        <div className="container mx-auto py-4 px-6 md:py-6 md:px-12">
                            <nav className="flex flex-col space-y-4">
                                <Link to="/" className="text-lg md:text-xl text-pink-600 hover:text-pink-700 block">Home</Link>
                                <Link to="/produtos" className="text-lg md:text-xl text-gray-600 hover:text-pink-600 block">Produtos</Link>
                                <Link to="/categorias" className="text-lg md:text-xl text-gray-600 hover:text-pink-600 block">Categorias</Link>
                                <Link to="/pedidos" className="text-lg md:text-xl text-gray-600 hover:text-pink-600 block">Meus Pedidos</Link>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
