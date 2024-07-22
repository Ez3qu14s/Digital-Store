import React from "react";
import Footer from "../../Components/Footer"
import Logo from "../../assets/logo.png";

import Gmail from "../../assets/gmail.png"
import Facebook from "../../assets/facebook.png"
import Sapatos from "../../assets/sapatos.png"

export default function Login() {
    return (
        <div>
            <header className="flex justify-center items-center p-4 bg-white shadow-md">
                <div className="flex items-center">
                    <img src={Logo} alt="Digital Store Logo" className="h-8 mr-2" />
                    <span className="text-xl font-bold text-pink-500">Digital Store</span>
                </div>
            </header>
            <main className="bg-gradient-to-b from-custom-top to-custom-bottom w-full min-h-screen flex flex-col">
                <div className="flex-1 flex justify-center items-center p-6 ">
                    <div className="bg-white w-full max-w-[315px] p-6 flex flex-col justify-center items-center rounded-md shadow-md">
                        <div className="text-center mb-6">
                            <h1 className="text-lg font-bold">Acesse sua conta</h1>
                            <p className="text-sm">Novo cliente? Então <a href="#" className="text-blue-500 underline">registre-se aqui</a>.</p>
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
                            <div className="mb-4 text-right">
                                <button className="text-sm text-blue-500">Esqueci minha senha</button>
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
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <img src={Sapatos} alt="Shoes" className="w-full h-auto top-0 left-0" />
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    )
}