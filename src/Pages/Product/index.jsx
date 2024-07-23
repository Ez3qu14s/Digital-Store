import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import instance from '../../api/instance';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../Components/Card';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [prodSelect, setProdSelect] = useState({});
  const [tamanhos, setTamanhos] = useState([]);
  const [tamanhoSelect, setTamanhoSelect] = useState(39);
  const [cores, setCores] = useState([]);
  const [corSelect, setCorSelect] = useState('');
  const [backgrounds, setBackgrounds] = useState([]);
  const [img, setImg] = useState('');
  const [produtosRelac, setProdutosRelac] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    instance.get('/shoes?').then((response) => {
      let prod = {};
      setProdutos(response.data);
      prod = response.data.find((prod) => prod.id === Number(id));
      setProdSelect(prod);
      setTamanhos(prod.tamanhos);
      setCores(prod.cores);
      setBackgrounds(prod.backgrounds);
      setImg(prod.backgrounds[0]);
    });
  }, [id]);

  useEffect(() => {
    instance.get('/shoes?limit=5').then((response) => {
      setProdutosRelac(
        response.data.filter((produto) => produto.id !== prodSelect.id),
      );
    });
  }, [prodSelect]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="text-dark-gray-2 bg-light-gray-3">
      <Header />
      <div className="m-5">
        <div className="pt-16 sm:pt-0 sm:px-[130px]">
          <p className="text-[12px] mb-3 leading-5 sm:text-[14px] sm:mb-8">
            <strong>Home</strong> / Produtos / Tênis / {prodSelect.marca} /{' '}
            {prodSelect.nome}
          </p>
        </div>
        <div className="sm:flex sm:w-full">
          <div className="sm:w-3/5">
            <div className="flex justify-center">
              <div
                className=" flex justify-center items-center w-full aspect-square p-5 sm:w-[700.73px] sm:h-[571px]"
                style={{
                  background: img,
                }}
              >
                <img
                  src={prodSelect.imagem_url}
                  alt={prodSelect.nome}
                  className="w-full "
                />
              </div>
            </div>
            <div className="w-full flex justify-center gap-2 mt-2">
              {backgrounds.map((background) => (
                <div
                  key={background}
                  className={`w-[60.17px] h-[57.51px] rounded flex items-center justify-center cursor-pointer ${
                    background === img ? ' border-[1px] border-primary' : ''
                  }`}
                  onClick={(e) => setImg(background)}
                  style={{
                    background: background,
                  }}
                >
                  <img
                    className="w-full aspect-square p-1"
                    src={prodSelect.imagem_url}
                    alt={prodSelect.nome}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-2/5 sm:ml-5">
            <h1 className="text-[24px] font-bold leading-[32px] mt-8 sm:mt-0 sm:text-[32px]">
              {prodSelect.nome}
            </h1>
            <p className="text-dark-gray text-[12px] leading-[18px] gap-3 mt-3">
              {prodSelect.modelo} | {prodSelect.marca} | REF:
              {prodSelect.referencia}
            </p>
            <div className="flex items-center gap-3 mt-3">
              <img
                src="..\assets\Stars.png"
                alt="Estrelas avaliação"
                className="w-[92.08px] h-[14px]"
              />
              <img src="..\assets\Frame 9.png" alt="" className="w-[63px]" />
              <p>(90 avaliações)</p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <p className="text-[32px]">R$:{prodSelect.preco_desconto},00</p>
              <p className="text-light-gray-2 line-through	text-[16px]">
                R$ {prodSelect.preco_original},00
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-light-gray font-bold">
                Descrição do produto
              </h2>
              <p>
                Um brinde aos novos começos entre você e as calçadas. Amarre os
                cadarços e defina o ritmo ao começar sua corrida com a sensação
                de maciez do {prodSelect.nome}
              </p>
            </div>
            <div className="tamanho">
              <h2 className="font-bold text-light-gray mt-5">Tamanho</h2>
              <div className="w-full flex gap-3">
                {tamanhos.map((tam) => (
                  <div
                    key={tam}
                    onClick={() => setTamanhoSelect(tam)}
                    style={{
                      background: `${tamanhoSelect === tam ? '#C92071' : ''}`,
                    }}
                    className={`w-[40px] h-[40px] bg-white flex items-center justify-center cursor-pointer rounded border-light-gray-2`}
                  >
                    <p>{tam}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="font-bold text-light-gray mt-5">Cor</h2>
              <div className="flex gap-3">
                {cores.map((cor) => {
                  return (
                    <div
                      key={cor}
                      className={`w-[40px] h-[40px] rounded-full ${
                        corSelect === cor ? 'border-[2px] border-primary' : ''
                      } flex items-center justify-center`}
                      onClick={() => setCorSelect(cor)}
                    >
                      <div
                        style={{
                          background: cor,
                        }}
                        className="w-[30px] h-[30px] rounded-full"
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex justify-center sm:justify-start">
              <button className=" w-[335px] h-[48px] text-bold text-[16px] bg-[#ffb31f] rounded-[8px] text-light-gray-3 hover:bg-[#cf8900] mt-12 mb-20 sm:h-[48px] sm:w-[220px]">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
        <section>
          <div className="flex flex-col items-center sm:mt-20">
            <div className="flex justify-between w-full max-w-screen-lg">
              <p className="text-dark-gray-2 text-sm sm:text-2xl font-bold">
                Produtos em alta
              </p>
              <Link to={`/produtos`}>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-primary text-sm sm:text-[18px]">
                    Ver todos
                  </p>
                  <FaLongArrowAltRight className="text-primary" size={16} />
                </div>
              </Link>
            </div>
            <div className="flex overflow-x-auto gap-2 p-2 mb-20 sm:gap-3 sm:justify-center w-full max-w-screen-lg">
              {produtosRelac.map((produto) => (
                <Link to={`/produto/${produto.id}`} key={produto.id}>
                  <Card produto={produto} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Produto;
