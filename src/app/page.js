import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
      Lipstick Store
    </h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}

    </main>
  )
}

//MAP(): MÉTODO DE ARRAY QUE PERMITE REPETIR OU PERCORRER ITENS DE UMA LISTA, EXECUTANDO UMA FUNÇÃO PARA CADA ITEM.
//KEY: PROPRIEDADE ÚNICA USADA PARA IDENTIFICAR CADA ITEM DA LISTA
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI
