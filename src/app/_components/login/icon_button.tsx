import type { ReactNode } from "react";

// Botão que recebe um ícone à esquerda, seguido de um texto.

type IconButtonProps = {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
};

export function IconButton({ label, icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex items-center rounded-md bg-[#8f068f] py-3 px-5 font-semibold text-white hover:bg-purple-800"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
}
