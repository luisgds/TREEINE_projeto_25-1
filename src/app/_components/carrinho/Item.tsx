import { FaTrash } from "react-icons/fa";
import { UpdateButton } from "./botao_qtd";
import { api } from "~/trpc/react";
import { useState } from "react";
import Image from "next/image";

type ItemProps = {
  item: {
    id: number;
    user_id: string;
    product_id: number;
    name: string;
    price: number;
    qtd: number;
    image: string;
  };
  onRemove: (itemId: number) => void;
};

export function Item({ item, onRemove }: ItemProps) {
  const [quantidade, setQuantidade] = useState(item.qtd);
  const utils = api.useUtils();

  const updateMutation = api.cart.update.useMutation({
    onSuccess: () => {
      utils.cart.getAll.invalidate(); // Atualiza lista após update
    },
  });

  const deleteMutation = api.cart.delete.useMutation({
    onSuccess: () => {
      utils.cart.getAll.invalidate(); // Atualiza lista após delete
    },
  });

  const handleUpdate = (novaQtd: number) => {
    if (novaQtd <= 0) return; // Evita qtd zero ou negativa
    setQuantidade(novaQtd);  // Atualiza na tela

    updateMutation.mutate({
      id: item.id,
      user_id: item.user_id,
      product_id: item.product_id,
      quantity: novaQtd,
    });
  };

  const handleDelete = () => {
    deleteMutation.mutate(item.id);
    onRemove(item.id); // Remove da tela
  };

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
        quantidade={quantidade}
        onIncrement={() => handleUpdate(quantidade + 1)}
        onDecrement={() => handleUpdate(quantidade - 1)}
      />

      <button 
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 ml-2">
        <FaTrash size={20} />
      </button>
    </div>
  );
}
