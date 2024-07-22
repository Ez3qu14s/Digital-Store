import { Link } from 'react-router-dom';

export default function Card({ produto }) {
  return (
    <Link to={`/produto/${produto.id}`}>
      <div className="flex flex-col w-[154px] md:w-[240px]" key={produto.id}>
        <div className="bg-white w-full h-[220px] md:h-[280px]">
          <p className="bg-[#E7FF86] font-bold text-[12px] text-dark-gray-2 rounded-full  w-[88px] text-center m-2 p-2">
            30% OFF
          </p>
          <img
            src={produto.imagem_url}
            alt={produto.nome}
            className="w-full md:w-[200px] p-2 self-center"
          />
        </div>
        <div className="">
          <p className="text-light-gray font-bold text-normal text-[12px] sm:text-[14px]">
            Tênis
          </p>
          <h1 className="font-medium text-[14px] sm:text-[24px] sm:font-normal text-dark-gray-2 ">
            {produto.nome}
          </h1>
          <div className="flex gap-3">
            <p className="text-light-gray font-normal text-normal line-through sm:text-2xl">
              R${produto.preco_original},00
            </p>
            <p className="text-dark-gray text-normal font-bold sm:text-2xl">
              R${produto.preco_desconto},00
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
