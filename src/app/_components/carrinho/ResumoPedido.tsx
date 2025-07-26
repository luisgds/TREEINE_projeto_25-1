import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type ResumoPedidoProps = {
  subtotal: number;
};

export function ResumoPedido({ subtotal }: ResumoPedidoProps) {
  const frete = 0; 
  const total = subtotal + frete;

  return (
    <div className="sticky top-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-gray-800">
        Resumo do Pedido
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(subtotal)}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Frete</span>
          {/* TODO:  frete > 0 ? frete : Grátis ?*/}
          <span className="font-semibold text-green-600">Grátis</span> 
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-bold text-gray-800">
          <span>Total</span>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </span>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-purple-600 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700">
        Finalizar Compra
      </button>
      <Link href="/productPage" className="mt-4 flex items-center justify-center text-gray-600 hover:text-purple-600">
        <FaArrowLeft className="mr-2" />
        Continuar Comprando
      </Link>
    </div>
  );
}