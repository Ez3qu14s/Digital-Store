import React from 'react';

export default function Carrinho() {
  return (
    <div className="w-full bg-light-gray-3 pt-24">
      <div className="flex justify-center ">
        <div className="w-[86%] ">
          <div>
            <section className="p-4 bg-white rounded-md">
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
                      <span className="text-light-gray mr-1">Cor:</span>{' '}
                      Vermelho / Branco
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
                    <h2 className="text-[14px] uppercase font-medium">
                      unitário
                    </h2>
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
            <section className="p-4 bg-white mt-4 rounded-md">
              <h1 className="mb-3">Cupom de desconto</h1>
              <input
                type="text"
                placeholder="Insira seu código"
                className="p-3 bg-light-gray-3 w-full"
              />
              <button className="block w-full p-3 bg-light-gray-3 text-primary rounded-md uppercase font-medium mt-3">
                ok
              </button>
            </section>
            <section className="p-4 bg-white mt-4 rounded-md">
              <h1 className="mb-3">Calcular frete</h1>
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="p-3 bg-light-gray-3 w-full"
              />
              <button className="block w-full p-3 bg-light-gray-3 text-primary rounded-md uppercase font-medium mt-3">
                ok
              </button>
            </section>
          </div>

          <section className="p-4 bg-white mt-4 rounded-md">
            <h1 className="mb-3">Resumo</h1>
            <div className="w-full h-[1px] bg-light-gray-2 my-4"></div>

            <div>
              <div className="flex justify-between">
                <p>Subtotal: </p> <p>R$ 210,00</p>
              </div>
              <div className="flex justify-between">
                <p>Frete: </p> <p>R$ 0,00</p>
              </div>
              <div className="flex justify-between">
                <p>Subtotal: </p> <p>R$ 210,00</p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <p className="text-[18px] font-bold">Total</p>{' '}
                  <p className="text-[18px] font-bold text-error">R$ 219,00</p>
                </div>
                <div className="w-full">
                  <p className="text-end text-[12px] text-light-gray mt-1">
                    ou 12x R$21,00 sem juros
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="px-8 py-4 bg-white mt-8">
          <div className="flex justify-between ">
            <p className="text-[18px] font-bold">Total</p>{' '}
            <p className="text-[18px] font-bold text-error">R$ 219,00</p>
          </div>
          <p className="text-end text-[12px] text-light-gray mt-1">
            ou 12x R$21,00 sem juros
          </p>
          <button className="w-full p-2 bg-warning mt-4 rounded-md font-medium text-white">
            Continuar
          </button>
        </div>
      </section>
    </div>
  );
}
