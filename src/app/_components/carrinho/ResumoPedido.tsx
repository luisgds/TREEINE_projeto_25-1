"use client"; // 1. Torna este um componente de cliente

import { useRouter } from "next/navigation"; // 2. Importa o hook de roteamento
import { api } from "~/trpc/react"; // 2. Importa a API do tRPC
import { PageToGo } from "./retornoProdutos";
import { Price } from "./preco";

type ResumoPedidoProps = {
  subtotal: number;
};

export function ResumoPedido({ subtotal }: ResumoPedidoProps) {
  const frete = 0;
  const total = subtotal + frete;

  const router = useRouter();
  const utils = api.useUtils();

  const clearCartMut = api.cart.clearCart.useMutation({
    onSuccess: () => {
      alert("Compra finalizada com sucesso!");
      utils.cart.getCartItems.invalidate();
      // Redireciona o usuário para a página de produtos
      router.push("/productPage");
    },
    onError: (error) => {
      alert(`Ocorreu um erro: ${error.message}`);
    }
  });

  const handleFinishBuying = () => {
    clearCartMut.mutate(); 
  };

  return (
    <div className="sticky top-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
        Resumo do Pedido
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>
            <Price valor={subtotal} moeda="BRL" />
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Frete</span>
          <span className="font-semibold text-green-600">Grátis</span>
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>
            <Price valor={total} moeda="BRL" />
          </span>
        </div>
      </div>
      <button
        onClick={handleFinishBuying}
        disabled={clearCartMut.isPending} // bloqueia clique multíplo 
        className="mt-6 w-full rounded-md bg-purple-600 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700 disabled:opacity-50"
      >
        {clearCartMut.isPending ? "Finalizando..." : "Finalizar Compra"}
      </button>
      <div className="mt-4 flex w-full justify-center">
        <PageToGo rota="/productPage" texto="Continuar Comprando" />
      </div>
    </div>
  );
}