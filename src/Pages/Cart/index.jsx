import React from 'react';

export default function Carrinho() {
  return (
    <div className="flex justify-center mt-20 mb-20 bg-light-gray-3">
      <div className="w-[86%] ">
        <section className="p-4 bg-white">
          <h1 className="text-[14px] font-semibold uppercase text-dark-gray-2">
            Meu carrinho
          </h1>
          <div className="w-full h-[1px] bg-light-gray-2 my-4"></div>

          <div className="w-full">
            <div className="flex justify-between gap-4 w-full">
              <div className="h-16 w-40 bg-dark-gray-3"></div>
              <div>
                <h1 className="text-[14px] leading-5 font-medium">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </h1>
                <p className="text-[12px]">
                  <span className="text-light-gray mr-1">Cor:</span> Vermelho /
                  Branco
                </p>
                <p className="text-[12px] text-dark-gray">
                  <span className="text-light-gray mr-1">Tamanho:</span> 42
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-[14px] font-medium uppercase mt-4">
                quantidade
              </h1>
              <div className="flex gap-12 justify-between mt-3">
                <button className="border-2 w-full">-</button>
                <div>1</div>
                <button className="border-2 w-full">+</button>
              </div>
            </div>

            <button className="w-full mt-4">Remover item</button>

            <div className="mt-4">
              <div className="flex justify-between my-2">
                <h2 className="text-[14px] uppercase font-medium">unitário</h2>
                <p className="text-[16px] font-medium text-dark-gray-2">
                  <span className="text-[12px] text-light-gray-2 font-normal line-through mr-2">
                    R$ 310,00
                  </span>
                  R$ 219,00
                </p>
              </div>
              <div className="flex justify-between my-2">
                <h2 className="text-[14px] uppercase font-medium">total</h2>
                <p className="text-[16px] font-medium text-dark-gray-2">
                  <span className="text-[12px] text-light-gray-2 font-normal line-through mr-2">
                    R$ 310,00
                  </span>
                  R$ 219,00
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-4 bg-white">
          <h1>Cupom de desconto</h1>
          <input type="text" placeholder="Insira seu código" />
          <button className="">ok</button>
        </section>
      </div>
    </div>
  );
}
