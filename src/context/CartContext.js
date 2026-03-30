"use client"

import { createContext, useState, useContext } from "react"

// cria o contexto global
const CartContext = createContext()

// provider = envolve a aplicação
export function CartProvider({ children }) {

  // estado do carrinho
  const [cart, setCart] = useState([])

  // função para adicionar produto
  function addToCart(product) {
    setCart([...cart, product])
  }

  // quantidade de itens
  const cartCount = cart.length

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

// hook personalizado (atalho)
export function useCart() {
  return useContext(CartContext)
}