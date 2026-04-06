import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col gap-3 cursor-pointer group">
      
      {/* Imagem */}
      <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Nome */}
      <h2 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2">
        {product.name}
      </h2>

      {/* Preço */}
      <p className="text-pink-500 font-bold text-lg">
        R$ {product.price.toFixed(2)}
      </p>

      {/* Botão */}
      <button className="mt-auto w-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 rounded-xl transition-colors duration-200">
        Adicionar ao carrinho
      </button>

    </div>
  )
}
//COMPONENTE DE PRODUTO, RECEBE PROPS DE NOME E PREÇO, E EXIBE ESSAS INFORMAÇÕES EM UM CARD.
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI