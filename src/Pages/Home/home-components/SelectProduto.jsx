export default function SelectProduto() {
    const produtos = [
        { nome: "Camisetas", icone: "/assets/Icons/Camisa.svg" },
        { nome: "Calças", icone: "/assets/Icons/Calca.svg" },
        { nome: "Bonés", icone: "../public/assets/hat.png" },
        { nome: "Headphones", icone: "/assets/Icons/Headphone.svg" },
        { nome: "Tênis", icone: "/assets/Icons/Tenis.svg" }
    ];

    return (
        <section className=" text-dark-gray-2 font-bold m-8">
            <h2 className="text-center">Coleções em destaque</h2>
            <div className="overflow-x-auto flex justify-between mt-4 sm:justify-center">
                {produtos.map((produto, index) => (
                    <div key={index} className="text-center mr-3">
                        <button className="flex justify-center items-center w-[92.03px] h-[92.03px] rounded-[132.73px] bg-white">
                            <img src={produto.icone} className="w-[56.63px] h-[56.63px]" alt={produto.nome} />
                        </button>
                        <p className="">{produto.nome}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}