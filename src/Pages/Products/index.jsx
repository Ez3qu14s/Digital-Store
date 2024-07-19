import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { FaFilter } from "react-icons/fa";
import Card from '../../Components/Card';
import { useState, useEffect } from 'react';
import instance from '../../api/instance';
import { IoIosClose } from "react-icons/io";

export default function Produtos() {

  const [produtos, setProdutos] = useState([])
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [showFilter, setShowFilter] = useState(false)
  const [estado, setEstado] = useState ('')

  useEffect(() => {
    instance.get('/shoes')
      .then((response) => {
        setProdutos(response.data)
      })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div>
      <Header />
      <div className='flex flex-col w-[] justify-center bg-pink-100'>
        <div className='w-[335px] h-[102px] rounded-lg m-4 sm:m-0  border-gray-800 flex flex-col-reverse items-center justify-center gap-5 sm:flex sm:flex-row sm:justify-between sm:w-full  sm:px-20'>
          <div className='flex justify-start w-full '>
            <p className='  font-bold text-dark-gray-2 text-base'>Resultados para “Tênis” - 389 produtos</p>
          </div>
          <div className='flex gap-4'>
            <div className='h-[60px] w-[265px] border-2 bg-white  rounded-xl flex items-center justify-center'>
              <select className='font-bold gap-3 outline-none'>
                <option>
                  <p className='font-bold'>Ordernar por: mais relevantes</p>
                </option>
              </select>
            </div>
            <div className='bg-primary h-[60px] w-[60px] border-2 rounded-lg flex items-center justify-center sm:hidden'>
              <button onClick={toggleFilter}>
                <FaFilter color='white' size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className='sm:flex sm:px-16 rounded-[4px] sm:ml-4'>
          {!isMobile &&  (
            <div className='flex flex-col sm:w-[240px] sm:h-[720px]  sm:bg-white sm:mt-2 sm:gap-5 sm:px-[10px]'>
       
            <div className='p-[30px] flex flex-col gap-3'>
            <div className='flex justify-between'>
              <p className='font-bold text-base text-dark-gray-2'>Filtrar por</p>
              
            </div>
            <div className='w-[170px] bg-gray-500 border-[1px]'></div>
            <div>
              <p className='font-bold text-base text-dark-gray-2'>Marka</p>
              <div className='flex gap-2 pt-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Adidas</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Calenciaga</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>K-Swiss</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Nike</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Puma</label>
              </div>
            </div>
            <div className=''>
              <p className='font-bold text-base text-dark-gray-2'>Categoria</p>
              <div className='flex gap-2 pt-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Esporte e lazer</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Casual</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Utilitário</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Corrida</label>
              </div>
            </div>
            <div>
              <p className='font-bold text-base text-dark-gray-2'>Gênero</p>
              <div className='flex gap-2 pt-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Masculino</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Feminino</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="checkbox" />
                <label className='text-base'>Unissex</label>
              </div>
            </div>
            <div>
              <p className='font-bold text-base text-dark-gray-2'>Estado</p>
              <div className='flex gap-2 pt-2'>
                <input className='accent-primary size-5' type="radio" name='estado' value={estado} id='opcao1' />
                <label className='text-base' for="opcao1">Novo</label>
              </div>
              <div className='flex gap-2'>
                <input className='accent-primary size-5' type="radio" name='estado' value={estado} id='opcao2' />
                <label className='text-base' for="opcao2">Usado</label>
              </div>
            </div>
          </div>
          </div> 
          )}
          
          <div className="flex flex-wrap justify-center gap-2 p-2 sm:gap-3">
            {produtos.map((produto) => (
              <Card produto={produto} />
            ))}
          </div>
        </div>

      </div>
      <Footer />
      {showFilter && isMobile && (
        <>
          <div className="fixed top-[60px] left-0 w-full h-full bg-black opacity-50 z-20" onClick={toggleFilter} />
          <div className="fixed top-[60px] left-0 w-3/4 h-full bg-white shadow-md z-30">
            <div className='p-[30px] flex flex-col gap-3'>
              <div className='flex justify-between'>
                <p className='font-bold text-base text-dark-gray-2'>Filtrar por</p>
                <div>
                  <IoIosClose size={30} color='dark-gray-2' onClick={toggleFilter} />
                </div>
              </div>
              <div className='w-[205px] bg-gray-500 border-[1px]'></div>
              <div>
                <p className='font-bold text-base text-dark-gray-2'>Marka</p>
                <div className='flex gap-2 pt-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Adidas</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Calenciaga</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>K-Swiss</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Nike</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Puma</label>
                </div>
              </div>
              <div className=''>
                <p className='font-bold text-base text-dark-gray-2'>Categoria</p>
                <div className='flex gap-2 pt-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Esporte e lazer</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Casual</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Utilitário</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Corrida</label>
                </div>
              </div>
              <div>
                <p className='font-bold text-base text-dark-gray-2'>Gênero</p>
                <div className='flex gap-2 pt-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Masculino</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Feminino</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="checkbox" />
                  <label className='text-base'>Unissex</label>
                </div>
              </div>
              <div>
                <p className='font-bold text-base text-dark-gray-2'>Estado</p>
                <div className='flex gap-2 pt-2'>
                  <input className='accent-primary size-5' type="radio" name='novoUsado' value="opcao1" id='opcao1' />
                  <label className='text-base' for="opcao1">Novo</label>
                </div>
                <div className='flex gap-2'>
                  <input className='accent-primary size-5' type="radio" name='usadoUsado' value="opcao2" id='opcao2' />
                  <label className='text-base' for="opcao2">Usado</label>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </div >
  )
}

