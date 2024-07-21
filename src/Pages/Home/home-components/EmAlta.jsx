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
        <div className="  w-fullbg-[#F8F8F8] px-4 md:px-20 lg:px-32">
            <div className="flex justify-between ">
                <p className="text-dark-gray-2 text-sm sm:text-2xl font-bold">Produtos em alta</p>
                <Link to={`/produtos`}>
                    <div className="flex items-center  gap-2">
                        <p className="font-medium text-primary text-sm sm:text-[18px]">Ver todos</p>
                        <FaLongArrowAltRight className="text-primary" size={16} />
                    </div>
                </Link>
            </div>

            <div className="flex flex-wrap justify-between gap-5 p-2">
                {produtos.map((produto) => (
                    <Card produto={produto} />
                ))}
            </div>
        </div>
    )
}