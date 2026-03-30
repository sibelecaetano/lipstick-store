"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import FilterBar from "@/components/FilterBar";

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Produtos" }
  ]}
/>

export default function Home() {
  const [selected, setSelected] = useState("Todos");

  const filtered = selected === "Todos" 
  ? products
  : products.filter ((p) => p.category === selected);

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-10">
      <h1 className="text-center text-gray-500 mb-8">
      Os melhores produtos para realçar sua beleza!
      </h1>
    

      <FilterBar selected={selected} onSelect={setSelected} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

//MAP(): MÉTODO DE ARRAY QUE PERMITE REPETIR OU PERCORRER ITENS DE UMA LISTA, EXECUTANDO UMA FUNÇÃO PARA CADA ITEM.
//KEY: PROPRIEDADE ÚNICA USADA PARA IDENTIFICAR CADA ITEM DA LISTA
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI
