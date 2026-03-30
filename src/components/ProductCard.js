export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded shadow flex flex-col">
            {/*Exibe a imagem*/}
            <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
            />

            {/*Exibe o texto*/}
            <h2 className="mt-2 font-semibold">{product.name}</h2>

            <p className="text-pink-600 font-bold"> R$ {product.price}</p>

            {/*Botão de adicionar ao carrinho*/}

            <button className="mt-2 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
            Adicionar ao carrinho
            </button>

            </div>
    )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI