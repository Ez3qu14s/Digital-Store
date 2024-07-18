import { Link } from "react-router-dom"

export default function Card({produto}){
    return(
        <Link to={`/produto/${produto.nome}`}>
                        <div className="flex flex-col sm:w-[292px] sm:h-[439px]" key={produto.nome}>
                            <div className="bg-[#FFFFFF]  h-[180px] w-[163px] flex flex-col sm:w-[292px] sm:h-[321px]">
                                <div className="bg-[#E7FF86] rounded-[29px] flex items-center justify-center mt-3  mx-2  h-[32px] w-[88px]">
                                    <p className="font-bold text-[14px] text-dark-gray-2 sm:text-[14px]">30% OFF</p>
                                </div>
                                <div className="w-[124.85px] h-[67.46px] sm:w-[248px] sm:h-[134px]" >
                                    <img src={produto.imagem_url} alt={produto.nome} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 mt-2 mb-10">
                                <p className="text-light-gray font-bold text-normal sm:text-2xl">Tênis</p>
                                <p className="truncate text-ellipsis overflow-hidden ..."></p>
                                <p className="font-medium text-[14px] truncate sm:text-[24px] sm:font-normal text-dark-gray-2 ">{produto.nome}</p>

                                <div className="flex gap-3">
                                    <div className="text-light-gray font-normal text-normal line-through sm:text-2xl">
                                        ${produto.preco_original}
                                    </div>
                                    <div className="text-dark-gray text-normal font-bold sm:text-2xl">
                                        ${produto.preco_desconto}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
    )
}