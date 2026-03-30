"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* ESQUERDA */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              Lipstick
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <button className="hover:text-pink-600">Batom</button>
              <button className="hover:text-pink-600">Gloss</button>
              <button className="hover:text-pink-600">Hidratantes</button>
              <button className="text-red-500">Promoções</button>
            </nav>
          </div>

          {/* DIREITA */}
          <div className="flex items-center gap-4">

            {/* BUSCA */}
            <div className="relative hidden md:block w-56">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none"
              />
            </div>

            {/* CARRINHO */}
<Link href="/cart" className="relative flex items-center gap-1">
  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-600 transition" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>

          </div>

        </div>

      </div>
    </header>
  );
}