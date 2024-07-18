import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import instance from "../../api/instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Produto = () => {
  const [produtos, setProdutos] = useState([]);
  const [prodSelect, setProdSelect] = useState({});
  const [tamanhos, setTamanhos]= useState([])
  const [tamanhoSelect, setTamanhoSelect] = useState(39)

  const { id } = useParams();

  useEffect(() => {
    instance.get("/shoes-colors?").then((response) => {
      let prod = {}
      setProdutos(response.data);
      prod = response.data.find((prod) => prod.id === Number(id))
      setProdSelect(prod);
      setTamanhos(prod.tamanhos)
    });
  }, []);

  return (
    <div className="text-dark-gray-2">
      <Header />
      <div className="m-5">
        <p className="text-[12px]">
          <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike
          Revolution 6 Next Nature Masculino
        </p>
      </div>

      <div className=" flex justify-center w-[335px] h-[272.98px] bg-slate-400">
        <img src={prodSelect.imagem_url} alt="" />
      </div>
      <div className="w-[60.17px] h-[57.51px] bg-red-600"></div>
      <h1 className="text-[24px] font-bold leading-[32px]">
        {prodSelect.nome}
      </h1>
      <p className="text-dark-gray text-[12px] leading-[18px]">
        Casual | Nike | REF:38416711
      </p>
      <div className="flex">
        <img
          src="../public\assets\Stars.png"
          alt="Estrelas avaliação"
          className="w-[92.08px] h-[14px]"
        />
        <img src="../public\assets\Frame 9.png" alt="" className="w-[63px]" />
        <p>(90 avaliações)</p>
      </div>
      <div className="flex text-center">
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
          {tamanhos.map((tam) => {
            return (
              <div 
                onClick={ () => setTamanhoSelect(tam)}
              className={`w-[40px] h-[40px] bg-slate-50 flex items-center justify-center
                ${tamanhoSelect == tam ? "bg-pink-400" : ""}
              `}>
                 <p>{tam}</p>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="cor">
        <h2 className="font-bold text-light-gray">Cor</h2>
        <div>
          <button className="w-[48px] h-[48px] bg-black rounded-[4px] border-[1px]"></button>
        </div>
      </div>
      <button className="w-[335px] h-[48px] text-bold text-[16px] bg-[#ffb31f] rounded-[8px] text-light-gray-3 hover:bg-[#cf8900]">
        COMPRAR
      </button>

      <Footer />
    </div>
  );
};
export default Produto;
