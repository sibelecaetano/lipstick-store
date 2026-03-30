export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">

      {/* imagem */}
      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="ax-h-full object-contain cursor-pointer"
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

    </div>
  )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI