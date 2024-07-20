import { Link } from "react-router-dom"

export default function Card({produto}){
    return(
        <Link to={`/produto/${produto.id}`}>
                        <div className="flex flex-col w-[170px] sm:w-[292px] sm:h-[439px]" key={produto.id}>
                            <div className="bg-[#FFFFFF]  h-[180px] w-[163px] flex flex-col sm:w-[292px] sm:h-[250px] gap-3">
                                <div className="bg-[#E7FF86] rounded-[29px] flex items-center justify-center mt-3  mx-2  h-[32px] w-[88px]">
                                    <p className="font-bold text-[14px] text-dark-gray-2 sm:text-[14px]">30% OFF</p>
                                </div>
                                <div className="flex items-center justify-center" >
                                    <img src={produto.imagem_url} alt={produto.nome} className="w-[130px] h-[100px] sm:w-[248px] sm:h-[180px]"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1  mt-2 mb-10">
                                <p className="text-light-gray font-bold text-normal sm:text-2xl">Tênis</p>
                                <p class="text-clip overflow-hidden truncate {produto.nome}"></p>
                                <div>
                                <p className="font-medium text-[14px] sm:text-[24px] sm:font-normal text-dark-gray-2 ">{produto.nome}</p>
                                </div>
                                
                                

                                <div className="flex gap-3">
                                    <div className="text-light-gray font-normal text-normal line-through sm:text-2xl">
                                        R${produto.preco_original}
                                    </div>
                                    <div className="text-dark-gray text-normal font-bold sm:text-2xl">
                                        R${produto.preco_desconto}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
    )
}