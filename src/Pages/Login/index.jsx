import React from "react";
import Footer from "../../Components/Footer"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";

import Gmail from "../../assets/gmail.png"
import Facebook from "../../assets/facebook.png"

export default function Login() {
    return (
        <div>
            <header>
                <NavLink to="/" className="flex items-center gap-2 justify-center bg-white w-screen h-16">
                    <img src={Logo} alt="Logo" className='w-6 md:w-8' />
                    <h1 className='text-primary font-bold text-[25px] md:text-[28px]'>Digital Store</h1>
                </NavLink>
            </header>
            <main className="bg-gradient-to-b from-custom-top to-custom-bottom w-full h-screen flex justify-center items-center p-4">
                <div className="bg-white w-full max-w-[315px] h-auto p-6 flex flex-col justify-center items-center rounded-md shadow-md">
                    <div className="text-center mb-6">
                        <h1 className="text-lg font-bold">Acesse sua conta</h1>
                        <p className="text-sm">Novo cliente? Então registre-se <a href="#" className="text-black underline">aqui</a>.</p>
                    </div>
                    <div className="w-full">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Login *</label>
                            <input type="text" placeholder="Insira seu login ou email" className="w-full border border-gray-300 p-2 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Senha *</label>
                            <input type="password" placeholder="Insira sua senha" className="w-full border border-gray-300 p-2 rounded" />
                        </div>
                        <div className="mb-4 text-center">
                            <button className="text-sm text-black underline">Esqueci minha senha</button>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="w-full bg-pink-500 text-white py-2 rounded mb-4">Acessar Conta</button>
                        <p className="text-sm text-center mb-4">Ou faça login com</p>
                        <div className="flex justify-center space-x-4">
                            <img src={Gmail} alt="gmail" className='w-6 h-6' />
                            <img src={Facebook} alt="facebook" className='w-6 h-6' />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}