import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { FaFilter } from "react-icons/fa";
import Card from '../../Components/Card';
import { useState, useEffect } from 'react';
import instance from '../../api/instance';
const Produtos = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    instance.get('/shoes')
      .then((response) => {
        setProdutos(response.data)

      })
  }, [])

  return <div>
    <Header />
    <div className='flex flex-col w- justify-center bg-pink-800 '>
      <div className='w-[335px] h-[102px] rounded-lg m-4 sm:m-0 border-gray-800 flex flex-col-reverse items-center justify-center gap-5 sm:flex sm:flex-row sm:justify-between sm:w-full  sm:px-16'>
        <div className='flex justify-start w-full'>
          <p className='  font-bold text-dark-gray-2 text-base'>Resultados para “Tênis” - 389 produtos</p>
        </div>
        <div className='flex gap-4'>
          <div className='h-[60px] w-[265px] border-2  rounded-xl flex items-center justify-center'>
            <select className='font-bold gap-3'>
              <option>
                <p className='font-bold'>Ordernar por: mais relevantes</p>
              </option>
            </select>
          </div>
          <div className='bg-primary h-[60px] w-[60px] border-2 rounded-lg flex items-center justify-center sm:hidden'>
            <FaFilter color='white' size={24} />
          </div>
        </div>
      </div>
      <div className='sm:flex sm:px-16 rounded-[4px]'>
        <div className='flex flex-col sm:w-[308px] sm:h-[720px]  sm:bg-white sm:mt-2 sm:gap-5 sm:p-[1px]'>
          <p className='sm:text-base'>Filtrar por</p>
          <div>
            <div className='sm:w-[248px] sm:border-[1px]'>
            </div>  
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-2 sm:gap-3">
          {produtos.map((produto) => (
            <Card produto={produto} />
          ))}
        </div>
      </div>

    </div>
    <Footer />
  </div>;
};

export default Produtos;
