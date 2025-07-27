import { FaTrash } from "react-icons/fa";
import { UpdateButton } from "./botao_qtd";
import { Price } from "./preco";
import Image from "next/image";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";


type CartItem = inferRouterOutputs<AppRouter>["cart"]["getCartItems"][0];

type ItemProps = {
  item: CartItem;
  onUpdateQuantity: (itemId: number, qtd: number) => void;
  onRemove: (itemId: number) => void;
};

export function Item({ item, onUpdateQuantity, onRemove }: ItemProps) {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mr-4 h-20 w-20 flex-shrink-0">
        <img src={item.product.imageUrl ?? undefined} alt={item.product.nome} />
      </div>
      <div className="flex-grow">
        <h2 className="font-semibold text-gray-800">{item.product.nome}</h2>
        <p className="font-bold text-purple-600">
          <Price valor={item.product.preco} moeda="BRL"></Price>
        </p>
      </div>
      <UpdateButton
        quantidade={item.quantity}
        onIncrement={() => onUpdateQuantity(item.id, item.quantity + 1)}
        onDecrement={() => onUpdateQuantity(item.id, item.quantity - 1)}
      />
      <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 ml-2">
        <FaTrash size={20} />
      </button>
    </div>
  );
}