import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <main>
      <h1>Lipstick Store</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}

    </main>
  )
}

//MAP(): MÉTODO DE ARRAY QUE PERMITE REPETIR OU PERCORRER ITENS DE UMA LISTA, EXECUTANDO UMA FUNÇÃO PARA CADA ITEM.
//KEY: PROPRIEDADE ÚNICA USADA PARA IDENTIFICAR CADA ITEM DA LISTA
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI
