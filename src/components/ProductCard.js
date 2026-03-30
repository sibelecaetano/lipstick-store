export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">

      {/* imagem */}
      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* nome */}
      <h2 className="font-medium text-gray-800">
        {product.name}
      </h2>

      {/* preço */}
      <p className="text-pink-600 font-bold text-lg">
        R$ {product.price}
      </p>

      {/* botão */}
      <button className="mt-auto bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
        Adicionar ao carrinho
      </button>

    </div>
  )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI