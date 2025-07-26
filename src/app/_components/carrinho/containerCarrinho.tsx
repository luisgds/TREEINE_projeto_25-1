"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Item } from "./Item";
import { ResumoPedido } from "./ResumoPedido";
import { PageToGo } from "./retornoProdutos";

// exemplo
const initialItems = [
  {
    id: 1,
    name: "Guitarra Elétrica",
    price: 1299.00,
    qtd: 1,
    image: "/images/guitar.png", 
  },
  {
    id: 2,
    name: "Piano",
    price: 2499.00,
    qtd: 1,
    image: "/images/piano.png", 
  },
];

export function Carrinho() {
  const [items, setItems] = useState(initialItems);

  // atualiza quantidade
  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    // Se a nova quantidade for zero ou menos, remove o item
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
      return;
    }

    // Atualiza o estado com a nova quantidade para o item específico
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, qtd: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };


  const totalItems = items.reduce((sum, item) => sum + item.qtd, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qtd, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <PageToGo rota="/productPage" texto="Continuar Comprando" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Coluna dos Itens */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800">Seu Carrinho</h1>
          <p className="mt-1 text-gray-500">{totalItems} itens no seu carrinho</p>

          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <Item
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <ResumoPedido subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
