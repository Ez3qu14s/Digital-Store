import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import instance from "../../../api/instance"
import { Link } from "react-router-dom";
import Card from "../../../Components/Card";
export default function EmAlta() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        instance.get('/shoes?limit=8')
            .then((response) => {
                setProdutos(response.data)
            })
    }, [])

    return (
        <div className=" flex flex-col sm:w-[1250px] ml-10 bg-[#F8F8F8] ">
            <div className="flex justify-between p-2">
                <div>
                    <p className="text-dark-gray-2 text-sm sm:text-2xl font-bold">Produtos em alta</p>
                </div>
                <Link to={`/produtos`}>
                    <div className="flex items-center  gap-2">
                        <p className="font-medium text-primary text-sm sm:text-[18px]">Ver todos</p>
                        <FaLongArrowAltRight className="text-primary" size={16} />
                    </div>
                </Link>
            </div>

            <div className="flex flex-wrap justify-between y- p-2">
                {produtos.map((produto) => (
                    <Card produto={produto}/>
                ))}
            </div>
        </div>
    )
}