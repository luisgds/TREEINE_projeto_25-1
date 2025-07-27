"use client";

import { Item } from "./Item";
import { ResumoPedido } from "./ResumoPedido";
import { PageToGo } from "./retornoProdutos";
import { api } from "~/trpc/react";
import Link from "next/link";

export function Carrinho() {
  
  const { data: items, refetch } = api.cart.getCartItems.useQuery();
  const updateQuantity = api.cart.updateItemQuantity.useMutation({
    onSuccess: () => refetch(), // Atualiza a lista após a mudança
  });
  
  const removeItem = api.cart.removeItem.useMutation({
    onSuccess: () => refetch(),
  });

  const handleUpdateQuantity = (itemId: number, qtd: number) => {
    if (qtd < 1) {
      handleRemoveItem(itemId);
    } else {
      updateQuantity.mutate({ itemId, quantity: qtd });
    }
  };

  const handleRemoveItem = (itemId: number) => {
    removeItem.mutate({ itemId });
  };

  // carrinho vazio
  if (!items || items.length === 0) {
     return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Seu carrinho está vazio</h1>
        <Link href="/productPage" className="mt-6 inline-block rounded-md bg-purple-600 px-6 py-2 font-semibold text-white">
          Ver Produtos
        </Link>
      </div>
    );
  }

  // frete váriavel a ser adicionado
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.preco * item.quantity, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <PageToGo rota="/productPage" texto="Continuar Comprando" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800">Seu Carrinho</h1>
          <p className="mt-1 text-gray-500">{totalItems} itens no seu carrinho</p>

          <div className="mt-8 space-y-4">
            {items.map((cartItem) => (
              <Item
                key={cartItem.id}
                item={cartItem} 
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