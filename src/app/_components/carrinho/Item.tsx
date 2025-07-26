import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { UpdateButton } from "./botao_qtd";
import Image from "next/image"

type ItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    qtd: number;
    image: string;
  };
  onUpdateQuantity: (itemId: number, nova_qtd: number) => void;
  onRemove: (itemId: number) => void;
};

export function Item({ item, onUpdateQuantity, onRemove }: ItemProps) {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mr-4 h-20 w-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h2 className="font-semibold text-gray-800">{item.name}</h2>
        <p className="font-bold text-purple-600">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(item.price)}
        </p>
      </div>
      <UpdateButton
        quantidade={item.qtd}
        onIncrement={() => onUpdateQuantity(item.id, item.qtd + 1)}
        onDecrement={() => onUpdateQuantity(item.id, item.qtd - 1)}
      />
      <button 
        // 👇 Chame a função onRemove
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500">
        <FaTrash size={20} />
      </button>
    </div>
  );
}
