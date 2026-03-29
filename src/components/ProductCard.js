export default function ProductCard({ name, price, image }) {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="mt-2 font-semibold">{name}</h2>
            <p className="text-pink-600 font-bold"> R$ {price}</p>
            <button className="mt-2 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
  Adicionar ao carrinho
</button>
        </div>
    )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI