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

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:py-6 md:px-12"> 
                {isMobile && (
                    <IoMenu className="text-gray-600 cursor-pointer block lg:hidden" onClick={() => setShowMenu(!showMenu)} />
                )}

                {/* Logo e título centralizados */}
                <div className="flex items-center space-x-2 md:space-x-4 flex-1 justify-center">
                    <img className="h-16 w-16 md:h-20 md:w-20" src={Logo} alt="Logo" />
                    <h1 className="text-xl md:text-3xl font-bold text-pink-600">Digital Store</h1>
                </div>

                {/* Ícones de busca e carrinho */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <CiSearch className="text-gray-600 cursor-pointer" />
                    <button className="relative text-gray-600 hover:text-pink-600">
                        <IoCartOutline className="h-8 w-8 md:h-10 md:w-10" />
                        {/* Notificação no ícone do carrinho */}
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2">2</span>
                    </button>
                </div>
            </div>

            {/* Opções de navegação (exibidas apenas em telas largas) */}
            {!isMobile && (
                <div className="bg-white border-t border-gray-200">
                    <nav className="container mx-auto py-2 md:py-4 px-6 md:px-12 flex space-x-6"> {/* Aumentei o px e espaço entre os links */}
                        <Link to="/" className="text-lg md:text-xl text-pink-600 hover:text-pink-700">Home</Link> {/* Aumentei o tamanho do texto */}
                        <Link to="/produtos" className="text-lg md:text-xl text-gray-600 hover:text-pink-600">Produtos</Link> {/* Aumentei o tamanho do texto */}
                        <Link to="/categorias" className="text-lg md:text-xl text-gray-600 hover:text-pink-600">Categorias</Link> {/* Aumentei o tamanho do texto */}
                        <Link to="/pedidos" className="text-lg md:text-xl text-gray-600 hover:text-pink-600">Meus Pedidos</Link> {/* Aumentei o tamanho do texto */}
                    </nav>
                </div>
            )}
        </header>
    );
}