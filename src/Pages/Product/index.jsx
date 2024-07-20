import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import instance from "../../api/instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [prodSelect, setProdSelect] = useState({});
  const [tamanhos, setTamanhos] = useState([]);
  const [tamanhoSelect, setTamanhoSelect] = useState(39);
  const [cores, setCores] = useState([]);
  const [corSelect, setCorSelect] = useState("#6FEEFF");
  const [backgrounds, setBackgrounds] = useState([]);
  const [img, setImg] = useState("#E2E3FF");

  const { id } = useParams();

  useEffect(() => {
    instance.get("/shoes?").then((response) => {
      let prod = {};
      setProdutos(response.data);
      prod = response.data.find((prod) => prod.id === Number(id));
      setProdSelect(prod);
      setTamanhos(prod.tamanhos);
      setCores(prod.cores);
      setBackgrounds(prod.backgrounds);
    });
  }, []);
  
  return (
    <div className="text-dark-gray-2 bg-light-gray-3">
      <Header />
      <div className="m-5">
      <div className="">
        <p className="text-[12px]">
          <strong>Home</strong> / Produtos / Tênis / {prodSelect.marca} / {prodSelect.nome}
        </p>
      </div>
      <div className="flex justify-center">
      <div
        className=" flex justify-center items-center	w-[335px] h-[272.98px]"
        style={{
          background: img,
        }}
      >
        <img
          src={prodSelect.imagem_url}
          alt={prodSelect.nome}
          className="w-[238.28px] h-[118.56px]"
        />
      </div>
      </div>
      <div className="w-full flex justify-center gap-2 mt-2">
        {backgrounds.map((background) => (
          <div
            
            className={`w-[60.17px] h-[57.51px] rounded flex items-center justify-center cursor-pointer ${
              background === img ? " border-[1px] border-primary" : ""
            }`}
            onClick={(e) => setImg(background)}
            style={{
              background: background,
            }}
          >
            <img
              className="w-[42.8px] h-[24.98px]"
              src={prodSelect.imagem_url}
              alt={prodSelect.nome}
            />
          </div>
        ))}
      </div>
      <h1 className="text-[24px] font-bold leading-[32px]">
        {prodSelect.nome}
      </h1>
      <p className="text-dark-gray text-[12px] leading-[18px] gap-3">
      {prodSelect.modelo} | {prodSelect.marca} | REF:{prodSelect.referencia}
      </p>
      <div className="flex items-center gap-3">
        <img
          src="../public\assets\Stars.png"
          alt="Estrelas avaliação"
          className="w-[92.08px] h-[14px]"
        />
        <img src="../public\assets\Frame 9.png" alt="" className="w-[63px]" />
        <p>(90 avaliações)</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[32px]">R$:{prodSelect.preco_desconto},00</p>
        <p className="text-light-gray-2 line-through	text-[16px]">
          R$ {prodSelect.preco_original},00
        </p>
      </div>
      <div className="descricao">
        <h2 className="text-light-gray font-bold">Descrição do produto</h2>
        <p>
          Um brinde aos novos começos entre você e as calçadas. Amarre os
          cadarços 100% reciclados e defina o ritmo ao começar sua corrida com a
          sensação de maciez do Nike Revolution 6 Next Nature.
        </p>
      </div>
      <div className="tamanho">
        <h2 className="font-bold text-light-gray">Tamanho</h2>
        <div className="w-full flex gap-3">
          {tamanhos.map((tam) => (
            <div
              key={tam}
              onClick={() => setTamanhoSelect(tam)}
              style={{
                background: `${tamanhoSelect === tam ? "#C92071" : ""}`,
              }}
              className={`w-[40px] h-[40px] bg-white flex items-center justify-center cursor-pointer rounded border-light-gray-2`}
            >
              <p>{tam}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-light-gray">Cor</h2>
        <div className="flex gap-3">
          {cores.map((cor) => {
            return (
              <div
                className={`w-[40px] h-[40px] rounded-full ${
                  corSelect === cor ? "border border-[2px] border-primary" : ""
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
      <div className=" flex justify-center">
      <button className=" w-[335px] h-[48px] text-bold text-[16px] bg-[#ffb31f] rounded-[8px] text-light-gray-3 hover:bg-[#cf8900]">
        COMPRAR
      </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default Produto;
