import React from 'react';
import Logo from '../../public/assets/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-dark-gray text-white  px-20 pt-20 ">

            <div className="6 md:flex md:justify-between gap-6 pb-6  ">

                <div className=' flex justify-between w-[90%] '>

                    <div className="md:w-[400px] w-[200px]  ">
                        <img src={Logo} alt="Logo" className="mb-4" />
                        <p className=" md:mt-0 mt-6  md:w-[400px] max-w-[305px] break ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>

                        <div className="flex space-x-4 mb-6 pt-7 text-[23px] gap-5 ">
                            <a href="#" className="text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white">
                                <FaTwitter />
                            </a>
                        </div>


                    </div>


                    <div className="G  w-[135px] ">
                        <div>
                            <h3 className="text-lg font-bold mb-2 pb-5">Informação</h3>
                            <ul className='flex flex-col gap-3 mt-4 '>
                                <li><a href="#" className="text-white hover:underline ">Sobre Drip Store</a></li>
                                <li><a href="#" className="text-white hover:underline">Segurança</a></li>
                                <li><a href="#" className="text-white hover:underline">Wishlist</a></li>
                                <li><a href="#" className="text-white hover:underline">Blog</a></li>
                                <li><a href="#" className="text-white hover:underline">Trabalhe conosco</a></li>
                                <li><a href="#" className="text-white hover:underline">Meus Pedidos</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="G  w-[96px] ">
                        <h3 className="text-lg font-bold mb-2 pb-5">Categoria</h3>
                        <ul className='flex flex-col gap-3 mt-4 '>
                            <li><a href="#" className="text-white hover:underline">Camisetas</a></li>
                            <li><a href="#" className="text-white hover:underline">Calças</a></li>
                            <li><a href="#" className="text-white hover:underline">Bonés</a></li>
                            <li><a href="#" className="text-white hover:underline">Headphones</a></li>
                            <li><a href="#" className="text-white hover:underline">Tênis</a></li>
                        </ul>
                    </div>

                    <div className="G  w-[233px]">
                        <h3 className="text-lg font-bold ">Contato</h3>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p className='pt-7'>(85) 3051-3411</p>
                    </div>

                </div>

            </div>


            <div className="w-full border-t-2 border-t-gray-500 mt-4 text-center pt-5 pb-5">
                <p>&copy; 2024 Digital College</p>
            </div>


        </footer>
    );
};

export default Footer;