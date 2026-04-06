"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import Breadcrumb from "@/components/Breadcrumb";

export default function Home() {
  const [selected, setSelected] = useState("Todos");

  const filtered =
    selected === "Todos"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-10">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Produtos" },
          ]}
        />
      </div>

      {/* Título */}
      <h1 className="text-center text-2xl font-semibold text-gray-500 mb-6">
        Os melhores produtos para realçar sua beleza!
      </h1>

      {/* Filtros */}
      <div className="max-w-6xl mx-auto mb-6">
        <FilterBar selected={selected} onSelect={setSelected} />
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Estado vazio */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-16 text-sm">
          Nenhum produto encontrado nessa categoria.
        </p>
      )}

    </main>
  );
}

//MAP(): MÉTODO DE ARRAY QUE PERMITE REPETIR OU PERCORRER ITENS DE UMA LISTA, EXECUTANDO UMA FUNÇÃO PARA CADA ITEM.
//KEY: PROPRIEDADE ÚNICA USADA PARA IDENTIFICAR CADA ITEM DA LISTA
//PROPS: DADOS QUE O COMPONENTE RECEBE DO PAI
